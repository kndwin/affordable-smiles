import React, { useRef, useState } from "react";
import { AutoSizer } from "react-virtualized";
import styles from "./styles.module.scss";
import { v4 } from "uuid";

export const Carousel = (props) => {
  const { children, initSlide = 0, small = true, thumbnails } = props;
  const maxItem = React.Children.count(children);
  const [slide, setSlide] = useState(initSlide ?? 0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const wrapperRef = useRef(null);

  return (
    <AutoSizer>
      {({ height, width }) => (
        <div
          ref={wrapperRef}
          draggable={false}
          className={`${styles.carouselWrapper}`}
          style={{ height, width }}
          {...props}
        >
          <div
            className={styles.content}
            style={{ left: `-${slide * width}px` }}
          >
            {children.length > 0 &&
              children?.map((props, i) => (
                <div
                  key={() => v4()}
                  style={{ width }}
                  className={`${styles.slideWrapper}`}
                >
                  <div className={styles.slide}>{props}</div>
                </div>
              ))}
          </div>
          <div className={styles.thumbnails}>
            {thumbnails.map(({ url }, index) => (
              <img
                onClick={() => setSlide(index)}
                src={url}
                alt="Thumbnail"
                className={`${styles.thumbnail} ${
                  slide === index ? styles.selected : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </AutoSizer>
  );
};
