import React, { useRef, useState } from "react";
import { AutoSizer } from "react-virtualized";
import styles from "./styles.module.scss";
import { v4 } from "uuid";

export const Carousel = (props) => {
  const { children, initSlide = 0, small = true, thumbnails } = props;
  const maxItem = React.Children.count(children);
  const [slide, setSlide] = useState(initSlide ?? 0);

  const wrapperRef = useRef(null);

  return (
    <div
      ref={wrapperRef}
      draggable={false}
      className={`${styles.carouselWrapper}`}
      {...props}
    >
      <div className={styles.content} style={{ left: `-${slide * 100}%` }}>
        {children.length > 0 &&
          children?.map((props, i) => (
						<div key={i} style={{ width: "100vw" }} className={`${styles.slideWrapper}`}>
              <div className={styles.slide}>{props}</div>
            </div>
          ))}
      </div>
      <div className={styles.dots}>
        {Array(maxItem)
          ?.fill("⬤")
          ?.map((dot, i) => (
            <div
              key={i}
              onClick={() => setSlide(i)}
              className={`${styles.dot} ${slide === i ? styles.dotFocus : ""}`}
            >
              {dot}
            </div>
          ))}
      </div>
      {/*
          <div className={styles.thumbnails}>
            {thumbnails.map(({ url }, index) => (
              <img
                key={() => v4()}
                src={url}
                onClick={() => setSlide(index)}
                alt="Thumbnail"
                className={`${styles.thumbnail} ${
                  slide === index ? styles.selected : ""
                }`}
              />
            ))}
          </div>
					*/}
    </div>
  );
};
