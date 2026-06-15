import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaHeart } from "react-icons/fa";

const TIMELINE_DATA = [
    {
        id: "current",
        type: "status",
        title: "Currently building Inkverse",
        subtitle: "Final-year BTech CS student · Open to Full Stack Developer roles",
        badge: "Open to work",
        badgeType: "pulse",
        accentClass: "border-emerald-500/20 text-emerald-500",
        nodeGlowClass: "shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-500",
        hoverClass: "hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)]",
    },
    {
        id: "internship",
        type: "work",
        role: "Full Stack Developer Intern",
        company: "Lit Amor · Remote",
        duration: "Jul 2025 — Sep 2025",
        subDuration: "Internship - 3 months",
        highlight: "+20% user engagement",
        bullets: [
            <>Developed <span className="text-ink-primary font-semibold">"Solo Sparks"</span>, a self-discovery feature analyzing user moods and behavioral patterns to recommend personalized activities.</>,
            <>Built and deployed a <span className="text-ink-primary font-semibold">React.js + Tailwind CSS</span> interface with multimedia reflection portal, onboarding flow, and reward tracking dashboard.</>,
            <>Improved navigation and user engagement through optimized front-end component architecture and efficient state management.</>
        ],
        tags: ["React.js", "Tailwind CSS", "State Management", "REST APIs"],
        accentClass: "border-indigo-500/20 text-indigo-400",
        nodeGlowClass: "shadow-[0_0_20px_rgba(99,102,241,0.4)] border-indigo-400",
        hoverClass: "hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.05)]",
    },
    {
        id: "education",
        type: "education",
        institution: "Indus University, Ahmedabad",
        degree: "Bachelor of Technology — Computer Science",
        duration: "2021 — Expected 2026",
        highlight: "10.0 SGPA",
        accentClass: "border-emerald-500/20 text-emerald-500",
        nodeGlowClass: "shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-500",
        hoverClass: "hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)]",
    }
];

function Experience() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="min-h-screen flex flex-col items-center py-10" id="experience">
            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">

                {/* Section Header */}
                <div className="bg-coral-950 text-sm text-coral-500 animate-pulse w-fit px-3 py-1 rounded-full mb-4">
                    <p>Where I've worked</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-ink-primary mb-2">
                    Experience
                </h1>
                <p className="text-ink-muted text-sm lg:text-base mb-12">
                    My journey so far — internship work, education, and what I'm focused on now.
                </p>

                {/* Timeline Container */}
                <div className="relative pl-10 sm:pl-16">

                    {/* Connecting Line with Gradient Fade-out at bottom */}
                    <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/50 via-stroke to-transparent" />

                    {/* Timeline items */}
                    <div className="space-y-8">
                        {TIMELINE_DATA.map((item) => {
                            const isHovered = hoveredCard === item.id;

                            return (
                                <div key={item.id} className="relative">

                                    {/* Timeline Node Symbol */}
                                    <div
                                        className={`absolute -left-[35px] sm:-left-[51px] top-6 w-8 h-8 rounded-full bg-bg-base border border-stroke flex items-center justify-center transition-all duration-300 z-10
                                            ${isHovered ? item.nodeGlowClass : ""}
                                        `}
                                    >
                                        {item.type === "status" && (
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                            </span>
                                        )}
                                        {item.type === "work" && (
                                            <FaBriefcase className={`w-3.5 h-3.5 ${isHovered ? "text-indigo-400" : "text-ink-muted"}`} />
                                        )}
                                        {item.type === "education" && (
                                            <FaGraduationCap className={`w-4 h-4 ${isHovered ? "text-emerald-500" : "text-ink-muted"}`} />
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        onMouseEnter={() => setHoveredCard(item.id)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        className={`card-style p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 cursor-default ${item.hoverClass}`}
                                    >

                                        {/* Status Card Layout */}
                                        {item.type === "status" && (
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div>
                                                    <h2 className="text-lg md:text-xl font-bold text-ink-primary">
                                                        {item.title}
                                                    </h2>
                                                    <p className="text-sm text-ink-muted">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 bg-[#10b981]/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold w-fit self-start sm:self-center">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                    {item.badge}
                                                </div>
                                            </div>
                                        )}

                                        {/* Work Card Layout */}
                                        {item.type === "work" && (
                                            <div className="space-y-4">
                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center justify-center w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                                                            <FaHeart size={14} />
                                                        </div>
                                                        <div>
                                                            <h2 className="text-lg md:text-xl font-bold text-ink-primary leading-tight">
                                                                {item.role}
                                                            </h2>
                                                            <p className="text-sm text-indigo-400 font-medium">
                                                                {item.company}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right self-start sm:self-auto pl-13 sm:pl-0">
                                                        <p className="text-xs md:text-sm text-ink-primary font-medium">{item.duration}</p>
                                                        <p className="text-[11px] text-ink-muted">{item.subDuration}</p>
                                                    </div>
                                                </div>

                                                {/* Engagement Metrics Badge */}
                                                {item.highlight && (
                                                    <div className="inline-flex items-center gap-1.5 bg-[#10b981]/5 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-lg text-xs font-medium w-fit ml-0 sm:ml-13">
                                                        <span className="font-bold">{item.highlight.split(" ")[0]}</span> {item.highlight.substring(item.highlight.indexOf(" ") + 1)}
                                                    </div>
                                                )}

                                                {/* Bullet Points with Console Chevrons */}
                                                <ul className="space-y-3 text-sm text-ink-muted leading-relaxed">
                                                    {item.bullets.map((bullet, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-coral-500 mr-3 flex-shrink-0 font-bold select-none">&gt;</span>
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Tech Stack Pills */}
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {item.tags.map((tag) => (
                                                        <span key={tag} className="pill">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Education Card Layout */}
                                        {item.type === "education" && (
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                                                        <span className="w-3.5 h-3.5 border-2 border-emerald-500/70 rounded-[4px]" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-lg md:text-xl font-bold text-ink-primary">
                                                            {item.institution}
                                                        </h2>
                                                        <p className="text-sm text-ink-muted">
                                                            {item.degree}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-left sm:text-right pl-13 sm:pl-0">
                                                    <p className="text-xs md:text-sm text-ink-primary font-medium">{item.duration}</p>
                                                    <p className="text-sm text-emerald-400 font-bold tracking-wide mt-0.5">{item.highlight}</p>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Experience };