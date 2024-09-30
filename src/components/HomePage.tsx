import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
    const pathRef = useRef<SVGPathElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // Update the SVG path animation
        if (pathRef.current) {
            const path = pathRef.current;
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}, ${length}`;
            path.style.strokeDashoffset = length.toString();

            path.getBoundingClientRect();

            path.style.transition = 'stroke-dashoffset 3s linear';
            path.style.strokeDashoffset = '0';
        }

        // Function to update the viewBox
        const updateViewBox = () => {
            if (svgRef.current) {
                const isLaptop = window.innerWidth > 1100; // Adjust the threshold as needed
                svgRef.current.setAttribute('viewBox', isLaptop ? '370 -90 1100 400' : '400 0 400 300');
            }
        };

        // Call the function on mount and on resize
        updateViewBox();
        window.addEventListener('resize', updateViewBox);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', updateViewBox);
    }, []);

    return (
        <div className="bg-[#ffffff] flex flex-col items-center justify-center relative">
            {/* SVG Drawing Section */}
            <div className="absolute max-sm:h-[200px] top-0 left-0 max-sm:top-12 md:top-16 md:scale-[1.222] w-full md:w-[90%] h-full ">
                <svg
                    id="start-hi-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="500 -40 400 400"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full"
                >
                    <path
                        ref={pathRef}
                        className="draw-svg-path"
                        d="M-446 -1083.179C-135.0972 386.043 454.9987 255.813 513.298 134.05C541.387 75.3818 572.91 15.8382 559.338 15.8382C525.188 15.8382 506.185 188.446 502.859 198.979C499.5327 209.512 616.254 7.95745 582.104 173.016C552.393 316.623 619.644 199.071 668.892 120.534C637.847 172.831 622.215 284.735 739.021 198.979C978.77 22.9627 1127.191 -86.174 1424.79 111.941C1636.68 252.999 1717.6 251.276 1720 253.308"
                        stroke="black"
                        stroke-miterlimit="10"
                        strokeWidth="11"
                        fill="none"
                    />
                    <circle cx="692" cy="80" r="7" fill="black" className="animate-circle" />
                </svg>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-black text-left max-w-[80%] max-sm:max-w-[100%] max-sm:flex max-sm:flex-row max-sm:items-center max-sm:h-[250px] max-sm:ml-0 max-sm:overflow-auto md:max-w-[60%] md:ml-[60%] md:mt-[6%] max-sm:mt-[160px]"
            >
                <div className="w-48 h-48 md:w-48 md:h-48 max-sm:w-20 max-sm:h-20 max-sm:mr-4 rounded-full overflow-hidden border-4 border-white z-10">
                    <img src="/placeholder.webp" alt="Surya Vignesh Kapuganti" className="object-cover w-full h-full" />
                </div>
                <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3 max-sm:justify-center">
                    <h1 className="text-4xl md:text-3xl font-bold font-serif mb-2 max-sm:text-base">I am Surya Vignesh Kapuganti</h1>
                    <h2 className="text-xl md:text-2xl text-gray-300 mb-4 max-sm:text-xs">Student & Aspiring Developer</h2>
                    <p className="text-xs max-w-xl mb-6 max-sm:text-xs">
                        Passionate about creating innovative solutions and learning new technologies.
                        Currently studying Computer Science at JNTUH-UCEM.
                    </p>
                    <div className="flex space-x-4"> {/* Flexbox for buttons */}
                        <a href="https://github.com/suryavignesh1304?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-300 text-[#2c3e50] px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors max-sm:w-30 max-sm:text-xs"
                            >
                                View My Work
                            </motion.button>
                        </a>
                        <a href="https://drive.google.com/file/d/1xJLKzZyacJU1zCmtkJEmRkdC8IJacj6q/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-blue-300 text-blue-300 bg-transparent px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors max-sm:w-30 max-sm:text-xs"
                            >
                                Resume
                            </motion.button>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Inline styles for SVG animation */}
            <style>{`
                .draw-svg-path { 
                    stroke-dasharray: 450;
                    stroke-dashoffset: 450;
                    animation: draw 2s linear forwards;
                    transform: scale(1);
                }

                @keyframes drawHi {
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                .animate-circle {
                    animation: move-circle 3s;
                }

                @keyframes move-circle {
                    0% {
                        opacity:0;
                    }
                    90% {
                        opacity:0;
                    }
                    100% {
                        opacity:100;
                    }
                }
            `}</style>
        </div>
    );
}
