import React from 'react'
import {SidebarProps} from "./sidebar.props"
import Menu from "../Menu/Menu"
import Logo from "../logo.svg"
import cn from "classnames"
import styles from "./sidebar.module.css"
import Search from "../../components/Search/Search"

export function Sidebar({className, ...props}: SidebarProps): JSX.Element {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo}/>
            <Search/>
            <Menu/>
        </div>
    )
}

