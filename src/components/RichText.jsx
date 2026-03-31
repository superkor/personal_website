import React from 'react';

/**
 * RichText
 *
 * Renders a single info item that is either:
 *   - a plain string  →  rendered as-is
 *   - an object { text: string, links: Array<{ label: string, url: string }> }
 *       →  each `label` found inside `text` is replaced with an <a> tag
 *
 * Extendable: add more fields to the object shape (e.g. `bold`, `tooltip`)
 * and handle them here without touching consumers.
 */
function RichText({ item, className }) {
    // Plain string — render directly
    if (typeof item === 'string') {
        return <span className={className}>{item}</span>;
    }

    // Rich object — split text around each labeled link
    const { text, links = [] } = item;

    if (!links.length) {
        return <span className={className}>{text}</span>;
    }

    // Build a regex that matches any of the link labels (longest first to avoid partial matches)
    const sorted = [...links].sort((a, b) => b.label.length - a.label.length);
    const pattern = sorted.map(l => l.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${pattern})`);

    const labelMap = Object.fromEntries(links.map(l => [l.label, l.url]));

    const parts = text.split(regex);

    return (
        <span className={className}>
            {parts.map((part, i) =>
                labelMap[part] ? (
                    <a
                        key={i}
                        href={labelMap[part]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()} // prevent card flip on link click
                        style={{
                            color: '#7dd3fc',
                            textDecoration: 'underline',
                            textUnderlineOffset: '2px',
                        }}
                    >
                        {part}
                    </a>
                ) : (
                    part
                )
            )}
        </span>
    );
}

export default RichText;
