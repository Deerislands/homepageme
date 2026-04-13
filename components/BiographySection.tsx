import { FadeInSection } from '@/components/FadeInSection';
import { SectionTitle } from '@/components/SectionTitle';

type BiographyItem = {
  title: string;
  content: string;
};

type BiographySectionProps = {
  data: BiographyItem[];
};

export function BiographySection({ data }: BiographySectionProps) {
  return (
    <section id="biography" className="section-shell bg-white">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="自傳"
            title="自傳"
            description="以下內容以目前的學習背景為出發點，整理自己為什麼選擇資訊管理，以及未來想發展的方向。"
          />

          <div className="mt-10 space-y-5">
            {data.map((item, index) => (
              <article key={item.title} className="card-surface p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                      段落 {index + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-slate-600">{item.content}</p>
              </article>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
