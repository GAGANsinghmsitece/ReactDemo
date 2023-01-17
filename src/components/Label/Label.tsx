import { title } from 'process';
import React, { FC } from 'react';
import styles from './Label.module.scss';

interface LabelProps {
  title: String
}

const Label: FC<LabelProps> = ({ title }) => (
  <div className={styles.Label} data-testid="Label">
    {title}
  </div>
);

export default Label;
