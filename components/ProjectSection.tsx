import React from "react";
import Image from "next/image";

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  linkText?: string;
  classes?: string;
  techStack: string[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  subtitle,
  description,
  imageAlt,
  imageSrc,
  link,
  linkText,
  classes,
  techStack,
}) => {
  const imageLoader = ({ src }: { src: string }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`;
  };

  return (
    <section
      className={`h-screen w-screen flex items-center justify-around px-32 ${classes}`}
    >
      <div className="flex flex-col space-y-5">
        <h1 className="text-6xl">
          <b>{title}</b>
        </h1>
        <h3 className="text-2xl">{subtitle}</h3>
        <h4 className="-mt-2">{description}</h4>
        <div className="flex space-x-2 font-bold">
          {techStack.map((tech, index) => {
            return (
              <div className="flex space-x-2" key={index}>
                <span>{tech}</span>
                {index !== techStack.length - 1 && <span>&bull;</span>}
              </div>
            );
          })}
        </div>
        {link && (
          <h4>
            <a href={link} target="_blank">
              <span className="small-link">{linkText}</span>
            </a>
          </h4>
        )}
      </div>
      <Image
        loader={imageLoader}
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={500}
      />
    </section>
  );
};

export default ProjectSection;
