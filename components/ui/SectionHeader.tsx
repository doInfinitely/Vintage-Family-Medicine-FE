interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: Props) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal mb-2">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-blue-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
