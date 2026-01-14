'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag, Calendar, Package, Ruler, Truck } from 'lucide-react';

interface ProductItemProps {
    id: string;
    data: {
        name: string;
        season: string;
        grade: string;
        packaging: string;
        desc: string;
    };
}

function ProductCard({ data }: ProductItemProps) {
    const { t } = useLanguage();

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
            <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                {/* Placeholder Image with overlay */}
                <div className="absolute inset-0 bg-brand-green-900/5 group-hover:bg-transparent transition-colors z-10" />
                <div className="text-gray-400 font-bold text-lg uppercase tracking-widest">{data.name}</div>

                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-green-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        Export Grade
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-green-900 mb-2 truncate">{data.name}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 h-10">{data.desc}</p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-xs">
                        <Calendar className="w-4 h-4 text-brand-gold-600" />
                        <span className="font-semibold text-gray-700">{t.products.harvest}:</span>
                        <span className="text-gray-500">{data.season}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                        <Ruler className="w-4 h-4 text-brand-gold-600" />
                        <span className="font-semibold text-gray-700">{t.products.grade}:</span>
                        <span className="text-gray-500">{data.grade}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                        <Package className="w-4 h-4 text-brand-gold-600" />
                        <span className="font-semibold text-gray-700">{t.products.packaging}:</span>
                        <span className="text-gray-500">{data.packaging}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                        <Truck className="w-4 h-4 text-brand-gold-600" />
                        <span className="font-semibold text-gray-700">{t.products.shipping}:</span>
                        <span className="text-gray-500">Reefer Container (Sea)</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <span className="block text-[10px] text-gray-400 uppercase font-bold">{t.products.minOrder}</span>
                        <span className="text-brand-green-800 font-bold">≥ 1 Ton</span>
                    </div>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 text-brand-gold-600 font-bold text-sm hover:text-brand-gold-700 transition-colors"
                    >
                        {t.products.requestBtn}
                        <ShoppingBag className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function ProductSection() {
    const { t } = useLanguage();
    const fruits = t.products.items;

    return (
        <section id="products" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900 mb-4">{t.products.title}</h2>
                    <div className="w-20 h-1.5 bg-brand-gold-500 mx-auto mb-6 rounded-full" />
                    <p className="text-gray-500">{t.products.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProductCard id="durian" data={fruits.durian} />
                    <ProductCard id="mangosteen" data={fruits.mangosteen} />
                    <ProductCard id="longan" data={fruits.longan} />
                    <ProductCard id="mango" data={fruits.mango} />
                </div>
            </div>
        </section>
    );
}
