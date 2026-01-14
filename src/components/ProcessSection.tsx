'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { MailQuestion, FileCheck, Calculator, Box, BadgeCheck, Ship } from 'lucide-react';

export default function ProcessSection() {
    const { t } = useLanguage();

    const steps = [
        { icon: MailQuestion, title: 'Inquiry', desc: 'Send us your fruit type and quantity requirements.' },
        { icon: FileCheck, title: 'Confirmation', desc: 'We verify availability and harvest schedule.' },
        { icon: Calculator, title: 'Quotation', desc: 'Receive FOB/CIF pricing based on your port.' },
        { icon: Box, title: 'Packing', desc: 'Professional grading and packing in our certified house.' },
        { icon: BadgeCheck, title: 'Certification', desc: 'Issuing Phytosanitary and Origin certificates.' },
        { icon: Ship, title: 'Shipment', desc: 'Cold chain delivery to your destination port.' },
    ];

    return (
        <section id="process" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900 mb-4">{t.nav.process}</h2>
                    <div className="w-20 h-1.5 bg-brand-gold-500 mx-auto mb-6 rounded-full" />
                    <p className="text-gray-500">A seamless, transparent flow for bulk international fruit orders.</p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-brand-green-100 -z-10" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-brand-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green-700 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                                    <step.icon className="w-10 h-10 text-brand-green-700 group-hover:text-white transition-colors" />
                                </div>
                                <div className="relative">
                                    <span className="absolute -top-10 -left-2 text-4xl font-black text-brand-green-700/5 select-none">{i + 1}</span>
                                    <h3 className="text-lg font-bold text-brand-green-900 mb-2">{step.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
