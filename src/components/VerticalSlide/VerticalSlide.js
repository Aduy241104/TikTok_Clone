import { Mousewheel } from "swiper/modules";
import { Swiper } from "swiper/react";
import classNames from 'classnames/bind';
import styles from './VerticalSlide.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';

const cx = classNames.bind(styles);

function VerticalSlide({ children }) {
    return (

        <Swiper
            direction={ "vertical" }
            mousewheel={ {
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1
            } }
            modules={ [Mousewheel] }
            className={ cx('mySwiper') }
            slidesPerView={ 1 }
            spaceBetween={ 30 }
        >
            { children }
        </Swiper>

    )
}

export default VerticalSlide