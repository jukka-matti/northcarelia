
import React from 'react';
import { motion } from 'framer-motion';
import { journeyChapters } from '../data/northKareliaData';
import { ChevronDown } from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionSection = motion.section as any;

export const Journey: React.FC = () => {
    return (
        <div className="space-y-0">
            {/* Hero */}
            <div className="text-center py-16 px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200">
                        Pohjois-Karjalan matka
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Kolme lukua maakunnan tarinasta: menneisyys, nykytila ja tulevaisuus.
                        Vieritä alas aloittaaksesi matka.
                    </p>
                    <div className="animate-bounce">
                        <ChevronDown className="w-8 h-8 mx-auto text-primary" />
                    </div>
                </MotionDiv>
            </div>

            {/* Chapters */}
            {journeyChapters.map((chapter, index) => (
                <MotionSection
                    key={chapter.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className={`min-h-screen py-20 px-4 md:px-8 bg-gradient-to-br ${chapter.bgGradient} relative overflow-hidden`}
                >
                    {/* Background Icon */}
                    <div className="absolute right-4 md:right-20 top-20 text-[150px] md:text-[300px] opacity-5 select-none pointer-events-none">
                        {chapter.icon}
                    </div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        {/* Era Badge */}
                        <MotionDiv
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6"
                                style={{ borderColor: chapter.color, color: chapter.color }}
                            >
                                <span className="text-2xl">{chapter.icon}</span>
                                <span className="font-mono text-sm uppercase tracking-widest">{chapter.era}</span>
                            </div>
                        </MotionDiv>

                        {/* Title */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
                                {chapter.title}
                            </h3>
                            <p className="text-xl text-gray-400 mb-10">{chapter.subtitle}</p>
                        </MotionDiv>

                        {/* Stats Grid */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                        >
                            {chapter.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                                >
                                    <div className="text-2xl md:text-3xl font-mono font-bold text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                    {stat.note && <div className="text-xs text-gray-500 mt-1">{stat.note}</div>}
                                </div>
                            ))}
                        </MotionDiv>

                        {/* Narrative */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-10"
                        >
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                {chapter.narrative}
                            </p>
                        </MotionDiv>

                        {/* Highlights */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">
                                Keskeiset tapahtumat
                            </h4>
                            <ul className="space-y-3">
                                {chapter.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span
                                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                            style={{ backgroundColor: chapter.color }}
                                        />
                                        <span className="text-gray-300">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionDiv>

                        {/* Chapter Divider */}
                        {index < journeyChapters.length - 1 && (
                            <div className="flex justify-center mt-16">
                                <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
                            </div>
                        )}
                    </div>
                </MotionSection>
            ))}

            {/* Epilogue */}
            <div className="py-20 px-4 text-center bg-gradient-to-b from-transparent to-black/30">
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-6xl mb-6">🌲</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Matka jatkuu
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Pohjois-Karjala on osoittanut selviytymiskykynsä läpi historian.
                        Tulevaisuus rakennetaan tänään – vihreän siirtymän, innovaatioiden ja
                        kansainvälisyyden varaan.
                    </p>
                </MotionDiv>
            </div>
        </div>
    );
};
