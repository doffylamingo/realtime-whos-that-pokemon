import useGameLogic from "@/hooks/use-game-logic";
import { Button } from "@/components/ui/button";

import FeedbackMessage from "./feedback-message";
import PlayerStats from "./player-stats";
import PokemonImage from "./pokemon-image";
import PokemonOptions from "./pokemon-options";

export default function GameScreen() {
  const {
    loading,
    pokemon,
    revealed,
    selectedOption,
    feedback,
    gameStats,
    fetchRandomPokemon,
    handleSelect,
  } = useGameLogic();

  if (!pokemon) return;

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center">
        <header className="w-full px-4 py-8">
          <h1 className="text-center text-4xl font-light tracking-tight">
            Who&apos;s That Pokémon?
          </h1>
        </header>

        <PlayerStats {...gameStats} />

        <div className="relative mb-6 flex aspect-square w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
          <PokemonImage
            loading={loading}
            pokemon={pokemon}
            revealed={revealed}
          />
        </div>

        <FeedbackMessage
          feedback={feedback}
          pokemonName={pokemon?.name}
        />

        {revealed && (
          <Button
            className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700"
            onClick={fetchRandomPokemon}
          >
            Next Pokémon
          </Button>
        )}

        {pokemon && (
          <PokemonOptions
            options={pokemon.options}
            pokemonName={pokemon.name}
            revealed={revealed}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
}
