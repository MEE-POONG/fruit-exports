'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/translations';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const langs: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'th', label: 'TH' },
        { code: 'zh', label: '中文' },
    ];

    return (
        <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-gold-600" />
            <div className="flex bg-gray-100 rounded-full p-1">
                {langs.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${language === lang.code
                                ? 'bg-brand-green-700 text-white shadow-sm'
                                : 'text-gray-500 hover:text-brand-green-700'
                            }`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
