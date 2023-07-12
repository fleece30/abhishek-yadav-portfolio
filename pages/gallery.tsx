import React from "react";
import { imageURLs } from "@/assets/imageURLs";
import Image from "next/image";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = ({}) => {
  const imageLoader = ({ src }: { src: string }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`;
  };
  return (
    <div
      id={"gallery"}
      className="flex flex-col mt-24 px-5 md:px-32 w-full space-y-5"
    >
      <span className="text-3xl font-bold mb-5">Through my camera!</span>
      <div className="flex flex-col content-start md:h-[80em] flex-wrap overflow-x-scroll gap-2">
        {imageURLs.map((image, index) => {
          return (
            <div
              className="relative h-auto md:w-1/5 overflow-hidden items-center m-0"
              key={index}
            >
              <Image
                className="blog-image grow"
                loader={imageLoader}
                src={image}
                alt={"image"}
                width={700}
                height={300}
              />
            </div>
          );
        })}
        <h3 className="text-2xl font-bold text-center mt-5">
          More coming soon!
        </h3>
      </div>
    </div>
  );
};

export default Gallery;
