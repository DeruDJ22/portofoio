import pptxgen from "pptxgenjs";

// ── Dark Luxury Color Palette ──
const C = {
  bg: "080C14",           // Ultra dark onyx navy
  cardBg: "101625",       // Sleek slate glass background
  cardBgHover: "162035",  // Highlighted card fill
  cardBorder: "1E293B",   // Subtle border
  primary: "6366F1",      // Indigo primary accent
  primaryGlow: "818CF8",  // Light indigo glow
  teal: "10B981",         // Emerald teal accent
  tealGlow: "34D399",     // Light teal glow
  amber: "F59E0B",        // Warm amber accent
  cyan: "06B6D4",         // Electric cyan accent
  rose: "F43F5E",         // Accent rose/red
  white: "FFFFFF",        // Crisp white text
  textMuted: "94A3B8",    // Secondary text
  textSubtle: "64748B",   // Subtle caption text
  darkBar: "03060C",      // Top/bottom bar fill
};

// ── Global Helper: Slide Background & Framing ──
function applySlideFrame(slide, sectionNum, sectionTitle) {
  slide.background = { fill: C.bg };

  // Top header bar / branding accent
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 13.33,
    h: 0.08,
    fill: { color: C.primary },
  });

  // Left vertical glowing bar accent (simulated gradient with opacity)
  slide.addShape("rect", {
    x: 0,
    y: 0.08,
    w: 0.06,
    h: 7.42,
    fill: { color: C.teal },
  });

  // Header Section Badge & Title
  if (sectionTitle) {
    // Badge Box
    slide.addShape("roundRect", {
      x: 0.6,
      y: 0.4,
      w: 0.9,
      h: 0.35,
      rectRadius: 0.05,
      fill: { color: C.primary, transparency: 20 },
      line: { color: C.primaryGlow, width: 0.5 },
    });
    slide.addText(sectionNum, {
      x: 0.6,
      y: 0.4,
      w: 0.9,
      h: 0.35,
      fontSize: 10,
      fontFace: "Segoe UI",
      bold: true,
      color: C.primaryGlow,
      align: "center",
    });

    // Section Title
    slide.addText(sectionTitle, {
      x: 1.65,
      y: 0.37,
      w: 6.0,
      h: 0.4,
      fontSize: 18,
      fontFace: "Segoe UI",
      bold: true,
      color: C.white,
      charSpacing: 2,
    });

    // Right header metadata
    slide.addText("DERU KHAIRAN DJUHARIANTO  //  PORTFOLIO", {
      x: 8.0,
      y: 0.4,
      w: 4.7,
      h: 0.35,
      fontSize: 8,
      fontFace: "Segoe UI",
      color: C.textSubtle,
      align: "right",
      charSpacing: 1,
    });

    // Header divider line
    slide.addShape("rect", {
      x: 0.6,
      y: 0.9,
      w: 12.13,
      h: 0.015,
      fill: { color: C.cardBorder },
    });
  }

  // Footer bar
  slide.addShape("rect", {
    x: 0,
    y: 7.15,
    w: 13.33,
    h: 0.35,
    fill: { color: C.darkBar },
  });

  slide.addText("CONFIDENTIAL  ·  DERU KHAIRAN DJUHARIANTO  ·  2025", {
    x: 0.6,
    y: 7.18,
    w: 6.0,
    h: 0.3,
    fontSize: 8,
    fontFace: "Segoe UI",
    color: C.textSubtle,
  });
}

function addPageNumber(slide, num, total) {
  slide.addText(`SLIDE  ${num} / ${total}`, {
    x: 11.2,
    y: 7.18,
    w: 1.5,
    h: 0.3,
    fontSize: 8,
    fontFace: "Segoe UI",
    bold: true,
    color: C.tealGlow,
    align: "right",
  });
}

