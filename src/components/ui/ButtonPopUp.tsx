import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export default function ButtonPopUp({
  isActive = true,
  text,
  icon: Icon,
}: {
  isActive?: boolean;
  text?: string;
  icon: LucideIcon;
}) {
  return (
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
            ? 'var(--tg-theme-button-color, hsl(var(--accent-foreground)))'
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
        {text && text.length > 0 ? text : 'Home'}
      </strong>

      {isActive && (
        <span
          className='absolute bottom-0 h-0.5 transition-all duration-300'
          style={{
            width: 'var(--lineWidth, 0)',
            backgroundColor:
              'var(--tg-theme-button-color, hsl(var(--accent-foreground)))',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      )}
    </button>
  );
}
