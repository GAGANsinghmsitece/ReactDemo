import React, { FC } from 'react';
import styles from './DataContainer.module.scss';

interface DataContainerProps {
  title: String,
  subtitle: String,
  change: String
}

const DataContainer: FC<DataContainerProps> = ({ title, subtitle, change }) => (
  <div className={styles.DataContainer} data-testid="DataContainer">
    <p className={`${styles.DataContainer__title} ${subtitle === "" ? styles.DataContainer__title__center : ""}`}>{title}</p>
    {subtitle !== "" ?
      <p className={`${styles.DataContainer__subtitle} ${change === "-" ? styles.DataContainer__subtitle__Minus : ""}`}>{subtitle}</p> : null}

  </div>
);

export default DataContainer;
