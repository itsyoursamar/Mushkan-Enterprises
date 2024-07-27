// utils.js
export const useIntersectionObserver = (setInView) => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target);
            }
        },
        {
            rootMargin: '0px',
            threshold: 0.1
        }
    );

    return observer;
};
