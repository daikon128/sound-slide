import {useEffect, useState} from "react";
import {Image} from "../../model/image";
import {fetchImages} from "../../driver/ImageDriver";
import {ImageElement} from "../image/ImageElement";
import styles from "./CreateSlide.module.scss"

export const CreateSlide = () => {
  const [images, setImages] = useState<Image[]>([])
  const [windowWidth, setWindowWidth] = useState(0)
  const [sequence, setSequence] = useState(0.000);
  const [timerRunning, setTimerRunning] = useState(false);
  const [previewImageId, setPreviewImageId] = useState(NaN);
  useEffect(() => {
    fetchImages().then((result) => {
      setImages(result)
    })
    setWindowWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerRunning) {
        setSequence(time => time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, images]);
  useEffect( ()=> {
    if (images.length > 0) {
      const number = sequence % images.length
      console.log(number, sequence, images.length)
      setPreviewImageId(images[number].id)
    }
  }, [sequence])
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (timerRunning) {
  //       setTime(time => time + 0.001);
  //     }
  //   }, 1);
  //   return () => clearInterval(interval);
  // }, [timerRunning]);

  const imageList = (images: Image[]) => {
    // TODO dynamic
    const width = windowWidth / 3
    return images.map((image) => {
      return (
        <div className={styles['image-wrapper']} key={image.id}>
          <ImageElement id={image.id} width={width} height={300}/>
        </div>)
    })
  }

  const toggleTimer = () => {
    setTimerRunning(prev => !prev)
  }

  const previewImage = (id: number) => {
    const width = (windowWidth * 2)/ 3
    if (isNaN(id)) {
      return (
        <>empty</>
      )
    }
    return (
      <ImageElement id={id} width={width} height={300}/>
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles['create-space']}>
        <div>
          time: {sequence.toLocaleString(undefined, {maximumFractionDigits: 4})}
          <button onClick={toggleTimer}> { !timerRunning ? "start" : "stop"}</button>
        </div>
        <div>
          {previewImage(previewImageId)}
        </div>
      </div>
      <div className={styles['image-preview']}>
        {imageList(images)}
      </div>

    </div>
  )

}