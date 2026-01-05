import Image from "next/image";
import type { ReactNode } from "react";
import LeadCaptureClient from "@/components/LeadCaptureClient";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <HeroSection />
        <PlatformFeatures />
        <FutureExams />
        <AboutSection />
        <LeadCapture />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Platform Features" },
  { href: "#future", label: "Future Exams" },
  { href: "#contact", label: "Contact" },
];


function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image
              src="/logo_main.png"
              alt="Ram Anjaneya logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#393186]">
              Ram Anjaneya
            </p>
            <p className="text-xs text-slate-600">Student Services</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#393186]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#lead"
            className="hidden rounded-full border border-[#393186] px-4 py-2 text-sm font-semibold text-[#393186] transition-colors hover:bg-[#393186] hover:text-white sm:inline-flex"
          >
            Get Notified
          </a>
          <a
            href="#features"
            className="inline-flex rounded-full bg-[#393186] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2f2a72]"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#393186] via-[#2f2a72] to-[#1f1b55] px-6 py-16 text-white shadow-2xl sm:px-10 sm:py-20"
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90">
            COMING SOON · APRIL 2026
          </span>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              PREPVANTAGE – NTA-like Online Mock Tests for NEET &amp; JEE
            </h1>
            <p className="text-sm font-semibold text-white/90">
              By Ram Anjaneya Student Services
            </p>
            <p className="text-lg leading-relaxed text-white/85">
              PREPVANTAGE is an AI-powered online mock test platform that mirrors
              the official NTA exam experience for NEET and JEE aspirants. It
              offers detailed solutions and AI-driven performance analytics to
              help every student improve faster, with no limit on the number of
              students who can use the platform. Designed for serious aspirants
              across India who want an exam-like practice environment at home.
            </p>
            <p className="text-sm leading-relaxed text-white/75">
              Initially available in English, as most NTA candidates write in
              English; Hindi support is planned next, followed by other regional
              languages based on demand.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#393186] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Notified at Launch
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Planned Features
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase text-white/70">
                Exam fidelity
              </p>
              <p className="text-base font-semibold">
                NTA pattern, interface, timing &amp; marking
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase text-white/70">
                AI analytics
              </p>
              <p className="text-base font-semibold">
                Subject &amp; chapter-wise insights after tests
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-4 w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur lg:mt-0">
          <div className="space-y-4 text-sm text-white/85">
            <h2 className="text-lg font-semibold text-white">
              Why students will love it
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                <span>1.5 lakh+ NCERT-aligned questions with detailed solutions</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                <span>Smart repetition logic to reinforce weak areas</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                <span>Unique test papers per student with intelligent randomization</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                <span>Fast results in ~15 minutes with solutions to wrong answers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "NTA-like exam environment",
    description:
      "Mock tests for JEE (Main & Advanced) and NEET following the official NTA pattern, interface, timing, and marking scheme.",
    icon: <TargetIcon />,
  },
  {
    title: "1.5 lakh+ NCERT-aligned question bank",
    description:
      "A vast repository across Physics, Chemistry, Mathematics, and Biology, each with detailed solutions.",
    icon: <BookIcon />,
  },
  {
    title: "Chapter & difficulty tagging",
    description:
      "Questions classified by chapter and difficulty to enable targeted practice and custom test creation.",
    icon: <TagIcon />,
  },
  {
    title: "Smart repetition logic",
    description:
      "Correctly answered questions fade out, while incorrect answers reappear to reinforce weak areas.",
    icon: <RefreshIcon />,
  },
  {
    title: "Unique test papers",
    description:
      "Each candidate receives a unique, randomized paper to keep practice fair and unpredictable.",
    icon: <ShuffleIcon />,
  },
  {
    title: "Subject-wise difficulty control",
    description:
      "Set different difficulty levels per subject to match evolving preparation needs.",
    icon: <GaugeIcon />,
  },
  {
    title: "Regular content updates",
    description:
      "Question bank updated with recent exam trends, question types, and important topics.",
    icon: <CalendarIcon />,
  },
  {
    title: "AI-powered performance analysis",
    description:
      "After enough tests, get subject- and chapter-level insights with accuracy metrics and suggestions.",
    icon: <ChartIcon />,
  },
  {
    title: "Fast results with solutions",
    description:
      "Results generated in about 15 minutes with solutions for all incorrectly answered questions.",
    icon: <FlashIcon />,
  },
];

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#393186]/18 via-[#393186]/12 to-[#d7b56d]/35 text-[#393186] shadow-inner">
      {children}
    </div>
  );
}

function TargetIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="6" className="opacity-90" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2M21 12h-2M12 21v-2M5 12H3" />
      </svg>
    </IconWrapper>
  );
}

function BookIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 4h10a2 2 0 0 1 2 2v12.5a1.5 1.5 0 0 0-1.5-1.5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M6 4v12a2 2 0 0 0 2 2h10" />
      </svg>
    </IconWrapper>
  );
}

function TagIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7.5V13l8 8 10-10-6-6H9.5Z" />
        <circle cx="9" cy="9" r="1.5" />
      </svg>
    </IconWrapper>
  );
}

function RefreshIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 11a8 8 0 0 0-14-4.9M4 13a8 8 0 0 0 14 4.9" />
        <path d="M4 4v4h4M20 20v-4h-4" />
      </svg>
    </IconWrapper>
  );
}

function ShuffleIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 3h5v5" />
        <path d="M4 20 9.5 13 13 17l3.5-4" />
        <path d="M16 21h5v-5" />
        <path d="M4 4l4.5 6" />
        <path d="M15.5 10 21 4" />
      </svg>
    </IconWrapper>
  );
}

function GaugeIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 13 9 9" />
        <path d="M5.5 19a9 9 0 1 1 13 0Z" />
      </svg>
    </IconWrapper>
  );
}

function CalendarIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M16 3v4M8 3v4M4 10h16" />
      </svg>
    </IconWrapper>
  );
}

function ChartIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19h16" />
        <path d="M7 15.5 11.5 10l3 3 4.5-6" />
        <circle cx="7" cy="15.5" r="1" />
        <circle cx="11.5" cy="10" r="1" />
        <circle cx="14.5" cy="13" r="1" />
        <circle cx="19" cy="7" r="1" />
      </svg>
    </IconWrapper>
  );
}

function FlashIcon() {
  return (
    <IconWrapper>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 13 13 3v8h4l-6 10v-8Z" />
      </svg>
    </IconWrapper>
  );
}

