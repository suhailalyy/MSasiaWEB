import React from 'react';

/**
 * SmartHeading Component
 * Automatically selects the strict semantic HTML tag based on the provided size.
 * 
 * Rules:
 * > 32px  -> h1
 * 28-32px -> h2
 * 24-28px -> h3
 * 20-24px -> h4
 * 18-20px -> h5
 * < 18px  -> h6
 * 
 * Usage:
 * <SmartHeading size={36} className="font-bold">Main Title</SmartHeading>
 */
const SmartHeading = ({ size, className = '', children, ...props }) => {

    let Tag = 'h6'; // Default (14px - 18px)

    // Strict number parsing if string is passed (e.g. "32px")
    const numSize = parseInt(size, 10) || 16;

    if (numSize >= 36) {
        Tag = 'h1';
    } else if (numSize >= 28) {
        Tag = 'h2';
    } else if (numSize >= 24) {
        Tag = 'h3';
    } else if (numSize >= 20) {
        Tag = 'h4';
    } else if (numSize >= 18) {
        Tag = 'h5';
    } else {
        Tag = 'h6';
    }

    // Determine default Tailwind text size class if not provided in className
    // This maintains the visual size requested
    const sizeStyle = { fontSize: `${numSize}px` };

    return (
        <Tag
            className={`m-0 p-0 ${className}`}
            style={{ ...sizeStyle }}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default SmartHeading;
