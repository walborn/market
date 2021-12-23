import React from 'react'
import { Head } from 'components/Head'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'

import styles from './index.module.scss'

export const Layout: React.FC = ({ children }) => (
  <>
    <Head />
    <Nav />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
)
