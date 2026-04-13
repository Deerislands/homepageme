type FooterData = {
  name: string;
  copyright: string;
  closing: string;
};

type FooterProps = {
  data: FooterData;
};

export function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-slate-300">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{data.name}</p>
          <p className="mt-2 text-sm text-slate-400">{data.copyright}</p>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-300">{data.closing}</p>
      </div>
    </footer>
  );
}
