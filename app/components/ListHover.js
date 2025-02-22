import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { TextFade } from './TextFade';

function ListHover({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=''>
      {items && items.map((item, index) => (
        <div className="p-4" key={index}>
          <TextFade>
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center cursor-pointer px-6"
            >
              <div className='bg-blue-500 flex flex-row w-full justify-between'>
              <h2 className="text-2xl  font-bold p-2">
                {item.text}
              </h2>
              <motion.div
                className="min-w-[24px] min-h-[24px] w-6 h-6 mt-3 mr-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {activeIndex === index ? (
                  <Minus className="w-4 h-4 text-neutral-300" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-300" />
                )}
              </motion.div>
          
              </div>
                </button>
          </TextFade>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.3,
                      ease: "easeOut"
                    },
                    opacity: {
                      duration: 0.2,
                      delay: 0.1
                    }
                  }
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.3,
                      ease: "easeIn"
                    },
                    opacity: {
                      duration: 0.2
                    }
                  }
                }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-neutral-100 font-bold px-6">
                  {item.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default ListHover;