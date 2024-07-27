import Designlist from "../../public/Designlist.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import "../index.css";  // Custom CSS for blurring effect

export default function DesignCards() {
    const data = Designlist.filter((design) => design.img);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "60px",
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            {isSmallScreen ? (
                <Slider {...sliderSettings}>
                    {data.map((item) => (
                        <div key={item.id} className="p-4">
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
