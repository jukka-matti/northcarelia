
import { Users, Leaf, Activity, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface StatItem {
    label: string;
    value: string | number;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    icon?: LucideIcon;
    description?: string;
}

export interface ChartData {
    name: string;
    [key: string]: string | number;
}

export const populationData: ChartData[] = [
    { name: '2019', val: 164500 },
    { name: '2020', val: 163800 },
    { name: '2021', val: 163200 },
    { name: '2022', val: 162800 },
    { name: '2023', val: 162321 },
    { name: '2024', val: 162202 }
];

export const keyMetrics: StatItem[] = [
    {
        label: 'Väkiluku (10/2024)',
        value: '162 202',
        change: '-0,1% lasku',
        changeType: 'neutral',
        icon: Users,
        description: 'Ennuste vuodelle 2025 on aiempaa (2021) ennustetta +2308 henkeä parempi.'
    },
    {
        label: 'Työttömyysaste (10/2024)',
        value: '13,1%',
        change: '+0,4% vs 2023',
        changeType: 'negative',
        icon: Activity,
        description: 'Maan korkein työttömyysaste, mutta avoimia työpaikkoja edelleen runsaasti.'
    },
    {
        label: 'Uusiutuva energia',
        value: '72%',
        change: 'Omavaraisuus 69%',
        changeType: 'positive',
        icon: Zap,
        description: 'Vahva panostus aurinkoenergiaan ja bioenergiaan.'
    },
    {
        label: 'Päästövähennys',
        value: '-44%',
        change: 'Tavoite -80% (2030)',
        changeType: 'positive',
        icon: Leaf,
        description: 'Päästöt vähentyneet kaikilla sektoreilla.'
    }
];

export const migrationData = [
    { name: 'Maan sisäinen', value: -764, fill: '#e76f51' },
    { name: 'Nettomaahanmuutto', value: 1743, fill: '#2a9d8f' },
    { name: 'Kokonaisnetto', value: 979, fill: '#4a7c59' },
];

export const storySteps = [
    {
        step: '01',
        title: 'Data-analyysi (Claude 4.5 Sonnet)',
        desc: 'Pohjois-Karjalan liiton PDF-raportti (2025) analysoitiin tekoälyllä. Keskeiset trendit: väestön sinnikkyys, vihreä siirtymä, maahanmuutto.',
        color: '#f4a261'
    },
    {
        step: '02',
        title: 'Konseptointi (Gemini 3 Flash)',
        desc: 'Ensimmäinen nopea prototyyppi. Yksinkertainen HTML + SVG -ratkaisu, joka toimi "Flash"-nopeudella ilman raskaita kirjastoja.',
        color: '#2a9d8f'
    },
    {
        step: '03',
        title: 'Tuotantoversio (Gemini 3 Pro)',
        desc: 'Tämä versio. Moderni Vite + React -pohja. Framer Motion -animaatiot, Recharts-grafiikka ja täysin responsiivinen "premium" design.',
        color: '#4a7c59'
    }
];
