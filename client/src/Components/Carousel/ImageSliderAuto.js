import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSliderAuto = (props) => {
  const SliderProperty = {
    ImageNo: '',
    ImageName: '',
    ImageSrc: ''
  };

  const [sliderProperty, setSliderProperty] = useState(SliderProperty);
  const { ImageNo, ImageName, ImageSrc } = sliderProperty;
  const [countAuto, setCountAuto] = useState(0);
  const [animationCls, setAnimationCls] = useState('displayBlock');

  const NextClick = () => {
    setAnimationCls('displayNone');
    setTimeout(() => {
      setAnimationCls('displayBlock');
    }, 100);

    if (countAuto < props.ImageData.length - 1) {
      setCountAuto(countAuto + 1);
    } else {
      setCountAuto(0);
    }
  };

  useEffect(() => {
    setSliderProperty({
      ImageNo: props.ImageData[countAuto].ImageNo,
      ImageName: props.ImageData[countAuto].ImageName,
      ImageSrc: props.ImageData[countAuto].ImageSrc
    });
  }, [countAuto]);

  useEffect(() => {
    const interval = setInterval(() => {
      NextClick();
    }, props.SlideInterValTime + 5000);

    return () => clearInterval(interval);
  }, [countAuto]);

  return (
    <>
      <div className="slideshow-container">
        <div className={`${animationCls} fade`}>
          <div className="numbertext">{ImageNo}</div>
          <img src={ImageSrc} className="imageStyle" alt="Img" />
        </div>
        <div className="text">{ImageName}</div>
        <div className="overlay">
          <p>{props.TextData[countAuto]}</p>
        </div>
      </div>
    </>
  );
};

export default ImageSliderAuto;
