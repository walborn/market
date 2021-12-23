
import styles from './index.module.scss'

export const Toggle = ({ className, value, onChange }) => {
  return (
  <div className={className}>
    <input
      defaultChecked={value}
      id="toggle"
      type="checkbox"
      className={styles.input}
      onChange={e => onChange(e.target.checked)}
    />
    <label
      htmlFor="toggle"
      className={styles.label}
    />
  </div>
  )
}
