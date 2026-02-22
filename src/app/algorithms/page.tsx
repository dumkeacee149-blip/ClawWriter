import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";

const generators = [
  {
    id: "g1",
    name: "Character generator (controlled flaw)",
    idea:
      "Input goal + values + fear + a fatal flaw. Generate behavior patterns, catchphrases, and conflict triggers that move plot.",
    inputs: ["goal", "fear", "flaw", "backstory"],
    outputs: ["profile", "speech tics", "conflict triggers"],
  },
  {
    id: "g2",
    name: "Scene generator (sensory density control)",
    idea:
      "Use a slider to control sensory density and generate variants of the same scene: fast-paced / immersive / minimal.",
    inputs: ["location", "time", "mood", "density"],
    outputs: ["scene drafts (3 variants)"],
  },
  {
    id: "g3",
    name: "一致性检查器（设定/伏笔/时间线）",
    idea:
      "把大纲与正文当作约束系统，自动扫描矛盾点：时间线、设定冲突、人物动机漂移。",
    inputs: ["outline", "chapters", "canon notes"],
    outputs: ["conflict list", "suggested fixes"],
  },
];

export default function GeneratorsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">Generators</h1>
        <p className="mt-1 text-sm opacity-80">Concepts & templates for now. We can plug in model APIs later.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {generators.map((a) => (
          <Card key={a.id} title={a.name}>
            <p className="mb-3 opacity-90">{a.idea}</p>

            <div className="mb-3">
              <div className="mb-1 text-xs opacity-60">Inputs</div>
              <div className="flex flex-wrap gap-2">{a.inputs.map((x) => <Tag key={x}>{x}</Tag>)}</div>
            </div>

            <div>
              <div className="mb-1 text-xs opacity-60">Outputs</div>
              <ul className="list-disc pl-5 text-sm opacity-85">
                {a.outputs.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
