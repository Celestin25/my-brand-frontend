import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export const useCustomBehavior = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = debounce(() => {
            const sections = document.querySelectorAll('section');
            let currentSection = activeSection;

            for (const section of sections) {
                const top = window.scrollY;
                const offset = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (top >= offset - 150 && top < offset + height - 150) {
                    currentSection = id;
                    break;
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
                setMenuOpen(false); 
            }
        }, 100); 

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return { toggleMenu, isMenuOpen, activeSection };
};
