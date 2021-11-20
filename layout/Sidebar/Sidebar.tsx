import React from 'react'
import {SidebarProps} from "./sidebar.props"

export function Sidebar({...props}): JSX.Element {
    return (
        <div {...props}>
            SideBar
        </div>
    )
}

