import { useCallback, useEffect, useState } from "react";

function useProjectLightbox(images = []) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const hasSelectedImage = selectedImageIndex !== null;
  const selectedImage = hasSelectedImage ? images[selectedImageIndex] : null;

  const openLightbox = useCallback((index) => {
    setSelectedImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null || !images.length) {
        return currentIndex;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null || !images.length) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (!hasSelectedImage || !images.length) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    hasSelectedImage,
    images.length,
    closeLightbox,
    showPreviousImage,
    showNextImage,
  ]);

  return {
    selectedImageIndex,
    selectedImage,
    openLightbox,
    closeLightbox,
    showPreviousImage,
    showNextImage,
  };
}

export default useProjectLightbox;