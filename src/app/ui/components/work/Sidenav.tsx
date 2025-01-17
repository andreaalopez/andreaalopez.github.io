'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '@/app/lib/links';
import clsx from 'clsx';

export default function SideNav() {
    const pathname = usePathname();
    return (
        <div className="my-5 flex flex-col gap-2 p-2">
            {links.map((link) => {
                const commonClasses = clsx(
                    "h-[48px] flex p-4 items-center justify-center md:justify-start grow rounded-md bg-gray-100 text-sm hover:bg-gray-200 hover:font-bold",
                    {
                        'bg-pink-100 hover:bg-pink-200 text-pink-600 font-bold': pathname === link.href,
                        'font-bold': link.name === 'Home',
                    },
                );

                return link.newtab ? (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
                        <p>{link.name}</p>
                    </a>
                ) : (
                    <Link key={link.name} href={link.href} passHref legacyBehavior>
                        <a className={commonClasses}>
                            <p>{link.name}</p>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}
