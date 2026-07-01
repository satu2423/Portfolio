(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p={SITE:{location:"Hyderabad, India",timezone:"Asia/Kolkata",timezoneLabel:"IST",email:"sathwikkarangula2423@gmail.com",linkedin:"https://www.linkedin.com/in/karangula-sathwik"},NAV:[{idx:"01",label:"Top",href:"#top"},{idx:"02",label:"Stack",href:"#stack"},{idx:"03",label:"Playground",href:"#playground"},{idx:"04",label:"Projects",href:"#projects"},{idx:"05",label:"Skills",href:"#skills"},{idx:"06",label:"Experience",href:"#experience"},{idx:"07",label:"Certificates",href:"#certificates"},{idx:"08",label:"Contact",href:"#contact"}],HERO:{pills:[{label:"Available for internships",dot:"grn"},{label:"Hyderabad, India · UTC+5:30",dot:null},{label:"ML · Python · SQL",dot:"amber"}],title:[{t:"Data Science & ML  ",serif:!0},{t:"built for ",serif:!0},{t:"real impact.",stroke:!0}],tag:"I am an aspiring Data Scientist and Analyst with a strong foundation in Computer Science, driven by the belief that meaningful insights emerge when data meets curiosity, analytical thinking, and real-world problem solving. I focus on building robust ML models, data pipelines, and clear visualization dashboards that bridge theory and practical application.",meta:[{k:"ROLE",v:"Data Scientist & Analyst"},{k:"BASE",v:"Hyderabad, India"},{k:"ACADEMICS",v:"B.Tech CSE (2023 – 2027)"},{k:"INTERESTS",v:"ML DL SQL  Analytics"}]},PHILOSOPHY:{body:"I believe that meaningful insights emerge when data meets curiosity, analytical thinking, and real-world problem solving. Modern AI libraries, cloud APIs, and automation tools serve as infrastructure, but they do not replace rigorous reasoning. In the pipelines I build, data integrity, statistical validity, and clarity of visualization are the core pillars. Being wrong in data interpretation leads to real-world consequences.",kicker:"Leverage statistical modeling without losing the plot."},TICKER:["Python Programming","SQL / Databases","Scikit-Learn ML","Computer Vision / OpenCV","Generative AI / Vertex AI","Gemini API integration","AI Vibe Coding","Multimodal RAG","Pandas & NumPy","Exploratory Data Analysis","Power BI Dashboards","Statistical Modeling"],STACK:[{num:"L08",name:"Generative AI & Cloud APIs",sub:"Gemini API · Vertex AI · AI Vibe Coding · Streamlit"},{num:"L07",name:"Deep Learning & CV",sub:"CNN Outlines · Image Preprocessing · OpenCV"},{num:"L06",name:"Machine Learning Core",sub:"Scikit-learn · Regression · Classification · Clustering"},{num:"L05",name:"Business Intelligence",sub:"Power BI · Dynamic Dashboards · KPI Tracking · Excel"},{num:"L04",name:"Data Processing & ETL",sub:"Pandas · NumPy · Data Cleaning · Feature Engineering"},{num:"L03",name:"Database & Querying",sub:"Structured Query Language (SQL) · Data Profiling"},{num:"L02",name:"Environments & Runtimes",sub:"Jupyter Notebooks · Google Colab · Anaconda"},{num:"L01",name:"Math & Statistics Core",sub:"EDA · Descriptive Stats · Probability · Validation"}],PLAYGROUNDS:{forecaster:{title:"Predictive Forecasting Playground",subtitle:"Regression-based ML Model (R² = 0.87) Simulator",description:"Adjust variables on the left to run an live client-side regression model that forecasts sales revenue and visualizes prediction intervals."},computerVision:{title:"Computer Vision & Image Specialist Tool",subtitle:"Edge Detection & Annotation Pipeline",description:"Simulate OpenCV image preprocessing filters and annotation grids. Simulates the annotation review workflow performed at Colosseum CQ Solutions."}},FEATURED_PROJECTS:[{id:"hyd-flood-safety",title:"Hyderabad Flood Safety Intelligence App",tech:"Keras · Python · Flask · Leaflet.js",tagline:"Real-time flood vulnerability deep learning assessment",desc:"Built a deep learning flood risk mapping app for Hyderabad. Leveraged static environmental risk factors (elevation, drainage density, population) and integrated real-time precipitation streams from OpenWeather API into a pre-trained Keras model to output live vulnerability scores.",bullets:["Trained Keras neural network for risk assessment based on geospatial overlays.","Integrated live OpenWeather API rainfall rates for dynamic mapping updates.","Built an interactive Leaflet JS map front-end displaying real-time safety scores."]},{id:"celestia-health",title:"Celestia Health App",tech:"Three.js · Python · OpenCV · AI APIs",tagline:"3D Self-Diagnosis & AI-powered Pill Identification",desc:"Developed a comprehensive digital healthcare tool. Features an interactive 3D human body anatomy symptom selector powered by local AI diagnostics, alongside an image-classification pipeline that identifies pills from photos using computer vision, prioritizing Indian medications.",bullets:["Designed interactive 3D anatomical body part selector using Three.js.","Integrated neural-network computer vision module to classify pill photos.","Optimized local healthcare retrieval queries prioritizing Indian datasets."]},{id:"cv-handwriting",title:"Handwriting Recognition System",tech:"Python · OpenCV · Scikit-learn · CNN",tagline:"Computer Vision Pipeline with 89% accuracy",desc:"Built a computer vision pipeline for handwritten character recognition achieving 89% accuracy on 10,000+ samples. Applied image preprocessing, data augmentation, and convolutional feature extraction to improve model robustness under varying lighting and pen widths.",bullets:["Achieved 89% recognition accuracy on 10k samples.","Engineered robust CV filters to normalize pen strokes.","Implemented image augmentations (rotation, scaling) to reduce overfitting."]},{id:"bi-sales-dashboard",title:"Sales Performance Dashboard",tech:"Power BI · Excel · Python (Pandas)",tagline:"6-Page Interactive Executive Dashboard",desc:"Designed an interactive Power BI dashboard tracking revenue trends, regional performance, and product-level KPIs for executive stakeholders. Automated data cleaning and transformation with Pandas, reducing data prep time by 40% across 15,000+ rows.",bullets:["Designed 6 interactive tabs mapping revenue, sales pipelines, and regional metrics.","Created custom DAX metrics for YoY growth and seasonal trends.","Cut monthly data preparation time from 5 hours to 3 minutes via Python script."]}],PROJECTS:[{title:"Smart Product Pricing Challenge",desc:"Developed an e-commerce price prediction model for a dataset of 75,000 products during the Amazon ML Challenge 2025. Extracted text features from catalog descriptors and integrated image link metadata to build a regression-based price prediction solution.",tags:["Python","NLP","Scikit-Learn","Regression"]},{title:"Local Artisans Place",desc:"Created a modern marketplace platform connecting local creators with patrons. Features custom artisan product listings, Framer Motion animations, Tailwind styling, and an AI conversational shopping assistant.",tags:["React 18","Tailwind CSS","Framer Motion","AI Assistant"]},{title:"Predictive Forecasting Model",desc:"Developed a regression-based ML model (R² = 0.87) with feature engineering and 5-fold cross-validation. Reduced RMSE by 22% over baseline through iterative model selection and ensemble techniques.",tags:["Python","Scikit-learn","Pandas","Matplotlib"]},{title:"Generative AI Prototype",desc:"Developed a Gen AI application using Google Vertex AI and Gemini APIs. Applied Imagen for image generation and built a Multimodal Retrieval-Augmented Generation (RAG) system running on Streamlit.",tags:["Vertex AI","Gemini API","Streamlit","RAG"]}],EXPERIENCE:[{role:"AI Image Annotation Specialist",company:"Colosseum CQ Solutions Pvt. Ltd",location:"Hyderabad, India",period:"Mar 2026 – Present (3 months)",bullets:["Quality-checked 1,000+ annotated images for computer vision training pipelines.","Ensured bounding boxes and segmentation masks met ML modeling accuracy standards above 95%."]},{role:"Data Analyst Intern",company:"AICTE VOIS",location:"Remote",period:"Sep 2025 – Oct 2025 (2 months)",bullets:["Completed 2 end-to-end data analysis/ML projects, scrubbing and analyzing 5,000+ records in Python and Google Colab.","Engineered Matplotlib and Seaborn visualizations to surface trends, reducing manual reporting cycles by ~30%."]},{role:"Data Visualisation Analyst",company:"Tata Group (Forage Virtual)",location:"Virtual",period:"Aug 2025",bullets:["Built interactive Power BI dashboards tracking 8+ KPIs for corporate executive stakeholders.","Identified appropriate chart paradigms to translate complex multi-variable data into easily digestible executive summaries."]},{role:"Data Mining Analyst",company:"UptoSkills",location:"Remote",period:"May 2026 – Present (1 month)",bullets:["Extracted, mined, and processed structured datasets for analysis.","Prepared analytical reports outlining key data distributions and quality metrics."]}],EDUCATION:[{degree:"B.Tech in Computer Science",school:"Pallavi Engineering College",location:"Hyderabad, India",period:"2023 – 2027"},{degree:"Intermediate – MPC",school:"Sri Chaitanya College of Education (TSBIE)",location:"Hyderabad, India",period:"2021 – 2023"},{degree:"Secondary School Certificate (SSC)",school:"DR.K.K.R Gowtham High School",location:"Hyderabad, India",period:"2020"}],CERTIFICATIONS:[{name:"Gen AI Academy (Vertex AI, Gemini APIs, RAG)",issuer:"Google Cloud & Hack2Skill"},{name:"Structured Query Language (SQL) – 140 Hours Hands-on",issuer:"Sri Sathya Sai Seva Organisations"},{name:"Data Analysis with Python – 5-Day Crash Course",issuer:"Innomatics Research Labs"},{name:"Getting Started with Artificial Intelligence",issuer:"IBM SkillsBuild"},{name:"Emerging Technologies (AI, ML, Deep Learning)",issuer:"Edunet Foundation & SAP"},{name:"Data Analytics Job Simulation",issuer:"Deloitte (Forage)"},{name:"Data Analytics – Skill Up",issuer:"GeeksforGeeks"},{name:"McKinsey Forward Program",issuer:"McKinsey.org"},{name:"Power BI Workshop",issuer:"OfficeMaster"},{name:"AI Skills Passport",issuer:"EY & Microsoft"}]};document.addEventListener("DOMContentLoaded",()=>{S(),L(),A(),w(),T(),P(),D(),M(),B(),R(),N(),O(),$(),H(),G()});function S(){const a=document.createElement("a");a.href="#",a.id="theme-toggle-btn",a.setAttribute("aria-label","Toggle Theme");const n=document.createElement("span");n.className="idx",n.id="theme-toggle-idx";const i=document.createElement("span");i.id="theme-toggle-text",a.appendChild(n),a.appendChild(i),document.getElementById("main-nav").appendChild(a);const e=s=>{document.documentElement.setAttribute("data-theme",s);const l=s==="dark";n.textContent=l?"DK":"LT",i.textContent=l?"Dark":"Light";const c=document.getElementById("footer-theme-display");c&&(c.textContent=l?"Dark":"Light")};let t=localStorage.getItem("ks.theme")||"dark";e(t),a.addEventListener("click",s=>{s.preventDefault(),t=t==="dark"?"light":"dark",localStorage.setItem("ks.theme",t),e(t)})}function L(){document.getElementById("clock-time");const a=p.SITE.timezone,n=p.SITE.timezoneLabel,i=new Intl.DateTimeFormat("en-GB",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),o=()=>{const e=i.format(new Date),t=document.getElementById("ist-clock-label");t&&(t.innerHTML=`<span class="dot amber"></span> Hyderabad · ${e} ${n}`)};o(),setInterval(o,1e3)}function A(){const a=document.getElementById("main-nav");p.NAV.forEach(e=>{const t=document.createElement("a");t.href=e.href,t.innerHTML=`<span class="idx">${e.idx}</span><span>${e.label}</span>`,t.addEventListener("click",()=>{document.querySelectorAll(".nav-links a").forEach(l=>l.classList.remove("active")),t.classList.add("active"),a.classList.contains("open")&&a.classList.remove("open")});const s=document.getElementById("theme-toggle-btn");a.insertBefore(t,s)});const i=document.querySelector(".topnav-row"),o=document.createElement("button");o.className="nav-menu-btn",o.innerHTML="✦",o.setAttribute("aria-label","Open Navigation"),i.appendChild(o),o.addEventListener("click",()=>{a.classList.toggle("open"),o.textContent=a.classList.contains("open")?"✕":"✦"})}function w(){const a=p.HERO,n=document.getElementById("hero-status-row");n.innerHTML="",a.pills.forEach(s=>{const l=document.createElement("span");if(l.className="pill",s.dot){const u=document.createElement("span");u.className=`dot ${s.dot==="amber"?"amber":""}`,l.appendChild(u)}const c=document.createTextNode(s.label);l.appendChild(c),n.appendChild(l)});const i=document.createElement("span");i.className="pill",i.id="ist-clock-label",i.style.fontVariantNumeric="tabular-nums",n.appendChild(i);const o=document.getElementById("hero-title");o.innerHTML="",a.title.forEach(s=>{const l=document.createElement("span");s.serif&&(l.className="serif"),s.stroke&&(l.className="stroke"),l.textContent=s.t,o.appendChild(l)}),document.getElementById("hero-description").textContent=a.tag;const e=document.getElementById("hero-card-widget");e.innerHTML=`
    <div class="photo-fallback" aria-hidden="true">
      <svg viewBox="0 0 200 200" width="100%">
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
  `;const t=e.querySelector(".meta");a.meta.forEach(s=>{const l=document.createElement("div");l.className="row",l.innerHTML=`<span class="k">${s.k}</span><span class="v">${s.v}</span>`,t.appendChild(l)})}function T(){const a=p.PHILOSOPHY;document.getElementById("phil-kicker").innerHTML=`<span class="serif">${a.kicker}</span>`,document.getElementById("phil-body").textContent=a.body}function P(){const a=document.getElementById("skills-ticker"),n=p.TICKER,i=[...n,...n,...n,...n];a.innerHTML="",i.forEach(o=>{const e=document.createElement("span");e.textContent=o,a.appendChild(e)})}function D(){const a=document.getElementById("stack-layers"),n=p.STACK;a.innerHTML="",n.forEach(i=>{const o=document.createElement("div");o.className="stack-layer",o.innerHTML=`
      <span class="num">${i.num}</span>
      <span class="name">${i.name}</span>
      <span class="sub">${i.sub}</span>
    `,a.appendChild(o)})}function M(){const a=document.querySelectorAll(".tab-btn");document.getElementById("play-container"),a.forEach(n=>{n.addEventListener("click",()=>{a.forEach(i=>i.classList.remove("active")),n.classList.add("active"),C(n.dataset.play)})}),C("forecaster")}function C(a){const n=document.getElementById("play-container");if(n.innerHTML="",a==="forecaster"){const i=p.PLAYGROUNDS.forecaster;n.innerHTML=`
      <div class="play-controls">
        <div class="widget-title-area">
          <h3>${i.title}</h3>
          <p>${i.subtitle}</p>
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
        
        <p>${i.description}</p>
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
        <pre class="code-pre"><code><span class="code-comment"># ${i.subtitle}</span>
<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd
<span class="code-keyword">from</span> sklearn.linear_model <span class="code-keyword">import</span> LinearRegression

df = pd.read_csv(<span class="code-str">"sales_performance.csv"</span>)
X = df[[<span class="code-str">'marketing_spend'</span>, <span class="code-str">'active_leads'</span>, <span class="code-str">'seasonality'</span>]]
y = df[<span class="code-str">'revenue'</span>]

model = LinearRegression().fit(X, y)
<span class="code-keyword">print</span>(f<span class="code-str">"Model R^2: {model.score(X, y):.2f}"</span>) <span class="code-comment"># Outputs 0.87</span></code></pre>
      </div>
    `;const o=()=>{const e=parseInt(document.getElementById("slider-spend").value),t=parseInt(document.getElementById("slider-leads").value),s=parseFloat(document.getElementById("slider-season").value);document.getElementById("spend-val").textContent=`$${e.toLocaleString()}`,document.getElementById("leads-val").textContent=t,document.getElementById("season-val").textContent=`${s.toFixed(1)}x`;const l=14.2,c=265,u=12e3,m=e*.22*l+t*.23*c+u*.9*s,d=e*.26*l+t*.25*c+u*1*s,v=e*.2*l+t*.22*c+u*.85*s,b=e*.32*l+t*.3*c+u*1.25*s,I=m+d+v+b,x=Math.max(m,d,v,b,1),r=(h,g,y)=>{const f=document.getElementById(g),E=document.getElementById(h),k=Math.min(y/x*100,100);f.style.height=`${k}%`,E.textContent=`$${Math.round(y/1e3)}k`};r("chart-q1-val","chart-q1-bar",m),r("chart-q2-val","chart-q2-bar",d),r("chart-q3-val","chart-q3-bar",v),r("chart-q4-val","chart-q4-bar",b),document.getElementById("projected-rev").textContent=`$${Math.round(I).toLocaleString()}`};["slider-spend","slider-leads","slider-season"].forEach(e=>{document.getElementById(e).addEventListener("input",o)}),o()}else if(a==="cv"){const i=p.PLAYGROUNDS.computerVision;n.innerHTML=`
      <div class="play-controls">
        <div class="widget-title-area">
          <h3>${i.title}</h3>
          <p>${i.subtitle}</p>
        </div>
        
        <div class="cv-options">
          <button class="cv-btn active" id="cv-btn-orig" data-filter="orig">1. Original Image</button>
          <button class="cv-btn" id="cv-btn-blur" data-filter="blur">2. Gaussian Blur</button>
          <button class="cv-btn" id="cv-btn-canny" data-filter="canny">3. Canny Edges</button>
          <button class="cv-btn" id="cv-btn-bbox" data-filter="bbox">4. Draw Bounding Boxes</button>
        </div>
        
        <p>${i.description}</p>
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
        <pre class="code-pre"><code><span class="code-comment"># ${i.subtitle}</span>
<span class="code-keyword">import</span> cv2

<span class="code-keyword">def</span> preprocess(img_path):
    img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
    blurred = cv2.GaussianBlur(img, (5, 5), 0)
    edges = cv2.Canny(blurred, 50, 150)
    <span class="code-keyword">return</span> edges</code></pre>
      </div>
    `;const o=document.querySelectorAll(".cv-btn");document.getElementById("cv-canvas");const e=document.getElementById("cv-scanline"),t=document.getElementById("cv-status"),s=document.getElementById("cv-blur-overlay"),l=document.getElementById("cv-canny-overlay"),c=document.getElementById("cv-box1"),u=document.getElementById("cv-box2");o.forEach(m=>{m.addEventListener("click",()=>{o.forEach(v=>v.classList.remove("active")),m.classList.add("active");const d=m.dataset.filter;s.style.opacity="0",l.style.opacity="0",c.style.opacity="0",u.style.opacity="0",e.style.opacity="0",d==="orig"?(t.textContent="RAW DATA INGESTED",t.style.color="var(--text)"):d==="blur"?(s.style.opacity="1",t.textContent="GAUSSIAN BLUR KERNEL (5x5) APPLIED",t.style.color="var(--text-2)"):d==="canny"?(l.style.opacity="1",e.style.opacity="1",t.textContent="EDGES DETECTED VIA CANNY PROCESS",t.style.color="var(--signal-grn)"):d==="bbox"&&(c.style.opacity="1",u.style.opacity="1",t.textContent="BOUNDING BOX ANNOTATIONS VERIFIED (95%+ ACCURACY)",t.style.color="var(--accent)")})})}}function B(){const a=document.getElementById("featured-projects"),n=p.FEATURED_PROJECTS;a.innerHTML="",n.forEach(e=>{const t=document.createElement("article");t.className="featured-card reveal";let s="";e.id==="cv-handwriting"?s=`
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
      `:s=`
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
      `;const l=e.bullets.map(c=>`<li>${c}</li>`).join("");t.innerHTML=`
      <div class="feat-info">
        <span class="feat-tech">${e.tech}</span>
        <h3>${e.title}</h3>
        <span class="serif" style="font-size: 16px; color: var(--text-2); display: block; margin-top: -4px;">${e.tagline}</span>
        <p class="feat-desc">${e.desc}</p>
        <ul class="feat-bullets">
          ${l}
        </ul>
      </div>
      <div class="feat-visual">
        ${s}
      </div>
    `,a.appendChild(t)});const i=document.getElementById("other-projects"),o=p.PROJECTS;i.innerHTML="",o.forEach(e=>{const t=document.createElement("div");t.className="project-card reveal";const s=e.tags.map(l=>`<span>${l}</span>`).join("");t.innerHTML=`
      <div>
        <h4>${e.title}</h4>
        <p>${e.desc}</p>
      </div>
      <div class="project-tags">
        ${s}
      </div>
    `,i.appendChild(t)})}function R(){const a=document.getElementById("skills-categories");a.innerHTML="",[{title:"LANGUAGES & BASES",skills:["Python","SQL (Structured Query)","MS Excel (VLOOKUP)","DAX / Formulas"]},{title:"DATA ARCHITECTURE",skills:["Pandas & NumPy","EDA (Exploratory Data)","Data Cleaning / QA","Feature Engineering"]},{title:"PREDICTIVE INTELLIGENCE",skills:["Scikit-learn Models","Regression Forecasts","Classification Pipeline","Clustering Algorithms"]},{title:"COGNITIVE AI & SYSTEMS",skills:["Computer Vision (OpenCV)","CNN Outlines / Architectures","Gemini API Integrations","Multimodal RAG Pipelines","AI Vibe Coding (Web Apps)"]}].forEach(i=>{const o=document.createElement("div");o.className="skills-category reveal";let e="";i.skills.forEach(t=>{e+=`
        <div class="skill-item">
          <span class="name">${t}</span>
          <span class="line-dot"></span>
          <span class="mono" style="color: var(--accent); font-size: 11px;">PRO</span>
        </div>
      `}),o.innerHTML=`
      <h4>${i.title}</h4>
      <div class="skills-list">
        ${e}
      </div>
    `,a.appendChild(o)})}function N(){const a=document.getElementById("work-timeline"),n=p.EXPERIENCE;a.innerHTML="",n.forEach(e=>{const t=document.createElement("div");t.className="timeline-item reveal";const s=e.bullets.map(l=>`<li>${l}</li>`).join("");t.innerHTML=`
      <div class="header-row">
        <h3>${e.role}</h3>
        <span class="period">${e.period}</span>
      </div>
      <span class="org">${e.company} · ${e.location}</span>
      <ul class="desc-list">
        ${s}
      </ul>
    `,a.appendChild(t)});const i=document.getElementById("education-timeline"),o=p.EDUCATION;i.innerHTML="",o.forEach(e=>{const t=document.createElement("div");t.className="timeline-item reveal",t.innerHTML=`
      <div class="header-row">
        <h3>${e.degree}</h3>
        <span class="period">${e.period}</span>
      </div>
      <span class="org">${e.school} · ${e.location}</span>
    `,i.appendChild(t)})}function O(){const a=document.getElementById("certs-container"),n=p.CERTIFICATIONS;a.innerHTML="",n.forEach(i=>{const o=document.createElement("div");o.className="cert-card reveal",o.innerHTML=`
      <span class="cert-name">${i.name}</span>
      <span class="cert-issuer">${i.issuer}</span>
    `,a.appendChild(o)})}function $(){const a=p.SITE,n=document.getElementById("email-link");n.href=`mailto:${a.email}`,n.textContent=a.email;const i=document.getElementById("linkedin-link");i.href=a.linkedin,i.textContent=a.linkedin.replace("https://www.",""),document.getElementById("location-val").textContent=a.location,document.getElementById("current-year").textContent=new Date().getFullYear();const o=document.getElementById("contact-form"),e=document.getElementById("form-status-msg");o.addEventListener("submit",t=>{t.preventDefault();const s=o.querySelector('button[type="submit"]'),l=s.innerHTML;s.disabled=!0,s.innerHTML='Sending Message <span class="arr">...</span>',setTimeout(()=>{s.disabled=!1,s.innerHTML=l,e.className="form-status success",e.textContent="✓ Message sent successfully! Thank you for reaching out, Sathwik will reply soon.",e.style.display="block",o.reset(),setTimeout(()=>{e.style.display="none"},6e3)},1500)})}function H(){const a=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)){a.forEach(i=>i.classList.add("in"));return}const n=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.add("in"),n.unobserve(o.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});a.forEach(i=>n.observe(i))}function G(){const a=document.getElementById("neural-canvas");if(!a)return;const n=a.getContext("2d"),i=document.querySelector(".hero");let o=0,e=0,t=[],s={x:null,y:null,active:!1};const l=()=>{o=a.width=i.clientWidth,e=a.height=i.clientHeight,c()},c=()=>{t=[];const m=Math.min(Math.floor(o*e/18e3),55);for(let d=0;d<m;d++)t.push({x:Math.random()*o,y:Math.random()*e,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:Math.random()*1.25+.75})},u=()=>{n.clearRect(0,0,o,e);const m=document.documentElement.getAttribute("data-theme")!=="light",d=m?"rgba(217, 119, 87, 0.22)":"rgba(96, 18, 50, 0.12)",v=m?"217, 119, 87":"96, 18, 50",b=115,I=t.length;for(let x=0;x<I;x++){const r=t[x];for(let h=x+1;h<I;h++){const g=t[h],y=r.x-g.x,f=r.y-g.y,E=Math.sqrt(y*y+f*f);if(E<b){const k=(1-E/b)*.15;n.strokeStyle=`rgba(${v}, ${k})`,n.lineWidth=.5,n.beginPath(),n.moveTo(r.x,r.y),n.lineTo(g.x,g.y),n.stroke()}}if(s.active&&s.x!==null&&s.y!==null){const h=r.x-s.x,g=r.y-s.y,y=Math.sqrt(h*h+g*g),f=140;if(y<f){const E=(1-y/f)*.22;n.strokeStyle=`rgba(${v}, ${E})`,n.lineWidth=.65,n.beginPath(),n.moveTo(r.x,r.y),n.lineTo(s.x,s.y),n.stroke()}}n.fillStyle=d,n.beginPath(),n.arc(r.x,r.y,r.r,0,Math.PI*2),n.fill(),r.x+=r.vx,r.y+=r.vy,(r.x<0||r.x>o)&&(r.vx*=-1),(r.y<0||r.y>e)&&(r.vy*=-1)}requestAnimationFrame(u)};i.addEventListener("mousemove",m=>{const d=i.getBoundingClientRect();s.x=m.clientX-d.left,s.y=m.clientY-d.top,s.active=!0}),i.addEventListener("mouseleave",()=>{s.active=!1}),window.addEventListener("resize",l),l(),u()}
