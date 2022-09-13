import React, { useEffect, useRef, useState } from "react";

function App() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setCoords({
            x: event.clientX - window.innerWidth / 2,
            y: event.clientY - window.innerHeight / 2,
        });
        console.log(coords);
    };

    return (
        <>
            <div
                onMouseMove={handleMouseMove}
                className="w-full min-h-screen bg-[#888FC7]"
            >
                <div className="absolute h-full w-full z-20 flex items-center justify-center">
                    <div
                        style={{
                            top: `calc(50% - ${coords.y / 100}px)`,
                            left: `calc(50% - ${coords.x / 100}px)`,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 inline-flex w-[538px] h-[638px] items-end justify-center backdrop-blur-xl pt-96 bg-white bg-opacity-5 shadow border rounded-3xl border-white border-opacity-10 overflow-hidden"
                    >
                        <div className="inline-flex flex-col w-full items-start justify-end pl-6 pr-56 pt-4 pb-9 bg-[#cacff8]">
                            <p className="text-5xl font-bold text-black">
                                PANTONE
                            </p>
                            <a
                                href="https://www.pantone.com/connect/17-3930-TCX"
                                className=" h-16 text-4xl font-bold text-black hover:text-[#7a81bc] duration-100"
                            >
                                17-3930 TCX
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: `calc(50% - ${coords.y / 20}px)`,
                        width: `calc(50% - ${coords.x / 20}px)`,
                    }}
                    className="absolute flex w-[800px] h-[700px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                >
                    <div
                        className={`w-72 h-72 absolute top-30 left-5 bg-gradient-to-bl from-indigo-400 to-gray-500 shadow rounded-full`}
                    />
                    <div className="w-72 h-72 absolute right-5 bottom-40 bg-gradient-to-bl from-gray-600 to-gray-800 shadow rounded-full" />
                </div>
            </div>
        </>
    );
}

export default App;