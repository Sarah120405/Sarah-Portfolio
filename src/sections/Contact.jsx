import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        // Simulate API request delay
        setTimeout(() => {
            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    const contactDetails = [
        {
            icon: FaEnvelope,
            label: "Email",
            value: "sarahqureshi2005@gmail.com",
            link: "mailto:sarahqureshi2005@gmail.com",
            color: "text-coral-500",
            bgColor: "bg-coral-950/40 border-coral-500/20"
        },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/sarah-qureshi",
            link: "https://www.linkedin.com/in/sarah-qureshi-sq12/",
            color: "text-blue-400",
            bgColor: "bg-blue-950/40 border-blue-500/20"
        },
        {
            icon: FaGithub,
            label: "GitHub",
            value: "github.com/Sarah120405",
            link: "https://github.com/Sarah120405",
            color: "text-[#9a8f85]",
            bgColor: "bg-bg-surface border-stroke"
        },
        {
            icon: FaMapMarkerAlt,
            label: "Location",
            value: "Ahmedabad, India",
            link: null,
            color: "text-emerald-400",
            bgColor: "bg-emerald-950/40 border-emerald-500/20"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col items-center py-20 relative overflow-hidden" id="contact">
            {/* Background decorative glow */}
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-coral-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
                {/* Header */}
                <div className="bg-coral-950 text-sm text-coral-500 animate-pulse w-fit px-3 py-1 rounded-full mb-4">
                    <p>Get in touch</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-ink-primary mb-2">
                    Contact Me
                </h1>
                <p className="text-ink-muted text-sm lg:text-base mb-12 max-w-xl">
                    I'm currently seeking internships, full-time opportunities, or projects to collaborate on. Feel free to drop a message!
                </p>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Contact Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="card-style p-6 flex flex-col gap-6">
                            <h2 className="text-xl font-bold text-ink-primary">Let's Connect</h2>
                            <p className="text-sm text-ink-muted leading-relaxed">
                                Whether you have a question, want to talk about developer opportunities, or just want to connect — feel free to send an email or reach out on social channels.
                            </p>

                            <div className="space-y-4">
                                {contactDetails.map((detail, index) => {
                                    const IconComponent = detail.icon;
                                    const isClickable = !!detail.link;

                                    const CardContent = (
                                        <div className="flex items-center gap-4 p-4 rounded-2xl border border-stroke bg-bg-base/30 hover:border-stroke/80 transition-all duration-300">
                                            <div className={`flex items-center justify-center w-10 h-10 rounded-xl border ${detail.bgColor} ${detail.color}`}>
                                                <IconComponent size={16} />
                                            </div>
                                            <div className="overflow-hidden">
                                                <span className="text-[10px] text-ink-muted uppercase tracking-wider block font-semibold">
                                                    {detail.label}
                                                </span>
                                                <span className="text-sm text-ink-primary font-medium block truncate hover:text-coral-400 transition-colors duration-200">
                                                    {detail.value}
                                                </span>
                                            </div>
                                        </div>
                                    );

                                    return isClickable ? (
                                        <a
                                            key={index}
                                            href={detail.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block cursor-pointer"
                                        >
                                            {CardContent}
                                        </a>
                                    ) : (
                                        <div key={index}>{CardContent}</div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="card-style p-6 md:p-8 relative">
                            {status.submitted ? (
                                /* Success State Panel */
                                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-fadeIn">
                                    <FaCheckCircle className="text-emerald-500 w-16 h-16 animate-bounce" />
                                    <h2 className="text-2xl font-bold text-ink-primary">Message Sent!</h2>
                                    <p className="text-sm text-ink-muted max-w-sm">
                                        Thanks for reaching out. Your message has been received successfully, and I will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setStatus((prev) => ({ ...prev, submitted: false }))}
                                        className="mt-4 px-6 py-2.5 rounded-full border border-stroke hover:border-coral-500 hover:text-coral-500 text-sm font-semibold transition-all cursor-pointer"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                /* Contact Form Input fields */
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-xl font-bold text-ink-primary">Send a Message</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-semibold text-ink-secondary uppercase tracking-wider block">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-[#171412] border border-stroke rounded-xl px-4 py-3 text-sm text-ink-primary placeholder-ink-muted/50 focus:outline-none focus:border-coral-500/50 focus:ring-1 focus:ring-coral-500/20 transition-all duration-300"
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-semibold text-ink-secondary uppercase tracking-wider block">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full bg-[#171412] border border-stroke rounded-xl px-4 py-3 text-sm text-ink-primary placeholder-ink-muted/50 focus:outline-none focus:border-coral-500/50 focus:ring-1 focus:ring-coral-500/20 transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-semibold text-ink-secondary uppercase tracking-wider block">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project, roles, or just say hi..."
                                            className="w-full bg-[#171412] border border-stroke rounded-xl px-4 py-3 text-sm text-ink-primary placeholder-ink-muted/50 focus:outline-none focus:border-coral-500/50 focus:ring-1 focus:ring-coral-500/20 resize-none transition-all duration-300"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className="w-full bg-coral-500 hover:bg-coral-400 text-bg-base font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-coral-500/10 hover:shadow-coral-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status.submitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-bg-base border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane size={14} /> Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export { Contact };
