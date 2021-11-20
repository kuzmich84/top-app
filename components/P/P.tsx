import React from 'react';
import {PProps} from "./p.props";
import styles from "./p.module.css"
import cn from "classnames";

export function P({children, size, className, ...props}: PProps) {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.l]: size === 'l'
            })}
            {...props}
        >{children}
        </p>
    );
}

