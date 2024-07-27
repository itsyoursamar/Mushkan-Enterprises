import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "./utiles";

export default function OurServices() {
    const [titleInView, setTitleInView] = useState(false);
    const [servicesInView, setServicesInView] = useState(false);

    const titleRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        const titleObserver = useIntersectionObserver(setTitleInView);
        const servicesObserver = useIntersectionObserver(setServicesInView);

        if (titleRef.current) titleObserver.observe(titleRef.current);
        if (servicesRef.current) servicesObserver.observe(servicesRef.current);

        return () => {
            if (titleRef.current) titleObserver.unobserve(titleRef.current);
            if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
        };
    }, [titleRef, servicesRef]);

    return (
        <div className="max-w-screen-2xl mt-10 container mx-auto md:px-20 px-4">
            <h1
                ref={titleRef}
                className={`text-4xl font-bold py-5 md:text-7xl md:py-10 text-center ${titleInView ? 'animate-slideInLeftOS' : 'opacity-0'}`}
            >
                Our Services
            </h1>
            <div
                ref={servicesRef}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${servicesInView ? 'animate-slideInRightOS' : 'opacity-0'}`}
            >
                <div className="p-4 text-lg md:text-3xl text-left">
                    <p>Mushkan Enterprises specializes in providing high-quality computerized embroidery services on a wide variety of fabrics. Our state-of-the-art machines enable us to deliver intricate and precise designs tailored to your specific needs.</p>
                </div>
                <div className="p-4 text-lg md:text-3xl text-left">
                    <p>With over 12 years of experience in the embroidery market, we have established a strong reputation for excellence. Our clientele includes both international buyers and trusted clients within India who rely on our expertise and commitment to quality.</p>
                </div>
                <div className="p-4 text-lg md:text-3xl text-left">
                    <p>We pride ourselves on honoring our commitments, which is why many of our clients have been with us for 8-10 years. Our longstanding relationships with these clients are a testament to the trust and satisfaction we consistently deliver.</p>
                </div>
                <div className="p-4 text-lg md:text-3xl text-left">
                    <p>At Mushkan Enterprises, we are dedicated to continuous improvement and innovation in our embroidery services. Whether for individual or bulk orders, our goal is to exceed your expectations and provide products that stand out in both quality and design.</p>
                </div>
            </div>
        </div>
    );
}
