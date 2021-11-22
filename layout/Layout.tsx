import React from 'react'
import {LayoutProps} from "./layout.props"
import {Sidebar} from "./Sidebar/Sidebar"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import styles from "./layout.module.css"


export function Layout({children}: LayoutProps): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    )
}

