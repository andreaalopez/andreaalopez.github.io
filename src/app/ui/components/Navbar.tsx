import { SocialButton } from './SocialButton';
import LightDarkModeButton from './LightDarkModeButton';
import { Github, Linkedin, Mail, FileUser } from 'lucide-react';

export const Navbar = () => {
    return (
        <div className="flex flex-row gap-2">
            <LightDarkModeButton />
            <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/andrea-lopez-1bb56321b/" />
            <SocialButton icon={Github} href="https://github.com/andreaalopez" />
            <SocialButton icon={Mail} href="mailto:apl2171@barnard.edu" />
            <SocialButton icon={FileUser} href="resume.pdf" />
        </div>
    )
}
