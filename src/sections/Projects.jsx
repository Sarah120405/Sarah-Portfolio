import { useState } from "react";
import { FaDesktop, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import ProjectModal from "../components/ProjectModal";
import godsEyeImg from "../assets/God'sE-desktop.png";
import categoryPageImg from "../assets/Category Page.png";
import inkverseImg from "../assets/author-page.png";

const PROJECTS_DATA = [
    {
        id: "01",
        title: "Inkverse",
        subtitle: "Book publishing Platform",
        description: "A platform for independent authors to publish, manage, and distribute their books.",
        detailedDescription: "Inkverse is a production-grade multi-role SaaS platform connecting Authors, Readers, Print Vendors, and Admins.It features JWT authentication with bcrypt, TOTP- based 2FA, and role - based access control middleware across four user roles.Order and payment flows use Prisma's $transaction for atomic database operations with automatic rollback.The storefront catalog was optimized using database-level query compilation with PostgreSQL, and TanStack Query caching reduced redundant API calls.",
        tags: ["React.js", "Node.js", "Prisma ORM", "PostgreSQL", "Tanstack Query"],
        image: inkverseImg,
        icon: FaBookOpen,
        inProgress: true,
        stats: [
            { label: "Catalog Lookup", value: "40% faster", type: "speed" },
            { label: "API Calls Reduced", value: "65%", type: "latency" },
            { label: "User Roles", value: "4", type: "accuracy" }
        ],
        links: {
            github: "https://github.com/Sarah120405/inkverse-publishing-platform",
            live: ""
        }
    },
    {
        id: "02",
        title: "God's Eye",
        subtitle: "AI Powered Monitoring Platform",
        description: "An AI powered monitoring platform that combines real-time tracking, ML analysis, and remote assistance.",
        detailedDescription: "God's Eye is a real-time activity monitoring platform combining ML-powered behavioral analysis with remote assistance. It applies Isolation Forest for anomaly detection, K-Means for behavioral clustering, and XGBoost for productivity prediction — achieving 85–90% accuracy with under 10ms inference on live data streams.",
        tags: ["Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "WebSocket", "React.js"],
        image: godsEyeImg,
        video: "/videos/gods-eye-demo.mp4",
        icon: FaDesktop,
        inProgress: false,
        stats: [
            { label: "Stream Latency", value: "<100ms", type: "latency" },
            { label: "Model Accuracy", value: "85–90%", type: "accuracy" },
            { label: "ML Inference", value: "<10ms", type: "speed" }
        ],
        links: {
            github: "https://github.com/Sarah120405/GodsEye",
            live: ""
        }
    },
    {
        id: "03",
        title: "Flashcart",
        subtitle: "Android E-Commerce App",
        description: "A modern e-commerce app with real-time cart tracking and category browsing.",
        detailedDescription: "Flashcart features fluid transitions, dynamic product lists, offline caching, and a highly responsive cart workflow. The app communicates with a REST backend to sync stock states instantly and render animations at 60fps.",
        tags: ["Kotlin", "Jetpack Compose", "Retrofit", "Rest APIs"],
        image: categoryPageImg,
        icon: FaShoppingCart,
        inProgress: false,
        stats: [
            { label: "Render Framerate", value: "60 FPS", type: "speed" },
            { label: "API Sync Delay", value: "<150ms", type: "latency" }
        ],
        links: {
            github: "https://github.com/Sarah120405/flashcart",
            live: "" // Leave empty if no live link
        }
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="min-h-screen flex flex-col items-center py-16" id="projects">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* Header */}
                <div className="bg-coral-950 text-sm text-coral-500 animate-pulse w-fit px-3 py-1 rounded-full mb-4">
                    <p>What I have built</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-ink-primary mb-2">
                    Featured Projects
                </h1>
                <p className="text-ink-muted text-sm lg:text-base mb-12">
                    Click any card to explore system architectures, statistics, and project details.
                </p>

                {/* Grid Layout: Stacks vertical cards in 3 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {PROJECTS_DATA.map((project) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group card-style flex flex-col justify-between p-6 cursor-pointer hover:border-coral-500/40"
                            >
                                <div>
                                    {/* Top Row: Icon & Project Number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center justify-center w-11 h-11 bg-bg-surface border border-stroke rounded-xl text-coral-500 shadow-sm">
                                            <Icon size={18} />
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {project.inProgress && (
                                                <span className="bg-coral-950 text-coral-500 px-2.5 py-0.5 text-[10px] rounded-full font-semibold uppercase tracking-wider">
                                                    In Progress
                                                </span>
                                            )}
                                            <span className="text-3xl font-semibold text-coral-500/50 group-hover:text-coral-500 transition-colors duration-300">
                                                {project.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Meta */}
                                    <h2 className="text-xl font-bold leading-tight text-ink-primary mb-1">
                                        {project.title}
                                    </h2>
                                    <p className="text-coral-400 text-xs font-semibold uppercase tracking-wide mb-3">
                                        {project.subtitle}
                                    </p>
                                    <p className="text-ink-muted text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Stack Footer: Image & Tech Pills */}
                                <div className="space-y-4 mt-auto">
                                    <div className="w-full h-44 rounded-xl border border-stroke overflow-hidden bg-bg-surface/50 p-1 group-hover:border-coral-500/20 transition-all duration-300">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} Card Preview`}
                                            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => { e.target.src = "https://placehold.co/400x200/1a1714/e8705a?text=Preview" }}
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="pill text-[10px]">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="pill text-[10px] text-coral-400">
                                                +{project.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Modal Portal Rendering */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

export { Projects };