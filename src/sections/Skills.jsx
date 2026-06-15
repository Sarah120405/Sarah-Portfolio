import { FaReact, FaServer, FaDatabase, FaLock, FaBrain, FaTools } from "react-icons/fa";

const SKILLS_DATA = [
    {
        category: "Frontend",
        icon: FaReact,
        skills: ["React.js", "Tailwind CSS", "TanStack Query", "JavaScript", "HTML / CSS"],
        colorClass: "text-[#e8705a]",
        bgClass: "bg-[#e8705a]/10",
        dotClass: "bg-[#e8705a]",
        hoverClass: "hover:border-[#e8705a]/30 hover:shadow-[0_0_30px_rgba(232,112,90,0.08)]",
    },
    {
        category: "Backend",
        icon: FaServer,
        skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSocket"],
        colorClass: "text-[#818cf8]",
        bgClass: "bg-[#818cf8]/10",
        dotClass: "bg-[#818cf8]",
        hoverClass: "hover:border-[#818cf8]/30 hover:shadow-[0_0_30px_rgba(129,140,248,0.08)]",
    },
    {
        category: "Database & ORM",
        icon: FaDatabase,
        skills: ["PostgreSQL", "Prisma ORM", "SQLite", "SQL"],
        colorClass: "text-[#34d399]",
        bgClass: "bg-[#34d399]/10",
        dotClass: "bg-[#34d399]",
        hoverClass: "hover:border-[#34d399]/30 hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]",
    },
    {
        category: "Auth & Security",
        icon: FaLock,
        skills: ["JWT", "bcrypt", "2FA", "RBAC", "Joi Validation"],
        colorClass: "text-[#fbbf24]",
        bgClass: "bg-[#fbbf24]/10",
        dotClass: "bg-[#fbbf24]",
        hoverClass: "hover:border-[#fbbf24]/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]",
    },
    {
        category: "Data & ML",
        icon: FaBrain,
        skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost"],
        colorClass: "text-[#f472b6]",
        bgClass: "bg-[#f472b6]/10",
        dotClass: "bg-[#f472b6]",
        hoverClass: "hover:border-[#f472b6]/30 hover:shadow-[0_0_30px_rgba(244,114,182,0.08)]",
    },
    {
        category: "Tools & Platforms",
        icon: FaTools,
        skills: ["Git", "GitHub", "Postman", "VS Code", "Google Colab"],
        colorClass: "text-[#2dd4bf]",
        bgClass: "bg-[#2dd4bf]/10",
        dotClass: "bg-[#2dd4bf]",
        hoverClass: "hover:border-[#2dd4bf]/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.08)]",
    }
];

function Skills() {
    return (
        <section className="min-h-screen flex flex-col items-center py-16" id="skills">
            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">

                {/* Header Section */}
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-ink-primary mb-2">
                    Skills & Technologies
                </h1>
                <p className="text-ink-muted text-sm lg:text-base mb-12">
                    Tools and languages I use to design, build, and ship full stack applications.
                </p>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                    {SKILLS_DATA.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.category}
                                className={`card-style p-6 flex flex-col gap-6 transition-all duration-300 ${item.hoverClass}`}
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center justify-center w-11 h-11 rounded-xl border border-stroke shadow-sm ${item.colorClass} ${item.bgClass}`}>
                                        <IconComponent size={18} />
                                    </div>
                                    <h2 className="text-lg font-bold text-ink-primary">
                                        {item.category}
                                    </h2>
                                </div>

                                {/* Skills Pill List */}
                                <div className="flex flex-wrap gap-2.5">
                                    {item.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="group/pill flex items-center gap-2 bg-[#231d19]/40 hover:bg-[#231d19]/80 border border-stroke rounded-xl px-3.5 py-1.5 transition-colors duration-200 cursor-default"
                                        >
                                            {/* Colored Category Bullet */}
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.dotClass} opacity-80 group-hover/pill:scale-125 transition-transform duration-200`} />
                                            <span className="text-xs font-medium text-ink-secondary group-hover/pill:text-ink-primary transition-colors duration-200">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export { Skills };