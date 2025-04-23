
import { Linkedin, Github, Facebook, Phone } from "lucide-react";
import React from "react";

type SocialLinksProps = {
  linkedin?: string;
  github?: string;
  facebook?: string;
  phone?: string;
  className?: string;
  iconSize?: number;
};

const SocialLinks: React.FC<SocialLinksProps> = ({
  linkedin,
  github,
  facebook,
  phone,
  className = "",
  iconSize = 22,
}) => {
  const socialStyles = {
    linkedin: "text-[#0077b5] hover:bg-[#ebf4fa]",
    github: "text-[#181717] hover:bg-gray-200",
    facebook: "text-[#1877f3] hover:bg-[#e7f3ff]",
    phone: "text-primary hover:bg-primary/10",
  };
  return (
    <div className={`flex flex-wrap gap-6 items-center ${className}`}>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={`rounded-full p-3 transition ${socialStyles.linkedin}`}
        >
          <Linkedin size={iconSize} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`rounded-full p-3 transition ${socialStyles.github}`}
        >
          <Github size={iconSize} />
        </a>
      )}
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={`rounded-full p-3 transition ${socialStyles.facebook}`}
        >
          <Facebook size={iconSize} />
        </a>
      )}
      {phone && (
        <a
          href={`tel:${phone}`}
          aria-label="Phone"
          className={`rounded-full p-3 transition ${socialStyles.phone}`}
        >
          <Phone size={iconSize} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
