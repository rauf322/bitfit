'use client';

import { usePathname } from 'next/navigation';
import NavigationElement from './navigation-element';
import { useNavigationPanel } from './hooks/useNavigationPanel';

export function BitFitMenu() {
  const pathname = usePathname();
  const actualPath = pathname.replace('/', '');
  const { menuItems: items } = useNavigationPanel();
  return (
    <nav
      className='fixed bottom-0 left-0 z-50 w-full border-t bg-card backdrop-blur-sm flex items-center justify-around p-3 '
      style={{
        backgroundColor: 'var(--tg-theme-secondary-bg-color, hsl(var(--card)))',
        borderTopColor:
          'var(--tg-theme-section-separator-color, hsl(var(--border)))',
      }}
      role='navigation'
    >
      {items?.map((item) => NavigationElement({ item, actualPath }))}
    </nav>
  );
}
