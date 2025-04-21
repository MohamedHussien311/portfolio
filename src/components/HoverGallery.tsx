
import React from "react";
import { Image as ImageIcon } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  link?: string;
};

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    alt: "Coding at night",
    link: "https://unsplash.com/photos/turned-on-gray-laptop-computer-photo-1488590528505-98d2b5aba04b",
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    alt: "Working in bed",
    link: "https://unsplash.com/photos/photo-1649972904349-6e44c42644a7",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    alt: "Programming screen",
    link: "https://unsplash.com/photos/photo-1461749280684-dccba630e2f6",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    alt: "Laptop and coffee",
    link: "https://unsplash.com/photos/photo-1581091226825-a6a2a5aee158",
  },
];

const HoverGallery = () => (
  <section id="hover" className="pt-32 pb-10 bg-gradient-to-b from-white via-secondary/5 to-white min-h-[60vh] animate-fade-in">
    <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-8 text-primary text-center">Hover Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {images.map((img, idx) => (
        <a
          key={img.src}
          href={img.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group aspect-[4/5] rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
            <ImageIcon size={42} className="text-white mb-2 drop-shadow" />
            <p className="text-white text-lg font-semibold">{img.alt}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default HoverGallery;
