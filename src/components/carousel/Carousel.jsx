import { useEffect, useRef, useState } from 'react';

import styles from './carousel.module.css';

export default function Carousel({ slides }) {
    const extendedSlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0]
    ];

    const [page, setPage] = useState(1);
    const [animating, setAnimating] = useState(false);
    const containerRef = useRef();
    const intervalRef = useRef();
    const isHovered = useRef(false);

    const handleNextSlide = () => {
        if (animating) return;
        setAnimating(true);
        setPage(prev => prev + 1);
    };

    const handlePrevSlide = () => {
        if (animating) return;
        setAnimating(true);
        setPage(prev => prev - 1);
    };

    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        intervalRef.current = setInterval(() => {
            if (!isHovered.current) {
                handleNextSlide();
            }
        }, 7000);
    };

    // Auto-slide logic
    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    // Reset position if at a clone
    useEffect(() => {
        const container = containerRef.current;
        const handleTransitionEnd = () => {
            setAnimating(false);
            if (page === extendedSlides.length - 1) {
                container.style.transition = 'none';
                setPage(1);
                requestAnimationFrame(() => {
                    container.style.transition = '0.5s ease left';
                });
            } else if (page === 0) {
                container.style.transition = 'none';
                setPage(extendedSlides.length - 1);
                requestAnimationFrame(() => {
                    container.style.transition = '0.5s ease left';
                });
            }
        };

        container.addEventListener('transitionend', handleTransitionEnd);
        return () => container.removeEventListener('transitionend', handleTransitionEnd);
    }, [page, extendedSlides.length]);

    // Hover detection to pause auto-slide
    const handleMouseEnter = () => {
        isHovered.current = true;
    };

    const handleMouseLeave = () => {
        isHovered.current = false;
        startAutoSlide();
    };

    return (
        <div
            className={styles.carousel}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={styles.slidesContainer}
                ref={containerRef}
                style={{
                    left: `-${page * 100}%`,
                    transition: animating ? '0.5s ease left' : 'none'
                }}
            >
                {extendedSlides.map((slide, index) => (
                    <Slide {...slide} key={index} />
                ))}
            </div>
            <div className={styles.buttons}>
                <button className={styles.prevButton} onClick={handlePrevSlide}>
                    <i className="fa-solid fa-chevron-left" />
                </button>
                <button className={styles.nextButton} onClick={handleNextSlide}>
                    <i className="fa-solid fa-chevron-right" />
                </button>
            </div>
        </div>
    );
}

function Slide({ image, text }) {
    return (
        <div className={styles.slideContent}>
            <img src={image} alt={text} />
            <p>{text}</p>
        </div>
    );
}