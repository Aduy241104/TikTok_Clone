import classNames from "classnames/bind"
import styles from './Home.module.scss'
import Header from "./components/Header";
import * as videoService from '../../services/videoService'
import { useEffect, useState } from "react"
import VideoContent from "./components/VideoContent/VideoContent";
import ActionButton from "../../components/ActionButton/ActionButton";
import { SwiperSlide } from "swiper/react";
import VerticalSlide from "../../components/VerticalSlide";

const cx = classNames.bind(styles);

function Home() {
    const [currentDataList, setCurrentDataList] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await videoService.getVideoListWithType('for-you', 1);
                setCurrentDataList(response.data)
                setData(response.data[5]);
            } catch (error) {
                console.log("lỗi rồi baby à");
            }
        }

        fetchData();
    }, [])

    return (
        <div className={ cx('wrapper') }>
            <VerticalSlide>
                <SwiperSlide className={ cx('swiper-slide') }>
                    <Header
                        user={ data.user }
                        videoDescription={ data.description }
                        backgroundMusic={ data.music }
                    />
                    <div className={ cx('video-place') }>
                        <VideoContent />
                        <div className={ cx('action-place') }>
                            <ActionButton
                                icon={ <i className="fa-solid fa-heart"></i> }
                                analyse={ "225.5K" }
                            />
                            <ActionButton
                                icon={ <i className="fa-solid fa-comment-dots"></i> }
                                analyse={ "12K" }
                            />
                            <ActionButton
                                icon={ <i className="fa-solid fa-share"></i> }
                                analyse={ "34" }
                            />
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className={ cx('swiper-slide') }>
                    <Header
                        user={ data.user }
                        videoDescription={ data.description }
                        backgroundMusic={ data.music }
                    />
                    <div className={ cx('video-place') }>
                        <VideoContent />
                        <div className={ cx('action-place') }>
                            <ActionButton
                                icon={ <i className="fa-solid fa-heart"></i> }
                                analyse={ "225.5K" }
                            />
                            <ActionButton
                                icon={ <i className="fa-solid fa-comment-dots"></i> }
                                analyse={ "12K" }
                            />
                            <ActionButton
                                icon={ <i className="fa-solid fa-share"></i> }
                                analyse={ "34" }
                            />
                        </div>
                    </div>


                </SwiperSlide>

            </VerticalSlide>
        </div>
    )
}

export default Home 