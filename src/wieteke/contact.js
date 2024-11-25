import React from 'react';
import image1 from './images/contact.jpg';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b bg-gray-700 p-16">
      <div className="container mx-auto px-4 py-8">
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start p-8 space-y-8 md:space-y-0 md:space-x-16">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={image1}
              alt="Bristle-thighed Curlew (Numenius tahitiensis)"
              className="max-w-full h-auto mb-4 rounded-lg shadow-lg"
            />
            <p className="text-sm text-white leading-relaxed mb-6">
              Bristle-thighed Curlew (<em>Numenius tahitiensis</em>)
            </p>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Questions? Comments? <br /> Contact me here!
            </h2>
            <form
              action="//www.weebly.com/weebly/apps/formSubmit.php"
              method="POST"
              className="space-y-6"
            >
              {/* Name Fields */}
              <div>
                <label className="block font-medium mb-2 text-white">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="_u482740817745159944[first]"
                    placeholder="First"
                    required
                    className="border rounded-lg px-4 py-2 w-1/2 focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="_u482740817745159944[last]"
                    placeholder="Last"
                    required
                    className="border rounded-lg px-4 py-2 w-1/2 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="_u102237884930383243"
                  required
                  className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="_u119676642557111508"
                  required
                  className="border rounded-lg px-4 py-2 w-full h-40 focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
