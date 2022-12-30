import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 500,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(5, -20, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 900);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap overflow-hidden tracking-wide whitespace-nowrap leading-12">
      <motion.div
        className="font-bold uppercase text-[20px] sm:text-[24px] md:text-[40px] lg:text-[46px] 2xl:text-[64px] whitespace-nowrap"
        style={{ x }}
      >
        <span className="text-[#fce9ac] mx-[30px] ">{children} </span>
        <span className="text-[#fce9ac] mx-[30px] ">{children} </span>
        <span className="text-[#fce9ac] mx-[30px] ">{children} </span>
        <span className="text-[#fce9ac] mx-[30px] ">{children} </span>
      </motion.div>
    </div>
  );
}

export default function LetterSection() {
  return (
    <section className="relative flex flex-col gap-2">
      <ParallaxText baseVelocity={-5}>我祝贺你又活了一年</ParallaxText>
      <ParallaxText baseVelocity={5}>你现在几岁了！ ？哇</ParallaxText>
    </section>
  );
}
