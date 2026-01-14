'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: t.nav.home, href: '/' },
        { label: t.nav.products, href: '#products' },
        { label: t.nav.process, href: '#process' },
        { label: t.nav.certifications, href: '#certifications' },
        { label: t.nav.about, href: '#about' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-brand-green-700 p-2 rounded-lg">
                            <Leaf className="text-white w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight text-brand-green-900">MEE-POONG</span>
                            <span className="text-[10px] uppercase tracking-widest text-brand-gold-700 font-semibold -mt-1 underline decoration-brand-gold-500 underline-offset-2">Fruit Export</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 hover:text-brand-green-700 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <LanguageSwitcher />
                        <a
                            href="#contact"
                            className="bg-brand-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-green-800 transition-all shadow-md active:scale-95"
                        >
                            {t.nav.contact}
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-600 hover:text-brand-green-700"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium text-gray-700 hover:text-brand-green-700"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block bg-brand-green-700 text-white px-5 py-3 rounded-lg text-center font-semibold"
                    >
                        {t.nav.contact}
                    </a>
                </div>
            )}
        </nav>
    );
}
