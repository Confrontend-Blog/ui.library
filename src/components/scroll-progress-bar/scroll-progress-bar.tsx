import React, { useRef, useEffect } from "react";
import * as S from "./scroll-progress-bar.styled";

type ScrollProgressBarProps = {
  color?: string;
};

function ScrollProgressBar({ color = "red" }: ScrollProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBarRef.current) {
      return;
    }
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      progressBarRef.current!.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
}

export default ScrollProgressBar;
