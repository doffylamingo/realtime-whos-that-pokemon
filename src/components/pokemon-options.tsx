import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function PokemonOptions({
  options,
  revealed,
  selectedOption,
  pokemonName,
  onSelect,
}: {
  options: string[];
  revealed: boolean;
  selectedOption: string | null;
  pokemonName?: string;
  onSelect: (option: string) => void;
}) {
  return (
    <div className="mt-4 grid w-full grid-cols-2 gap-3">
      {options.map((option) => (
        <Button
          key={option}
          className={cn(
            "h-14 w-full border bg-black text-white capitalize hover:bg-black/50",
            revealed &&
              option === pokemonName &&
              "border-emerald-500 bg-emerald-900/30",
            revealed &&
              selectedOption === option &&
              option !== pokemonName &&
              "border-red-500 bg-red-900/30",
            !revealed && "border-gray-400",
          )}
          disabled={revealed}
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
