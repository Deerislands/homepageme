type InfoCardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function InfoCard({ title, children, className = '' }: InfoCardProps) {
  return (
    <div className={`card-surface p-6 sm:p-8 ${className}`}>
      {title ? <h3 className="text-xl font-semibold text-slate-900">{title}</h3> : null}
      <div className={title ? 'mt-5' : ''}>{children}</div>
    </div>
  );
}
