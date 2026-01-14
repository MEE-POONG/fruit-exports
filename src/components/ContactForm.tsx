'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Send, QrCode, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 bg-brand-green-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    {/* Form Side */}
                    <div className="lg:w-3/5 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-brand-green-900 mb-2">{t.nav.contact}</h2>
                        <p className="text-gray-500 mb-8 font-medium">B2B Quotation Request (Minimum 1 Ton)</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fruit Type</label>
                                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none">
                                        <option>Durian (Monthong)</option>
                                        <option>Mangosteen</option>
                                        <option>Longan</option>
                                        <option>Mango</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quantity (Tons)</label>
                                    <input type="number" min="1" placeholder="Min. 1" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Destination Port (China)</label>
                                    <input type="text" placeholder="e.g. Guangzhou, Shanghai" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Company Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contact Person</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">WeChat ID / WhatsApp</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green-700 focus:bg-white transition-all outline-none" />
                            </div>

                            <button type="submit" className="w-full bg-brand-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-green-800 transition-all shadow-lg active:scale-[0.98]">
                                Submit Inquiry
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Side */}
                    <div className="lg:w-2/5 bg-brand-green-50 p-8 md:p-12 border-l border-gray-100">
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-brand-green-900 mb-6">Direct Export Support</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                                        <Mail className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-gray-400 uppercase font-black">Email Official</span>
                                        <span className="text-brand-green-900 font-bold">export@mee-poong.com</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                                        <MessageSquare className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-gray-400 uppercase font-black">WeChat</span>
                                        <span className="text-brand-green-900 font-bold">mee-poong-export</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                                        <Phone className="w-5 h-5 text-brand-gold-600" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] text-gray-400 uppercase font-black">Phone / WhatsApp</span>
                                        <span className="text-brand-green-900 font-bold">+66 81 234 5678</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-brand-green-100 text-center">
                            <div className="w-32 h-32 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center overflow-hidden">
                                <QrCode className="w-20 h-20 text-gray-300" />
                            </div>
                            <span className="text-xs font-bold text-brand-green-900">Scan to add WeChat</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
