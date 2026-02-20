import { useState, useEffect } from 'react';

export default function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 1500, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end]);

  return <span>{count}{suffix}</span>;
}
