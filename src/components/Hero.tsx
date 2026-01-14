'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ChevronRight, Container, Ship, ShieldCheck } from 'lucide-react';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden bg-brand-green-900 text-white py-24 md:py-32">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-green-800/50 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-brand-green-800/50 border border-brand-green-700 px-4 py-2 rounded-full text-brand-gold-500 text-xs font-bold tracking-widest uppercase mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-500"></span>
                        </span>
                        Premium Thai Export Quality
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        {t.hero.title}
                    </h1>

                    <p className="text-lg md:text-xl text-brand-green-100/80 mb-10 max-w-2xl leading-relaxed">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <a
                            href="#contact"
                            className="bg-brand-gold-600 hover:bg-brand-gold-700 text-brand-green-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-gold-900/20 active:scale-95 group"
                        >
                            {t.hero.ctaRequest}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#about"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
                        >
                            {t.hero.ctaContact}
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
                        {[
                            { icon: Ship, text: t.highlights.coldchain },
                            { icon: Container, text: t.highlights.bulk },
                            { icon: ShieldCheck, text: t.highlights.docs },
                            { icon: ChevronRight, text: t.highlights.seasonal },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <item.icon className="w-8 h-8 text-brand-gold-500" />
                                <span className="text-xs md:text-sm font-semibold opacity-90">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
