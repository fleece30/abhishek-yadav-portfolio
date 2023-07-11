import React from "react";
import ProjectSection from "@/components/ProjectSection";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <>
      <ProjectSection
        title={"Shelfly"}
        subtitle={"The perfect place to organize your movies and TV shows"}
        description={
          "Shelfy is the ultimate movie companion app that simplifies your\n" +
          "movie-watching experience. With Shelfly, effortlessly search,\n" +
          "organize, and create personalized watchlists of movies and shows you\n" +
          "want to see or have already watched. Discover trending films, explore\n" +
          "watchlists created by other users and never miss out on the next\n" +
          "blockbuster!"
        }
        imageSrc={"1i6B9LuUvzX-SgsGrM5bTc1ainE_K179w"}
        imageAlt={"Shelfly Mockup"}
        classes="bg-bg-pink"
        techStack={["React Native", "Firebase", "Next-Auth"]}
      />
      <ProjectSection
        title={"Spookydeck"}
        subtitle={
          "The ultimate destination for personalized horror movie recommendations"
        }
        description={
          "With over 8000 films spanning decades in our repository, you can start\n" +
          "your horror journey from any point of your choice. Browse through our\n" +
          "collection at random for unexpected scares, or enter a movie title or\n" +
          "genre to receive tailored suggestions. Utilize our unique Like Tree feature\n" +
          "to create a playlist of similar movies, incrementally narrowing down options\n" +
          "based on your preferences. Dive into the immersive world of horror with\n" +
          "SpookyDeck, where you'll discover new favorites, revisit classics, and\n" +
          "unleash your inner horror enthusiast."
        }
        imageSrc={"17RmlTpPzHvs4KtdZivtpu1xEvwTdpWKF"}
        imageAlt={"Image by aleksandr_samochernyi on Freepik"}
        link={"https://www.spookydeck.com/"}
        linkText={"Start your spooky journey here!"}
        classes={"flex-row-reverse"}
        techStack={["ReactJS", "FastAPI", "Python", "Pandas"]}
      />
    </>
  );
};

export default Projects;
