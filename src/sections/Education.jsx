import { useState } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaBookOpen,
  FaMedal,
} from "react-icons/fa";

const EDUCATION_DATA = [
  {
    id: "btech",
    type: "degree",
    institution: "Indus University, Ahmedabad",
    degree: "Bachelor of Technology — Computer Science",
    duration: "2022 — Expected 2026",
    highlight: "9.7 FGPA",
    description:
      "Specialized in software engineering, data structures, algorithms, and full stack development.",
    bullets: [
      <>
        Coursework includes{" "}
        <span className="text-ink-primary font-semibold">
          Data Structures & Algorithms
        </span>
        , Operating Systems, DBMS, Computer Networks, and Software Engineering.
      </>,
      <>
        Final year project focuses on{" "}
        <span className="text-ink-primary font-semibold">
          AI-assisted systems
        </span>{" "}
        and production-grade full stack application development.
      </>,
      <>
        Consistently maintained a{" "}
        <span className="text-ink-primary font-semibold">10.0 SGPA</span> across
        semesters with distinction in programming subjects.
      </>,
    ],
    accentClass: "border-emerald-500/20 text-emerald-500",
    nodeGlowClass: "shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-500",
    hoverClass:
      "hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)]",
  },
  {
    id: "hsc",
    type: "degree",
    institution: "Ankur School",
    degree: "Higher Secondary Certificate (HSC) — Science",
    duration: "2020 — 2022",
    highlight: "79 Percentile",
    description:
      "Studied Physics, Chemistry, Mathematics and Computer Science with distinction.",
    accentClass: "border-emerald-500/20 text-emerald-500",
    nodeGlowClass: "shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-500",
    hoverClass:
      "hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)]",
  },
  {
    id: "ssc",
    type: "degree",
    institution: "Ankur School",
    degree: "Secondary School Certificate (SSC)",
    duration: "2019 -2020",
    highlight: "86%",
    description: "",
    accentClass: "border-emerald-500/20 text-emerald-500",
    nodeGlowClass: "shadow-[0_0_20px_rgba(16,185,129,0.4)] border-emerald-500",
    hoverClass:
      "hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)]",
  },
];

const NODE_ICON_MAP = {
  degree: FaGraduationCap,
  certification: FaCertificate,
  course: FaBookOpen,
};

const NODE_COLOR_MAP = {
  degree: "text-emerald-400",
  certification: "text-indigo-400",
  course: "text-pink-400",
};

function Education() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="min-h-screen flex flex-col items-center py-10"
      id="education"
    >
      <div className="mx-auto max-w-7xl w-full px-6">
        {/* Section Header */}
        <div className="bg-coral-950 text-sm text-coral-500 animate-pulse w-fit px-3 py-1 rounded-full mb-4">
          <p>Academic background</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-ink-primary mb-2">
          Education
        </h1>
        <p className="text-ink-muted text-sm lg:text-base mb-12">
          Degrees, certifications, and courses that shaped my technical
          foundation.
        </p>

        {/* Timeline Container */}
        <div className="relative pl-10 sm:pl-16">
          {/* Connecting Line with Gradient Fade-out at bottom */}
          <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/50 via-stroke to-transparent" />

          {/* Timeline items */}
          <div className="space-y-8">
            {EDUCATION_DATA.map((item) => {
              const isHovered = hoveredCard === item.id;
              const NodeIcon = NODE_ICON_MAP[item.type] ?? FaGraduationCap;
              const nodeColor = NODE_COLOR_MAP[item.type] ?? "text-ink-muted";

              return (
                <div key={item.id} className="relative">
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[51px] top-6 w-8 h-8 rounded-full bg-bg-base border border-stroke flex items-center justify-center transition-all duration-300 z-10
                                            ${isHovered ? item.nodeGlowClass : ""}
                                        `}
                  >
                    <NodeIcon
                      className={`w-3.5 h-3.5 ${isHovered ? nodeColor : "text-ink-muted"} transition-colors duration-300`}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`card-style p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 cursor-default ${item.hoverClass}`}
                  >
                    {/* Degree / School Card */}
                    {item.type === "degree" && (
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                              <FaGraduationCap size={14} />
                            </div>
                            <div>
                              <h2 className="text-lg md:text-xl font-bold text-ink-primary leading-tight">
                                {item.institution}
                              </h2>
                              <p className="text-sm text-emerald-400 font-medium">
                                {item.degree}
                              </p>
                            </div>
                          </div>
                          <div className="text-right self-start sm:self-auto pl-13 sm:pl-0">
                            <p className="text-xs md:text-sm text-ink-primary font-medium">
                              {item.duration}
                            </p>
                            <p className="text-sm text-emerald-400 font-bold tracking-wide mt-0.5">
                              {item.highlight}
                            </p>
                          </div>
                        </div>

                        {item.description && (
                          <p className="text-sm text-ink-muted leading-relaxed pl-0 sm:pl-13">
                            {item.description}
                          </p>
                        )}

                        {item.bullets && (
                          <ul className="space-y-3 text-sm text-ink-muted leading-relaxed pl-0 sm:pl-13">
                            {item.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-coral-500 mr-3 flex-shrink-0 font-bold select-none">
                                  &gt;
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Certification Card */}
                    {item.type === "certification" && (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                              <FaMedal size={14} />
                            </div>
                            <div>
                              <h2 className="text-lg md:text-xl font-bold text-ink-primary leading-tight">
                                {item.title}
                              </h2>
                              <p className="text-sm text-indigo-400 font-medium">
                                {item.issuer}
                              </p>
                            </div>
                          </div>
                          <div className="text-right self-start sm:self-auto pl-13 sm:pl-0">
                            <p className="text-xs md:text-sm text-ink-primary font-medium">
                              {item.duration}
                            </p>
                            <p className="text-[11px] text-indigo-400 font-semibold mt-0.5">
                              {item.highlight}
                            </p>
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-sm text-ink-muted leading-relaxed pl-0 sm:pl-13">
                            {item.description}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Course Card */}
                    {item.type === "course" && (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-pink-500/10 border border-pink-500/20 rounded-xl text-pink-400">
                              <FaBookOpen size={14} />
                            </div>
                            <div>
                              <h2 className="text-lg md:text-xl font-bold text-ink-primary leading-tight">
                                {item.title}
                              </h2>
                              <p className="text-sm text-pink-400 font-medium">
                                {item.platform}
                              </p>
                            </div>
                          </div>
                          <div className="text-right self-start sm:self-auto pl-13 sm:pl-0">
                            <p className="text-xs md:text-sm text-ink-primary font-medium">
                              {item.duration}
                            </p>
                            <p className="text-[11px] text-pink-400 font-semibold mt-0.5">
                              {item.highlight}
                            </p>
                          </div>
                        </div>
                        {item.description && (
                          <p className="text-sm text-ink-muted leading-relaxed pl-0 sm:pl-13">
                            {item.description}
                          </p>
                        )}
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

export { Education };
