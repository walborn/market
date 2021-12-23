import React from 'react'
import cn from 'classnames'
import styles from './index.module.scss'


export const Checkbox = ({ className, checked, ...props }) => (
  <div className={cn(className, styles.root)}>
    <input className={styles.hiddenCheckbox} type="checkbox" checked={checked} {...props} />
    <div className={cn(styles.checkbox, checked && styles.checked)}>
      <svg className={styles.icon} viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
)
