import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid, Layout, Download, FileText } from 'lucide-react';
import AbstractBook from './image/Pdf/Abstract Book(Final Book).pdf';
import conferencesummary from './image/Pdf/conferencesummary.pdf';
import M1_1 from './ConferenceImages/M1_ (1).JPG';
import M1_2 from './ConferenceImages/M1_ (2).JPG';
import M1_3 from './ConferenceImages/M1_ (3).JPG';
import M1_4 from './ConferenceImages/M1_ (4).JPG';
import M1_5 from './ConferenceImages/M1_ (5).JPG';
import M1_6 from './ConferenceImages/M1_ (6).JPG';
import M1_7 from './ConferenceImages/M1_ (7).JPG';
import M1_8 from './ConferenceImages/M1_ (8).JPG';
import M1_9 from './ConferenceImages/M1_ (9).JPG';
import M1_10 from './ConferenceImages/M1_ (10).JPG';
import M1_11 from './ConferenceImages/M1_ (11).JPG';
import M1_12 from './ConferenceImages/M1_ (12).JPG';
import M1_13 from './ConferenceImages/M1_ (13).JPG';
import M1_14 from './ConferenceImages/M1_ (14).JPG';
import M1_15 from './ConferenceImages/M1_ (15).JPG';
import M1_16 from './ConferenceImages/M1_ (16).JPG';
import M1_17 from './ConferenceImages/M1_ (17).JPG';
import M1_18 from './ConferenceImages/M1_ (18).JPG';
import M1_19 from './ConferenceImages/M1_ (19).JPG';
import M1_20 from './ConferenceImages/M1_ (20).JPG';
import M1_21 from './ConferenceImages/M1_ (21).JPG';
import M1_22 from './ConferenceImages/M1_ (22).JPG';
import M1_23 from './ConferenceImages/M1_ (23).JPG';
import M1_24 from './ConferenceImages/M1_ (24).JPG';
import M1_25 from './ConferenceImages/M1_ (25).JPG';
import M1_26 from './ConferenceImages/M1_ (26).JPG';
import M1_27 from './ConferenceImages/M1_ (27).JPG';
import M1_28 from './ConferenceImages/M1_ (28).JPG';
import M1_29 from './ConferenceImages/M1_ (29).JPG';
import M1_30 from './ConferenceImages/M1_ (30).JPG';
import M1_31 from './ConferenceImages/M1_ (31).JPG';
import M1_32 from './ConferenceImages/M1_ (32).JPG';
import M1_33 from './ConferenceImages/M1_ (33).JPG';
import M1_34 from './ConferenceImages/M1_ (34).JPG';
import M1_35 from './ConferenceImages/M1_ (35).JPG';
import M1_36 from './ConferenceImages/M1_ (36).JPG';
import M1_37 from './ConferenceImages/M1_ (37).JPG';
import M1_38 from './ConferenceImages/M1_ (38).JPG';
import M1_39 from './ConferenceImages/M1_ (39).JPG';
import M1_40 from './ConferenceImages/M1_ (40).JPG';
import M1_41 from './ConferenceImages/M1_ (41).JPG';
import M1_42 from './ConferenceImages/M1_ (42).JPG';
import M1_43 from './ConferenceImages/M1_ (43).JPG';
import M1_44 from './ConferenceImages/M1_ (44).JPG';
import M1_45 from './ConferenceImages/M1_ (45).JPG';
import M1_46 from './ConferenceImages/M1_ (46).JPG';
import M1_47 from './ConferenceImages/M1_ (47).JPG';
import M1_48 from './ConferenceImages/M1_ (48).JPG';
import M1_49 from './ConferenceImages/M1_ (49).JPG';
import M1_50 from './ConferenceImages/M1_ (50).JPG';


