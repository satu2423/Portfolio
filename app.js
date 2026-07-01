// app.js — Portfolio Controller Logic
// Integrates portfolio-config.js data with DOM structures and handles animations.

import { portfolioData } from './portfolio-config.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initClock();
  initNavigation();
  initHero();
  initPhilosophy();
  initTicker();
  initStackLayers();
  initPlayground();
  initProjects();
  initSkills();
  initTimeline();
  initCertificates();
  initContact();
  initScrollReveal();
  initNeuralCanvas();
});

// =========================================================
// 1. Theme Configuration
// =========================================================
function initTheme() {
  const themeToggleLink = document.createElement('a');
  themeToggleLink.href = '#';
  themeToggleLink.id = 'theme-toggle-btn';
  themeToggleLink.setAttribute('aria-label', 'Toggle Theme');
  
  const idxSpan = document.createElement('span');
  idxSpan.className = 'idx';
  idxSpan.id = 'theme-toggle-idx';
  
  const textSpan = document.createElement('span');
  textSpan.id = 'theme-toggle-text';
  
  themeToggleLink.appendChild(idxSpan);
  themeToggleLink.appendChild(textSpan);
  
  const navContainer = document.getElementById('main-nav');
  navContainer.appendChild(themeToggleLink);

  const updateThemeUI = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    idxSpan.textContent = isDark ? 'DK' : 'LT';
    textSpan.textContent = isDark ? 'Dark' : 'Light';
    
    const footerDisplay = document.getElementById('footer-theme-display');
    if (footerDisplay) {
      footerDisplay.textContent = isDark ? 'Dark' : 'Light';
    }
  };

  // Initial read
  let currentTheme = localStorage.getItem('ks.theme') || 'dark';
  updateThemeUI(currentTheme);

  themeToggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ks.theme', currentTheme);
    updateThemeUI(currentTheme);
  });
}

// =========================================================
// 2. Live Hyderabad (IST) Clock
// =========================================================
function initClock() {
  const clockElement = document.getElementById('clock-time');
  const timezone = portfolioData.SITE.timezone || 'Asia/Kolkata';
  const tzLabel = portfolioData.SITE.timezoneLabel || 'IST';

  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const tick = () => {
    const formatted = timeFormatter.format(new Date());
    const clockLabel = document.getElementById('ist-clock-label');
    if (clockLabel) {
      clockLabel.innerHTML = `<span class="dot amber"></span> Hyderabad · ${formatted} ${tzLabel}`;
    }
  };

  tick();
  setInterval(tick, 1000);
}

// =========================================================
// 3. Navigation Links
// =========================================================
function initNavigation() {
  const navContainer = document.getElementById('main-nav');
  const navData = portfolioData.NAV;

  // Set dynamic brand name in header logo
  const brandNameEl = document.querySelector('.brand-name');
  if (brandNameEl) brandNameEl.textContent = portfolioData.SITE.brand || "KS";

  // Insert navigation links
  navData.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.innerHTML = `<span class="idx">${item.idx}</span><span>${item.label}</span>`;
    
    // Smooth scrolling active link highlight
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      
      // Close mobile menu if open
      if (navContainer.classList.contains('open')) {
        navContainer.classList.remove('open');
      }
    });

    // Insert before the theme switcher link we just appended
    const switcher = document.getElementById('theme-toggle-btn');
    navContainer.insertBefore(link, switcher);
  });

  // Mobile menu button toggle
  const header = document.querySelector('.topnav-row');
  const menuBtn = document.createElement('button');
  menuBtn.className = 'nav-menu-btn';
  menuBtn.innerHTML = '✦';
  menuBtn.setAttribute('aria-label', 'Open Navigation');
  header.appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    navContainer.classList.toggle('open');
    menuBtn.textContent = navContainer.classList.contains('open') ? '✕' : '✦';
  });
}

