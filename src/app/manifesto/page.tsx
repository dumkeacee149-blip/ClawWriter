import { Card } from "@/components/Card";

export default function TutorialsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">Tutorials</h1>
        <p className="mt-1 text-sm opacity-80">Learn the workflow: templates → generators → rewrite → review.</p>
      </div>

      <Card title="Starter loop: ship one chapter">
        <ol className="list-decimal pl-5">
          <li>One-line premise (goal / obstacle / cost)</li>
          <li>Chapter beats (6–10 nodes)</li>
          <li>Draft dialogue first, then add action and scene texture</li>
          <li>De-AI rewrite (varied cadence + richer concrete detail)</li>
          <li>Consistency check (canon / timeline / motivation)</li>
        </ol>
      </Card>

      <Card title="About AI traces">
        We don’t aim to “beat detectors”. We aim for natural language: cadence, imagery, and consistent character voice.
      </Card>
    </div>
  );
}
