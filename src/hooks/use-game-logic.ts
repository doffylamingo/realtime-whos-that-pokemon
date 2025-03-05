import { useCallback, useEffect, useState } from "react";

import { Pokemon } from "@/types/pokemon";

export default function useGameLogic() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null,
  );
  const [gameStats, setGameStats] = useState({
    score: 0,
    totalAttempts: 0,
    streak: 0,
  });

  const getRandomOptions = useCallback(async (correctName: string) => {
    const options: string[] = [];

    while (options.length < 3) {
      const randomId = Math.floor(Math.random() * 721) + 1;

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`,
        );
        const data = await response.json();

        if (data.name !== correctName && !options.includes(data.name)) {
          options.push(data.name);
        }
      } catch (error) {
        console.error("Error fetching option:", error);
      }
    }

    return options;
  }, []);

  const fetchRandomPokemon = useCallback(async () => {
    try {
      setLoading(true);
      const id = Math.floor(Math.random() * 721) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      const otherOptions = await getRandomOptions(data.name);
      const allOptions = [data.name, ...otherOptions].sort(
        () => Math.random() - 0.5,
      );

      setPokemon({
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        gif: data.sprites.other["showdown"].front_default,
        options: allOptions,
      });
      setRevealed(false);
      setSelectedOption(null);
      setFeedback(null);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }, [getRandomOptions]);

  const handleSelect = useCallback(
    (option: string) => {
      if (!pokemon || revealed) return;
      const isCorrect = option.toLowerCase() === pokemon.name.toLowerCase();

      setFeedback(isCorrect ? "correct" : "incorrect");
      setRevealed(true);
      setSelectedOption(option);
      setGameStats((prev) => ({
        totalAttempts: prev.totalAttempts + 1,
        score: isCorrect ? prev.score + 1 : prev.score,
        streak: isCorrect ? prev.streak + 1 : 0,
      }));
    },
    [pokemon, revealed],
  );

  useEffect(() => {
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  return {
    loading,
    pokemon,
    revealed,
    selectedOption,
    feedback,
    gameStats,
    fetchRandomPokemon,
    handleSelect,
  };
}
