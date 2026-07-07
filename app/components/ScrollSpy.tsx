'use client';

import { useEffect } from 'react';

const sections = ['home', 'projects', 'skills', 'contact'];

export default function ScrollSpy() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const id = entry.target.id;

                    if (id === 'home') {
                        history.replaceState(null, '', '/');
                    } else {
                        history.replaceState(null, '', `#${id}`);
                    }
                });
            },
            {
                threshold: 0.6,
            },
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
