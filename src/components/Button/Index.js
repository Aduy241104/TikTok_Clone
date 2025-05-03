import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonTikTok({ to, href, onClick, children, primary, small = false, large = false, text = false, outLine, ...passProps }) {

    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outLine,
        small,
        large,
        text
    });

    const props = {
        onClick,
        ...passProps,
    };


    if (to) {
        props.to = to;
        Comp = Link;

    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={ classes } { ...props }>
            <span>{ children }</span>
        </Comp>
    )
}

export default ButtonTikTok