// Gallery data
const galleryImages = [
  { id: 'm1', thumbnail: M1_1, full: M1_1, title: "Conference Moment 1", description: "Keynote Session", category: "Conference" },
  { id: 'm2', thumbnail: M1_2, full: M1_2, title: "Conference Moment 2", description: "Panel Discussion", category: "Conference" },
  { id: 'm3', thumbnail: M1_3, full: M1_3, title: "Conference Moment 3", description: "Award Ceremony", category: "Conference" },
  { id: 'm4', thumbnail: M1_4, full: M1_4, title: "Conference Moment 4", description: "Networking Break", category: "Conference" },
  { id: 'm5', thumbnail: M1_5, full: M1_5, title: "Conference Moment 5", description: "Technical Presentation", category: "Conference" },
  { id: 'm6', thumbnail: M1_6, full: M1_6, title: "Conference Moment 6", description: "Q&A Session", category: "Conference" },
  { id: 'm7', thumbnail: M1_7, full: M1_7, title: "Conference Moment 7", description: "Workshop Highlights", category: "Conference" },
  { id: 'm8', thumbnail: M1_8, full: M1_8, title: "Conference Moment 8", description: "Group Discussion", category: "Conference" },
  { id: 'm9', thumbnail: M1_9, full: M1_9, title: "Conference Moment 9", description: "Poster Presentation", category: "Conference" },
  { id: 'm10', thumbnail: M1_10, full: M1_10, title: "Conference Moment 10", description: "Keynote Address", category: "Conference" },
  { id: 'm11', thumbnail: M1_11, full: M1_11, title: "Conference Moment 11", description: "Panel Debate", category: "Conference" },
  { id: 'm12', thumbnail: M1_12, full: M1_12, title: "Conference Moment 12", description: "Breakout Session", category: "Conference" },
  { id: 'm13', thumbnail: M1_13, full: M1_13, title: "Conference Moment 13", description: "Lunch Break", category: "Conference" },
  { id: 'm14', thumbnail: M1_14, full: M1_14, title: "Conference Moment 14", description: "Workshop Opening", category: "Conference" },
  { id: 'm15', thumbnail: M1_15, full: M1_15, title: "Conference Moment 15", description: "Workshop Hands-on", category: "Conference" },
  { id: 'm16', thumbnail: M1_16, full: M1_16, title: "Conference Moment 16", description: "Keynote Speech", category: "Conference" },
  { id: 'm17', thumbnail: M1_17, full: M1_17, title: "Conference Moment 17", description: "Networking Event", category: "Conference" },
  { id: 'm18', thumbnail: M1_18, full: M1_18, title: "Conference Moment 18", description: "Panel Insights", category: "Conference" },
  { id: 'm19', thumbnail: M1_19, full: M1_19, title: "Conference Moment 19", description: "Industry Talk", category: "Conference" },
  { id: 'm20', thumbnail: M1_20, full: M1_20, title: "Conference Moment 20", description: "Group Discussion", category: "Conference" },
  { id: 'm21', thumbnail: M1_21, full: M1_21, title: "Conference Moment 21", description: "Tech Demo", category: "Conference" },
  { id: 'm22', thumbnail: M1_22, full: M1_22, title: "Conference Moment 22", description: "Project Showcase", category: "Conference" },
  { id: 'm23', thumbnail: M1_23, full: M1_23, title: "Conference Moment 23", description: "Expert Panel", category: "Conference" },
  { id: 'm24', thumbnail: M1_24, full: M1_24, title: "Conference Moment 24", description: "Closing Remarks", category: "Conference" },
  { id: 'm25', thumbnail: M1_25, full: M1_25, title: "Conference Moment 25", description: "Networking Lunch", category: "Conference" },
  { id: 'm26', thumbnail: M1_26, full: M1_26, title: "Conference Moment 26", description: "Research Presentation", category: "Conference" },
  { id: 'm27', thumbnail: M1_27, full: M1_27, title: "Conference Moment 27", description: "Interactive Session", category: "Conference" },
  { id: 'm28', thumbnail: M1_28, full: M1_28, title: "Conference Moment 28", description: "Workshop Wrap-up", category: "Conference" },
  { id: 'm29', thumbnail: M1_29, full: M1_29, title: "Conference Moment 29", description: "Feedback Session", category: "Conference" },
  { id: 'm30', thumbnail: M1_30, full: M1_30, title: "Conference Moment 30", description: "Awards Distribution", category: "Conference" },
  { id: 'm31', thumbnail: M1_31, full: M1_31, title: "Conference Moment 31", description: "Technical Session", category: "Conference" },
  { id: 'm32', thumbnail: M1_32, full: M1_32, title: "Conference Moment 32", description: "Workshop Highlights", category: "Conference" },
  { id: 'm33', thumbnail: M1_33, full: M1_33, title: "Conference Moment 33", description: "Innovator's Panel", category: "Conference" },
  { id: 'm34', thumbnail: M1_34, full: M1_34, title: "Conference Moment 34", description: "Tech Keynote", category: "Conference" },
  { id: 'm35', thumbnail: M1_35, full: M1_35, title: "Conference Moment 35", description: "Networking Session", category: "Conference" },
  { id: 'm36', thumbnail: M1_36, full: M1_36, title: "Conference Moment 36", description: "Demo Showcase", category: "Conference" },
  { id: 'm37', thumbnail: M1_37, full: M1_37, title: "Conference Moment 37", description: "Workshop Networking", category: "Conference" },
  { id: 'm38', thumbnail: M1_38, full: M1_38, title: "Conference Moment 38", description: "Expert Debate", category: "Conference" },
  { id: 'm39', thumbnail: M1_39, full: M1_39, title: "Conference Moment 39", description: "Tech Quiz", category: "Conference" },
  { id: 'm40', thumbnail: M1_40, full: M1_40, title: "Conference Moment 40", description: "Breakout Session", category: "Conference" },
  { id: 'm41', thumbnail: M1_41, full: M1_41, title: "Conference Moment 41", description: "Panel Presentation", category: "Conference" },
  { id: 'm42', thumbnail: M1_42, full: M1_42, title: "Conference Moment 42", description: "Innovation Showcase", category: "Conference" },
  { id: 'm43', thumbnail: M1_43, full: M1_43, title: "Conference Moment 43", description: "Startup Pitches", category: "Conference" },
  { id: 'm44', thumbnail: M1_44, full: M1_44, title: "Conference Moment 44", description: "Award Announcement", category: "Conference" },
  { id: 'm45', thumbnail: M1_45, full: M1_45, title: "Conference Moment 45", description: "Panel Q&A", category: "Conference" },
  { id: 'm46', thumbnail: M1_46, full: M1_46, title: "Conference Moment 46", description: "Networking Dinner", category: "Conference" },
  { id: 'm47', thumbnail: M1_47, full: M1_47, title: "Conference Moment 47", description: "Conference Wrap-Up", category: "Conference" },
  { id: 'm48', thumbnail: M1_48, full: M1_48, title: "Conference Moment 48", description: "Closing Ceremony", category: "Conference" },
  { id: 'm49', thumbnail: M1_49, full: M1_49, title: "Conference Moment 49", description: "Farewell Speech", category: "Conference" },
  { id: 'm50', thumbnail: M1_50, full: M1_50, title: "Conference Moment 50", description: "Final Thoughts", category: "Conference" }
];
// Gallery View Component
const GalleryView = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 overflow-y-auto">
      <div className="min-h-screen p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 text-white">
          <h2 className="text-2xl font-bold">Conference Gallery</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('slideshow')}
              className={`p-2 rounded-lg ${viewMode === 'slideshow' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <Layout size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
        </div>

       {/* Gallery Grid View */}
       {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer relative overflow-hidden rounded-lg"
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
        )}

        {/* Slideshow View */}
        {viewMode === 'slideshow' && selectedImage && (
          <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrevImage}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="relative">
                <img
                  src={selectedImage.full}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
              </div>
              <button
                onClick={handleNextImage}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const ConferenceProceding = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const proceedings = [
    {
      title: "Track 1: AI & Machine Learning",
      link: "https://conference.com/track1",
      paperCount: "25 papers",
      type: "Technical Track"
    },
    {
      title: "Track 2: Data Science",
      link: "https://conference.com/track2",
      paperCount: "30 papers",
      type: "Research Track"
    },
    {
      title: "Track 3: Software Engineering",
      link: "https://conference.com/track3",
      paperCount: "28 papers",
      type: "Technical Track"
    },
    {
      title: "Track 4: Cloud Computing",
      link: "https://conference.com/track4",
      paperCount: "22 papers",
      type: "Research Track"
    }
  ];

  const publications = [
    {
      title: "Conference Summary",
      description: "Overview of all sessions",
      icon: "📚",
      pdfUrl: conferencesummary,
      // password: "summary2025"
    },
    {
      title: "Abstract Book",
      description: "Compilation of all abstracts",
      icon: "📖", 
      pdfUrl: AbstractBook,
      // password: "abstract2025"
    }
  ];

  const previewImages = galleryImages.slice(0, 3);

  const handlePublicationClick = (publication) => {
    setSelectedPublication(publication);
    setShowPdfModal(true);
    setError('');
    // setPassword('');
  };

  const handleDownload = () => {
    if (password === selectedPublication?.password) {
      const link = document.createElement('a');
      link.href = selectedPublication.pdfUrl;
      link.download = `${selectedPublication.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowPdfModal(false);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const GalleryModal = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 overflow-y-auto">
      <div className="min-h-screen p-4">
        <div className="flex justify-between items-center mb-6 text-white">
          <h2 className="text-2xl font-bold">Conference Gallery</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('slideshow')}
              className={`p-2 rounded-lg ${viewMode === 'slideshow' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            >
              <Layout size={20} />
            </button>
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="p-2 hover:bg-gray-700 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => {
                  setSelectedImage(image);
                  setViewMode('slideshow');
                }}
                className="group cursor-pointer relative overflow-hidden rounded-lg"
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
        )}

        {viewMode === 'slideshow' && selectedImage && (
          <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrevImage}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="relative">
                <img
                  src={selectedImage.full}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
              </div>
              <button
                onClick={handleNextImage}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const PdfModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{selectedPublication?.title}</h3>
          <button 
            onClick={() => {
              setShowPdfModal(false);
              setError('');
              setPassword('');
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Please enter the password to access this document:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter password"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setShowPdfModal(false);
              setError('');
              setPassword('');
            }}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button 
            onClick={handleDownload}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Proceedings
          </h1>
          <p className="text-xl text-red-700 font-semibold">
            Annual International Conference On Recent Advances in Engineering Technology, Healthcare & Management <br />(AIC-RAETHM 2025)
          </p>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Publication Links</h2>
              <div className="space-y-4">
                {proceedings.map((proc, index) => (
                  <a
                    key={index}
                    href={proc.link}
                    className="block group p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">
                        {proc.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{proc.paperCount}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{proc.type}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Proceedings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
                {publications.map((pub, index) => (
                  <button
                    key={index}
                    onClick={() => handlePublicationClick(pub)}
                    className="w-full max-w-xs p-4 border rounded-lg hover:border-indigo-500 hover:shadow-lg transition-all text-center flex flex-col items-center cursor-pointer"
                  >
                    <span className="text-3xl mb-2 block">{pub.icon}</span>
                    <h4 className="font-semibold text-gray-900">{pub.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{pub.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-indigo-600">
                      <FileText size={16} />
                      <span className="text-sm">View PDF</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Gallery</h3>
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View All Photos
                </button>
              </div>
   
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {previewImages.map((image, index) => (
      <div
        key={`preview-${index}`}
        onClick={() => setIsGalleryOpen(true)}
        className="cursor-pointer group relative overflow-hidden rounded-lg"
      >
        <img
          src={image.thumbnail}
          alt={image.title}
          className="w-full h-32 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {image.title}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
          </div>
  
          {/* Modals */}
          {isGalleryOpen && <GalleryView onClose={() => setIsGalleryOpen(false)} />}
          {showPdfModal && (
        <PdfModal 
          publication={selectedPublication}
          onClose={() => setShowPdfModal(false)}
        />
      )}
        </div>
      </div>
  
  );
};

export default ConferenceProceding;