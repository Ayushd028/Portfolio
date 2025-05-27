import { useEffect } from 'react';
import { AnimationScope, stagger, useAnimate } from 'framer-motion';
import { INTRO_LOAD_DELAY, INTRO_LOAD_DURATION } from '@/utils/timing';

/**
 * Custom hook to handle the intro animation using Framer Motion.
 * @description This hook uses the `useAnimate` hook from Framer Motion to create an animation scope and animate elements with the `data-introanimate` attribute. 
 * The animation includes opacity, translation, scaling, and blurring effects.
 * @returns {AnimationScope<any>} - A ref to be attached to the element that will be animated.
 */
export function useIntroAnimation(): AnimationScope<any> {
  const [scope, animate] = useAnimate();
  const staggerIntroItems = stagger(0.1, { startDelay: INTRO_LOAD_DELAY });

  useEffect(() => {
    const animation = animate(
      "[data-introanimate]",
      { opacity: 1, translate: '0px 0px', scale: 1, filter: "blur(0px)" },
      { duration: INTRO_LOAD_DURATION, delay: staggerIntroItems }
    );

    return () => {
      // Cleanup animation to avoid memory leaks
      animation.stop();
    };
  }, [animate, staggerIntroItems]);

  return scope;
};
