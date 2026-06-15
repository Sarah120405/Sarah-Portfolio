import { createPortal } from "react-dom";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaBolt, FaBullseye, FaClock } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    // Helper to render correct stat icons dynamically
    const renderStatIcon = (type) => {
        switch (type) {
            case "latency": return <FaBolt className="text-coral-500 w-5 h-5 flex-shrink-0" />;
            case "accuracy": return <FaBullseye className="text-coral-500 w-5 h-5 flex-shrink-0" />;
            case "speed":
            default: return <FaClock className="text-coral-500 w-5 h-5 flex-shrink-0" />;
        }
    };

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Body Container */}
            <div className="relative w-full max-w-3xl bg-gradient-to-b from-[#1a1714] to-[#0f0f0f] border border-stroke rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">

                {/* Header Actions */}
                <div className="flex items-center justify-between p-6 border-b border-stroke bg-[#1a1714]/50">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold font-mono text-coral-500">{project.id}</span>
                        <div>
                            <h3 className="text-xl font-bold text-ink-primary">{project.title}</h3>
                            <p className="text-xs text-coral-400 font-medium">{project.subtitle}</p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl bg-stroke hover:bg-coral-500 text-ink-primary hover:text-white transition-all cursor-pointer"
                        aria-label="Close modal"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1">

                    {/* Big Screenshot / Demo Video Preview */}
                    <div className="w-full aspect-video rounded-2xl border border-stroke overflow-hidden bg-bg-surface">
                        {project.video ? (
                            <video
                                src={project.video}
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <img
                                src={project.image}
                                alt={`${project.title} detailed screenshot`}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://placehold.co/800x450/1a1714/e8705a?text=Preview+Coming+Soon" }}
                            />
                        )}
                    </div>

                    {/* Performance Stats (from commented-out designs) */}
                    {project.stats && project.stats.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl border border-stroke bg-bg-surface/30">
                            {project.stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    {renderStatIcon(stat.type)}
                                    <div>
                                        <span className="text-ink-primary font-bold text-sm md:text-base block">{stat.value}</span>
                                        <span className="text-[10px] text-ink-muted uppercase tracking-wider block">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Detailed Explanation */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-ink-secondary uppercase tracking-wide">About Project</h4>
                        <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                            {project.detailedDescription || project.description}
                        </p>
                    </div>

                    {/* Technologies Tags */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-ink-secondary uppercase tracking-wide">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="pill bg-bg-card text-ink-muted border border-stroke rounded-full px-3 py-1 text-xs font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Actions */}
                <div className="p-6 border-t border-stroke bg-[#1a1714]/30 flex flex-wrap gap-4 items-center justify-end">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stroke hover:border-coral-500 hover:text-coral-500 text-sm font-semibold transition-all cursor-pointer"
                        >
                            <FaGithub size={16} /> Codebase
                        </a>
                    )}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-coral-500 text-white hover:bg-coral-400 text-sm font-semibold transition-all cursor-pointer"
                        >
                            <FaExternalLinkAlt size={14} /> Launch Site
                        </a>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ProjectModal;
