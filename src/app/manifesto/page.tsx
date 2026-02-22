import { Card } from "@/components/Card";

export default function TutorialsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">Tutorials</h1>
        <p className="mt-1 text-sm opacity-80">从白梦写作的结构学习：模板 + 生成器 + 消痕 + 审稿。</p>
      </div>

      <Card title="入门：一章写完的最短闭环">
        <ol className="list-decimal pl-5">
          <li>一句话梗概（目标/阻碍/代价）</li>
          <li>章节 beats（6-10 个节点）</li>
          <li>先写对话，再补动作与场景</li>
          <li>消痕重写（句式多样化 + 细节密度）</li>
          <li>一致性检查（设定/时间线/动机）</li>
        </ol>
      </Card>

      <Card title="关于 AI 痕迹">
        不追求“骗过检测”，而是追求“更像自然语言”：节奏、意象、人物口吻一致性。
      </Card>
    </div>
  );
}
