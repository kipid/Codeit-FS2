import { ReactNode } from 'react';
import styles from './Label.module.css';

interface Props
// extends LabelHTMLAttributes<HTMLLabelElement>
{
  className?: string;
  children: ReactNode;
}

export default function Label({ className = '', children }: Props) {
  const classNames = `${styles.label} ${className}`;
  return <label className={classNames}>{children}</label>;
}
