import React from 'react';
import styles from './Button.module.scss';

interface P {
  caption: string;
  color: 'normal' | 'warn' | 'danger';
}

export const Presenter: React.FC<P> = (props: P) => {
  const { caption, color } = props;
  return (
    <button className={[styles.button, styles[`button--${color}`]].join(' ')}>{caption}</button>
  );
};