// ── Slide 1: Cover / Hero Slide ──
function createCoverSlide(pres) {
  const slide = pres.addSlide();
  applySlideFrame(slide);

  // Background abstract glowing shapes
  slide.addShape("ellipse", {
    x: 8.5,
    y: -1.0,
    w: 6.0,
    h: 6.0,
    fill: { color: C.primary, transparency: 93 },
  });
  slide.addShape("ellipse", {
    x: 7.0,
    y: 3.5,
    w: 5.5,
    h: 5.5,
    fill: { color: C.teal, transparency: 95 },
  });

  // Top Pill Badge
  slide.addShape("roundRect", {
    x: 0.8,
    y: 1.2,
    w: 3.8,
    h: 0.38,
    rectRadius: 0.19,
    fill: { color: C.primary, transparency: 20 },
    line: { color: C.primaryGlow, width: 0.8 },
  });
  slide.addText("SOFTWARE ENGINEERING  ·  TELKOM UNIVERSITY", {
    x: 0.8,
    y: 1.2,
    w: 3.8,
    h: 0.38,
    fontSize: 8,
    fontFace: "Segoe UI",
    bold: true,
    color: C.primaryGlow,
    align: "center",
    charSpacing: 1,
  });

  // Big Main Name Heading
  slide.addText("DERU KHAIRAN", {
    x: 0.75,
    y: 1.75,
    w: 10.0,
    h: 1.0,
    fontSize: 48,
    fontFace: "Segoe UI",
    bold: true,
    color: C.white,
    charSpacing: 4,
  });

  slide.addText("DJUHARIANTO", {
    x: 0.75,
    y: 2.65,
    w: 10.0,
    h: 0.9,
    fontSize: 42,
    fontFace: "Segoe UI",
    bold: true,
    color: C.tealGlow,
    charSpacing: 6,
  });

  // Accent Line
  slide.addShape("rect", {
    x: 0.8,
    y: 3.7,
    w: 2.5,
    h: 0.05,
    fill: { color: C.amber },
  });

  // Subtitle / Bio summary card
  slide.addShape("roundRect", {
    x: 0.8,
    y: 4.0,
    w: 7.2,
    h: 1.3,
    rectRadius: 0.1,
    fill: { color: C.cardBg },
    line: { color: C.cardBorder, width: 0.8 },
  });
  slide.addShape("rect", {
    x: 0.8,
    y: 4.0,
    w: 0.08,
    h: 1.3,
    fill: { color: C.primary },
  });
  slide.addText("FULL-STACK DEVELOPER  |  SECURITY ENTHUSIAST  |  SYSTEM ARCHITECT", {
    x: 1.1,
    y: 4.15,
    w: 6.7,
    h: 0.3,
    fontSize: 10,
    fontFace: "Segoe UI",
    bold: true,
    color: C.primaryGlow,
    charSpacing: 1.5,
  });
  slide.addText(
    "Specialized in architecting secure backend systems, high-performance web applications, and defensive programming solutions.",
    {
      x: 1.1,
      y: 4.45,
      w: 6.7,
      h: 0.7,
      fontSize: 10,
      fontFace: "Segoe UI",
      color: C.textMuted,
      lineSpacing: 15,
    }
  );

  // Right Side Stats Cards Grid
  const stats = [
    { num: "08+", label: "SKILL VECTORS", color: C.tealGlow },
    { num: "06+", label: "PROJECTS BUILT", color: C.primaryGlow },
    { num: "100%", label: "SECURE CODE FOCUS", color: C.amber },
  ];

  stats.forEach((stat, i) => {
    const yPos = 1.6 + i * 1.25;

    slide.addShape("roundRect", {
      x: 8.5,
      y: yPos,
      w: 4.0,
      h: 1.1,
      rectRadius: 0.1,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 0.8 },
    });

    slide.addText(stat.num, {
      x: 8.7,
      y: yPos + 0.15,
      w: 1.8,
      h: 0.5,
      fontSize: 26,
      fontFace: "Segoe UI",
      bold: true,
      color: stat.color,
    });

    slide.addText(stat.label, {
      x: 8.7,
      y: yPos + 0.65,
      w: 3.6,
      h: 0.3,
      fontSize: 8,
      fontFace: "Segoe UI",
      bold: true,
      color: C.textSubtle,
      charSpacing: 1.5,
    });
  });

  // Bottom Contact Bar Pills
  const contactPills = [
    { label: "EMAIL", val: "derukhdj22@gmail.com" },
    { label: "LOCATION", val: "Depok, Indonesia" },
    { label: "STATUS", val: "Available for Hire" },
  ];

  contactPills.forEach((item, i) => {
    const xPos = 0.8 + i * 2.5;
    slide.addShape("roundRect", {
      x: xPos,
      y: 5.6,
      w: 2.3,
      h: 0.6,
      rectRadius: 0.08,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 0.5 },
    });
    slide.addText(item.label, {
      x: xPos + 0.15,
      y: 5.68,
      w: 2.0,
      h: 0.2,
      fontSize: 7,
      fontFace: "Segoe UI",
      bold: true,
      color: C.tealGlow,
      charSpacing: 1,
    });
    slide.addText(item.val, {
      x: xPos + 0.15,
      y: 5.88,
      w: 2.0,
      h: 0.25,
      fontSize: 9,
      fontFace: "Segoe UI",
      color: C.white,
    });
  });

  addPageNumber(slide, 1, 5);
}