function PlatformFeatures() {
  return (
    <section
      id="features"
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="platform-features"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#393186]">
          Platform Features
        </p>
        <h2
          id="platform-features"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Planned Features of the Online Mock Test Platform
        </h2>
        <p className="max-w-3xl text-lg text-slate-600">
          Designed to deliver a high-quality, data-driven preparation experience
          for NEET and JEE aspirants.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#393186]/50 hover:shadow-lg"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const futureExamPlans = [
  {
    title: "Undergraduate entrance examinations",
    items: ["CUET", "State-level entrance tests for professional courses"],
  },
  {
    title: "Government & recruitment examinations",
    items: [
      "UPSC Civil Services (Prelims)",
      "Staff Selection Commission (SSC)",
      "Banking recruitment examinations",
      "Railway recruitment examinations",
    ],
  },
  {
    title: "International tests",
    items: ["GRE", "GMAT", "IELTS", "TOEFL"],
  },
];

function FutureExams() {
  return (
    <section
      id="future"
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="future-exams"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#393186]">
          Future Exams
        </p>
        <h2
          id="future-exams"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Future Expansion Plans
        </h2>
        <p className="max-w-3xl text-lg text-slate-600">
          After launching NEET and JEE, the platform will grow to support more
          competitive examinations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {futureExamPlans.map((plan) => (
          <div
            key={plan.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/60 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{plan.title}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {plan.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#393186]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const team = [
  {
    name: "Mr. Ramesh Krishnamoorthy",
    title: "Director",
    bio: "A seasoned Cost & Management Accountant with over 40 years of experience in finance and business management.",
  },
  {
    name: "Dr. Rajan Umapathy",
    title: "Director",
    bio: "Ph.D. in Capital Markets with 40+ years of academic experience; former Dean at PRIEST University and Director at AVVM Pushpam College.",
  },
  {
    name: "Mr. Pranav Krishna",
    title: "CEO",
    bio: "Gold Medallist in Biomedical Engineering (Anna University) and M.S. from Johns Hopkins; extensive consulting experience in MedTech, healthcare, and agriculture.",
  },
  {
    name: "Mr. Nimish Santhosh",
    title: "CTO",
    bio: "Full-stack and blockchain engineer focused on scalable systems and AI-driven platforms; previously led development at LiveDuel (USD 400k funded) and hackathon winner.",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="about-ram-anjaneya"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#393186]">
          About Ram Anjaneya Student Services
        </p>
        <h2
          id="about-ram-anjaneya"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Purpose, Vision, and Leadership
        </h2>
        <p className="max-w-3xl text-lg text-slate-600">
          Ram Anjaneya Student Services Private Limited aims to provide
          high-quality, data-driven online mock tests that simulate real exam
          conditions, reveal strengths and weaknesses, and support systematic
          score improvement.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50/60 p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
          <p className="mt-4 text-slate-600">
            Deliver an authentic exam experience with analytics that help every
            student make measurable, repeatable progress.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Leadership Team
          </h3>
          <div className="mt-6 space-y-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4"
              >
                <p className="text-sm font-semibold text-[#393186]">
                  {member.title}
                </p>
                <p className="text-base font-semibold text-slate-900">
                  {member.name}
                </p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadCapture() {
  return (
    <section
      id="lead"
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="stay-informed"
    >
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-50 p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#393186]">
            Stay Informed
          </p>
          <h2 id="stay-informed" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Stay Informed About the April 2026 Launch
          </h2>
          <p className="text-lg text-slate-600">
            Share your details to receive updates, launch announcements, and
            early-access information for the PREPVANTAGE NEET and JEE mock test
            platform.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#393186]" />
              Online mock tests for NEET / JEE (Main & Advanced)
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#393186]" />
              Detailed solutions with fast results
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#393186]" />
              AI-driven performance analysis
            </li>
          </ul>
        </div>

        {/* Client-only interactive form */}
        <LeadCaptureClient />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="contact-information"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#393186]">
          Contact
        </p>
        <h2
          id="contact-information"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Contact Information
        </h2>
        <p className="max-w-3xl text-lg text-slate-600">
          Reach out for updates, partnerships, or early access inquiries.
        </p>
      </div>

      <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3 text-slate-700">
          <p className="font-semibold text-slate-900">
            Ram Anjaneya Student Services Private Limited
          </p>
          <p>F1, Adish Anjaneya Flats</p>
          <p>17th Street Extension, Tansi Nagar</p>
          <p>Velachery</p>
          <p>Chennai – 600042</p>
          <p>India</p>
        </div>
        <div className="space-y-3 text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Mobile:</span>{" "}
            +91 98840 93970
          </p>
          <p>
            <span className="font-semibold text-slate-900">Email:</span>{" "}
            info@ramanjaneya.in
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/logo_main.png"
              alt="Ram Anjaneya logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="text-sm text-slate-700">
            Ram Anjaneya Student Services · NTA-like NEET & JEE Mock Tests
          </div>
        </div>
        <p className="text-sm text-slate-500">
          Launching April 2026 · Crafted for student success
        </p>
      </div>
    </footer>
  );
}
