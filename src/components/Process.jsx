import { useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Process() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-left')) {
                        entry.target.classList.add('animate-slideInLeft');
                    } else if (entry.target.classList.contains('animate-right')) {
                        entry.target.classList.add('animate-slideInRight');
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-16">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-5xl md:text-8xl font-bold" >PROCESS</h1>
                </div>
                <div className="space-y-16 mt-16">
                    <div
                        ref={(el) => sectionsRef.current[0] = el}
                        className="relative p-4 md:p-8 rounded-lg shadow-lg transform transition duration-500 ease-in-out opacity-0 animate-left overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-[#F9D689] opacity-60 backdrop-blur-sm"
                            style={{ zIndex: -10 }}
                        />
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Creation of Design</h1>
                            <p className="text-lg md:text-xl">
                                In this phase, clients provide their design ideas, detailing the type of embroidery, thread colors, and cloth colors they envision. If clients are unsure about specific designs, they can share pictures for inspiration, and our expert design team can step in to assist in crafting the perfect design. This collaborative approach ensures that all requirements and preferences are meticulously captured.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={(el) => sectionsRef.current[1] = el}
                        className="relative p-4 md:p-8 rounded-lg shadow-lg transform transition duration-500 ease-in-out opacity-0 animate-right overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-[#F9D689] opacity-60 backdrop-blur-md"
                            style={{ zIndex: -1 }}
                        />
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Making of Sample</h1>
                            <p className="text-lg md:text-xl">
                                A sample is carefully created based on the client's initial requirements. This sample is then presented to the client for approval. During this stage, the client can request changes, such as adjustments to the cloth type, thread color, or any other specific detail. This iterative process ensures that the final product meets the client's exact expectations.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={(el) => sectionsRef.current[2] = el}
                        className="relative p-4 md:p-8 rounded-lg shadow-lg transform transition duration-500 ease-in-out opacity-0 animate-left overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-[#F9D689] opacity-60 backdrop-blur-md"
                            style={{ zIndex: -1 }}
                        />
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Fulfillment</h1>
                            <p className="text-lg md:text-xl">
                                Once the sample is approved by the client, we proceed to create the final order. Our skilled artisans meticulously follow the approved specifications to ensure that every detail is perfect. This phase is all about precision and quality, ensuring that the final product is exactly what the client envisioned.
                            </p>
                        </div>
                    </div>

                    <div
                        ref={(el) => sectionsRef.current[3] = el}
                        className="relative p-4 md:p-8 rounded-lg shadow-lg transform transition duration-500 ease-in-out opacity-0 animate-right overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-[#F9D689] opacity-60 backdrop-blur-md"
                            style={{ zIndex: -1 }}
                        />
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Delivery</h1>
                            <p className="text-lg md:text-xl">
                                The completed order is delivered to the client by the agreed settlement date. We ensure that all requirements are met and the product is delivered on time, maintaining our commitment to quality and customer satisfaction. This final step ensures that the client's vision is realized, and they receive a beautifully crafted, personalized embroidery piece.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
