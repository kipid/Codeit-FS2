import { MouseEvent, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  className?: string;
  id: string;
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
}

export default function Button({ className = '', id, onClick, children }: Props) {
  const classNames = `${styles.button} ${className}`;
  return (<button id={id} className={classNames} onClick={onClick}>
    {children}
  </button>);
}
