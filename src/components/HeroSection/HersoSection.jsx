import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSectionStyles.css";
import img1 from "./paintings/valerie-elash-RfoISVdKM4U-unsplash.jpg";
import img2 from "./paintings/art_guru_gurpreet_20170522_p_1519839766311432066_1_1519839766311432066.jpg";
import img4 from "./paintings/art_guru_gurpreet_20200212_p_2242302726101041477_1_2242302726101041477.jpg";
import img5 from "./paintings/art_guru_gurpreet_20200529_p_2319660043225916084_1_2319660043225916084.jpg";
import img6 from "./paintings/art_guru_gurpreet_20210211_p_2506780724338935313_1_2506780720085890246.jpg";

import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="mySwiper">
        <p
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          Featured Paintings
        </p>
        <Swiper
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          spaceBetween={30}
        >
          <SwiperSlide>
            <img src={img6} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Slide 1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
