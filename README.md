# Pohjois-Karjala Dashboard 🌲

Interactive visual dashboard showcasing North Karelia's situation and development outlook for 2024-2025.

![Dashboard Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📊 Features

- **Interactive Data Visualizations** - Charts and graphs powered by Recharts
- **Multiple Sections**:
  - 📊 Overview - Key metrics at a glance
  - 👥 Population - Demographics and migration trends
  - 💼 Economy - Business and employment data
  - ❤️ Wellbeing - Health and social indicators
  - 🌲 Environment - Sustainability and climate goals

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Distinctive Aesthetics** - Nordic-inspired design with forest-themed colors
- **Smooth Animations** - Engaging micro-interactions and transitions

## 🚀 Quick Deploy to Vercel

### Method 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project directory**:
   ```bash
   cd /path/to/dashboard-files
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new one
   - Confirm the settings
   - Your site will be live in seconds!

### Method 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Drag and drop the project folder
4. Click "Deploy"

## 🏃 Local Development

### Option 1: Simple HTTP Server

**Using Python 3:**
```bash
python3 -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Option 2: Using Node.js

**Using npx:**
```bash
npx serve .
```

**Using http-server:**
```bash
npm install -g http-server
http-server -p 8000
```

## 📁 Project Structure

```
pohjois-karjala-dashboard/
├── index.html                      # Main HTML file
├── north-karelia-dashboard.jsx     # React dashboard component
├── vercel.json                     # Vercel configuration
├── package.json                    # Project metadata
└── README.md                       # This file
```

## 🎨 Customization

### Colors

The dashboard uses a nature-inspired color palette. To customize colors, edit the CSS variables in `north-karelia-dashboard.jsx`:

```javascript
// Main background gradient
background: 'linear-gradient(135deg, #0a1e1e 0%, #1a3a3a 50%, #2d5016 100%)'

// Accent colors
const colors = {
  primary: '#4a7c59',    // Forest green
  secondary: '#2a9d8f',  // Teal
  warning: '#e76f51',    // Coral
  success: '#90be6d',    // Light green
}
```

### Data

To update the data, modify the data arrays in the component:
- `populationData`
- `economicData`
- `energyData`
- `ageDistribution`
- `keyMetrics`

## 🔧 Technologies Used

- **React 18** - UI library
- **Recharts 2.5** - Data visualization
- **Lucide React** - Icon library
- **IBM Plex Sans** - Typography
- **Space Mono** - Monospace font for numbers

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Data Source

Data sourced from: **Pohjois-Karjalan tilanne- ja kehityskuva, Joulukuu 2024**
Publisher: Pohjois-Karjalan Maakuntaliitto

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📝 License

MIT License - feel free to use and modify as needed.

## 🐛 Troubleshooting

### Charts not displaying
- Make sure all CDN links are loading (check browser console)
- Verify internet connection for CDN resources

### Deployment issues on Vercel
- Ensure `vercel.json` is in the root directory
- Check that file names match exactly (case-sensitive)
- Verify all files are committed to git

### Local server not starting
- Check if port 8000 is already in use
- Try a different port: `python3 -m http.server 3000`

## 📧 Questions?

If you have questions or run into issues, feel free to open an issue or reach out!

---

**Built with ❤️ for Pohjois-Karjala**