// ── Slide 2: About Me Slide ──
function createAboutSlide(pres) {
  const slide = pres.addSlide();
  applySlideFrame(slide, "01", "EXECUTIVE SUMMARY");

  // Left Column: Main Executive Bio Card
  slide.addShape("roundRect", {
    x: 0.6,
    y: 1.15,
    w: 7.4,
    h: 5.7,
    rectRadius: 0.12,
    fill: { color: C.cardBg },
    line: { color: C.cardBorder, width: 0.8 },
  });

  slide.addShape("rect", {
    x: 0.6,
    y: 1.15,
    w: 7.4,
    h: 0.08,
    fill: { color: C.primary },
  });

  slide.addText("BIOGRAPHY & CORE OBJECTIVES", {
    x: 0.9,
    y: 1.4,
    w: 6.8,
    h: 0.3,
    fontSize: 10,
    fontFace: "Segoe UI",
    bold: true,
    color: C.tealGlow,
    charSpacing: 2,
  });

  const bioBullets = [
    {
      title: "ACADEMIC FOUNDATION",
      desc: "Software Engineering student at Telkom University with a strong technical lineage from SMK Citra Negara. Transforming complex software requirements into elegant, functional digital products.",
    },
    {
      title: "FULL-STACK CAPABILITIES",
      desc: "Specialized in architecting robust backend systems (PHP/Laravel, Java, Go) paired with responsive, modern frontend interfaces (React, Next.js, Tailwind CSS).",
    },
    {
      title: "SECURITY-FIRST ROADMAP",
      desc: "Dedicated to Defensive Programming — focusing on SQL injection prevention, role-based access control (RBAC), API authentication, and system vulnerability mitigation.",
    },
  ];

  bioBullets.forEach((b, i) => {
    const yPos = 1.9 + i * 1.55;

    // Small square accent
    slide.addShape("rect", {
      x: 0.9,
      y: yPos + 0.05,
      w: 0.1,
      h: 0.1,
      fill: { color: C.primaryGlow },
    });

    slide.addText(b.title, {
      x: 1.15,
      y: yPos,
      w: 6.5,
      h: 0.3,
      fontSize: 11,
      fontFace: "Segoe UI",
      bold: true,
      color: C.white,
    });

    slide.addText(b.desc, {
      x: 1.15,
      y: yPos + 0.3,
      w: 6.5,
      h: 1.0,
      fontSize: 9.5,
      fontFace: "Segoe UI",
      color: C.textMuted,
      lineSpacing: 16,
    });
  });

  // Right Column: Profile Specs Grid
  slide.addShape("roundRect", {
    x: 8.2,
    y: 1.15,
    w: 4.53,
    h: 5.7,
    rectRadius: 0.12,
    fill: { color: C.cardBg },
    line: { color: C.cardBorder, width: 0.8 },
  });

  slide.addShape("rect", {
    x: 8.2,
    y: 1.15,
    w: 4.53,
    h: 0.08,
    fill: { color: C.teal },
  });

  slide.addText("KEY METADATA", {
    x: 8.5,
    y: 1.4,
    w: 4.0,
    h: 0.3,
    fontSize: 10,
    fontFace: "Segoe UI",
    bold: true,
    color: C.primaryGlow,
    charSpacing: 2,
  });

  const metadata = [
    { key: "FULL NAME", val: "Deru Khairan Djuharianto" },
    { key: "BIRTH DATE", val: "22 February 2005" },
    { key: "LOCATION", val: "Depok, West Java, ID" },
    { key: "EDUCATION", val: "Telkom University" },
    { key: "DISCIPLINE", val: "Software Engineering" },
    { key: "PRIMARY ROLE", val: "Full-Stack Web Dev" },
    { key: "EMAIL", val: "derukhdj22@gmail.com" },
    { key: "AVAILABILITY", val: "Open for Hire & Internships" },
  ];

  metadata.forEach((m, i) => {
    const yPos = 1.85 + i * 0.55;

    slide.addText(m.key, {
      x: 8.5,
      y: yPos,
      w: 1.6,
      h: 0.25,
      fontSize: 7.5,
      fontFace: "Segoe UI",
      bold: true,
      color: C.textSubtle,
      charSpacing: 1,
    });

    slide.addText(m.val, {
      x: 10.1,
      y: yPos,
      w: 2.4,
      h: 0.25,
      fontSize: 9,
      fontFace: "Segoe UI",
      bold: m.key === "AVAILABILITY",
      color: m.key === "AVAILABILITY" ? C.tealGlow : C.white,
    });

    if (i < metadata.length - 1) {
      slide.addShape("rect", {
        x: 8.5,
        y: yPos + 0.35,
        w: 3.93,
        h: 0.008,
        fill: { color: C.cardBorder },
      });
    }
  });

  addPageNumber(slide, 2, 5);
}

