import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className = '',
  id,
  name,
  type,
  placeholder,
  value,
  onChange
}: InputProps) {
  const classNames = `${styles.input} ${className}`;
  return (<input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={classNames}
  />);
}
