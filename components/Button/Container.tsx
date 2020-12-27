import React from 'react';
import { Presenter } from './Presenter';

interface P {
  caption: string;
  color: 'normal' | 'warn' | 'danger';
}

export const Button: React.FC<P> = (props: P) => {
  const { caption, color } = props;
  return <Presenter caption={caption} color={color} />;
};
