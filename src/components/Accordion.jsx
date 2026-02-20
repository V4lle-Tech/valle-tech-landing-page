import { useState, useCallback } from 'react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  const handleKeyDown = useCallback((e, i) => {
    const isOpen = open === i;
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setOpen(isOpen ? -1 : i);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (i < items.length - 1) {
          const next = e.currentTarget.parentElement?.querySelectorAll('[role="button"]');
          next?.[i + 1]?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (i > 0) {
          const prev = e.currentTarget.parentElement?.querySelectorAll('[role="button"]');
          prev?.[i - 1]?.focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        e.currentTarget.parentElement?.querySelectorAll('[role="button"]')?.[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        const all = e.currentTarget.parentElement?.querySelectorAll('[role="button"]');
        all?.[all.length - 1]?.focus();
        break;
    }
  }, [open, items.length]);

  return (
    <div style={{ borderTop: '1px solid var(--border)' }} role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `accordion-panel-${i}`;
        const headerId = `accordion-header-${i}`;
        return (
          <div
            key={i}
            role="listitem"
            style={{
              borderBottom: '1px solid var(--border)',
              background: isOpen ? 'var(--acc-open-bg)' : 'transparent',
              transition: 'background 0.4s',
            }}
          >
            <div
              role="button"
              tabIndex={0}
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.5rem 0', cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span style={{
                  fontFamily: "'Fira Code',monospace", fontSize: '0.6rem',
                  color: isOpen ? 'var(--accent)' : 'var(--text-low)',
                  transition: 'color 0.3s', minWidth: 24,
                }}>0{i + 1}</span>
                <h3 style={{
                  fontFamily: "'Archivo',sans-serif", fontWeight: 700,
                  fontSize: 'clamp(1.05rem,2vw,1.3rem)',
                  letterSpacing: '-0.02em', textTransform: 'uppercase',
                  color: isOpen ? 'var(--text-high)' : 'var(--text-mid)',
                  transition: 'color 0.3s', margin: 0,
                }}>{item.title}</h3>
              </div>
              <span aria-hidden="true" style={{
                fontFamily: "'Archivo',sans-serif", fontSize: '1.4rem',
                color: isOpen ? 'var(--accent)' : 'var(--text-low)', fontWeight: 300,
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), color 0.3s',
                flexShrink: 0,
              }}>+</span>
            </div>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              style={{
                maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0,
                padding: isOpen ? '0 0 1.5rem 2.7rem' : '0 0 0 2.7rem',
                overflow: 'hidden',
                transition: 'max-height 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.4s, padding 0.4s',
              }}
            >
              <p style={{
                color: 'var(--text-mid)', fontSize: '0.92rem', lineHeight: 1.75,
                fontWeight: 300, marginBottom: '1rem',
              }}>{item.description || item.desc}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {(item.tags || []).map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
