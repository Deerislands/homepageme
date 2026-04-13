import { FadeInSection } from '@/components/FadeInSection';
import { SectionTitle } from '@/components/SectionTitle';

type ContactItem = {
  label: string;
  value: string;
  href: string;
};

type ContactSectionProps = {
  data: ContactItem[];
};

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <FadeInSection>
          <SectionTitle
            eyebrow="聯絡方式"
            title="聯絡方式"
            description="以下為目前整理的聯絡資訊與作品展示入口，方便後續補充更多學習成果與專案紀錄。"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {data.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="card-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{item.label}</p>
                <p className="mt-4 break-all text-base font-semibold text-slate-900">{item.value}</p>
              </a>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
