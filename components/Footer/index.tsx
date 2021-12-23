import styles from './index.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <img className={styles.elefant} src="/elefant.png" />
      <div className={styles.footer}>
        © 2021 Вон те, в углу
      </div>
    </footer>
  )
}
