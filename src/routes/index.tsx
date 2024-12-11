import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Test</Button>
    </div>
  );
}
