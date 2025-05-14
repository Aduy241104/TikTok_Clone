import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonTikTok({ to, href, onClick, children, primary, className, leftIcon, rightIcon,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    outLine,
    ...passProps }) {

    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outLine,
        small,
        large,
        text,
        disabled,
        rounded,
        leftIcon,
        rightIcon
    });

    const props = {
        onClick,
        ...passProps,
    };

    // if prop disbled is exists, the component will delete onClick prop
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }


    // use to defind type of button is 'a' tag or Link tag
    if (to) {
        props.to = to;
        Comp = Link;

    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={ classes } { ...props }>
            { leftIcon && <span className={ cx('icon') }>{ leftIcon }</span> }
            <span className={cx('title')}>{ children }</span>
            { rightIcon && <span className={ cx('icon') }>{ rightIcon }</span> }
        </Comp>
    )
}

export default ButtonTikTok