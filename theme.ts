'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
    colors: {
        brand: [
            '#fffbe6', // Lightest Yellow
            '#fff3bf',
            '#ffeb99',
            '#ffe373',
            '#ffdb4d',
            '#ffd028', // Primary Bright Yellow (Lengo Style)
            '#e6b800',
            '#b38f00',
            '#806600',
            '#4d3d00', // Darkest
        ],
        navy: [
            '#e6e8e6',
            '#c1c4c1',
            '#9ea29e',
            '#7d827d',
            '#5e645e',
            '#414841',
            '#272e27', // Dark Greenish Grey
            '#131a13', // Deep Forest Card
            '#0a120a', // Deep Forest Bg
            '#020402', // Black/Green
        ],
        // Keeping lime for legacy, but mapping to new yellow/green vibe if needed or just valid colors
        lime: [
            '#f4ffcc', '#e9ff99', '#dfff66', '#d4ff33', '#ccff00', '#b3e600', '#99cc00', '#80b300', '#668000', '#4d6600'
        ]
    },
    primaryColor: 'brand',
    defaultRadius: 'md',
    fontFamily: 'Pretendard, sans-serif',
    headings: {
        fontFamily: 'Pretendard, sans-serif',
        sizes: {
            h1: { fontSize: rem(48), lineHeight: '1.2' },
            h2: { fontSize: rem(36), lineHeight: '1.3' },
            h3: { fontSize: rem(24), lineHeight: '1.4' },
        },
    },
});
