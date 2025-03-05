import { Pokemon } from "@/types/pokemon";
import { cn } from "@/lib/utils";

export default function PokemonImage({
  pokemon,
  revealed,
  loading,
}: {
  pokemon: Pokemon;
  revealed: boolean;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="flex w-full max-w-md flex-col items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500" />
        <p className="mt-4 text-zinc-400">Getting next Pokémon...</p>
      </div>
    );
  }

  return (
    <div className="relative flex h-3/4 w-3/4 items-center justify-center">
      <img
        alt={revealed ? pokemon!.name : "Mystery Pokémon"}
        className={cn(
          "h-3/4 w-3/4 object-contain transition-all",
          revealed ? "animate-silhouette-reveal" : "brightness-0 contrast-200",
        )}
        src={pokemon.gif}
      />
    </div>
  );
}
