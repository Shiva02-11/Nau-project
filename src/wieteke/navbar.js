import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarTwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownWork, setDropdownWork] = useState(false);
    const [dropdownGraduate, setDropdownGraduate] = useState(false); // For nested dropdown
    const [dropdownExtra, setDropdownExtra] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false); // Close the menu on navigation
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-20 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        WIETEKE HOLTHUIJZEN
                    </span>
                </a>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/home"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/curriculum"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Curriculum Vitae
                            </a>
                        </li>
                        {/* Work Dropdown */}
                        <li className="relative">
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                onClick={() => setDropdownWork(!dropdownWork)}
                            >
                                Work
                                <svg
                                    className="w-2.5 h-2.5 ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {dropdownWork && (
                                <ul className="absolute left-0 z-10 bg-white border border-gray-200 rounded-lg shadow-md w-44 mt-2 dark:bg-gray-700">
                                     <li>
                                        <a
                                            href="/work"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Work
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <button
                                            className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                            onClick={() => setDropdownGraduate(!dropdownGraduate)}
                                        >
                                            Graduate Work
                                            <svg
                                                className="w-2.5 h-2.5 ml-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                        {dropdownGraduate && (
                                            <ul className="absolute left-full top-0 z-10 bg-white border border-gray-200 rounded-lg shadow-md w-44 mt-0 dark:bg-gray-700">
                                                <li>
                                                    <a
                                                        href="/graduate"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                                    >
                                                        Graduate Work
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/mouse"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                                    >
                                                        Mouse Trophic Position on Islands
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/undergraduate"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                                    >
                                                        Undergraduate
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <a
                                            href="/published"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Published Work
                                        </a>
                                    </li>
                                   
                                    <li>
                                        <a
                                            href="/field"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Field Work
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Extracurricular Dropdown */}
                        <li className="relative">
                            <button
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                onClick={() => setDropdownExtra(!dropdownExtra)}
                            >
                                Extracurricular
                                <svg
                                    className="w-2.5 h-2.5 ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {dropdownExtra && (
                                <ul className="absolute left-0 z-10 bg-white border border-gray-200 rounded-lg shadow-md w-44 mt-2 dark:bg-gray-700">
                                    <li>
                                        <a
                                            href="/volunteer"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Volunteer
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/photography"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Photography
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/graphic"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Graphic Design
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/sustainability"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                        >
                                            Sustainability
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a
                                href="/blog"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarTwo;
