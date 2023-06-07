import { useRef, useEffect } from "react";

export const useHorizontalScroll = () => {
  const scrollRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    const containerElement = containerRef.current;

    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0)
        ) {
          e.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft - e.deltaY,
          behavior: 'smooth',
        });
      };
      containerElement.addEventListener("wheel", onWheel);
      return () => containerElement.removeEventListener("wheel", onWheel);
    }
  }, []);

  return {
    scrollRef,
    containerRef
  };
}