// ── Slide 3: Technical Skills Slide ──
function createSkillsSlide(pres) {
  const slide = pres.addSlide();
  applySlideFrame(slide, "02", "CORE COMPETENCIES & TECHNICAL MATRIX");

  const categories = [
    {
      title: "FRONTEND ENGINEERING",
      color: C.primaryGlow,
      skills: [
        { name: "HTML5 & CSS3 Architecture", pct: 85 },
        { name: "Tailwind CSS Design System", pct: 80 },
        { name: "JavaScript (ES6+)", pct: 75 },
        { name: "React & Next.js Framework", pct: 65 },
      ],
    },
    {
      title: "BACKEND & ALGORITHMS",
      color: C.tealGlow,
      skills: [
        { name: "PHP & Laravel Framework", pct: 70 },
        { name: "Java Object-Oriented Prog.", pct: 60 },
        { name: "C++ Data Structures", pct: 45 },
        { name: "Go Lang Microservices", pct: 30 },
      ],
    },
  ];

  categories.forEach((cat, catIdx) => {
    const xBase = 0.6 + catIdx * 6.2;

    // Outer Card
    slide.addShape("roundRect", {
      x: xBase,
      y: 1.15,
      w: 5.9,
      h: 5.7,
      rectRadius: 0.12,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 0.8 },
    });

    slide.addShape("rect", {
      x: xBase,
      y: 1.15,
      w: 5.9,
      h: 0.08,
      fill: { color: catIdx === 0 ? C.primary : C.teal },
    });

    slide.addText(cat.title, {
      x: xBase + 0.3,
      y: 1.4,
      w: 5.3,
      h: 0.3,
      fontSize: 11,
      fontFace: "Segoe UI",
      bold: true,
      color: cat.color,
      charSpacing: 2,
    });

    cat.skills.forEach((s, sIdx) => {
      const yPos = 1.95 + sIdx * 1.2;

      // Skill Label
      slide.addText(s.name, {
        x: xBase + 0.3,
        y: yPos,
        w: 4.2,
        h: 0.3,
        fontSize: 10,
        fontFace: "Segoe UI",
        bold: true,
        color: C.white,
      });

      // Percentage Pill
      slide.addShape("roundRect", {
        x: xBase + 4.7,
        y: yPos - 0.02,
        w: 0.9,
        h: 0.3,
        rectRadius: 0.05,
        fill: { color: C.darkBar },
        line: { color: cat.color, width: 0.5 },
      });
      slide.addText(`${s.pct}%`, {
        x: xBase + 4.7,
        y: yPos - 0.02,
        w: 0.9,
        h: 0.3,
        fontSize: 9,
        fontFace: "Segoe UI",
        bold: true,
        color: C.amber,
        align: "center",
      });

      // Bar Background Track
      slide.addShape("roundRect", {
        x: xBase + 0.3,
        y: yPos + 0.4,
        w: 5.3,
        h: 0.16,
        rectRadius: 0.08,
        fill: { color: C.darkBar },
      });

      // Progress Bar Fill
      const fillW = (s.pct / 100) * 5.3;
      slide.addShape("roundRect", {
        x: xBase + 0.3,
        y: yPos + 0.4,
        w: fillW,
        h: 0.16,
        rectRadius: 0.08,
        fill: { color: catIdx === 0 ? C.primary : C.teal },
      });
    });
  });

  addPageNumber(slide, 3, 5);
}

