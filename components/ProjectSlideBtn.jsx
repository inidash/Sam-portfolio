"use client";
import {useSwiper} from 'swiper/react'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const ProjectSlideBtn = ({ containerstyle, iconStyle, btnStyle }) => {
    const swiper = useSwiper()
  return (
    <div className={containerstyle}>
        <button className={btnStyle} onClick={() => swiper.slidePrev()}> <IoIosArrowDropleft className={iconStyle}/> </button>
        <button className={btnStyle} onClick={() => swiper.slideNext()}> <IoIosArrowDropright className={iconStyle}/> </button>
    </div>
  )
}

export default ProjectSlideBtn