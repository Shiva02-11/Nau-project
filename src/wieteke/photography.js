import React, { useState, useEffect } from "react";
import section2Image from "./images/photography1.jpg";

const Photography = () => {
    // Array of image data (Replace with actual URLs and captions)
    const images = [
        {
            url: '/images/66022_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/545735_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/1174342_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/1204163_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/1321724_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/1975816_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/2014676_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/2249140_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/4614899_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/5060282_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/5447456_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/5663630_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/6702440_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/6754744_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/7045822_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/7067601_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/7267725_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/7343534_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/7898891_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/7986382_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/8545938_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/9710975_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/29906081360-faac354b05-k_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/29906092930-d0929542f5-k_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/30201813705-0370f22333-k_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/30368088222-9cac0e8c84-k_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/31335544701-7fe60d543f-k_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/31450823105-c07144e832-k_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf1611_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf1678_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf1957_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf5864_1_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf6718_1_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf6875_3_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf6977_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf7469_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf7720_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf8038_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        {
            url: '/images/dscf9197_orig.jpg',
            caption: "Laysan Duck (Anas laysanensis), Midway Atoll NWR"
        },
        
        // Add more images here...
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Adjust the interval time here

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div>
            {/* Section 1: Background Image with Title */}
            <section
                className="relative bg-gray-700 bg-cover bg-center h-[500px] flex items-center justify-center text-white"
                // style={{
                //     backgroundImage: "url('your-background-image-url')", // Replace with your image URL
                // }}
            >
                <h1 className="text-4xl font-bold bg-opacity-50 px-6 py-4 rounded-md">
                    Photography: Joy in the Journey
                </h1>
            </section>

            {/* Section 2: Image on the Left and Description on the Right */}
            <section className="bg-gray-700 py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-8 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                    <img
                        src={section2Image} // Replace with your image URL
                        alt="Photography Showcase"
                        className="rounded-lg shadow-lg w-full"
                    />
                    <p className="text-sm text-white leading-relaxed mb-6 text-center">
                        Laysan Albatross (Phoebastria immutabilis) parent and chick
                    </p>
                </div>
                <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-100">
                    <p className="text-lg leading-relaxed mb-6 text-justify">
                        I seek to celebrate the beauty around us and around the world through photography.
                    </p>
                    <p className="text-lg leading-relaxed mb-6 text-justify">
                        Specifically, I focus on birds in their natural habitats as well as landscapes,
                        ranging from protected lands to urbanized areas.
                    </p>
                    <p className="text-lg leading-relaxed text-justify">
                        Growing up in a family passionate about the outdoors and constantly birding and botanizing, much of my inspiration for photography comes from nature. As an artist,
                        I chose photography as a means for me to express my passion for the natural world and to convey its importance in each of our lives. To see more of my photography, please visit my
                        <a href="https://www.flickr.com/photos/wieteke-holthuijzen/" className="underline hover:text-blue-200">Flickr page</a>. I hope you enjoy my gallery below; may my photographs inspire
                        you to go outside and appreciate all the life around you!
                    </p>
                </div>
            </section>

            {/* Section 3: Image Slider */}
            <section className="bg-gray-700 py-16 px-8 lg:px-32">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Featured Photography
                </h2>
                <div className="relative">
                    <div className="w-full h-[700px] overflow-hidden rounded-lg">
                        <img
                            src={images[currentImageIndex].url}
                            alt={images[currentImageIndex].caption}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full cursor-pointer"
                        onClick={goToPrevious}>
                        &#8249;
                    </div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full cursor-pointer"
                        onClick={goToNext}>
                        &#8250;
                    </div>
                    <p className="mt-4 text-center text-white">
                        {images[currentImageIndex].caption}
                    </p>
                </div>

                {/* Thumbnails Navigation */}
                <div className="flex justify-center mt-8 flex-wrap gap-4"> 
                    {images.map((image, index) => ( 
                        <button key={index} 
                        onClick={() => selectImage(index)} 
                        className={`w-24 h-24 rounded-lg overflow-hidden border-2 
                        ${currentImageIndex === index ? "border-blue-500" : "border-gray-700"}`} > 
                        <img src={image.url} alt={image.caption} className="w-full h-full object-cover" /> 
                        </button> ))} </div>
            </section>
        </div>
    );
};

export default Photography;
