'use client';

import { useEffect } from 'react';

export function DisableCopy() {
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable specific keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+U (View Source), Ctrl+S (Save), Ctrl+P (Print), Ctrl+A (Select All)
            if (
                (e.ctrlKey || e.metaKey) &&
                (['c', 'x', 'u', 's', 'p', 'a'].includes(e.key.toLowerCase()))
            ) {
                e.preventDefault();
            }

            // Prevent F12 (Inspect)
            if (e.key === 'F12') {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null;
}
