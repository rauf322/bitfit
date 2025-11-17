import Link from 'next/link';
import ButtonPopUp from '../../components/ui/ButtonPopUp';
import { LucideIcon } from 'lucide-react';

export default function NavigationElement({
  item,
  actualPath,
}: {
  item: { label: string; icon: LucideIcon };
  actualPath: string;
}) {
  const isActive = item.label.toLowerCase() === actualPath;

  return (
    <Link
      key={item.label}
      href={`/${item.label.toLowerCase() === 'home' ? '' : item.label.toLowerCase()} `}
      className='flex'
    >
      <ButtonPopUp isActive={isActive} text={item.label} icon={item.icon} />
    </Link>
  );
}
