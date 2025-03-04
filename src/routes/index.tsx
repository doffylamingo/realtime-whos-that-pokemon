import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Hello World</Button>
    </div>
  );
}
