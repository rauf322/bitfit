'use client';

import { InteractiveMenu } from '@/components/ui/modern-mobile-menu';
import { Home, Dumbbell, Calendar, TrendingUp, User } from 'lucide-react';

const menuItems = [
  { label: '', icon: Home },
  { label: 'Workouts', icon: Dumbbell },
  { label: 'Schedule', icon: Calendar },
  { label: 'Progress', icon: TrendingUp },
  { label: 'Profile', icon: User },
];

export function BitFitMenu() {
  return <InteractiveMenu items={menuItems} />;
}
