import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import img1 from '../../images/2.jpg'
import img2 from '../../images/Logo-29.jpg'
import img3 from '../../images/Logo-30.jpg'
import img4 from '../../images/Logo-33.jpg'
import img5 from '../../images/Deshbandhu_Group-min_x7jru5.jpg'
import img6 from '../../images/Domus-min_rrpfin.jpg'
import img7 from '../../images/Marion_Biotech-min_p8izfn.jpg'
import img8 from '../../images/SBI_bw0q9q.jpg'
import img9 from '../../images/LinkSoft-min_pbmlpj.jpg'
import img10 from '../../images/IQRA-min_vzj5as.jpg'


function Crousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='showcase7'>
      <h2>Our Clients</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={600}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
       
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        <div><img src={img1} alt="" /></div>
        <div><img src={img2} alt="" /></div>
        <div><img src={img3} alt="" /></div>
        <div><img src={img4} alt="" /></div>
        <div><img src={img5} alt="" /></div>
        <div><img src={img6} alt="" /></div>
        <div><img src={img7} alt="" /></div>
        <div><img src={img8} alt="" /></div>
        <div><img src={img9} alt="" /></div>
        <div><img src={img10} alt="" /></div>
  </Carousel>;
    </div>
  )
}

export default Crousel
