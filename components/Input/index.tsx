import cn from 'classnames'

import styles from './index.module.scss'

export const Input = ({ field, form, ...props }) => (
  <input {...field} {...props} className={cn(styles.root, props.className)} />
)
