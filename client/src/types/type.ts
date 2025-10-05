import type { LucideIcon } from 'lucide-react';

export type ComponentCategory = {
  name: string;
  icon: LucideIcon;
  components: Component[];
};

export type Component = {
  type: string;
  label: string;
  icon: LucideIcon;
};
