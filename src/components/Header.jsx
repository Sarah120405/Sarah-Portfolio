import { MdMenu } from "react-icons/md";
import { useState } from "react";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="w-full fixed top-0 z-10 px-6 py-3 md:px-12 backdrop-blur-md bg-bg-base/70 border-b border-stroke/40">
                <nav className="max-w-6xl mx-auto w-full flex items-center justify-between">

                    <span className="text-ink-primary font-bold text-lg">Sarah Qureshi</span>
                    <ul className="flex items-center gap-8 text-ink-secondary font-medium hidden md:flex">
                        <li className="list-none"><a href="#projects" className="cursor-pointer hover:text-ink-primary transition-colors">Projects</a></li>
                        <li className="list-none"><a href="#skills" className="cursor-pointer hover:text-ink-primary transition-colors">Skills</a></li>
                        <li className="list-none"><a href="#experience" className="cursor-pointer hover:text-ink-primary transition-colors">Experience</a></li>
                        <li className="list-none"><a href="#contact" className="cursor-pointer hover:text-ink-primary transition-colors">Contact</a></li>
                    </ul>
                    <button className="md:hidden text-ink-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}> <MdMenu size={24} /></button>

                </nav>
                <div className="md:hidden">
                    {isMenuOpen && (
                        <ul className="absolute top-full left-0 right-0 bg-bg-base border-b border-stroke py-4">
                            <li className="list-none px-6 py-2"><a href="#projects" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-ink-primary transition-colors block">Projects</a></li>
                            <li className="list-none px-6 py-2"><a href="#skills" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-ink-primary transition-colors block">Skills</a></li>
                            <li className="list-none px-6 py-2"><a href="#experience" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-ink-primary transition-colors block">Experience</a></li>
                            <li className="list-none px-6 py-2"><a href="#contact" onClick={() => setIsMenuOpen(false)} className="cursor-pointer hover:text-ink-primary transition-colors block">Contact</a></li>
                        </ul>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header;