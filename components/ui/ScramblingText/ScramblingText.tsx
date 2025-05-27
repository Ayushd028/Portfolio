import React, { useMemo } from 'react';
import VisuallyHidden from '@/components/wrapper/VisuallyHidden/VisuallyHidden';
import { useTextScrambler } from '@/components/ui/ScramblingText/useTextScrambler';
import './ScramblingText.css';

interface ScramblingTextProps {
  data: string[];
  delay?: number;
  [key: string]: any;
}

const ScramblingText: React.FC<ScramblingTextProps> = ({ data, delay = 1000, ...rest }) => {
  // Use the useTextScrambler hook to create a ref for the scrambling text
  const textScramblerRef = useTextScrambler(data, delay);

  return (
    <div {...rest}>
      <VisuallyHidden>{data.join(', ')}</VisuallyHidden>
      <div className="scramblingText_text" ref={textScramblerRef} aria-live="polite" />
    </div>
  );
}

export default ScramblingText;
