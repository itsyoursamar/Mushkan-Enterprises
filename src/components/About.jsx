import { useInView } from 'react-intersection-observer';

export default function About() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-4xl md:text-8xl font-bold">ABOUT US</h1>

                    <div className="mt-4 mb-4 md:mt-10 md:mb-10 justify-center text-center">
                        <ScrollAnimation delay={200} animation="slideInLeft">
                            <p className="text-l md:text-xl mx-auto leading-relaxed mb-6 shadow-lg p-4">
                                At Mushkan Enterprises, we bring over 12 years of dedicated expertise in the embroidery industry. Founded in Noida, our company has established itself as a premier provider of high-quality embroidery services. Our journey began with a passion for craftsmanship and a commitment to delivering exceptional results, and we have consistently upheld these values throughout our years of operation.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={400} animation="slideInLeft">
                            <p className="text-l md:text-xl mx-auto leading-relaxed mb-6 shadow-lg p-4">
                                Our team takes pride in combining traditional techniques with modern innovations to create stunning, intricate designs. We handle each project with meticulous attention to detail, ensuring that every piece we produce meets the highest standards of quality. From custom designs to standard requests, our goal is to exceed your expectations and bring your vision to life.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={600} animation="slideInLeft">
                            <p className="text-l md:text-xl mx-auto leading-relaxed mb-6 shadow-lg p-4">
                                We understand that every client has unique needs, which is why we offer a personalized approach to every project. Whether you have a clear idea of what you want or need assistance with design concepts, our experienced team is here to guide you through the process. We take full responsibility for the work we undertake, ensuring that every detail is handled with care and precision.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={800} animation="slideInLeft">
                            <p className="text-l md:text-xl mx-auto leading-relaxed mb-6 shadow-lg p-4">
                                Our commitment to excellence is reflected in our dedication to providing a seamless and enjoyable experience from start to finish. We believe in building lasting relationships with our clients by delivering top-notch service and beautiful embroidery that truly stands out. Whether you're looking for intricate designs or simple elegance, Mushkan Enterprises is the name you can trust for all your embroidery needs.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={1000} animation="slideInLeft">
                            <p className="text-l md:text-xl mx-auto leading-relaxed mb-6 shadow-lg p-4">
                                Located in Noida, we are proud to be a trusted name in the embroidery industry. Our reputation for quality and reliability speaks for itself, and we are dedicated to maintaining the highest standards in everything we do. Choose Mushkan Enterprises for your next embroidery project and experience the difference that comes from working with a team that is truly passionate about their craft.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </>
    );
}

function ScrollAnimation({ delay, animation, children }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-in ${inView ? `animate-${animation}` : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
