'use client';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';
const servies = [
  {
    num: '01',
    title: 'WebDevelopment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tentur',
    href: '',
  },
  {
    num: '02',
    title: 'Ui/Ux Degign',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tentur',
    href: '',
  },
];
function Services() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {servies.map((item, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="group-hover:bg-accent flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="group-hover:text-accent text-[42px] leading-none font-bold text-white transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="w-full border-b border-white/20" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
