import React from 'react';
import {PProps} from "./p.props";
import styles from "./p.module.css"
import cn from "classnames";

export function P({children, fontSize, ...props}: PProps) {
    return (
        <p
            className={cn(styles.p)}
            style={{fontSize:`${fontSize}px`}}
            {...props}
        >{children}
        </p>
    );
}

