import React from 'react';

const FooterTwo = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4">
          <a href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-blue-400 ">LinkedIn</a>
          <a href="https://github.com/anamtk"
            target="_blank"
            className="hover:text-blue-400">GitHub</a>
          <a
            href="https://twitter.com/ExplorerWieteke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 "
            aria-label="Twitter"
          >
            Twitter
          </a>

          <a
            href="mailto:email@example.com"
            target="_blank"
            className="hover:text-blue-400 "
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://www.flickr.com/photos/wieteke-holthuijzen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 "
            aria-label="Flickr"
          >
            Flickr
          </a>
          <a
            href="https://vimeo.com/wieteke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 "
            aria-label="Vimeo"
          >
            Vimeo
          </a>
        </div>
        <div className="text-center text-sm">
          <p>&copy; 2024 WIETEKE HOLTHUIJZEN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default FooterTwo;
