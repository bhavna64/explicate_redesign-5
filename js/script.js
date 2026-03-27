// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  nav.classList.toggle('nav-open');
});
nav.querySelectorAll('.nav-link, .btn-primary').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    nav.classList.remove('nav-open');
  });
});

// Scroll reveal for approach steps
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 80);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.step, .reveal-step').forEach(el => revealObserver.observe(el));

// Work carousel
const works = [
  {
    title: "Sales forecasting made effortless with EPM-powered automation",
    desc: "A robust AI-powered forecasting solution that seamlessly delivers real-time insights for sales data, ensuring accuracy and transparency. Designed for finance teams to become adaptive, drawing actionable insights from data to drive expertise."
  },
  {
    title: "Intelligent document processing for a leading telecom operator",
    desc: "An end-to-end agentic pipeline that classifies, extracts, and routes over 50,000 monthly documents with 97% accuracy — reducing manual processing time by 80% across three regional offices."
  },
  {
    title: "AI-driven personalisation engine for an EdTech platform",
    desc: "A recommendation system built on classical and generative AI that dynamically adapts learning pathways for over 200,000 students, improving course completion rates by 34%."
  },
  {
    title: "Conversational AI assistant for enterprise wellness platform",
    desc: "A multi-modal agentic assistant that handles scheduling, symptom triage, and mental health check-ins — serving 50,000 users with a 92% satisfaction score."
  },
  {
    title: "Cloud migration and AI readiness audit for media company",
    desc: "A full Isomorphism Canvas exercise that mapped the client's content pipeline to analogous recommendation structures, unlocking a 6-month AI roadmap with clear ROI milestones."
  },
  {
    title: "Predictive churn model for B2B SaaS company",
    desc: "An ML pipeline trained on behavioural signals to predict customer churn 45 days in advance, enabling proactive intervention that recovered 22% of at-risk accounts."
  }
];

const titleEl = document.getElementById('work-title');
const descEl = document.getElementById('work-desc');
const dots = document.querySelectorAll('.nav-dot');

function setWork(index) {
  titleEl.style.opacity = '0';
  descEl.style.opacity = '0';
  setTimeout(() => {
    titleEl.textContent = works[index].title;
    descEl.textContent = works[index].desc;
    titleEl.style.opacity = '1';
    descEl.style.opacity = '1';
  }, 200);
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => setWork(+dot.dataset.index));
});

// Auto-advance work cards
let workIndex = 0;
setInterval(() => {
  workIndex = (workIndex + 1) % works.length;
  setWork(workIndex);
}, 5000);

// Smooth transition for work content
[titleEl, descEl].forEach(el => {
  el.style.transition = 'opacity 0.3s ease';
});
