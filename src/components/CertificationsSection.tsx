'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ShieldCheck, Map, CheckCircle2 } from 'lucide-react';

export default function CertificationsSection() {
    const { t } = useLanguage();

    const certs = [
        { icon: BadgeCheck, title: 'GAP (Good Agricultural Practices)', desc: 'Ensuring food safety and environmental sustainability at the farm level.' },
        { icon: ShieldCheck, title: 'GMP (Good Manufacturing Practices)', desc: 'Stringent quality control in our packing house and facilities.' },
        { icon: Map, title: 'Export License & DOA', desc: 'Fully registered with the Department of Agriculture for China exports.' },
        { icon: Award, title: 'Phytosanitary Certified', desc: 'Every shipment is inspected and certified free from pests and diseases.' },
    ];

    return (
        <section id="certifications" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900 mb-6">{t.nav.certifications}</h2>
                        <div className="w-20 h-1.5 bg-brand-gold-500 mb-8 rounded-full" />
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We adhere to the highest international standards to ensure our fruits reach your port in perfect condition. Our facilities and farms are rigorously inspected and certified by Thai and international bodies.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-brand-green-700 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-green-900 text-sm">Packing House No.</h4>
                                    <p className="text-xs text-gray-500">DOA Registry: 12345/67</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-brand-green-700 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-brand-green-900 text-sm">Export License</h4>
                                    <p className="text-xs text-gray-500">No. EX88-9900</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
                        {certs.map((cert, i) => (
                            <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:border-brand-gold-500/50 transition-all shadow-sm group">
                                <div className="w-14 h-14 bg-brand-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green-700 transition-colors">
                                    <cert.icon className="w-7 h-7 text-brand-green-700 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-brand-green-900 mb-1">{cert.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{cert.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Fixed import for BadgeCheck which was used but not imported
import { BadgeCheck } from 'lucide-react';
