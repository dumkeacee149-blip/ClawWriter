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
          <li>一句话梗概（目标/阻碍/代价）</li>
          <li>章节 beats（6-10 个节点）</li>
          <li>Draft dialogue first, then add action and scene texture</li>
          <li>消痕重写（句式多样化 + 细节密度）</li>
          <li>一致性检查（设定/时间线/动机）</li>
        </ol>
      </Card>

      <Card title="About AI traces">
        We don’t aim to “beat detectors”. We aim for natural language: cadence, imagery, and consistent character voice.
      </Card>
    </div>
  );
}
