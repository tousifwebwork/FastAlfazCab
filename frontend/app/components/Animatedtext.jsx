"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Char({ char, index, total, scrollYProgress }) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>
        {char === " " ? "\u00A0" : char}
      </span>
      <motion.span
        style={{ opacity, position: "absolute", left: 0, top: 0 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

/**
 * AnimatedText
 * Splits `text` into characters and fades each one in (opacity 0.2 -> 1)
 * as the paragraph scrolls through the viewport.
 */
export default function AnimatedText({ text, className = "", style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}