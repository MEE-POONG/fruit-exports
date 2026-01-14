'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { History, Globe2, Factory, Users } from 'lucide-react';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900 mb-6">{t.nav.about}</h2>
                        <div className="w-20 h-1.5 bg-brand-gold-500 mb-8 rounded-full" />
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Founded in Chanthaburi, the heart of Thai fruit agriculture, MEE-POONG has grown from a local farm cooperative to a leading B2B exporter. Our mission is to bridge the gap between premium Thai orchards and the growing demand in China, ensuring quality, freshness, and reliability in every shipment.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-gold-50 rounded-lg flex items-center justify-center">
                                        <History className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <h4 className="font-bold text-brand-green-900">15+ Years</h4>
                                </div>
                                <p className="text-xs text-gray-500">Deep experience in seasonal fruit harvesting and processing.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-gold-50 rounded-lg flex items-center justify-center">
                                        <Globe2 className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <h4 className="font-bold text-brand-green-900">China Focus</h4>
                                </div>
                                <p className="text-xs text-gray-500">Specialized logistics to Shanghai, Guangzhou, and beyond.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-gold-50 rounded-lg flex items-center justify-center">
                                        <Factory className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <h4 className="font-bold text-brand-green-900">High Capacity</h4>
                                </div>
                                <p className="text-xs text-gray-500">Processing up to 500 tons of fruit per month during peak season.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-brand-gold-50 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <h4 className="font-bold text-brand-green-900">Partner Farms</h4>
                                </div>
                                <p className="text-xs text-gray-500">Network of 100+ GAP-certified farms across Eastern Thailand.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square bg-brand-green-50 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-inner border border-brand-green-100/50">
                            <div className="text-brand-green-200 uppercase font-black text-6xl rotate-12 opacity-30 select-none">Export Quality</div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-4/5 h-4/5 bg-white rounded-2xl shadow-xl flex items-center justify-center p-8 border border-gray-100">
                                    <div className="text-center">
                                        <span className="block text-4xl mb-4">🚛</span>
                                        <h5 className="font-bold text-brand-green-900 mb-2">Our Logistics Center</h5>
                                        <p className="text-xs text-gray-400">Strategically located for rapid processing and cold-chain dispatch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decors */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold-500/20 rounded-full blur-2xl" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-green-500/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
