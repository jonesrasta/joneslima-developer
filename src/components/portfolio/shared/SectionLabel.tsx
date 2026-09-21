interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
}

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="mb-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
      <span>{number}</span>

      <span className="h-px w-8 bg-white/20" />

      <span>{children}</span>
    </div>
  );
}
