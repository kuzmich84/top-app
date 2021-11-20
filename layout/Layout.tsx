import React, {FunctionComponent} from 'react'
import {LayoutProps} from "./layout.props"
import {Sidebar} from "./Sidebar/Sidebar"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"


export function Layout({children}: LayoutProps): JSX.Element {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

