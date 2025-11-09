import { motion } from 'framer-motion';

const text = "Mohamed Saeed";
const letters = Array.from(text);

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-4 flex-wrap">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ display: 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-purple-300 text-base sm:text-lg md:text-xl tracking-wider mt-4"
        >
          &lt;Backend Java Developer/&gt;
        </motion.p>
      </motion.div>
    </motion.div>
  );
}