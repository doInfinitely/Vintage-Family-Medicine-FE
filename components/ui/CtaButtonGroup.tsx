import type { Cta } from '@/lib/api';
import type { Language } from '@/lib/translations';
import CtaButton from './CtaButton';

interface Props {
  actionKeys: string[];
  ctaMap?: Record<string, Cta>;
  language?: Language;
  className?: string;
  variant?: string;
}

export default function CtaButtonGroup({
  actionKeys,
  ctaMap,
  language,
  className,
  variant,
}: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ''}`}>
      {actionKeys.map((key) => (
        <CtaButton
          key={key}
          actionKey={key}
          ctaMap={ctaMap}
          language={language}
          variant={variant}
        />
      ))}
    </div>
  );
}
