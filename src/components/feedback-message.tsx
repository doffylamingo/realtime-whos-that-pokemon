import { AlertCircle, Check } from "lucide-react";

import { cn } from "@/lib/utils";

export default function FeedbackMessage({
  feedback,
  pokemonName,
}: {
  feedback: "correct" | "incorrect" | null;
  pokemonName?: string;
}) {
  if (!feedback) return null;

  return (
    <div
      className={cn(
        "mb-4 flex w-full items-center justify-center p-3",
        feedback === "correct"
          ? "bg-emerald-900/30 text-emerald-400"
          : "bg-red-900/30 text-red-400",
      )}
    >
      {feedback === "correct" ? (
        <Check className="mr-2 h-5 w-5" />
      ) : (
        <AlertCircle className="mr-2 h-5 w-5" />
      )}
      <p className="capitalize">
        {feedback === "correct"
          ? "Correct! Well done!"
          : `Incorrect. It's ${pokemonName ? pokemonName : ""}!`}
      </p>
    </div>
  );
}
