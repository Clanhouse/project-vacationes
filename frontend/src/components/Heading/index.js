import styles from './index.module.scss';

const Heading = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;