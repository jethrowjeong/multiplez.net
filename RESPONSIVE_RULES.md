## Responsive Design Rules
- Always use a mobile-first approach for CSS (write base styles for mobile, use min-width for larger screens).
- Never use fixed pixel widths for main containers; use percentages or max-width.
- Ensure touch targets (buttons/inputs) are at least 44px high on mobile.
- When using Flexbox, always ensure `flex-wrap: wrap` is considered or switch to `flex-direction: column` on mobile breakpoints.
- Font sizes should scale down on mobile (e.g., H1 should go from 3rem on desktop to 1.75rem on mobile).
