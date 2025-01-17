import React from 'react';
import { Card } from '../components/Card';

export const WorkSection = () => (
    <div>
        <div className="text-left">
            <h1 className="text-2xl font-bold py-6">Experience</h1>
            <div className="flex flex-col gap-6">
                <Card
                    title="Software Engineer Intern"
                    company="Palantir"
                    description="Frontend engineer on the infrastructure team."
                    date="May-Aug 2024"
                    location="New York, NY"
                    img="/palantir-logo.png"
                    skills={["React", "TypeScript", "Grafana"]}
                    href="https://www.palantir.com"
                />
                <Card
                    title="Teaching Assistant"
                    company="Columbia University"
                    description="TA for Fundamentals of Computer Systems class."
                    date="Jan-May 2024"
                    location="New York, NY"
                    img="/columbia-logo.png"
                    href="https://www.cs.columbia.edu"
                />
                <Card
                    title="Break Through Tech AI Fellow"
                    company="Cornell Tech"
                    description="ML foundations course, career coaching, mentorship, and projects."
                    date="Jun 2023-May 2024"
                    location="New York, NY"
                    img="/bttai-logo.jpeg"
                    skills={["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"]}
                    href="/work/bttai"
                />
                <Card
                    title="Data Science Intern"
                    company="Oracle"
                    description="Data science and UX research on the design team."
                    date="May-Aug 2023"
                    location="Seattle, WA"
                    img="/oracle-logo.png"
                    skills={["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"]}
                    href="/work/oracle"
                />
                <Card
                    title="Natural Language Processing Researcher"
                    company="Columbia University"
                    description="Worked at Julia Hirschberg's Natural Language Processing lab. Funded by the Barnard College Summer Research Institute."
                    date="May-Aug 2022"
                    location="New York, NY"
                    img="/columbia-logo.png"
                    skills={["Python"]}
                    href="https://www.cs.columbia.edu/speech/"
                />
            </div>
        </div>

        <div className="text-left">
            <h1 className="text-2xl font-bold py-6">Projects</h1>
            <div className="flex flex-col gap-6">
                <Card
                    title="Portfolio Website"
                    description="This website! 😊"
                    date="Jan 2025"
                    skills={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
                    href="https://github.com/andreaalopez/andreaalopez.github.io"
                />
                <Card
                    title="InspoHub"
                    description="A simple social media web app. My final project for my CodePath Intermediate Web Development course."
                    date="Nov 2023"
                    skills={["React", "JavaScript", "HTML", "CSS"]}
                    href="https://github.com/andreaalopez/InspoHub"
                />
                <Card
                    title="Misinformation Detection"
                    company="United Nations International Computing Centre"
                    description="Implemented a machine learning model to detect misinformation about polio vaccines on social media."
                    date="Sep-Dec 2023"
                    img="/unicc-logo.jpg"
                    skills={["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy"]}
                />
                <Card title="Pantry Puzzle"
                    company="HackMIT 2023"
                    description="A website which uses the OpenAI API to suggest recipes people can create using ingredients they already have."
                    date="Sep 2023"
                    skills={["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenAI API"]}
                    href="https://github.com/andreaalopez/HackMIT2023"
                />
                <Card
                    title="Event Planning Website"
                    description="Website where Columbia and Barnard student organizations can easily plan events on campus. My final project for my Introduction to Databases class at Columbia University."
                    date="May 2023"
                    skills={["Postgre SQL", "Flask", "Python", "HTML", "CSS"]}
                    href="https://github.com/lucyc166/w4111-proj"
                />
                <Card
                    title="Connect Puerto Rico"
                    company="Columbia DivHacks 2022"
                    description="A website focused on disaster relief in Puerto Rico. DivHacks hackathon winner in 2 categories: Best Beginner Project and Best Project Using Wix."
                    date="Sep 2022"
                    skills={["HTML", "CSS", "Wix"]}
                    href="https://github.com/andreaalopez/Connect-Puerto-Rico"
                />

            </div>
        </div>

        <div className="text-left">
            <h1 className="text-2xl font-bold py-6">Community Involvement</h1>
            <div className="flex flex-col gap-6">
                <Card
                    title="Member"
                    company="ColorStack"
                    description="An amazing community of Black, Hispanic, and Indigenous students in tech."
                    date="May 2023-Present"
                    img="/colorstack-logo.png"
                    href="https://www.colorstack.org"
                />
                <Card
                    title="Mentor"
                    company="HeadStart"
                    description="Mentored a freshman computer science student."
                    date="Jan-May 2024"
                    img="/headstart-logo.png"
                    href="https://www.headstartfellowship.com"
                />
            </div>
        </div>
    </div>
)
