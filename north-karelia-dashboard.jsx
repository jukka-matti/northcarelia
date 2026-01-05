import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown, Users, Briefcase, Heart, Leaf, AlertCircle, TrendingUp, Sparkles, FileText, Cpu, Code, Globe } from 'lucide-react';

export default function NorthKareliaDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Data for visualizations
  const populationData = [
    { year: '2019', population: 164500, migration: 450, natural: -680 },
    { year: '2020', population: 163800, migration: 520, natural: -720 },
    { year: '2021', population: 163200, migration: 780, natural: -820 },
    { year: '2022', population: 162800, migration: 890, natural: -950 },
    { year: '2023', population: 162321, migration: 979, natural: -1219 },
    { year: '2024', population: 162202, migration: 950, natural: -1200 }
  ];

  const economicData = [
    { year: '2021', revenue: 112.2, exports: 124.9 },
    { year: '2022', revenue: 105.4, exports: -1.2 },
    { year: '2023', revenue: -2.8, exports: -9.6 },
    { year: '2024', revenue: -1.8, exports: -8.0 }
  ];

  const energyData = [
    { source: 'Bioenergia', percentage: 36, color: '#2d5016' },
    { source: 'Lämpöpumput', percentage: 18, color: '#4a7c59' },
    { source: 'Aurinko', percentage: 8, color: '#f4a261' },
    { source: 'Tuuli', percentage: 10, color: '#8ecae6' },
    { source: 'Muut uusiutuvat', percentage: 0, color: '#90be6d' },
    { source: 'Fossiiliset', percentage: 28, color: '#95a5a6' }
  ];

  const ageDistribution = [
    { group: '0-14', percentage: 13.2 },
    { group: '15-64', percentage: 58.9 },
    { group: '65+', percentage: 27.9 }
  ];

  const keyMetrics = [
    { 
      icon: Users, 
      label: 'Väestö', 
      value: '162 202', 
      change: '-0,1%',
      trend: 'down',
      color: '#e63946'
    },
    { 
      icon: Briefcase, 
      label: 'Työttömyys', 
      value: '13,1%', 
      change: '+0,4%',
      trend: 'down',
      color: '#e76f51'
    },
    { 
      icon: Leaf, 
      label: 'Päästövähennys', 
      value: '44%', 
      change: 'Tavoite 80%',
      trend: 'up',
      color: '#2a9d8f'
    },
    { 
      icon: TrendingUp, 
      label: 'Uusiutuva energia', 
      value: '72%', 
      change: 'Omavaraisuus 69%',
      trend: 'up',
      color: '#4a7c59'
    }
  ];

  const sections = [
    { id: 'overview', label: 'Yleiskuva', icon: '📊' },
    { id: 'population', label: 'Väestö', icon: '👥' },
    { id: 'economy', label: 'Talous', icon: '💼' },
    { id: 'wellbeing', label: 'Hyvinvointi', icon: '❤️' },
    { id: 'environment', label: 'Ympäristö', icon: '🌲' },
    { id: 'about', label: 'Projektin tarina', icon: '✨' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1e1e 0%, #1a3a3a 50%, #2d5016 100%)',
      color: '#e8f5e9',
      fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        right: '-5%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(74, 124, 89, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 20s ease-in-out infinite',
        zIndex: 0
      }} />
      
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-5%',
        width: '35%',
        height: '35%',
        background: 'radial-gradient(circle, rgba(42, 157, 143, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 25s ease-in-out infinite reverse',
        zIndex: 0
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .metric-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .metric-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .section-button {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .section-button:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }
        
        .chart-container {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          animation: slideIn 0.6s ease-out;
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <header style={{
          marginBottom: '48px',
          opacity: isVisible ? 1 : 0,
          animation: 'fadeIn 0.8s ease-out'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(74, 124, 89, 0.2)',
            border: '1px solid rgba(74, 124, 89, 0.3)',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.5px',
            marginBottom: '16px',
            fontFamily: "'Space Mono', monospace"
          }}>
            TILANNE- JA KEHITYSKUVA 2024
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '16px',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #e8f5e9 0%, #90be6d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Pohjois-Karjala
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#b2dfdb',
            maxWidth: '800px',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Visuaalinen katsaus maakunnan väestöön, talouteen, hyvinvointiin ja ympäristöön
          </p>
        </header>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '48px',
          flexWrap: 'wrap',
          animation: 'slideIn 0.6s ease-out 0.2s both'
        }}>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="section-button"
              style={{
                padding: '12px 24px',
                background: activeSection === section.id 
                  ? 'rgba(74, 124, 89, 0.4)' 
                  : 'rgba(255, 255, 255, 0.05)',
                border: activeSection === section.id
                  ? '2px solid rgba(74, 124, 89, 0.6)'
                  : '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#e8f5e9',
                fontSize: '16px',
                fontWeight: activeSection === section.id ? '600' : '400',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span style={{ marginRight: '8px' }}>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>

        {/* Key Metrics */}
        {activeSection === 'overview' && (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}>
              {keyMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="metric-card"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '28px',
                      animation: `slideIn 0.6s ease-out ${0.4 + index * 0.1}s both`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      background: `radial-gradient(circle, ${metric.color}33 0%, transparent 70%)`,
                      borderRadius: '50%'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        display: 'inline-flex',
                        padding: '10px',
                        background: `${metric.color}22`,
                        borderRadius: '12px',
                        marginBottom: '16px'
                      }}>
                        <Icon size={24} color={metric.color} />
                      </div>
                      
                      <div style={{
                        fontSize: '14px',
                        color: '#b2dfdb',
                        marginBottom: '8px',
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}>
                        {metric.label}
                      </div>
                      
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: '#e8f5e9',
                        marginBottom: '8px',
                        fontFamily: "'Space Mono', monospace"
                      }}>
                        {metric.value}
                      </div>
                      
                      <div style={{
                        fontSize: '13px',
                        color: metric.trend === 'up' ? '#90be6d' : '#e76f51',
                        fontWeight: '500'
                      }}>
                        {metric.change}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Overview Charts */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '32px',
              marginBottom: '48px'
            }}>
              {/* Population Trend */}
              <div className="chart-container">
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#e8f5e9'
                }}>
                  Väestökehitys
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={populationData}>
                    <defs>
                      <linearGradient id="colorPop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4a7c59" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#4a7c59" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="year" stroke="#b2dfdb" />
                    <YAxis stroke="#b2dfdb" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(10, 30, 30, 0.95)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: '#e8f5e9'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="population" 
                      stroke="#4a7c59" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorPop)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Energy Mix */}
              <div className="chart-container">
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#e8f5e9'
                }}>
                  Energian lähteet (72% uusiutuvaa)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={energyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name} ${percentage}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="percentage"
                    >
                      {energyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(10, 30, 30, 0.95)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: '#e8f5e9'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {/* Population Section */}
        {activeSection === 'population' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#e8f5e9'
            }}>
              👥 Väestönkehitys
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '32px'
            }}>
              {/* Migration vs Natural Change */}
              <div className="chart-container">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#e8f5e9' }}>
                  Muuttoliike vs. Luonnollinen väestönmuutos
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={populationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="year" stroke="#b2dfdb" />
                    <YAxis stroke="#b2dfdb" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(10, 30, 30, 0.95)', 
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: '#e8f5e9'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="migration" fill="#2a9d8f" name="Muuttovoitto" />
                    <Bar dataKey="natural" fill="#e76f51" name="Luonnollinen muutos" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Age Distribution */}
              <div className="chart-container">
                <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#e8f5e9' }}>
                  Ikäjakauma
                </h3>
                <div style={{ padding: '20px' }}>
                  {ageDistribution.map((group, index) => (
                    <div key={index} style={{ marginBottom: '24px' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                        fontSize: '16px',
                        fontWeight: '500'
                      }}>
                        <span>{group.group} vuotta</span>
                        <span style={{ fontFamily: "'Space Mono', monospace" }}>{group.percentage}%</span>
                      </div>
                      <div style={{
                        height: '32px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${group.percentage}%`,
                          background: index === 0 ? '#90be6d' : index === 1 ? '#2a9d8f' : '#e76f51',
                          borderRadius: '16px',
                          transition: 'width 1s ease-out',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: '12px'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Facts */}
            <div style={{
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div className="chart-container" style={{ padding: '24px' }}>
                <AlertCircle size={32} color="#e76f51" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#e8f5e9' }}>
                  Syntyvyys laskussa
                </h4>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Vuonna 2023 syntyi vain <strong style={{ color: '#e76f51' }}>1 002</strong> lasta, 
                  kun kuolleita oli <strong>2 221</strong>. Luonnollinen väestönmuutos 
                  oli <strong style={{ color: '#e76f51' }}>-1 219</strong> henkeä.
                </p>
              </div>

              <div className="chart-container" style={{ padding: '24px' }}>
                <TrendingUp size={32} color="#2a9d8f" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#e8f5e9' }}>
                  Maahanmuutto kasvussa
                </h4>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Vuonna 2023 maahanmuuttovoitto oli ennätyksellinen <strong style={{ color: '#2a9d8f' }}>+1 743</strong> henkeä. 
                  Muuttajia tuli <strong>87 eri maasta</strong>. Suurimmat ryhmät: Ukraina, Venäjä, Myanmar.
                </p>
              </div>

              <div className="chart-container" style={{ padding: '24px' }}>
                <Users size={32} color="#90be6d" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#e8f5e9' }}>
                  Vieraskielisten osuus kasvaa
                </h4>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Vieraskielisen väestön osuus on kasvanut 1 %:sta (vuonna 2000) 
                  nykyiseen <strong style={{ color: '#90be6d' }}>5,7 %:iin</strong> vuonna 2023.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Economy Section */}
        {activeSection === 'economy' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#e8f5e9'
            }}>
              💼 Taloudellinen tilanne
            </h2>

            <div className="chart-container" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#e8f5e9' }}>
                Liikevaihdon ja viennin kehitys (%)
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={economicData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="#b2dfdb" />
                  <YAxis stroke="#b2dfdb" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(10, 30, 30, 0.95)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: '#e8f5e9'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#f4a261" 
                    strokeWidth={3}
                    name="Liikevaihto"
                    dot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="exports" 
                    stroke="#2a9d8f" 
                    strokeWidth={3}
                    name="Vienti"
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              <div className="chart-container" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  📊 Työttömyys
                </h4>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#e76f51', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
                  13,1%
                </div>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Maan korkein työttömyysaste (lokakuu 2024). 
                  Koko maan keskiarvo: <strong>10,6%</strong>
                </p>
              </div>

              <div className="chart-container" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  🏢 Konkurssit
                </h4>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#e76f51', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
                  88
                </div>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Konkurssit tammi-lokakuussa 2024. 
                  Vuonna 2023 yhteensä: <strong>83</strong>
                </p>
              </div>

              <div className="chart-container" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  🔬 T&K-menot
                </h4>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2a9d8f', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
                  1,49%
                </div>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Osuus koko maan T&K-menoista (2023). 
                  Noin <strong>60%</strong> syntyy korkeakoulusektorilla.
                </p>
              </div>
            </div>

            <div className="chart-container" style={{ marginTop: '32px', padding: '32px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#e8f5e9' }}>
                🎯 Keskeiset haasteet ja mahdollisuudet
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <h5 style={{ color: '#e76f51', marginBottom: '12px', fontSize: '1.1rem' }}>Haasteet</h5>
                  <ul style={{ color: '#b2dfdb', lineHeight: '2', listStyle: 'none', paddingLeft: 0 }}>
                    <li>❌ Venäjän vienti loppunut (~10% viennistä)</li>
                    <li>❌ Pitkittynyt talouden sinnittely</li>
                    <li>❌ Investointien viivästyminen</li>
                    <li>❌ Korkeat korot jarruttavat hankkeita</li>
                  </ul>
                </div>
                <div>
                  <h5 style={{ color: '#2a9d8f', marginBottom: '12px', fontSize: '1.1rem' }}>Mahdollisuudet</h5>
                  <ul style={{ color: '#b2dfdb', lineHeight: '2', listStyle: 'none', paddingLeft: 0 }}>
                    <li>✅ Itäisen Suomen ohjelma käynnistyy</li>
                    <li>✅ Puhtaan siirtymän investoinnit</li>
                    <li>✅ Huoltovarmuus arvossaan (NATO)</li>
                    <li>✅ Kotimaisen puun kysyntä kasvanut</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wellbeing Section */}
        {activeSection === 'wellbeing' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#e8f5e9'
            }}>
              ❤️ Hyvinvointi ja yhteisöt
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              <div className="chart-container" style={{ padding: '24px', background: 'rgba(231, 111, 81, 0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  🏥 Sairastavuus
                </h4>
                <p style={{ color: '#b2dfdb', lineHeight: '1.8', marginBottom: '16px' }}>
                  Pohjoiskarjalaisten elintavat ovat keskimäärin <strong>muuta maata huonommat</strong>. 
                  Sairastavuus on korkeampaa.
                </p>
                <div style={{ fontSize: '14px', color: '#e76f51', fontWeight: '500' }}>
                  • Eniten tyypin 2 diabetesta<br/>
                  • Lihavuus yleistynyt<br/>
                  • Yli puolet ei liiku riittävästi
                </div>
              </div>

              <div className="chart-container" style={{ padding: '24px', background: 'rgba(231, 111, 81, 0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  👨‍👩‍👧‍👦 Sosiaaliset haasteet
                </h4>
                <p style={{ color: '#b2dfdb', lineHeight: '1.8', marginBottom: '16px' }}>
                  Matalan osallisuuden alue. Yksinäisyys ja turvattomuus lisääntyneet.
                </p>
                <div style={{ fontSize: '14px', color: '#e76f51', fontWeight: '500' }}>
                  • 13,7% tuntee itsensä yksinäiseksi<br/>
                  • Nuorten ahdistuneisuus kasvanut<br/>
                  • 15,2% nuorista syrjäytymisriskissä
                </div>
              </div>

              <div className="chart-container" style={{ padding: '24px', background: 'rgba(231, 111, 81, 0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  👶 Lasten hyvinvointi
                </h4>
                <p style={{ color: '#b2dfdb', lineHeight: '1.8', marginBottom: '16px' }}>
                  Lasten ja nuorten elintavat huonontuneet. Väkivalta lisääntynyt.
                </p>
                <div style={{ fontSize: '14px', color: '#e76f51', fontWeight: '500' }}>
                  • 41% peruskoululaisista huono fyysinen kunto<br/>
                  • Lihavuus kasvanut nopeasti<br/>
                  • Väkivalta kotona yleistä (14-27%)
                </div>
              </div>
            </div>

            <div className="chart-container" style={{ padding: '32px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#e8f5e9' }}>
                📊 Vertailulukuja
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e76f51', fontFamily: "'Space Mono', monospace" }}>
                    71,9
                  </div>
                  <div style={{ color: '#b2dfdb', marginTop: '8px' }}>
                    Väestöllinen huoltosuhde (koko maa: 61,9)
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e76f51', fontFamily: "'Space Mono', monospace" }}>
                    Heikoin
                  </div>
                  <div style={{ color: '#b2dfdb', marginTop: '8px' }}>
                    Taloudellinen huoltosuhde koko maassa
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e76f51', fontFamily: "'Space Mono', monospace" }}>
                    36 616€
                  </div>
                  <div style={{ color: '#b2dfdb', marginTop: '8px' }}>
                    Asuntokuntien keskimääräiset rahatulot (2021)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Environment Section */}
        {activeSection === 'environment' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#e8f5e9'
            }}>
              🌲 Ympäristö ja kestävyys
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              <div className="chart-container" style={{ padding: '24px', background: 'rgba(74, 124, 89, 0.2)' }}>
                <Leaf size={40} color="#90be6d" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  Hinku-maakunta
                </h4>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#90be6d', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
                  44%
                </div>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Päästövähennystavoite: <strong style={{ color: '#90be6d' }}>-80%</strong> vuoteen 2030 mennessä. 
                  11/13 kuntaa mukana Hinku-verkostossa.
                </p>
              </div>

              <div className="chart-container" style={{ padding: '24px', background: 'rgba(74, 124, 89, 0.2)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  ⚡ Energiaomavaraisuus
                </h4>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#90be6d', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
                  69%
                </div>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  Uusiutuvan energian osuus: <strong style={{ color: '#90be6d' }}>72%</strong>. 
                  Kokonaiskulutus 11 TWh (2022).
                </p>
              </div>

              <div className="chart-container" style={{ padding: '24px', background: 'rgba(74, 124, 89, 0.2)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#e8f5e9' }}>
                  🌲 Metsävarat
                </h4>
                <div style={{ fontSize: '3rem', fontWeight: '700', color: '#90be6d', marginBottom: '8px', fontFamily: "'Space Mono', monospace" }}>
                  209M
                </div>
                <p style={{ color: '#b2dfdb', lineHeight: '1.6' }}>
                  m³ puuta metsissä (2022). Vuotuinen kasvu <strong>9,9M m³</strong>, 
                  hakkuu <strong>6,9M m³</strong>.
                </p>
              </div>
            </div>

            <div className="chart-container" style={{ padding: '32px', marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#e8f5e9' }}>
                🎯 Kestävän kehityksen toimet
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <h5 style={{ color: '#90be6d', marginBottom: '12px', fontSize: '1.1rem' }}>Edistyminen</h5>
                  <ul style={{ color: '#b2dfdb', lineHeight: '2', listStyle: 'none', paddingLeft: 0 }}>
                    <li>✅ Päästöt vähentyneet kaikissa lähteissä</li>
                    <li>✅ Aurinkoenergia kasvussa</li>
                    <li>✅ Lämpöpumput ja biokaasu lisääntynyt</li>
                    <li>✅ 4 kunnalla ilmastosuunnitelmat valmiit</li>
                    <li>✅ Helmi-keskittymä suunnitteilla (Juuka)</li>
                  </ul>
                </div>
                <div>
                  <h5 style={{ color: '#f4a261', marginBottom: '12px', fontSize: '1.1rem' }}>Haasteet</h5>
                  <ul style={{ color: '#b2dfdb', lineHeight: '2', listStyle: 'none', paddingLeft: 0 }}>
                    <li>⚠️ Tie- ja rautatieinfrastruktuuri jälkijunassa</li>
                    <li>⚠️ Karjalan rata vaatii peruskorjausta</li>
                    <li>⚠️ Rajaliikenteen loppuminen</li>
                    <li>⚠️ Elinympäristöjen heikkeneminen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="chart-container" style={{ padding: '32px' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#e8f5e9' }}>
                🚄 Liikenne ja saavutettavuus
              </h4>
              <p style={{ color: '#b2dfdb', lineHeight: '1.8', marginBottom: '20px' }}>
                Geopoliittisen tilanteen muutos on vaikuttanut merkittävästi liikennevirtoihin. 
                Rajaliikenteen loppuminen ja Saimaan kanavan käytön estyminen ovat siirtäneet 
                kuljetuksia rautateille ja maanteille, paljastaen itäisen Suomen infrastruktuurin jälkeenjääneisyyden.
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '16px',
                marginTop: '20px'
              }}>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '14px', color: '#b2dfdb', marginBottom: '8px' }}>Kuutoskäytävä</div>
                  <div style={{ color: '#90be6d', fontWeight: '600' }}>Liikenteen runko etelään</div>
                </div>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '14px', color: '#b2dfdb', marginBottom: '8px' }}>Karjalan rata</div>
                  <div style={{ color: '#f4a261', fontWeight: '600' }}>Vaatii peruskorjausta</div>
                </div>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '14px', color: '#b2dfdb', marginBottom: '8px' }}>Joensuun lentoasema</div>
                  <div style={{ color: '#90be6d', fontWeight: '600' }}>Kriittinen yhteys</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '32px',
              color: '#e8f5e9'
            }}>
              ✨ Projektin tarina: Datasta visioksi
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}>
              {[
                {
                  step: 'VAIHE 1',
                  title: 'Lähdeaineisto',
                  desc: 'Pohjois-Karjalan liiton PDF-raportti (2025) tarjosi valtavan määrän tekstiä ja taulukoita maakunnan tilanteesta.',
                  icon: FileText,
                  color: '#f4a261',
                  tags: ['PDF', 'Data', 'Tilannekuva']
                },
                {
                  step: 'VAIHE 2',
                  title: 'AI-Suunnittelu',
                  desc: 'Claude 4.5 Sonnet analysoi raportin ja loi koodin, joka muuttaa numerot ja tekstin visuaaliseksi tarinaksi.',
                  icon: Cpu,
                  color: '#2a9d8f',
                  tags: ['Claude 4.5', 'Prompt Engineering', 'React']
                },
                {
                  step: 'VAIHE 3',
                  title: 'Kehitystyö',
                  desc: 'Cursor IDE:n avulla koodi hiottiin, Git-repo alustettiin ja projekti valmisteltiin julkaisuun sekunneissa.',
                  icon: Code,
                  color: '#4a7c59',
                  tags: ['Cursor', 'Git', 'Pair Programming']
                },
                {
                  step: 'VAIHE 4',
                  title: 'Julkaisu',
                  desc: 'Automaattinen CI/CD-putki Verceliin. Projekti on nyt livenä ja kaikkien tarkasteltavissa.',
                  icon: Globe,
                  color: '#8ecae6',
                  tags: ['Vercel', 'Live', 'Deployment']
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="chart-container"
                    style={{
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '12px',
                      color: item.color,
                      letterSpacing: '2px',
                      fontWeight: '700'
                    }}>
                      {item.step}
                    </div>
                    
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: `${item.color}22`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={24} color={item.color} />
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#e8f5e9' }}>
                      {item.title}
                    </h3>

                    <p style={{ color: '#b2dfdb', lineHeight: '1.6', flexGrow: 1 }}>
                      {item.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {item.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: '10px',
                          padding: '4px 8px',
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: '4px',
                          color: '#b2dfdb',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="chart-container" style={{ padding: '40px', textAlign: 'center' }}>
              <Sparkles size={48} color="#90be6d" style={{ marginBottom: '24px' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Tulevaisuuden kehitystapa</h3>
              <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: '#b2dfdb', fontSize: '1.1rem' }}>
                Tämä dashboard ei ole vain tilastoja, vaan esimerkki siitä, kuinka tekoälyavusteinen 
                kehitys mahdollistaa monimutkaisen tiedon nopean visualisoinnin ja saavutettavuuden. 
                Se, mikä ennen vei päiviä suunnittelussa ja koodauksessa, on nyt mahdollista toteuttaa 
                lähes välittömästi säilyttäen silti korkean laadun ja visualisuuden.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{
          marginTop: '80px',
          padding: '32px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
          color: '#b2dfdb',
          fontSize: '14px'
        }}>
          <p>Lähde: Pohjois-Karjalan tilanne- ja kehityskuva, Joulukuu 2024</p>
          <p style={{ marginTop: '8px', fontSize: '12px', opacity: 0.7 }}>
            Pohjois-Karjalan Maakuntaliitto
          </p>
        </footer>
      </div>
    </div>
  );
}
