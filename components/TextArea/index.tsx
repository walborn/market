import cn from 'classnames'

import styles from './index.module.scss'

export const TextArea = ({ field, form, ...props }) => (
  <textarea {...field} {...props} className={cn(styles.root, props.className)} />
)
