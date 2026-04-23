function Experience() {
    return (
        <section className="p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">
                Досвід роботи
            </h2>

            <article className="bg-white p-6 rounded-lg shadow-md border border-slate-100 mb-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Компанія "SD"</h3>
                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                            SOC Analyst & Cybersecurity Assistant
                        </p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                        2025 — Present
                    </span>
                </div>

                <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-2">
                        <span className="text-blue-500">•</span>
                        Моніторинг інцидентів SOC та поглиблений аналіз мережевої безпеки.
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-500">•</span>
                        Успішне оновлення vCenter Server (7.0.2 → 7.0.3t) та Snapshot management.
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-500">•</span>
                        Діагностика критичних систем (Kernel-Power errors) та підтримка EDAN MFM CMS.
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-500">•</span>
                        Робота з криптографією: впровадження PGP для захищеного обміну даними.
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Experience;