// =========================================================
// 4. Hero Section Data Ingestion
// =========================================================
function initHero() {
  const heroData = portfolioData.HERO;
  
  // Status pills
  const statusContainer = document.getElementById('hero-status-row');
  statusContainer.innerHTML = '';
  
  heroData.pills.forEach(pill => {
    const span = document.createElement('span');
    span.className = 'pill';
    if (pill.dot) {
      const dot = document.createElement('span');
      dot.className = `dot ${pill.dot === 'amber' ? 'amber' : ''}`;
      span.appendChild(dot);
    }
    const textNode = document.createTextNode(pill.label);
    span.appendChild(textNode);
    statusContainer.appendChild(span);
  });

  // Clock placeholder pill inside status row
  const clockPill = document.createElement('span');
  clockPill.className = 'pill';
  clockPill.id = 'ist-clock-label';
  clockPill.style.fontVariantNumeric = 'tabular-nums';
  statusContainer.appendChild(clockPill);

  // Hero headline
  const titleContainer = document.getElementById('hero-title');
  titleContainer.innerHTML = '';
  heroData.title.forEach(part => {
    const span = document.createElement('span');
    if (part.serif) span.className = 'serif';
    if (part.stroke) span.className = 'stroke';
    span.textContent = part.t;
    titleContainer.appendChild(span);
  });

  // Hero description
  document.getElementById('hero-description').textContent = heroData.tag;

  // Hero side monogram card
  const cardContainer = document.getElementById('hero-card-widget');
  cardContainer.innerHTML = `
    <div class="photo-fallback" aria-hidden="true">
      ${heroData.photo ? `
        <img src="${heroData.photo}" alt="${portfolioData.SITE.name}" class="profile-photo" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
      ` : ''}
      <svg viewBox="0 0 200 200" width="100%" style="display: ${heroData.photo ? 'none' : 'block'};">
        <defs>
          <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--text)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="82" fill="none" stroke="var(--line)" stroke-width="0.75" />
        <circle cx="100" cy="100" r="66" fill="none" stroke="var(--line-soft)" stroke-width="0.75" stroke-dasharray="2 4" />
        <!-- Data nodes inside the orb -->
        <g stroke="var(--line-soft)" stroke-width="0.5">
          <line x1="100" y1="34" x2="100" y2="166" />
          <line x1="34" y1="100" x2="166" y2="100" />
          <line x1="53" y1="53" x2="147" y2="147" />
          <line x1="53" y1="147" x2="147" y2="53" />
        </g>
        <circle cx="100" cy="100" r="10" fill="var(--bg)" stroke="var(--accent)" stroke-width="1.5" />
        <text x="100" y="104" text-anchor="middle" font-family="var(--f-mono)" font-size="8" font-weight="600" fill="var(--text)">DATA</text>
        <text x="100" y="152" text-anchor="middle"
              font-family="var(--f-display)"
              font-weight="500" fontSize="56"
              letterSpacing="-2"
              fill="url(#mg)">KS</text>
      </svg>
    </div>
    <div class="meta">
      <!-- Generated rows -->
    </div>
  `;

  const metaContainer = cardContainer.querySelector('.meta');
  heroData.meta.forEach(m => {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<span class="k">${m.k}</span><span class="v">${m.v}</span>`;
    metaContainer.appendChild(row);
  });
}

// =========================================================
// 5. Philosophy / Practice
// =========================================================
function initPhilosophy() {
  const data = portfolioData.PHILOSOPHY;
  document.getElementById('phil-kicker').innerHTML = `<span class="serif">${data.kicker}</span>`;
  document.getElementById('phil-body').textContent = data.body;
}

// =========================================================
// 6. Tag Ticker (Skills Scrolling Ticker)
// =========================================================
function initTicker() {
  const ticker = document.getElementById('skills-ticker');
  const tags = portfolioData.TICKER;
  
  // Duplicate tags 4 times to fill screens and loop seamlessly
  const renderList = [...tags, ...tags, ...tags, ...tags];
  ticker.innerHTML = '';
  
  renderList.forEach(tag => {
    const span = document.createElement('span');
    span.textContent = tag;
    ticker.appendChild(span);
  });
}

// =========================================================
// 7. Stack Layer Visualizer
// =========================================================
function initStackLayers() {
  const container = document.getElementById('stack-layers');
  const stack = portfolioData.STACK;
  container.innerHTML = '';

  stack.forEach(layer => {
    const div = document.createElement('div');
    div.className = 'stack-layer';
    div.innerHTML = `
      <span class="num">${layer.num}</span>
      <span class="name">${layer.name}</span>
      <span class="sub">${layer.sub}</span>
    `;
    container.appendChild(div);
  });
}

// =========================================================
// 8. Interactive Playgrounds
// =========================================================
function initPlayground() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const container = document.getElementById('play-container');

  // Handle Tab swapping
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlayground(btn.dataset.play);
    });
  });

  // Render initial playground
  renderPlayground('forecaster');
}

function renderPlayground(type) {
  const container = document.getElementById('play-container');
  container.innerHTML = '';

  if (type === 'forecaster') {
    const data = portfolioData.PLAYGROUNDS.forecaster;
    container.innerHTML = `
      <div class="play-controls">
        <div class="widget-title-area">
          <h3>${data.title}</h3>
          <p>${data.subtitle}</p>
        </div>
        
        <div class="param-sliders">
          <div class="param-row">
            <div class="param-label">
              <span>MARKETING SPEND</span>
              <span class="val-display" id="spend-val">$5,000</span>
            </div>
            <input type="range" class="param-slider" id="slider-spend" min="500" max="15000" step="500" value="5000" />
          </div>
          
          <div class="param-row">
            <div class="param-label">
              <span>ACTIVE LEADS</span>
              <span class="val-display" id="leads-val">250</span>
            </div>
            <input type="range" class="param-slider" id="slider-leads" min="20" max="800" step="10" value="250" />
          </div>
          
          <div class="param-row">
            <div class="param-label">
              <span>SEASONALITY MULTIPLIER</span>
              <span class="val-display" id="season-val">1.2x</span>
            </div>
            <input type="range" class="param-slider" id="slider-season" min="0.5" max="2.0" step="0.1" value="1.2" />
          </div>
        </div>
        
        <p>${data.description}</p>
      </div>

      <div class="play-preview">
        <div class="vis-panel">
          <div class="vis-bar-chart">
            <div class="vis-column">
              <span class="col-val" id="chart-q1-val"></span>
              <div class="vis-bar" id="chart-q1-bar"></div>
              <span class="col-label">Q1</span>
            </div>
            <div class="vis-column">
              <span class="col-val" id="chart-q2-val"></span>
              <div class="vis-bar" id="chart-q2-bar"></div>
              <span class="col-label">Q2</span>
            </div>
            <div class="vis-column">
              <span class="col-val" id="chart-q3-val"></span>
              <div class="vis-bar" id="chart-q3-bar"></div>
              <span class="col-label">Q3</span>
            </div>
            <div class="vis-column">
              <span class="col-val" id="chart-q4-val"></span>
              <div class="vis-bar" id="chart-q4-bar"></div>
              <span class="col-label">Q4</span>
            </div>
          </div>
          
          <div class="vis-result-summary">
            PROJECTED TOTAL REVENUE: <span id="projected-rev"></span>
          </div>
        </div>
      </div>

      <div class="play-code">
        <pre class="code-pre"><code><span class="code-comment"># ${data.subtitle}</span>
<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd
<span class="code-keyword">from</span> sklearn.linear_model <span class="code-keyword">import</span> LinearRegression

df = pd.read_csv(<span class="code-str">"sales_performance.csv"</span>)
X = df[[<span class="code-str">'marketing_spend'</span>, <span class="code-str">'active_leads'</span>, <span class="code-str">'seasonality'</span>]]
y = df[<span class="code-str">'revenue'</span>]

model = LinearRegression().fit(X, y)
<span class="code-keyword">print</span>(f<span class="code-str">"Model R^2: {model.score(X, y):.2f}"</span>) <span class="code-comment"># Outputs 0.87</span></code></pre>
      </div>
    `;

    // Sliders math wiring
    const updateForecast = () => {
      const spend = parseInt(document.getElementById('slider-spend').value);
      const leads = parseInt(document.getElementById('slider-leads').value);
      const season = parseFloat(document.getElementById('slider-season').value);

      document.getElementById('spend-val').textContent = `$${spend.toLocaleString()}`;
      document.getElementById('leads-val').textContent = leads;
      document.getElementById('season-val').textContent = `${season.toFixed(1)}x`;

      // Live coefficients projection with slight randomized noise
      const coefSpend = 14.2;
      const coefLeads = 265.0;
      const baseRev = 12000.0;
      
      const q1Rev = (spend * 0.22 * coefSpend) + (leads * 0.23 * coefLeads) + (baseRev * 0.9 * season);
      const q2Rev = (spend * 0.26 * coefSpend) + (leads * 0.25 * coefLeads) + (baseRev * 1.0 * season);
      const q3Rev = (spend * 0.20 * coefSpend) + (leads * 0.22 * coefLeads) + (baseRev * 0.85 * season);
      const q4Rev = (spend * 0.32 * coefSpend) + (leads * 0.30 * coefLeads) + (baseRev * 1.25 * season);
      
      const totalRev = q1Rev + q2Rev + q3Rev + q4Rev;
      
      const maxVal = Math.max(q1Rev, q2Rev, q3Rev, q4Rev, 1);
      
      const renderBar = (idVal, idBar, val) => {
        const bar = document.getElementById(idBar);
        const text = document.getElementById(idVal);
        const percentHeight = Math.min((val / maxVal) * 100, 100);
        bar.style.height = `${percentHeight}%`;
        text.textContent = `$${Math.round(val / 1000)}k`;
      };

      renderBar('chart-q1-val', 'chart-q1-bar', q1Rev);
      renderBar('chart-q2-val', 'chart-q2-bar', q2Rev);
      renderBar('chart-q3-val', 'chart-q3-bar', q3Rev);
      renderBar('chart-q4-val', 'chart-q4-bar', q4Rev);

      document.getElementById('projected-rev').textContent = `$${Math.round(totalRev).toLocaleString()}`;
    };

    // Attach listeners
    ['slider-spend', 'slider-leads', 'slider-season'].forEach(id => {
      document.getElementById(id).addEventListener('input', updateForecast);
    });

    updateForecast();

  } else if (type === 'cv') {
    const data = portfolioData.PLAYGROUNDS.computerVision;
    container.innerHTML = `
      <div class="play-controls">
        <div class="widget-title-area">
          <h3>${data.title}</h3>
          <p>${data.subtitle}</p>
        </div>
        
        <div class="cv-options">
          <button class="cv-btn active" id="cv-btn-orig" data-filter="orig">1. Original Image</button>
          <button class="cv-btn" id="cv-btn-blur" data-filter="blur">2. Gaussian Blur</button>
          <button class="cv-btn" id="cv-btn-canny" data-filter="canny">3. Canny Edges</button>
          <button class="cv-btn" id="cv-btn-bbox" data-filter="bbox">4. Draw Bounding Boxes</button>
        </div>
        
        <p>${data.description}</p>
      </div>

      <div class="play-preview">
        <div class="vis-panel" style="justify-content: flex-start; align-items: stretch; gap: 14px;">
          <!-- Live scanning window -->
          <div class="cv-image-canvas" id="cv-canvas" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22><rect width=%22400%22 height=%22200%22 fill=%22%23222%22/><text x=%2250%25%22 y=%2255%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22monospace%22 font-size=%2228%22 fill=%22%23666%22 font-weight=%22bold%22>IMAGE INPUT (A8)</text></svg>');">
            
            <!-- Scan line -->
            <div class="cv-scan-line" id="cv-scanline"></div>
            
            <!-- Canny Filter overlay (SVG outline lines) -->
            <div class="cv-edges-overlay" id="cv-canny-overlay" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22><rect width=%22400%22 height=%22200%22 fill=%22black%22/><text x=%2250%25%22 y=%2255%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22monospace%22 font-size=%2228%22 fill=%22none%22 stroke=%22%2310b981%22 stroke-width=%221.5%22 font-weight=%22bold%22>IMAGE INPUT (A8)</text><circle cx=%22100%22 cy=%22100%22 r=%2240%22 fill=%22none%22 stroke=%22%2310b981%22 stroke-width=%221%22/><circle cx=%22300%22 cy=%22100%22 r=%2230%22 fill=%22none%22 stroke=%22%2310b981%22 stroke-width=%221%22/></svg>');"></div>
            
            <!-- Bounding boxes overlays -->
            <div class="cv-bbox" id="cv-box1" style="top: 50px; left: 50px; width: 100px; height: 100px;">
              <span class="cv-bbox-label">LABEL: DIGIT_A [98%]</span>
            </div>
            <div class="cv-bbox" id="cv-box2" style="top: 60px; left: 260px; width: 80px; height: 80px;">
              <span class="cv-bbox-label">LABEL: DIGIT_8 [96%]</span>
            </div>
            
            <!-- Blur overlay (mocked via CSS filters) -->
            <div id="cv-blur-overlay" style="position: absolute; inset: 0; background: inherit; filter: blur(4px); opacity: 0; pointer-events: none; transition: opacity 0.3s ease;"></div>
          </div>
          
          <div class="vis-result-summary">
            CV PIPELINE STATUS: <span id="cv-status">READY FOR SCANNING</span>
          </div>
        </div>
      </div>

      <div class="play-code">
        <pre class="code-pre"><code><span class="code-comment"># ${data.subtitle}</span>
<span class="code-keyword">import</span> cv2

<span class="code-keyword">def</span> preprocess(img_path):
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
    blurred = cv2.GaussianBlur(img, (5, 5), 0)
    edges = cv2.Canny(blurred, 50, 150)
    <span class="code-keyword">return</span> edges</code></pre>
      </div>
    `;

    // Setup interactive OpenCV steps
    const buttons = document.querySelectorAll('.cv-btn');
    const canvas = document.getElementById('cv-canvas');
    const scanline = document.getElementById('cv-scanline');
    const statusText = document.getElementById('cv-status');
    
    // Elements
    const blurOverlay = document.getElementById('cv-blur-overlay');
    const cannyOverlay = document.getElementById('cv-canny-overlay');
    const box1 = document.getElementById('cv-box1');
    const box2 = document.getElementById('cv-box2');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Reset all states
        blurOverlay.style.opacity = '0';
        cannyOverlay.style.opacity = '0';
        box1.style.opacity = '0';
        box2.style.opacity = '0';
        scanline.style.opacity = '0';

        if (filter === 'orig') {
          statusText.textContent = 'RAW DATA INGESTED';
          statusText.style.color = 'var(--text)';
        } else if (filter === 'blur') {
          blurOverlay.style.opacity = '1';
          statusText.textContent = 'GAUSSIAN BLUR KERNEL (5x5) APPLIED';
          statusText.style.color = 'var(--text-2)';
        } else if (filter === 'canny') {
          cannyOverlay.style.opacity = '1';
          scanline.style.opacity = '1';
          statusText.textContent = 'EDGES DETECTED VIA CANNY PROCESS';
          statusText.style.color = 'var(--signal-grn)';
        } else if (filter === 'bbox') {
          box1.style.opacity = '1';
          box2.style.opacity = '1';
          statusText.textContent = 'BOUNDING BOX ANNOTATIONS VERIFIED (95%+ ACCURACY)';
          statusText.style.color = 'var(--accent)';
        }
      });
    });
  }
}

// =========================================================
// 9. Projects Grid
// =========================================================
function initProjects() {
  // Render Featured Projects
  const featuredContainer = document.getElementById('featured-projects');
  const featData = portfolioData.FEATURED_PROJECTS;
  featuredContainer.innerHTML = '';

  featData.forEach(p => {
    const card = document.createElement('article');
    card.className = 'featured-card reveal';
    
    // Custom visuals matching projects
    let visualHtml = '';
    if (p.image) {
      visualHtml = `<img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`;
    } else if (p.id === 'cv-handwriting') {
      visualHtml = `
        <svg viewBox="0 0 300 200" width="100%" height="100%">
          <rect width="300" height="200" fill="var(--bg)" rx="8" />
          <g stroke="var(--line-soft)" stroke-width="0.5">
            <line x1="0" y1="50" x2="300" y2="50" />
            <line x1="0" y1="100" x2="300" y2="100" />
            <line x1="0" y1="150" x2="300" y2="150" />
            <line x1="75" y1="0" x2="75" y2="200" />
            <line x1="150" y1="0" x2="150" y2="200" />
            <line x1="225" y1="0" x2="225" y2="200" />
          </g>
          <!-- Simulated CV scanner box -->
          <rect x="75" y="50" width="150" height="100" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 4" />
          <!-- Neural Net connections in BG -->
          <circle cx="150" cy="100" r="28" fill="none" stroke="var(--line)" stroke-width="1" />
          <circle cx="150" cy="100" r="14" fill="none" stroke="var(--line-soft)" stroke-width="1" />
          <!-- Drawn path digit outline -->
          <path d="M120 70 C 140 60, 170 70, 160 100 C 150 120, 140 130, 150 140 C 160 150, 180 130, 180 110" fill="none" stroke="var(--signal-grn)" stroke-width="2.5" stroke-linecap="round" />
          <text x="82" y="66" font-family="var(--f-mono)" font-size="8" fill="var(--accent)">ROI_01 [CONF=0.89]</text>
        </svg>
      `;
    } else {
      visualHtml = `
        <svg viewBox="0 0 300 200" width="100%" height="100%">
          <rect width="300" height="200" fill="var(--bg)" rx="8" />
          <!-- Chart mockup grids -->
          <line x1="40" y1="150" x2="260" y2="150" stroke="var(--line)" stroke-width="1" />
          <line x1="40" y1="110" x2="260" y2="110" stroke="var(--line-soft)" stroke-width="0.5" />
          <line x1="40" y1="70" x2="260" y2="70" stroke="var(--line-soft)" stroke-width="0.5" />
          <!-- Graph bars -->
          <rect x="60" y="90" width="24" height="60" fill="var(--line-soft)" rx="2" />
          <rect x="110" y="60" width="24" height="90" fill="var(--line-soft)" rx="2" />
          <rect x="160" y="75" width="24" height="75" fill="var(--accent)" rx="2" />
          <rect x="210" y="40" width="24" height="110" fill="var(--signal-grn)" rx="2" />
          <!-- Floating analytical metrics details -->
          <circle cx="210" cy="40" r="4" fill="var(--signal-grn)" />
          <path d="M 210 40 L 230 20 L 260 20" fill="none" stroke="var(--signal-grn)" stroke-width="0.75" />
          <text x="234" y="14" font-family="var(--f-mono)" font-size="7" fill="var(--signal-grn)">+40% PROD KPI</text>
        </svg>
      `;
    }
 
    const bulletItems = p.bullets.map(b => `<li>${b}</li>`).join('');
 
    card.innerHTML = `
      <div class="feat-info">
        <span class="feat-tech">${p.tech}</span>
        <h3>${p.title}</h3>
        <span class="serif" style="font-size: 16px; color: var(--text-2); display: block; margin-top: -4px;">${p.tagline}</span>
        <p class="feat-desc">${p.desc}</p>
        <ul class="feat-bullets">
          ${bulletItems}
        </ul>
        ${p.github ? `
          <div class="feat-actions">
            <a class="btn" href="${p.github}" target="_blank" rel="noopener noreferrer">
              GitHub <span class="arr">→</span>
            </a>
          </div>
        ` : ''}
      </div>
      <div class="feat-visual" style="${p.image ? `aspect-ratio: ${p.aspectRatio || '1024 / 572'}; width: 100%;` : ''}">
        ${visualHtml}
      </div>
    `;
    featuredContainer.appendChild(card);
  });

  // Render Other Projects Grid
  const gridContainer = document.getElementById('other-projects');
  const projData = portfolioData.PROJECTS;
  gridContainer.innerHTML = '';

  projData.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    
    const tagSpans = p.tags.map(t => `<span>${t}</span>`).join('');
    
    card.innerHTML = `
      <div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>
      <div class="project-footer">
        <div class="project-tags">
          ${tagSpans}
        </div>
        ${p.github ? `
          <a class="btn" href="${p.github}" target="_blank" rel="noopener noreferrer">
            GitHub <span class="arr">→</span>
          </a>
        ` : ''}
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

// =========================================================
// 10. Skills Competencies Categories
// =========================================================
function initSkills() {
  const container = document.getElementById('skills-categories');
  container.innerHTML = '';

  // Classify skills from ticker / details into categories
  const categories = [
    {
      title: "LANGUAGES & BASES",
      skills: ["Python", "SQL (Structured Query)", "MS Excel (VLOOKUP)", "DAX / Formulas"]
    },
    {
      title: "DATA ARCHITECTURE",
      skills: ["Pandas & NumPy", "EDA (Exploratory Data)", "Data Cleaning / QA", "Feature Engineering"]
    },
    {
      title: "PREDICTIVE INTELLIGENCE",
      skills: ["Scikit-learn Models", "Regression Forecasts", "Classification Pipeline", "Clustering Algorithms"]
    },
    {
      title: "COGNITIVE AI & SYSTEMS",
      skills: ["Computer Vision (OpenCV)", "CNN Outlines / Architectures", "Gemini API Integrations", "Multimodal RAG Pipelines", "AI Vibe Coding (Web Apps)"]
    }
  ];

  categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'skills-category reveal';
    
    let skillsRows = '';
    cat.skills.forEach(s => {
      skillsRows += `
        <div class="skill-item">
          <span class="name">${s}</span>
        </div>
      `;
    });

    div.innerHTML = `
      <h4>${cat.title}</h4>
      <div class="skills-list">
        ${skillsRows}
      </div>
    `;
    container.appendChild(div);
  });
}

// =========================================================
// 11. Experiences and Education Timelines
// =========================================================
function initTimeline() {
  // Render Experience
  const expContainer = document.getElementById('work-timeline');
  const expData = portfolioData.EXPERIENCE;
  expContainer.innerHTML = '';

  expData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    
    const bulletsHtml = item.bullets.map(b => `<li>${b}</li>`).join('');
    
    div.innerHTML = `
      <div class="header-row">
        <h3>${item.role}</h3>
        <span class="period">${item.period}</span>
      </div>
      <span class="org">${item.company} · ${item.location}</span>
      <ul class="desc-list">
        ${bulletsHtml}
      </ul>
    `;
    expContainer.appendChild(div);
  });

  // Render Education
  const eduContainer = document.getElementById('education-timeline');
  const eduData = portfolioData.EDUCATION;
  eduContainer.innerHTML = '';

  eduData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    div.innerHTML = `
      <div class="header-row">
        <h3>${item.degree}</h3>
        <span class="period">${item.period}</span>
      </div>
      <span class="org">${item.school} · ${item.location}</span>
    `;
    eduContainer.appendChild(div);
  });
}

