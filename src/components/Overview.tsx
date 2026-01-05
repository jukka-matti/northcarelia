
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { keyMetrics, populationData, migrationData } from '../data/northKareliaData';

const MotionDiv = motion.div as any;

export const Overview: React.FC = () => {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyMetrics.map((metric, index) => (
                    <MotionDiv
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {metric.icon && <metric.icon className="w-6 h-6 text-secondary" />}
                            <h3 className="text-gray-400 text-sm font-mono uppercase tracking-wider">{metric.label}</h3>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white mb-2">{metric.value}</div>
                        {metric.change && (
                            <div className={`text-sm font-semibold flex items-center gap-1 ${metric.changeType === 'positive' ? 'text-success' :
                                    metric.changeType === 'negative' ? 'text-warning' : 'text-gray-400'
                                }`}>
                                {metric.change}
                            </div>
                        )}
                        <p className="sr-only">{metric.description}</p>
                    </MotionDiv>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Population Trend */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-primary rounded-full"></span>
                        Väestökehitys (2019-2024)
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={populationData}>
                                <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#9ca3af' }} />
                                <YAxis hide domain={['dataMin - 1000', 'auto']} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1a3a3a', border: '1px solid #4a7c59', borderRadius: '8px' }}
                                    itemStyle={{ color: '#e8f5e9' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                                    {populationData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={index === populationData.length - 1 ? '#e76f51' : '#90be6d'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Migration Analysis */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-secondary rounded-full"></span>
                        Muuttoliike 2023
                    </h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={migrationData} layout="vertical">
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={120} stroke="#9ca3af" tick={{ fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1a3a3a', border: '1px solid #2a9d8f', borderRadius: '8px' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                    {migrationData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
};
