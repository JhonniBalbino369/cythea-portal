import { ButtonHTMLAttributes } from 'react';

export function Button({ children, variant = 'default', ...props }: {
  children: React.ReactNode,
  variant?: 'default' | 'outline' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = 'px-4 py-2 rounded font-medium inline-flex items-center';
  const styles = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-indigo-400 text-indigo-400 hover:bg-indigo-800',
    secondary: 'bg-zinc-700 text-white hover:bg-zinc-600'
  };
  return (
    <button {...props} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}