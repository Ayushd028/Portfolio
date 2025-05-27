"use client"

import DecoderText from '@/components/ui/DecoderText/DecoderText';
import ScramblingText from '@/components/ui/ScramblingText/ScramblingText';
import { introAnimatedText, myName, shortDescription } from "@/utils/config";
import { DECODER_TEXT_START_DELAY, SCRAMBLING_TEXT_DELAY } from '@/utils/timing';
import { gotham_medium, raleway } from '@/utils/fonts';
import { cn } from '@/utils/cn';
import { useIntroAnimation } from './useIntroAnimation';
import "./Intro.css";

export default function Intro() {
  const introRef = useIntroAnimation();

  return (
    <section id="intro" className={cn(gotham_medium.className, gotham_medium.variable, "section intro_sec h-screen flex items-center")} aria-label="Introduction Section">
      <div ref={introRef} className="intro mx-auto">

        <div data-introanimate className="pb-4 hithere font-bold font-2-4" aria-label="Greeting">
          Hi There !
        </div>

        <h1 data-introanimate className="myname font-bold font-2-4" aria-label={`I’m ${myName}`}>
          <DecoderText text={`I’m ${myName}`} eachCharClass="namechar" startDelay={DECODER_TEXT_START_DELAY} />
        </h1>

        <div data-introanimate className={raleway.className} aria-label="Short Description">
          <h2>{shortDescription}</h2>
        </div>

        <div data-introanimate className="font-medium fluidz-48 mb-5 font-2-4" aria-label="What I like">
          <ScramblingText data={introAnimatedText} delay={SCRAMBLING_TEXT_DELAY} />
        </div>

      </div>
    </section>
  );
};
