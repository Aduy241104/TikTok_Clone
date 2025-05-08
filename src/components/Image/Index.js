import React, { forwardRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Image.module.scss'
import images from '../../assets/images/Index';

const cx = classNames.bind(styles);

function Image(props, ref) {
    const { className, src, fallBack, alt, ...rest } = props
    const classes = cx('default', className)
    const [fallback, setFallBack] = useState('');

    function handleChangeAvt() {
        setFallBack((!fallBack) ? (images.defaultAvt) : (fallBack))
    }

    return (
        <img
            ref={ ref }
            className={ classes }
            src={ fallback || src }
            alt={ alt }
            onError={ () => handleChangeAvt() }
            { ...rest }
        />
    )
}

export default forwardRef(Image)