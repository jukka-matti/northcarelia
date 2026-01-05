
import React from 'react';
import { motion } from 'framer-motion';
import { storySteps } from '../data/northKareliaData';
import { ArrowDown } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Story: React.FC = () => {
    return (
        <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto py-10"
        >
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent md:-translate-x-1/2" />

                <div className="space-y-12">
                    {storySteps.map((step, index) => (
                        <MotionDiv
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className="flex-1 md:text-right">
                                <div className={`bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:border-[${step.color}] transition-colors duration-300 group`}>
                                    <div className="text-4xl font-mono font-bold mb-2 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: step.color }}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>

                            {/* Center Marker */}
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 border-white bg-gray-900 md:-translate-x-1/2 mt-8 z-10" style={{ borderColor: step.color }}>
                                <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: step.color }} />
                            </div>

                            {/* Spacer for alternate side */}
                            <div className="flex-1 hidden md:block" />
                        </MotionDiv>
                    ))}
                </div>

                {/* Final Arrow */}
                <div className="flex justify-center mt-12 relative z-10">
                    <div className="bg-white/10 p-3 rounded-full animate-bounce">
                        <ArrowDown className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
};
