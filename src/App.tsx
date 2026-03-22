import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md border border-zinc-100"
      >
        <div className="text-center mb-12">
          <h1 className="text-zinc-400 text-sm font-medium tracking-widest uppercase mb-2">Counter App</h1>
          <div className="relative h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="text-8xl font-bold text-zinc-900 tabular-nums"
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={decrement}
            className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 py-4 rounded-2xl transition-colors group active:scale-95"
            aria-label="Decrement"
          >
            <Minus className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={increment}
            className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white py-4 rounded-2xl transition-colors group active:scale-95"
            aria-label="Increment"
          >
            <Plus className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full flex items-center justify-center gap-2 text-zinc-400 hover:text-zinc-600 py-2 transition-colors group"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
          <span className="text-xs font-medium uppercase tracking-wider">Reset Counter</span>
        </button>
      </motion.div>
    </div>
  );
}
