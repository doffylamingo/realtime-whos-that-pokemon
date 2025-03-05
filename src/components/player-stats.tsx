interface PlayerStatsProps {
  score: number;
  totalAttempts: number;
  streak: number;
}

export default function PlayerStats({
  score,
  totalAttempts,
  streak,
}: PlayerStatsProps) {
  return (
    <div className="animate-slide-down mb-6 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
      <div className="flex flex-col items-center">
        <span className="text-muted-foreground text-xs tracking-wider uppercase">
          Score
        </span>
        <span className="text-3xl font-light">
          {score}
          <span className="text-muted-foreground text-sm">
            / {totalAttempts}
          </span>
        </span>
      </div>

      <div className="bg-border hidden h-10 w-px sm:block" />

      <div className="flex flex-col items-center">
        <span className="text-muted-foreground text-xs tracking-wider uppercase">
          Accuracy
        </span>
        <span className="text-3xl font-light">
          {totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0}%
        </span>
      </div>

      <div className="bg-border hidden h-10 w-px sm:block" />

      <div className="flex flex-col items-center">
        <span className="text-muted-foreground text-xs tracking-wider uppercase">
          Streak
        </span>
        <div className="flex items-center">
          <span className="text-3xl font-light">{streak}</span>
        </div>
      </div>
    </div>
  );
}
