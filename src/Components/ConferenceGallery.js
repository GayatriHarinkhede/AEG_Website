import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, Layout } from 'lucide-react';

// Import your conference images
import M1_1 from './ConferenceImages/M1_ (1).JPG';
import M1_2 from './ConferenceImages/M1_ (2).JPG';
import M1_3 from './ConferenceImages/M1_ (3).JPG';
import M1_4 from './ConferenceImages/M1_ (4).JPG';
import M1_5 from './ConferenceImages/M1_ (5).JPG';
import M1_6 from './ConferenceImages/M1_ (6).JPG';
import M1_7 from './ConferenceImages/M1_ (7).JPG';
import M1_8 from './ConferenceImages/M1_ (8).JPG';

const galleryImages = [
  { id: '1', thumbnail: M1_1, full: M1_1, title: "Conference Moment 1", description: "Keynote Session" },
  { id: '2', thumbnail: M1_2, full: M1_2, title: "Conference Moment 2", description: "Panel Discussion" },
  { id: '3', thumbnail: M1_3, full: M1_3, title: "Conference Moment 3", description: "Workshop Session" },
  { id: '4', thumbnail: M1_4, full: M1_4, title: "Conference Moment 4", description: "Networking Event" },
  { id: '5', thumbnail: M1_5, full: M1_5, title: "Conference Moment 5", description: "Technical Presentation" },
  { id: '6', thumbnail: M1_6, full: M1_6, title: "Conference Moment 6", description: "Awards Ceremony" },
  { id: '7', thumbnail: M1_7, full: M1_7, title: "Conference Moment 7", description: "Group Discussion" },
  { id: '8', thumbnail: M1_8, full: M1_8, title: "Conference Moment 8", description: "Closing Session" }
];

const ConferenceGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setViewMode('slideshow');
  };

  const handleNextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conference Gallery</h1>
          <p className="text-lg text-gray-600">Capturing moments from AIC-RAETHM 2025</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image)}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto p-4">
            {/* Close and View Mode Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'slideshow' : 'grid')}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                {viewMode === 'grid' ? <Layout size={20} /> : <Grid size={20} />}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Display */}
            <div className="relative">
              <img
                src={selectedImage.full}
                alt={selectedImage.title}
                className="max-h-[80vh] mx-auto rounded-lg"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm opacity-90">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConferenceGallery;