import React from 'react';
import {TagProps} from "./tag.props";
import styles from "./tag.module.css"
import cn from "classnames";

export function Tag({children, size = 'm', color = 'ghost', href, className, ...props}: TagProps) {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.grey]: color === 'grey',
                [styles.green]: color === 'green',
                [styles.primary]: color === 'primary',
            })}
            {...props}
        >{children}
            {
                href
                    ? <a href={href}>{children}</a>
                    : <></>
            }
        </div>
    );
}

