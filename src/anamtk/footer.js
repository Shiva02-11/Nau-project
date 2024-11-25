import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4">
          <a href="https://github.com/anamtk"
            target="_blank"
            className="hover:text-blue-400">GitHub</a>
          <a href="mailto:ana.miller-ter-kuile@nau.edu"
            target="_blank"
            className="hover:text-blue-400">Email</a>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2024 Ana Miller-ter Kuile. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
