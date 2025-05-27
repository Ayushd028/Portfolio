import { useEffect, useRef } from 'react';
import { createQueue, QueueItem, randomChar } from './utils';

export function useTextScrambler(data: string[], delay: number) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Shuffle text data initially
    const shuffledData = [...data].sort(() => Math.random() - 0.5);

    let frame = 0;
    let frameRequest = 0;
    let queue: QueueItem[] = [];
    let resolveScramble: () => void = () => { };
    let timeoutID: NodeJS.Timeout | null = null;
    let currentIndex = 0;

    const animate = () => {
      let output = '';
      let complete = 0;

      for (const item of queue) {
        const { from, to, start, end, char } = item;

        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            item.char = randomChar();
          }
          output += `<span class="scramblingText_dud">${item.char}</span>`;
        } else {
          output += from;
        }
      }

      el.innerHTML = output;

      if (complete === queue.length) {
        resolveScramble();
      } else {
        frame++;
        frameRequest = requestAnimationFrame(animate);
      }
    };

    const scrambleText = (newText: string): Promise<void> => {
      const oldText = el.innerText;
      queue = createQueue(oldText, newText);
      frame = 0;
      cancelAnimationFrame(frameRequest);

      return new Promise((res) => {
        resolveScramble = res;
        animate();
      });
    };

    const scheduleNext = () => {
      scrambleText(shuffledData[currentIndex]).then(() => {
        timeoutID = setTimeout(scheduleNext, delay);
      });
      currentIndex = (currentIndex + 1) % shuffledData.length;
    };

    // Start scrambling cycle
    scheduleNext();

    // Cleanup on unmount
    return () => {
      if (timeoutID) clearTimeout(timeoutID);
      cancelAnimationFrame(frameRequest);
    };
  }, [data, delay]);

  return elementRef;
};
