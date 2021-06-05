import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/06/609258-berserk-manga-anime-videojuegos-repaso-obra-kentaro-miura.jpg?itok=argCmEGz',
    altText: 'Imagen 1',
    caption: 'Guts new Armor'
  },
  {
    src: 'https://wallpaperaccess.com/full/674711.jpg',
    altText: 'Imagen 2',
    caption: 'Orc horde'
  },
  {
    src: 'https://1.bp.blogspot.com/-ZtUkn5eZ5E0/WVKxMxZOaYI/AAAAAAAAB7I/QQf7XRREPS8NMxhhLyQL5QDFJdCfi6AuACLcBGAs/s1600/Berserk%2BApostoles%2Bnovea.jpg',
    altText: 'Imagen 3',
    caption: 'Beasts'
  }
];

const Contact = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  width="100%" height="750px"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Contact;