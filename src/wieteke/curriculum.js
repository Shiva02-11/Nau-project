import React from 'react';

const Curriculum = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')", // Replace with your image path
      }}
    >
      {/* Add padding to prevent overlapping with navbar */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 bg-opacity-75 pt-24 p-8">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-white mb-4 shadow-lg">
          Curriculum Vitae
        </h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          Browse through my curriculum vitae below or download a PDF version{' '}
          <a
            href="/holthuijzen_2024_curriculum_vitae.pdf"
            download
            className="text-blue-400 font-semibold hover:underline"
          >
            here
          </a>.
        </p>
        {/* CV Section */}
        <div className="w-full max-w-screen-lg bg-white shadow-lg p-4 rounded-lg">
          <iframe
            src="/holthuijzen_2024_curriculum_vitae.pdf"
            title="Curriculum Vitae"
            className="w-full h-[80vh]"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
