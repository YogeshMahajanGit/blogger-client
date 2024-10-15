"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  //   const [isMounted, setIsMounted] = useState(false); // Track if component is mounted
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const router = isMounted ? useRouter() : null; // Call useRouter only when mounted

  //   useEffect(() => {
  //     setIsMounted(true); // Set to true when component is mounted
  //   }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white min-h-screen transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-xl font-semibold transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Dashboard
          </h1>
          <button
            onClick={handleToggle}
            className="text-white hover:bg-gray-700 rounded p-2"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4"></nav>
      </div>
    </div>
  );
}
