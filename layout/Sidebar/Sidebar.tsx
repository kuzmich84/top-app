import React from 'react'
import {SidebarProps} from "./sidebar.props"
import Menu from "../Menu/Menu"

export function Sidebar({...props}: SidebarProps): JSX.Element {
    return (
        <div {...props}>
            <Menu/>
        </div>
    )
}

