import type { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}