// =========================================================
// 12. Certifications Cards
// =========================================================
function initCertificates() {
  const container = document.getElementById('certs-container');
  const certsData = portfolioData.CERTIFICATIONS;
  container.innerHTML = '';

  certsData.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.innerHTML = `
      <span class="cert-name">${cert.name}</span>
      <span class="cert-issuer">${cert.issuer}</span>
    `;
    container.appendChild(card);
  });
}

// =========================================================
// 13. Contact Panel Details and Actions
// =========================================================
function initContact() {
  const data = portfolioData.SITE;
  
  // Set contact links
  const emailLink = document.getElementById('email-link');
  emailLink.href = `mailto:${data.email}`;
  emailLink.textContent = data.email;

  const linkedinLink = document.getElementById('linkedin-link');
  linkedinLink.href = data.linkedin;
  linkedinLink.textContent = data.linkedin.replace('https://www.', '');

  document.getElementById('location-val').textContent = data.location;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Handle Form submit simulation
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Message <span class="arr">...</span>';

    fetch("https://formsubmit.co/ajax/sathwikkarangula2423@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(data => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      statusMsg.className = 'form-status success';
      statusMsg.textContent = '✓ Message sent successfully! Thank you for reaching out, Sathwik will reply soon.';
      statusMsg.style.display = 'block';
      
      form.reset();

      setTimeout(() => {
        statusMsg.style.display = 'none';
      }, 6000);
    })
    .catch(error => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      statusMsg.className = 'form-status error';
      statusMsg.textContent = '✗ Failed to send message. Please try again or email directly.';
      statusMsg.style.display = 'block';

      setTimeout(() => {
        statusMsg.style.display = 'none';
      }, 6000);
    });
  });
}

