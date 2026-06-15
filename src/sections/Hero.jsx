import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import sarahProfileImg from "../assets/Sarah-profile.jpeg";


function Hero() {

    return (
        <section className="min-h-screen flex items-center">

            <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 md:px-12 lg:px-10 pt-0 lg:pt-28 md:pt-24 pb-16">
                <div className='order-2 lg:order-1'>
                    <div className="bg-coral-950 text-coral-500 animate-pulse w-fit px-2 py-1 rounded-full">
                        <p>Open to opportunities</p>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink-primary py-4">Full Stack Developer building
                        <span className="text-coral-500">  fast, scalable </span>user experiences
                    </h1>
                    <p className="text-ink-muted text-md lg:text-lg py-4">Computer Science student at Indus University with hands-on experience in building real-time platforms, Android apps, and high-performance web applications with measurable impact.</p>
                    <ul className="text-ink-muted flex flex-row gap-4 flex-wrap py-4">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Tailwind CSS</li>
                        <li>PostgreSQL</li>

                    </ul>

                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-coral-500 text-bg-base px-4 py-2 rounded-full cursor-pointer hover:bg-coral-950 transition-colors duration-300">View Projects</button>
                        <button className="bg-transparent text-ink-primary px-4 py-2 rounded-full cursor-pointer border border-stroke hover:bg-ink-secondary/30 hover:bg-bg-surface transition-colors duration-300">Download CV</button>
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-3.5 mt-4'>
                        <a href="https://github.com/Sarah120405" className='p-2.5 rounded-lg bg-stroke hover:bg-coral-500 transition-colors text-ink-primary'>
                            <FaGithub size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/sarah-qureshi-sq12" className='p-2.5 rounded-lg bg-stroke hover:bg-coral-500 transition-colors text-ink-primary'>
                            <FaLinkedin size={18} />
                        </a>
                        <a href="sarahqureshi2005@gmail.com" className='p-2.5 rounded-lg bg-stroke hover:bg-coral-500 transition-colors text-ink-primary'>
                            <FaEnvelope size={18} />
                        </a>

                    </div>

                </div>
                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <div className="flex-shrink-0 w-40 h-40 md:w-54 md:h-54 border-2 border-stroke bg-bg-surface/50 backdrop-blur-sm flex items-center justify-center p-1.5 relative group overflow-hidden shadow-inner">
                        <img
                            src={sarahProfileImg}
                            alt="Sarah Qureshi Profile"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>


            </main>
        </section>
    )
}

export { Hero };