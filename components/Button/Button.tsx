import React from 'react';
import { Presenter } from './Presenter';

export interface Props {
  caption: string;
  color: 'normal' | 'warn' | 'danger';
}

export const Button: React.FC<Props> = (props: Props) => {
  const { caption, color } = props;
  return <Presenter caption={caption} color={color} />;
};
