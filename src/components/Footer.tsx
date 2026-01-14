'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-brand-green-900 border-t border-brand-green-800 pt-16 pb-8 text-brand-green-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-brand-green-700 p-2 rounded-lg">
                                <Leaf className="text-white w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl tracking-tight text-white uppercase">MEE-POONG</span>
                                <span className="text-[10px] uppercase tracking-widest text-brand-gold-500 font-semibold -mt-1 underline decoration-brand-gold-500 underline-offset-2">Fruit Export</span>
                            </div>
                        </div>
                        <p className="text-brand-green-100/80 text-sm leading-relaxed mb-6">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.links}</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-brand-green-100/70 hover:text-brand-gold-500 text-sm">{t.nav.home}</a></li>
                            <li><a href="#products" className="text-brand-green-100/70 hover:text-brand-gold-500 text-sm">{t.nav.products}</a></li>
                            <li><a href="#process" className="text-brand-green-100/70 hover:text-brand-gold-500 text-sm">{t.nav.process}</a></li>
                            <li><a href="#about" className="text-brand-green-100/70 hover:text-brand-gold-500 text-sm">{t.nav.about}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-brand-green-100/70">
                                <Mail className="w-4 h-4 text-brand-gold-500" />
                                <span>export@mee-poong.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-brand-green-100/70">
                                <Phone className="w-4 h-4 text-brand-gold-500" />
                                <span>+66 81 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-brand-green-100/70">
                                <MessageSquare className="w-4 h-4 text-brand-gold-500" />
                                <span>WeChat: mee-poong-export</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-brand-green-100/70">
                                <MapPin className="w-4 h-4 text-brand-gold-500 translate-y-1" />
                                <span>123 Chanthaburi Industrial Zone, Thailand</span>
                            </li>
                        </ul>
                    </div>

                    {/* Certs Mini */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Certifications</h4>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-brand-green-800 p-3 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand-gold-500">GAP</div>
                            <div className="bg-brand-green-800 p-3 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand-gold-500">GMP</div>
                            <div className="bg-brand-green-800 p-3 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand-gold-500">DOA</div>
                            <div className="bg-brand-green-800 p-3 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand-gold-500">ISO 9001</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-brand-green-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] text-brand-green-100/50">{t.footer.copyright}</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[12px] text-brand-green-100/50 hover:text-brand-gold-500">Terms of Service</a>
                        <a href="#" className="text-[12px] text-brand-green-100/50 hover:text-brand-gold-500">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
