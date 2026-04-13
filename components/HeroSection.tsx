import Image from 'next/image';
import { FadeInSection } from '@/components/FadeInSection';

type HeroData = {
  chineseName: string;
  englishName: string;
  school: string;
  department: string;
  grade: string;
  tagline: string;
  intro: string;
  ctas: Array<{ label: string; href: string }>;
};

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="home" className="section-shell hero-grid-bg overflow-hidden pt-28 sm:pt-32">
      <div className="container-shell">
        <FadeInSection>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="chip">資訊管理學系二年級學生</span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {data.chineseName}
              </h1>
              <p className="mt-3 text-xl font-medium text-sky-700 sm:text-2xl">{data.englishName}</p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="chip">{data.school}</span>
                <span className="chip">{data.department}</span>
                <span className="chip">{data.grade}</span>
              </div>

              <p className="mt-8 text-xl font-semibold leading-8 text-slate-800">{data.tagline}</p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{data.intro}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={data.ctas[0].href} className="primary-button">
                  {data.ctas[0].label}
                </a>
                <a href={data.ctas[1].href} className="secondary-button">
                  {data.ctas[1].label}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="card-surface mx-auto max-w-md overflow-hidden p-4 sm:p-5">
                <div className="rounded-[2rem] bg-gradient-to-br from-sky-100 via-white to-slate-100 p-4">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-soft">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src="/profile.jpg"
                        alt="鹿島浩市的個人照片"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-4 px-2 pb-2">
                    <p className="text-sm font-semibold tracking-[0.2em] text-sky-700">個人形象</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      以穩定累積資訊管理、系統支援與資料應用能力為目前學習重點。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
