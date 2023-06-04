import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Image as IImage } from '@/types/image';
import Image from 'next/image';
import classes from './Slider.module.css'



interface Props {
    images: IImage[];
}


export default function Slider({ images }: Props) {
    const [opacities, setOpacities] = React.useState<number[]>([])
    const [sliderRef,internalSlider] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: images.length,
        loop: true,
        detailsChanged(s : any) {
          if(images.length === 0) return;
          const new_opacities = s.track.details.slides.map((slide: any) => slide.portion)
          setOpacities(new_opacities)
        },
        defaultAnimation: {
            duration: 1000, 
        }
    })

useEffect(() => {
    if(!sliderRef) return;
    setInterval(() => {
      internalSlider.current?.next()
    }, 10000)
}, [sliderRef,internalSlider,images])

  return (
    <>
    {
      images.length > 0 ? (
        <div ref={sliderRef} className={`keen-slider ${classes.fader}`}>
        { images.map((image,idx) => (
            <div
            key={image.id}
            className={`${classes.fader__slide}`}
            style={{opacity:opacities[idx]}}>               
                <Image width={1000} height={300} src={image.url} alt='helloworld' style={{objectFit:'fill'}} />
                <p>{image.id}</p>
            </div>
        ))}
    </div>
      )
      : <div>DB에 이미지가 존재하지 않습니다.</div>
    }
    </>
  )
}
