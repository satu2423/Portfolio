// portfolio-config.js — All site content as a global configuration object.
// Separating content from layout allows easy editing without writing code.

const portfolioData = {
  SITE: {
    name: "Karangula Sathwik",
    brand: "Karangula Sathwik",
    role: "Data Scientist & Analyst",
    location: "Hyderabad, India",
    availability: "Open to internships · Q3 2026",
    timezone: "Asia/Kolkata", // Used for the live clock
    timezoneLabel: "IST",
    email: "sathwikkarangula2423@gmail.com",
    linkedin: "https://www.linkedin.com/in/karangula-sathwik-1796332a5/",
    github: "https://github.com/karangula-sathwik" // Fallback placeholder or actual github
  },

  NAV: [
    { idx: "01", label: "Top", href: "#top" },
    { idx: "02", label: "Stack", href: "#stack" },
    { idx: "03", label: "Playground", href: "#playground" },
    { idx: "04", label: "Projects", href: "#projects" },
    { idx: "05", label: "Skills", href: "#skills" },
    { idx: "06", label: "Experience", href: "#experience" },
    { idx: "07", label: "Certificates", href: "#certificates" },
    { idx: "08", label: "Contact", href: "#contact" }
  ],

  HERO: {
    photo: "./profile.jpg",
    pills: [
      { label: "Available for internships", dot: "grn" },
      { label: "Hyderabad, India · UTC+5:30", dot: null },
      { label: "ML · Python · SQL", dot: "amber" }
    ],
    // Headline split for mixed typography rendering (sans + serif italic + outline)
    title: [
      { t: "Data Science & ML  ", serif: true },
      { t: "built for ", serif: true },
      { t: "real impact.", stroke: true }
    ],
    tag: "I am an aspiring Data Scientist and Analyst with a strong foundation in Computer Science, driven by the belief that meaningful insights emerge when data meets curiosity, analytical thinking, and real-world problem solving. I focus on building robust ML models, data pipelines, and clear visualization dashboards that bridge theory and practical application.",
    meta: [
      { k: "ROLE", v: "Data Scientist & Analyst" },
      { k: "BASE", v: "Hyderabad, India" },
      { k: "ACADEMICS", v: "B.Tech CSE (2023 – 2027)" },
      { k: "INTERESTS", v: "ML DL SQL  Analytics" }
    ]
  },

  PHILOSOPHY: {
    label: "Data-driven thinking · In practice",
    body: "I believe that meaningful insights emerge when data meets curiosity, analytical thinking, and real-world problem solving. Modern AI libraries, cloud APIs, and automation tools serve as infrastructure, but they do not replace rigorous reasoning. In the pipelines I build, data integrity, statistical validity, and clarity of visualization are the core pillars. Being wrong in data interpretation leads to real-world consequences.",
    kicker: "Leverage statistical modeling without losing the plot."
  },

  TICKER: [
    "Python Programming", "SQL / Databases", "Scikit-Learn ML", "Computer Vision / OpenCV",
    "Generative AI / Vertex AI", "Gemini API integration", "AI Vibe Coding", "Multimodal RAG",
    "Pandas & NumPy", "Exploratory Data Analysis", "Power BI Dashboards", "Statistical Modeling"
  ],

  STACK: [
    { num: "L08", name: "Generative AI & Cloud APIs", sub: "Gemini API · Vertex AI · AI Vibe Coding · Streamlit" },
    { num: "L07", name: "Deep Learning & CV", sub: "CNN Outlines · Image Preprocessing · OpenCV" },
    { num: "L06", name: "Machine Learning Core", sub: "Scikit-learn · Regression · Classification · Clustering" },
    { num: "L05", name: "Business Intelligence", sub: "Power BI · Dynamic Dashboards · KPI Tracking · Excel" },
    { num: "L04", name: "Data Processing & ETL", sub: "Pandas · NumPy · Data Cleaning · Feature Engineering" },
    { num: "L03", name: "Database & Querying", sub: "Structured Query Language (SQL) · Data Profiling" },
    { num: "L02", name: "Environments & Runtimes", sub: "Jupyter Notebooks · Google Colab · Anaconda" },
    { num: "L01", name: "Math & Statistics Core", sub: "EDA · Descriptive Stats · Probability · Validation" }
  ],

  // Interactive widgets definitions
  PLAYGROUNDS: {
    forecaster: {
      title: "Predictive Forecasting Playground",
      subtitle: "Regression-based ML Model (R² = 0.87) Simulator",
      description: "Adjust variables on the left to run an live client-side regression model that forecasts sales revenue and visualizes prediction intervals.",
      codeSnippet: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# 15,000+ rows of sales data cleaned in 40% less time
df = pd.read_csv("sales_performance.csv")
X = df[['marketing_spend', 'active_leads', 'seasonality']]
y = df['revenue']

# Model trained with 5-fold cross-validation
model = LinearRegression()
model.fit(X, y)
print(f"Model R^2 Score: {model.score(X, y):.2f}") # Returns 0.87`
    },
    computerVision: {
      title: "Computer Vision & Image Specialist Tool",
      subtitle: "Edge Detection & Annotation Pipeline",
      description: "Simulate OpenCV image preprocessing filters and annotation grids. Simulates the annotation review workflow performed at Colosseum CQ Solutions.",
      codeSnippet: `import cv2
import numpy as np

# CV Pipeline for handwritten character recognition
def preprocess_image(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    blurred = cv2.GaussianBlur(img, (5, 5), 0)
    edges = cv2.Canny(blurred, 50, 150)
    # Achieving 89% accuracy on character outlines
    return edges`
    }
  },

  // Highlighted Featured Projects
  FEATURED_PROJECTS: [
    {
      id: "hyd-flood-safety",
      title: "Hyderabad Flood Safety Intelligence App",
      image: "./hyderabad-flood.png",
      aspectRatio: "1024 / 495",
      tech: "Keras · Python · Flask · Leaflet.js",
      tagline: "Real-time flood vulnerability deep learning assessment",
      desc: "Built a deep learning flood risk mapping app for Hyderabad. Leveraged static environmental risk factors (elevation, drainage density, population) and integrated real-time precipitation streams from OpenWeather API into a pre-trained Keras model to output live vulnerability scores.",
      github: "https://github.com/satu2423/Urban_Flood_Safety_Intelligence",
      bullets: [
        "Trained Keras neural network for risk assessment based on geospatial overlays.",
        "Integrated live OpenWeather API rainfall rates for dynamic mapping updates.",
        "Built an interactive Leaflet JS map front-end displaying real-time safety scores."
      ]
    },
    {
      id: "celestia-health",
      title: "Celestia Health App",
      image: "./celestia-health.png",
      aspectRatio: "1024 / 491",
      tech: "Three.js · Python · OpenCV · AI APIs",
      tagline: "3D Self-Diagnosis & AI-powered Pill Identification",
      desc: "Developed a comprehensive digital healthcare tool. Features an interactive 3D human body anatomy symptom selector powered by local AI diagnostics, alongside an image-classification pipeline that identifies pills from photos using computer vision, prioritizing Indian medications.",
      bullets: [
        "Designed interactive 3D anatomical body part selector using Three.js.",
        "Integrated neural-network computer vision module to classify pill photos.",
        "Optimized local healthcare retrieval queries prioritizing Indian datasets."
      ]
    },
    {
      id: "cv-handwriting",
      title: "Handwriting Recognition System",
      image: "./handwriting-analyzer.png",
      aspectRatio: "1024 / 482",
      tech: "Python · OpenCV · Scikit-learn · CNN",
      tagline: "Computer Vision Pipeline with 89% accuracy",
      desc: "Built a computer vision pipeline for handwritten character recognition achieving 89% accuracy on 10,000+ samples. Applied image preprocessing, data augmentation, and convolutional feature extraction to improve model robustness under varying lighting and pen widths.",
      github: "https://github.com/satu2423/Handwriting-Recognition-System",
      bullets: [
        "Achieved 89% recognition accuracy on 10k samples.",
        "Engineered robust CV filters to normalize pen strokes.",
        "Implemented image augmentations (rotation, scaling) to reduce overfitting."
      ]
    },
    {
      id: "bi-sales-dashboard",
      title: "Sales Performance Dashboard",
      image: "./sales-dashboard.png",
      aspectRatio: "1024 / 572",
      tech: "Power BI · Excel · Python (Pandas)",
      tagline: "6-Page Interactive Executive Dashboard",
      desc: "Designed an interactive Power BI dashboard tracking revenue trends, regional performance, and product-level KPIs for executive stakeholders. Automated data cleaning and transformation with Pandas, reducing data prep time by 40% across 15,000+ rows.",
      bullets: [
        "Designed 6 interactive tabs mapping revenue, sales pipelines, and regional metrics.",
        "Created custom DAX metrics for YoY growth and seasonal trends.",
        "Cut monthly data preparation time from 5 hours to 3 minutes via Python script."
      ]
    }
  ],

  // Smaller grid of other projects
  PROJECTS: [
    {
      title: "Smart Product Pricing Challenge",
      desc: "Developed an e-commerce price prediction model for a dataset of 75,000 products during the Amazon ML Challenge 2025. Extracted text features from catalog descriptors and integrated image link metadata to build a regression-based price prediction solution.",
      tags: ["Python", "NLP", "Scikit-Learn", "Regression"]
    },

    {
      title: "Local Artisans Place",
      desc: "Created a modern marketplace platform connecting local creators with patrons. Features custom artisan product listings, Framer Motion animations, Tailwind styling, and an AI conversational shopping assistant.",
      github: "https://github.com/satu2423/Local-Artisans",
      tags: ["React 18", "Tailwind CSS", "Framer Motion", "AI Assistant"]
    },
    {
      title: "Predictive Forecasting Model",
      desc: "Developed a regression-based ML model (R² = 0.87) with feature engineering and 5-fold cross-validation. Reduced RMSE by 22% over baseline through iterative model selection and ensemble techniques.",
      tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
    },
    {
      title: "Generative AI Prototype",
      desc: "Developed a Gen AI application using Google Vertex AI and Gemini APIs. Applied Imagen for image generation and built a Multimodal Retrieval-Augmented Generation (RAG) system running on Streamlit.",
      tags: ["Vertex AI", "Gemini API", "Streamlit", "RAG"]
    }
  ],

  EXPERIENCE: [
    {
      role: "AI Image Annotation Specialist",
      company: "Colosseum CQ Solutions Pvt. Ltd",
      location: "Hyderabad, India",
      period: "Mar 2026 – Mar 2026 (1 month)",
      bullets: [
        "Quality-checked 1,000+ annotated images for computer vision training pipelines.",
        "Ensured bounding boxes and segmentation masks met ML modeling accuracy standards above 95%."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "AICTE VOIS",
      location: "Remote",
      period: "Sep 2025 – Oct 2025 (2 months)",
      bullets: [
        "Completed 2 end-to-end data analysis/ML projects, scrubbing and analyzing 5,000+ records in Python and Google Colab.",
        "Engineered Matplotlib and Seaborn visualizations to surface trends, reducing manual reporting cycles by ~30%."
      ]
    },
    {
      role: "Data Visualisation Analyst",
      company: "Tata Group (Forage Virtual)",
      location: "Virtual",
      period: "Aug 2025",
      bullets: [
        "Built interactive Power BI dashboards tracking 8+ KPIs for corporate executive stakeholders.",
        "Identified appropriate chart paradigms to translate complex multi-variable data into easily digestible executive summaries."
      ]
    },
    {
      role: "Data Mining Analyst",
      company: "UptoSkills",
      location: "Remote",
      period: "May 2026 – Present (1 month)",
      bullets: [
        "Extracted, mined, and processed structured datasets for analysis.",
        "Prepared analytical reports outlining key data distributions and quality metrics."
      ]
    }
  ],

  EDUCATION: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Pallavi Engineering College",
      location: "Hyderabad, India",
      period: "2023 – 2027"
    },
    {
      degree: "Intermediate – MPC",
      school: "Sri Chaitanya College of Education (TSBIE)",
      location: "Hyderabad, India",
      period: "2021 – 2023"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "DR.K.K.R Gowtham High School",
      location: "Hyderabad, India",
      period: "2020"
    }
  ],

  CERTIFICATIONS: [
    { name: "Gen AI Academy (Vertex AI, Gemini APIs, RAG)", issuer: "Google Cloud & Hack2Skill" },
    { name: "Structured Query Language (SQL) – 140 Hours Hands-on", issuer: "Sri Sathya Sai Seva Organisations" },
    { name: "Data Analysis with Python – 5-Day Crash Course", issuer: "Innomatics Research Labs" },
    { name: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild" },
    { name: "Emerging Technologies (AI, ML, Deep Learning)", issuer: "Edunet Foundation & SAP" },
    { name: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)" },
    { name: "Data Analytics – Skill Up", issuer: "GeeksforGeeks" },
    { name: "McKinsey Forward Program", issuer: "McKinsey.org" },
    { name: "Power BI Workshop", issuer: "OfficeMaster" },
    { name: "AI Skills Passport", issuer: "EY & Microsoft" }
  ]
};

export default portfolioData;
export { portfolioData };
