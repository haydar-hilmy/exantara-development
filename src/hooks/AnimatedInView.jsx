import { useRef, useEffect, useState } from "react";

const AnimatedInView = ({
    children,
    threshold = 0.1,
    from = "bottom", // bottom | left | right | top | none
    duration = 800,
    delay = 200,
    once = true,
    key
}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, threshold, once]);

    const translateMap = {
        bottom: "translate-y-6",
        top: "-translate-y-6",
        left: "-translate-x-6",
        right: "translate-x-6",
        none: "",
    };

    const initialClass = `opacity-0 ${translateMap[from]}`
    const finalClass = "opacity-100 translate-x-0 translate-y-0"

    return (
        <div
            ref={ref}
            key={key}
            style={{
                transition: `all ${duration}ms ease-out`,
                transitionDelay: `${delay}ms`,
            }}
            className={`will-change-transform transform ${isInView ? finalClass : initialClass
                }`}
        >
            {children}
        </div>
    );
};

export default AnimatedInView;