'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [tg, setTg] = useState<typeof window.Telegram.WebApp | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      setTg(window.Telegram.WebApp);
      window.Telegram.WebApp.ready();

      // Expand the web app to full height
      window.Telegram.WebApp.expand();
    }
  }, []);

  const handleClose = () => {
    tg?.close();
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>BitFit - Workout Tracker</h1>
      <button
        onClick={handleClose}
        className='px-4 py-2 bg-primary text-primary-foreground rounded-lg'
      >
        Close
      </button>
      {!tg && <p className='text-muted-foreground mt-2'>Loading...</p>}
    </div>
  );
}
