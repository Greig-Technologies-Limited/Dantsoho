import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import One from '../assets/one.jpg'
import Two from '../assets/three.jpg'
import Three from '../assets/two.webp'
// import Four from '../assets/Four.png'
// import Five from '../assets/Five.png'
// import Six from '../assets/Six.png'


export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={One} alt="" />
        </div>
        <div className="embla__slide">
        <img src={Three} alt="" />
        </div>
        <div className="embla__slide">
        <img src={Two} alt="" />
        </div>
        {/* <div className="embla__slide">
        <img src={Four} alt="" />
        </div>
        <div className="embla__slide">
        <img src={Five} alt="" />
        </div>
        <div className="embla__slide">
        <img src={Six} alt="" />
        </div> */}
      </div>
    </div>
  )
}