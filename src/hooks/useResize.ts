import { useEffect, useState } from "react";

const useResize = (breakpoint: number): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(document.body.clientWidth > breakpoint);

  const onResize: ResizeObserverCallback = (entries): void => {
    if ((entries[0]?.contentRect.width ?? 0) > breakpoint) {
      setIsVisible(true);

      return;
    }

    setIsVisible(false);
  };

  useEffect((): VoidFunction => {
    const observer = new ResizeObserver(onResize);

    observer.observe(document.body);

    return (): void => {
      observer.unobserve(document.body);
    };
  }, [document.body]);

  return isVisible;
};

export { useResize };

