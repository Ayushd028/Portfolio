// This file contains utility functions for the ScramblingText component.

const chars = '!<>-_\\/[]{}—=+*^?#________';
export const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

export interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

export function createQueue(oldText: string, newText: string): QueueItem[] {
  const length = Math.max(oldText.length, newText.length);
  return Array.from({ length }, (_, i) => {
    const from = oldText[i] || '';
    const to = newText[i] || '';
    const start = Math.floor(Math.random() * 40);
    const end = start + Math.floor(Math.random() * 40);
    return { from, to, start, end };
  });
}
