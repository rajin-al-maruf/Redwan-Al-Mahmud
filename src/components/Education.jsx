import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = ({educationRef}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);

    // Lock the animation state once it becomes visible
    useEffect(() => {
        if (isInView) {
            setHasAnimated(true);
        }
    }, [isInView]);

    return (
        <div className='mx-10 py-16' ref={educationRef}>
            <h2 className='text-3xl font-light tracking-widest text-gray-700'>EDUCATION</h2>

            <div ref={ref} className='mt-20 flex flex-col gap-6 border-l-3 border-gray-300 pl-6 relative'>
                <div className='before:absolute before:w-3 before:h-3 before:bg-cyan-500 before:rounded-full before:-left-2 before:top-2'>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <h2 className='text-xl font-semibold text-gray-800'>B.Sc. in Electrical and Electronics Engineering</h2>
                        <h3 className='text-lg text-gray-600'>Daffodil International University</h3>
                        <h3 className='text-sm text-gray-500 italic'>2020-2024</h3>
                        <h3 className='text-sm text-gray-500 italic'>CGPA: 3.71/4.00</h3>
                    </motion.div>
                </div>

                <div className='before:absolute before:w-3 before:h-3 before:bg-cyan-500 before:rounded-full before:-left-2 before:bottom-[196px]'>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.6 }}
                    >
                        <h2 className='text-xl font-semibold text-gray-800'>Higher Secondary</h2>
                        <h3 className='text-lg text-gray-600'>Adamjee Cantonment College</h3>
                        <h3 className='text-sm text-gray-500 italic'>2019</h3>
                        <h3 className='text-sm text-gray-500 italic'>GPA: 4.75/5.00</h3>
                    </motion.div>
                </div>

                <div className='before:absolute before:w-3 before:h-3 before:bg-cyan-500 before:rounded-full before:-left-2 before:bottom-[76px]'>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={hasAnimated ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.8 }}
                    >
                        <h2 className='text-xl font-semibold text-gray-800'>Secondary</h2>
                        <h3 className='text-lg text-gray-600'>Kishoreganj Government Boys' High School</h3>
                        <h3 className='text-sm text-gray-500 italic'>2019</h3>
                        <h3 className='text-sm text-gray-500 italic'>GPA: 5.00/5.00</h3>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Education;