// ── Slide 4: Projects Showcase Slide ──
function createProjectsSlide(pres) {
  const slide = pres.addSlide();
  applySlideFrame(slide, "03", "FEATURED PROJECTS & PORTFOLIO LOGS");

  const projects = [
    {
      title: "SMBGarasiBMW",
      tag: "DATABASE SECURITY",
      desc: "Garage management platform specializing in RBAC, SQL injection prevention, and database audit logs.",
      tech: "Laravel · SQLi Sec · Tailwind",
      featured: true,
    },
    {
      title: "Web-Based POS System",
      tag: "ENTERPRISE APP",
      desc: "Point of Sales system with live inventory tracking, sales transaction logs, and analytical reports.",
      tech: "PHP · MySQL · AdminLTE",
      featured: false,
    },
    {
      title: "E-Commerce Fresh",
      tag: "JAVA ARCHITECTURE",
      desc: "Grocery e-commerce platform built with robust OOP principles and structured Java data layers.",
      tech: "Java · OOP · MySQL",
      featured: false,
    },
    {
      title: "Helmet Detection Sys",
      tag: "AI & COMPUTER VISION",
      desc: "Real-time safety helmet detection featuring Next.js frontend, FastAPI backend, and YOLOv8 computer vision.",
      tech: "Next.js · FastAPI · YOLOv8",
      featured: true,
    },
    {
      title: "Burger Shop UI",
      tag: "INTERACTIVE UX",
      desc: "Digital store front focusing on fluid web micro-animations and intuitive customer purchasing flows.",
      tech: "HTML5 · CSS3 · JS ES6",
      featured: false,
    },
    {
      title: "Online Store Front",
      tag: "RESPONSIVE WEB",
      desc: "Modern online storefront with responsive grid system, mobile-first UI, and modular design components.",
      tech: "HTML5 · CSS3 · Bootstrap",
      featured: false,
    },
  ];

  projects.forEach((p, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);

    const xBase = 0.6 + col * 4.14;
    const yBase = 1.15 + row * 2.85;

    // Card Container
    slide.addShape("roundRect", {
      x: xBase,
      y: yBase,
      w: 3.85,
      h: 2.65,
      rectRadius: 0.1,
      fill: { color: C.cardBg },
      line: {
        color: p.featured ? C.primaryGlow : C.cardBorder,
        width: p.featured ? 1.2 : 0.6,
      },
    });

    // Top Accent Bar for card
    slide.addShape("rect", {
      x: xBase,
      y: yBase,
      w: 3.85,
      h: 0.06,
      fill: { color: p.featured ? C.primary : C.teal },
    });

    // Category Tag Badge
    slide.addShape("roundRect", {
      x: xBase + 0.2,
      y: yBase + 0.2,
      w: 2.2,
      h: 0.25,
      rectRadius: 0.04,
      fill: { color: C.darkBar },
      line: { color: C.cardBorder, width: 0.5 },
    });
    slide.addText(p.tag, {
      x: xBase + 0.2,
      y: yBase + 0.2,
      w: 2.2,
      h: 0.25,
      fontSize: 6.5,
      fontFace: "Segoe UI",
      bold: true,
      color: C.tealGlow,
      align: "center",
      charSpacing: 1,
    });

    // Featured Flag
    if (p.featured) {
      slide.addShape("roundRect", {
        x: xBase + 2.5,
        y: yBase + 0.2,
        w: 1.15,
        h: 0.25,
        rectRadius: 0.04,
        fill: { color: C.primary, transparency: 30 },
      });
      slide.addText("★ FEATURED", {
        x: xBase + 2.5,
        y: yBase + 0.2,
        w: 1.15,
        h: 0.25,
        fontSize: 6.5,
        fontFace: "Segoe UI",
        bold: true,
        color: C.primaryGlow,
        align: "center",
      });
    }

    // Title
    slide.addText(p.title, {
      x: xBase + 0.2,
      y: yBase + 0.52,
      w: 3.45,
      h: 0.35,
      fontSize: 11,
      fontFace: "Segoe UI",
      bold: true,
      color: C.white,
    });

    // Description
    slide.addText(p.desc, {
      x: xBase + 0.2,
      y: yBase + 0.9,
      w: 3.45,
      h: 1.1,
      fontSize: 8.5,
      fontFace: "Segoe UI",
      color: C.textMuted,
      lineSpacing: 14,
      valign: "top",
    });

    // Tech Stack Line
    slide.addShape("rect", {
      x: xBase + 0.2,
      y: yBase + 2.05,
      w: 3.45,
      h: 0.008,
      fill: { color: C.cardBorder },
    });

    slide.addText(p.tech, {
      x: xBase + 0.2,
      y: yBase + 2.15,
      w: 3.45,
      h: 0.3,
      fontSize: 8,
      fontFace: "Segoe UI",
      bold: true,
      color: C.cyan,
      charSpacing: 0.5,
    });
  });

  addPageNumber(slide, 4, 5);
}

