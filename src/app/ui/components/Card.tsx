interface CardProps {
    title: string;
    company?: string;
    description?: string;
    date: string;
    location?: string;
    img?: string;
    skills?: string[];
    href?: string;
    className?: string;
}

export const Card = ({
    title,
    company,
    description,
    date,
    location,
    skills,
    img,
    href,
    className,
}: CardProps) => {
    return (
        <a href={href}>
            <div className={`flex flex-col p-4 overflow-hidden rounded-xl bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800 border-2 hover:border-4 hover:border-pink-100 duration-300 ${className}`}>
                <div className="py-1 flex flex-row">
                    {img && (
                        <img src={img} alt={company} className="h-10 w-10 object-cover rounded-lg self-center mr-4" />
                    )}
                    <div className="self-center">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-sm">{company}</p>
                    </div>
                </div>
                <div className="py-1">
                    <p className="text-sm text-gray-600 dark:text-white">{date}</p>
                    <p className="text-sm text-gray-600 dark:text-white">{location}</p>
                </div>
                <div className="py-1">
                    <p className="text-sm">{description}</p>
                </div>
                <div className="py-1 flex flex-row flex-wrap gap-2">
                    {skills && skills.map((skill, index) => (
                        <div key={index} className="text-xs font-bold text-pink-600 bg-pink-50 border border-pink-200 dark:bg-pink-300 dark:border-pink-600 rounded-full px-2 py-1">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </a>

    );
};