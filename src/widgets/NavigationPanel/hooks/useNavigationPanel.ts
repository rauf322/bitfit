import { Home, Dumbbell, Calendar, TrendingUp, User } from 'lucide-react';
export function useNavigationPanel() {
  const menuItems = [
    { label: '', icon: Home },
    { label: 'Workouts', icon: Dumbbell },
    { label: 'Schedule', icon: Calendar },
    { label: 'Progress', icon: TrendingUp },
    { label: 'Profile', icon: User },
  ];
  return { menuItems };
}
