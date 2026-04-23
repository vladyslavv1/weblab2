function Education() {
    return (
        <section className="p-8 max-w-4xl mx-auto bg-slate-50 rounded-xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-600 pl-4">
                Освіта та Навички
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-700">Навчання</h3>
                    <p className="text-slate-600">
                        <span className="font-bold">PortSwigger Academy:</span> Практика Web Security (XSS, Injection).
                    </p>
                    <p className="text-slate-600">
                        <span className="font-bold">Labor Protection:</span> Сертифікована підготовка з охорони праці.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-700">Стек технологій</h3>
                    <div className="flex flex-wrap gap-2">
                        {['VMware', 'Python', 'Linux', 'PGP', 'Web Security', 'SOC'].map((skill) => (
                            <span key={skill} className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-md shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 italic text-slate-500">
                Додаткові інтереси: Автомобільна інженерія (Maintenance Volkswagen Jetta).
            </div>
        </section>
    );
}

export default Education;