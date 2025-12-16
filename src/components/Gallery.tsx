import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";

const galleryImages = [
  { src: gallery1, alt: "Barber at work" },
  { src: gallery2, alt: "Shop interior" },
  { src: gallery3, alt: "Styling in progress" },
  { src: gallery4, alt: "Cheers Barbershop" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const gallerySection = useScrollAnimation();

  return (
    <section
      ref={gallerySection.ref}
      className={`py-20 bg-background transition-all duration-[4500ms] ${
        gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Take a look inside our shop and see our work in action
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-[4000ms] ${
                gallerySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold transition-all duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
