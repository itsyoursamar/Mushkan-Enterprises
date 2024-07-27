import { useEffect, useRef, useState } from "react";
import DesignCards from "./DesignCards";
import { useIntersectionObserver } from "./utiles";

export default function DesignShowcase() {
    const [titleInView, setTitleInView] = useState(false);
    const [cardsInView, setCardsInView] = useState(false);

    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const titleObserver = useIntersectionObserver(setTitleInView);
        const cardsObserver = useIntersectionObserver(setCardsInView);

        if (titleRef.current) titleObserver.observe(titleRef.current);
        if (cardsRef.current) cardsObserver.observe(cardsRef.current);

        return () => {
            if (titleRef.current) titleObserver.unobserve(titleRef.current);
            if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
        };
    }, [titleRef, cardsRef]);

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <h1
                ref={titleRef}
                className={`text-4xl text-center font-bold py-5 md:text-7xl md:py-10 ${titleInView ? 'animate-slideInLeft' : 'opacity-0'}`}
            >
                Design Patterns
            </h1>
            <div
                ref={cardsRef}
                className={`${cardsInView ? 'animate-slideInRight' : 'opacity-0'}`}
            >
                <DesignCards />
            </div>
        </div>
    );
}