// ── Slide 5: Contact & Collaboration Slide ──
function createContactSlide(pres) {
  const slide = pres.addSlide();
  applySlideFrame(slide, "04", "CONTACT & COLLABORATION");

  // Background glow
  slide.addShape("ellipse", {
    x: 4.16,
    y: 1.5,
    w: 5.0,
    h: 5.0,
    fill: { color: C.primary, transparency: 94 },
  });

  // Call to Action Banner Card
  slide.addShape("roundRect", {
    x: 1.2,
    y: 1.2,
    w: 10.93,
    h: 1.6,
    rectRadius: 0.12,
    fill: { color: C.cardBg },
    line: { color: C.primary, width: 1.0 },
  });
  slide.addShape("rect", {
    x: 1.2,
    y: 1.2,
    w: 10.93,
    h: 0.08,
    fill: { color: C.teal },
  });

  slide.addText("READY TO BUILD SOMETHING EXTRAORDINARY?", {
    x: 1.5,
    y: 1.45,
    w: 10.33,
    h: 0.5,
    fontSize: 20,
    fontFace: "Segoe UI",
    bold: true,
    color: C.white,
    align: "center",
    charSpacing: 3,
  });

  slide.addText(
    "Open for freelance software development, enterprise applications, technical collaborations, and full-time engineering roles.",
    {
      x: 1.5,
      y: 1.95,
      w: 10.33,
      h: 0.5,
      fontSize: 10.5,
      fontFace: "Segoe UI",
      color: C.textMuted,
      align: "center",
    }
  );

  // 3 Large Contact Cards
  const contacts = [
    {
      icon: "✉",
      title: "EMAIL ADDRESS",
      value: "derukhdj22@gmail.com",
      action: "Direct Email Communication",
      color: C.tealGlow,
    },
    {
      icon: "⚡",
      title: "GITHUB PROFILE",
      value: "github.com/DeruDJ22",
      action: "View Open Source Code",
      color: C.primaryGlow,
    },
    {
      icon: "☎",
      title: "COMMUNICATION",
      value: "+62 812-8184-4073",
      action: "Direct Phone & WhatsApp",
      color: C.amber,
    },
  ];

  contacts.forEach((c, i) => {
    const xBase = 1.2 + i * 3.75;
    const yBase = 3.1;

    slide.addShape("roundRect", {
      x: xBase,
      y: yBase,
      w: 3.43,
      h: 3.1,
      rectRadius: 0.12,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 0.8 },
    });

    // Top icon badge
    slide.addShape("ellipse", {
      x: xBase + 1.36,
      y: yBase + 0.3,
      w: 0.7,
      h: 0.7,
      fill: { color: C.darkBar },
      line: { color: c.color, width: 0.8 },
    });
    slide.addText(c.icon, {
      x: xBase + 1.36,
      y: yBase + 0.3,
      w: 0.7,
      h: 0.7,
      fontSize: 16,
      fontFace: "Segoe UI",
      bold: true,
      color: c.color,
      align: "center",
    });

    slide.addText(c.title, {
      x: xBase + 0.2,
      y: yBase + 1.25,
      w: 3.03,
      h: 0.25,
      fontSize: 8,
      fontFace: "Segoe UI",
      bold: true,
      color: C.textSubtle,
      align: "center",
      charSpacing: 1.5,
    });

    slide.addText(c.value, {
      x: xBase + 0.2,
      y: yBase + 1.55,
      w: 3.03,
      h: 0.4,
      fontSize: 11,
      fontFace: "Segoe UI",
      bold: true,
      color: C.white,
      align: "center",
    });

    slide.addShape("rect", {
      x: xBase + 0.5,
      y: yBase + 2.1,
      w: 2.43,
      h: 0.008,
      fill: { color: C.cardBorder },
    });

    slide.addText(c.action, {
      x: xBase + 0.2,
      y: yBase + 2.3,
      w: 3.03,
      h: 0.4,
      fontSize: 8.5,
      fontFace: "Segoe UI",
      color: c.color,
      align: "center",
    });
  });

  // Bottom Status Banner
  slide.addShape("roundRect", {
    x: 1.2,
    y: 6.4,
    w: 10.93,
    h: 0.5,
    rectRadius: 0.08,
    fill: { color: C.darkBar },
    line: { color: C.teal, width: 0.5 },
  });

  slide.addText("STATUS: AVAILABLE FOR NEW PROJECTS & INTERNSHIPS // RESPONSE TIME < 24 HOURS", {
    x: 1.2,
    y: 6.4,
    w: 10.93,
    h: 0.5,
    fontSize: 8.5,
    fontFace: "Segoe UI",
    bold: true,
    color: C.tealGlow,
    align: "center",
    charSpacing: 1.5,
  });

  addPageNumber(slide, 5, 5);
}

// ── Main Export Generator ──
export default function generatePortfolioPPT() {
  const pres = new pptxgen();

  pres.author = "Deru Khairan Djuharianto";
  pres.company = "Telkom University";
  pres.subject = "Software Engineer Portfolio";
  pres.title = "Deru Khairan Djuharianto — Executive Portfolio 2025";
  pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 inches

  createCoverSlide(pres);
  createAboutSlide(pres);
  createSkillsSlide(pres);
  createProjectsSlide(pres);
  createContactSlide(pres);

  return pres.writeFile({ fileName: "Deru_Khairan_Portfolio.pptx" });
}
