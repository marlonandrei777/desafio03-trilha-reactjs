import styles from './header.module.scss';
import commonStyles from '../../styles/common.module.scss';

export default function Header() {
  return (
    <div className={`${styles.containerHeader} ${commonStyles.container}`}>
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
    </div>
  );
}