// =========================================================
// 14. Reveal on Scroll (Intersection Observer Hook)
// =========================================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    // Fail-safe for older engines
    reveals.forEach(el => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px' // Offset triggers slightly
  });

  reveals.forEach(el => observer.observe(el));
}

// =========================================================
// 15. Neural Network Background Animation (Canvas Particles)
// =========================================================
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const hero = document.querySelector('.hero');

  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrameId = null;

  // Mouse tracking coordinates
  let mouse = { x: null, y: null, active: false };

  const resize = () => {
    width = canvas.width = hero.clientWidth;
    height = canvas.height = hero.clientHeight;
    initParticles();
  };

  const initParticles = () => {
    particles = [];
    // Particle density threshold
    const count = Math.min(Math.floor((width * height) / 18000), 55);
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.25 + 0.75
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    // Read colors from root stylesheet variables
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    
    // Draw connections and dots
    const nodeColor = isDark ? 'rgba(217, 119, 87, 0.22)' : 'rgba(96, 18, 50, 0.12)';
    const lineColorRaw = isDark ? '217, 119, 87' : '96, 18, 50';

    const maxDistance = 115;
    const count = particles.length;

    for (let i = 0; i < count; i++) {
      const p1 = particles[i];
      
      // Connect nodes to neighboring nodes
      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.15;
          ctx.strokeStyle = `rgba(${lineColorRaw}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Connect nodes to mouse hover position
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseMaxDistance = 140;

        if (dist < mouseMaxDistance) {
          const alpha = (1 - dist / mouseMaxDistance) * 0.22;
          ctx.strokeStyle = `rgba(${lineColorRaw}, ${alpha})`;
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Render dot particle
      ctx.fillStyle = nodeColor;
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.r, 0, Math.PI * 2);
      ctx.fill();

      // Motion physics
      p1.x += p1.vx;
      p1.y += p1.vy;

      // Bounce mechanics
      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;
    }

    animationFrameId = requestAnimationFrame(draw);
  };

  // Bind hover actions to the hero wrapper element
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  hero.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  window.addEventListener('resize', resize);
  
  resize();
  draw();
}
