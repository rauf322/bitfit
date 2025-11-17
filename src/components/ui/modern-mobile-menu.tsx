'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type IconComponentType = React.ElementType<{ className?: string }>;

export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
}

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  items,
  accentColor,
}) => {
  const pathname = usePathname();
  const actualPath = pathname.replace('/', '');

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
      {items?.map((item) => {
        const isActive = item.label.toLowerCase() === actualPath;
        const Icon = item.icon;
        console.log(item.label, isActive, actualPath);

        return (
          <Link
            key={item.label}
            href={`/${item.label.toLowerCase() === 'home' ? '' : item.label.toLowerCase()} `}
            className='flex'
          >
            <button
              className={cn(
                'relative flex flex-col items-center gap-1 p-2 transition-all duration-300 rounded-lg hover:bg-secondary/50',
                isActive
                  ? 'text-[var(--tg-theme-button-color,hsl(var(--accent-foreground)))]'
                  : 'text-muted-foreground',
              )}
              style={
                {
                  '--lineWidth': '0px',
                  color: isActive
                    ? accentColor ||
                      'var(--tg-theme-button-color, hsl(var(--accent-foreground)))'
                    : 'var(--tg-theme-hint-color, hsl(var(--muted-foreground)))',
                } as React.CSSProperties
              }
            >
              <div
                className={cn(
                  'flex items-center justify-center transition-transform',
                  isActive && 'animate-[iconBounce_0.6s_ease]',
                )}
              >
                <Icon className='w-6 h-6' />
              </div>

              <strong
                className={cn(
                  'text-xs font-medium capitalize transition-all duration-300 overflow-hidden',
                  isActive ? 'opacity-100 max-h-8' : 'opacity-0 max-h-0',
                )}
              >
                {item.label.length > 0 ? item.label : 'Home'}
              </strong>

              {isActive && (
                <span
                  className='absolute bottom-0 h-0.5 transition-all duration-300'
                  style={{
                    width: 'var(--lineWidth, 0)',
                    backgroundColor:
                      accentColor ||
                      'var(--tg-theme-button-color, hsl(var(--accent-foreground)))',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              )}
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export { InteractiveMenu };
