"use client";

import { SunMoon } from 'lucide-react';

export default function LightDarkModeButton() {
    function toggleTheme() {
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div onClick={toggleTheme} className={`inline-flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-300 duration-300 dark:bg-slate-800 dark:hover:bg-slate-700`}>
            <SunMoon />
        </div>
    );
};