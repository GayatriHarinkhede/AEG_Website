// First, create GalleryContext.js file:
import React, { createContext, useContext, useState } from 'react';
import GalleryView from './GalleryView';  // We'll create this next

const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState('keynotes');

  const openGallery = (category = 'keynotes') => {
    setInitialCategory(category);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <GalleryContext.Provider value={{ openGallery, closeGallery }}>
      {children}
      {isGalleryOpen && (
        <GalleryView onClose={closeGallery} initialCategory={initialCategory} />
      )}
    </GalleryContext.Provider>
  );
}

export const useGallery = () => useContext(GalleryContext);
