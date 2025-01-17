import React from 'react';
import Image from 'next/image';

export default function Page() {
    const skills = ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"];

    return (
        <div className="flex flex-col gap-4 pb-6">
            <div className={`flex flex-col p-4 overflow-hidden rounded-xl bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 border-2`}>
                <div className="py-1 flex flex-row">
                    <Image src={"/bttai-logo.jpeg"} alt={"BTTAI"} width={40} height={40} className="object-cover rounded-lg self-center mr-4" />
                    <div className="self-center">
                        <h3 className="text-xl font-bold">Break Through Tech AI Fellow</h3>
                        <p className="text-sm">Cornell Tech</p>
                    </div>
                </div>
                <div className="py-1">
                    <p className="text-sm text-gray-600 dark:text-white">Jun 2023-May 2024</p>
                    <p className="text-sm text-gray-600 dark:text-white">New York, NY</p>
                </div>
                <div className="py-1">
                    <p className="text-sm">ML foundations course, career coaching, mentorship, and projects.</p>
                </div>
                <div className="py-1 flex flex-row flex-wrap gap-2">
                    {skills && skills.map((skill, index) => (
                        <div key={index} className="text-xs font-bold text-pink-600 bg-pink-50 border border-pink-200 dark:bg-pink-300 dark:border-pink-600 rounded-full px-2 py-1">
                            {skill}
                        </div>
                    ))}
                </div>
                <div className="py-1 flex flex-row flex-wrap gap-2">
                    <a href="https://www.breakthroughtech.org/ai" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-indigo-600 font-bold bg-indigo-100 border border-indigo-400 hover:bg-indigo-200 rounded-full p-2">
                        www.breakthroughtech.org/ai
                    </a>
                </div>
            </div>

            <div className="flex justify-center">
                <Image src="/work/bttai/passed-ml.png" alt="Congrats! You passed ML Foundations" width={600} height={150} className="rounded-md" />
            </div>
            <div className="flex flex-row gap-6 justify-center">
                <div className="flex flex-col gap-1 w-fit">
                    <Image src="/work/bttai/bttai-1.JPG" alt="Me and my group at Roosevelt Island" width={250} height={250} className="rounded-md h-auto" />
                    <p className="text-sm text-gray-500">Caption</p>
                </div>
                <div className="flex flex-col gap-1 w-fit">
                    <Image src="/work/bttai/bttai-2.JPG" alt="Me holding my completion certificate" width={250} height={250} className="rounded-md h-auto" />
                    <p className="text-sm text-gray-500">Caption</p>
                </div>
            </div>
        </div>
    )
}