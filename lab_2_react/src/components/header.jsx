function Header() {
    return (
        <header className="bg-slate-900 text-white p-10 shadow-xl text-center rounded-b-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight mb-3">
                Владислав Куд
            </h1>
            <p className="text-2xl text-blue-400 font-medium mb-4">
                IT Specialist | SOC Analyst | Cybersecurity Assistant
            </p>
            <div className="flex justify-center gap-6 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                    📍 Львів, Україна
                </span>
                <a href="mailto:vladyslav.kud@columbusltach.local" className="text-blue-300 hover:text-white transition-colors">
                    ✉️ vladyslav.kud@columbusltach.local
                </a>
            </div>
        </header>
    );
}

export default Header;