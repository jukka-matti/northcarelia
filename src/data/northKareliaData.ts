
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
        desc: 'Pohjois-Karjalan liiton PDF-raportti analysoitiin ensimmäisen kerran. Alkuperäinen React + Recharts -prototyyppi osoittautui epävakaaksi selainympäristössä.',
        color: '#f4a261'
    },
    {
        step: '02',
        title: 'Flash-versio (Gemini 3 Flash)',
        desc: 'Kevyt HTML + SVG -ratkaisu ilman ulkoisia kirjastoja. Nopea ja vakaa, mutta rajoitettu toiminnallisuus. Tallennettiin backup-versioksi.',
        color: '#2a9d8f'
    },
    {
        step: '03',
        title: 'Pro-versio (Gemini 3 Pro)',
        desc: 'Täysi uudelleenrakennus: Vite + React + TypeScript + Tailwind v4. Framer Motion -animaatiot, Recharts-kaaviot ja responsiivinen design.',
        color: '#4a7c59'
    },
    {
        step: '04',
        title: 'Matka-osio (Gemini 3 Pro)',
        desc: 'Uusi visuaalinen tarina: Menneisyys, Nykytila ja Tulevaisuus. Scroll-animaatiot, kolme lukua ja kaikki raportin data visuaalisessa muodossa.',
        color: '#8B5CF6'
    }
];

// Journey chapters for the narrative story
export interface JourneyChapter {
    id: string;
    era: string;
    title: string;
    subtitle: string;
    color: string;
    bgGradient: string;
    icon: string;
    stats: { label: string; value: string; note?: string }[];
    narrative: string;
    highlights: string[];
}

export const journeyChapters: JourneyChapter[] = [
    {
        id: 'past',
        era: 'Menneisyys',
        title: 'Metsien ja rajojen maa',
        subtitle: 'Pohjois-Karjalan perusta',
        color: '#8B4513',
        bgGradient: 'from-amber-900/30 via-green-900/20 to-emerald-950/40',
        icon: '🌲',
        stats: [
            { label: 'Metsävarat', value: '209 milj. m³', note: '(2022)' },
            { label: 'Syntyneet', value: '1 577', note: '(2013)' },
            { label: 'Vienti Venäjälle', value: '~10%', note: 'ennen 2022' },
        ],
        narrative: 'Pohjois-Karjala on Manner-Euroopan itäisin maakunta. 13 kuntaa, joista viisi kaupunkeja. Kolin kansallismaisema symboloi alueen luontoidentiteettiä. Metsät ovat kasvaneet tasaisesti 1960-luvulta lähtien.',
        highlights: [
            'Joensuun yliopisto perustettu 1969',
            'Vahva metsäteollisuuden perinne',
            'Itärajan kauppayhteydet kukoistivat',
        ]
    },
    {
        id: 'present',
        era: 'Nykytila',
        title: 'Sinnikkyyttä murroksessa',
        subtitle: 'Geopolitiikka, muuttoliike ja vihreä siirtymä',
        color: '#2a9d8f',
        bgGradient: 'from-teal-900/30 via-slate-900/40 to-red-900/20',
        icon: '🔥',
        stats: [
            { label: 'Väkiluku', value: '162 202', note: '(10/2024)' },
            { label: 'Maahanmuutto', value: '+1 743', note: 'ennätys 2023' },
            { label: 'Työttömyys', value: '13,1%', note: 'maan korkein' },
            { label: 'Uusiutuva energia', value: '72%', note: 'omavaraisuus 69%' },
        ],
        narrative: 'Venäjän hyökkäyssota 2022 muutti kaiken. Itärajan liikenne loppui, mutta maahanmuutto 87 maasta – erityisesti Ukrainasta – toi ennätysmäisen muuttovoiton. Samaan aikaan luonnollinen väestönmuutos on negatiivinen: kuolleita on kaksi kertaa enemmän kuin syntyneitä.',
        highlights: [
            'Ukrainalaiset = 1/3 maahanmuutosta',
            'Päästöt vähentyneet -44% (tavoite -80%)',
            'Forest Joensuu sai presidentin palkinnon 2024',
            'Koronaelpyminen 2021, sitten taantuma',
        ]
    },
    {
        id: 'future',
        era: 'Tulevaisuus',
        title: 'Vihreän siirtymän edelläkävijä',
        subtitle: 'Investoinnit, innovaatiot ja infrastruktuuri',
        color: '#4a7c59',
        bgGradient: 'from-emerald-900/30 via-sky-900/20 to-violet-900/20',
        icon: '🚀',
        stats: [
            { label: 'Väestöennuste 2040', value: '+7 539', note: 'vs. 2021 ennuste' },
            { label: 'GTK Mintec', value: '55 M€', note: 'investointi 2025-28' },
            { label: 'Hinku-tavoite', value: '-80%', note: 'päästöt 2030' },
        ],
        narrative: 'Tulevaisuus on valoisampi kuin aiemmin ennustettiin. P2X Solutions rakentaa vedyntuotantoa, BinderHoltz sahateollisuutta. Karjalan radan modernisointi on alkanut. Joensuu kasvaa Suomen 10. suurimmaksi kaupungiksi.',
        highlights: [
            'Fingrid vahvistaa sähköverkkoa',
            'NATO-jäsenyys avaa uusia markkinoita',
            'Digitaalinen kokonaisturvallisuus uusi ala',
            'Lentoliikenne kritinen saavutettavuudelle',
        ]
    }
];

