import { createFileRoute } from "@tanstack/react-router";

import GameScreen from "@/components/game";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 p-4 text-zinc-100">
      <GameScreen />
    </main>
  );
}
