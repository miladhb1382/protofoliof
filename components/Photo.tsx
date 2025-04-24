'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
function Photo() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <div className="absolute my-2 h-[290px] w-[298px] mix-blend-lighten xl:h-[490px] xl:w-[498px]">
          {' '}
          <Image
            fill
            alt=""
            src="/me.png"
            priority
            quality={100}
            className="overflow-hidden rounded-full object-contain"
          />
        </div>
      </motion.div>
      <motion.div>
        <motion.svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="253"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
