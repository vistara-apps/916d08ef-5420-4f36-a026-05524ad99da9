'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface DrawTimerProps {
  nextDrawTime?: Date;
}

export function DrawTimer({ nextDrawTime }: DrawTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = nextDrawTime?.getTime() || (now + 12 * 60 * 60 * 1000);
      const difference = target - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextDrawTime]);

  return (
    <div className="text-center space-y-4">
      <div className="timer-circle mx-auto">
        <div className="text-center">
          <div className="text-lg font-bold text-accent">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs text-text-secondary">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-2 text-text-secondary">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Next drawing in</span>
      </div>
    </div>
  );
}
