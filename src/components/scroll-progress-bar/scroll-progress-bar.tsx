import React, { useRef, useEffect } from "react";
import * as S from "./scroll-progress-bar.styled";

type ScrollProgressBarProps = {
  color?: string;
};

const getScrollPercentage = (): number => {
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
  const scrollTop = window.scrollY;
  const scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;
  return scrollPercentage;
};

const ScrollProgressBar: React.FunctionComponent<ScrollProgressBarProps> = ({
  color = "blue",
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgressBar = () => {
      if (progressBarRef.current) {
        const scrollPercentage = getScrollPercentage();
        progressBarRef.current.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", updateProgressBar);
    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <S.ProgressBarWrapper>
      <S.ProgressBar
        data-testid="progress-bar"
        ref={progressBarRef}
        color={color}
      />
    </S.ProgressBarWrapper>
  );
};

export default ScrollProgressBar;
