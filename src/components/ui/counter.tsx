'use client';

import { useEffect, useState } from 'react';

export default function Counter({
  title,
  end,
  duration = 4000,
  suffix = '',
}: {
  title: string;
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    function easeOutExpo(t: number) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function update(timestamp: number) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(easeOutExpo(progress) * end);
      setDisplayValue(value.toLocaleString());
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [end, duration]);

  return (
    <div className="space-y-2">
      <h3 className="text-4xl font-bold text-[#003087]">{displayValue}{suffix}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
}
