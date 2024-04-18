import { useEffect, useRef, useState } from "react";

export default function RevealOnScreen({children, animacion}){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    console.log(isVisible);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                
                scrollObserver.unobserve(entry.target);
            }
        });
        
        let actualRef = ref.current
        scrollObserver.observe(actualRef);
 
        return () => {
            
            if (actualRef) {
                scrollObserver.unobserve(actualRef);
            }
        };
    }, []);
 
    const classes = `transition-opacity duration-1000 animate-once animate-ease-in 
        ${isVisible ? {animacion} : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    ) 
}