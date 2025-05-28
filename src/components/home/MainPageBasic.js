import {useRef, useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import slides from "../../data/slides.json";

export default function MainPageBasic() {
  const data = slides.slides
  const [slideList, setSlideList] = useState([]);
  const [slideLength, setSlideLength] = useState(0);

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [slideIndex, setSlideIndex] = useState(1);
  const [transition, setTransition] = useState(false);
  const isTransitioning = useRef(false);

  const realIndex = useMemo(()=>{
    if (slideIndex === 0) return slideLength-3; // 더미 인덱스 -2 && 인덱스 -1
    if (slideIndex === slideLength-1) return 0;
    return slideIndex-1;
  }, [slideIndex, slideLength]);

  // 슬라이드와 슬라이드의 길이를 가져오기
  useEffect(()=>{
    if (data) {
      setSlideList([
        data[data.length-1],
        ...data,
        data[0]
      ]);
      setSlideLength(data.length+2);
      setBackgroundColor(data[0].color);
    }
  }, [data]);

  // 슬라이드 움직이기 && 배경 색상 바꾸기
  function slideChange(idx) {
    if (!isTransitioning.current) {
      if (idx === -1 || idx === slideLength) return;
      isTransitioning.current = true;
      setTransition(true);
      setSlideIndex(idx);
      setBackgroundColor(slideList[idx].color);

      if (idx === 0 || idx === slideLength-1) {
        setTimeout(()=>{
          setTransition(false);
          idx === 0 ? setSlideIndex(slideLength-2) : setSlideIndex(1);
          isTransitioning.current = false
        }, 500);
        return
      }
      setTimeout(()=>{isTransitioning.current = false}, 500);
    }
  }

  return (
    <MainPageLayout className="MainPage">
      <MainBanner className="MainBanner" style={{backgroundColor:backgroundColor}}>
        <Carousel className="Carousel">
          <CarouselInner className="CarouselInner">
            <SliderWrapper>
              {
                slideLength === 0 ? <div>Loading...</div> 
                : <div 
                  style={{
                    display: "flex",
                    transition: transition ? `transform 0.5s ease-in-out` : `none`,
                    transform: `translateX(${-(100/slideLength) * (slideIndex)}%)`
                  }}>
                  {
                    slideList.map((img, idx)=>{
                      return (
                        <a href="#!">
                          <img key={idx} src={img.src} alt="slide img">
                          </img>
                        </a>
                      );
                    })
                  }
                </div>
              }
            </SliderWrapper>

            <SwiperButtonPrev onClick={()=>{slideChange(slideIndex-1)}}></SwiperButtonPrev>
            <SwiperButtonNext onClick={()=>{slideChange(slideIndex+1)}}></SwiperButtonNext>

            <SwiperNav>
              {
                slideLength !== 0 ? Array(slideLength-2)
                  .fill()
                  .map((_, idx)=>{
                    return (
                      <SwiperNavButton
                        key={idx}
                        onClick={()=>slideChange(idx+1)}
                        style={{
                          backgroundColor : "#000",
                          opacity: (realIndex !== idx) ? ".2" : ""
                        }}
                      ></SwiperNavButton>
                    );
                  }) : null
              }
            </SwiperNav>

          </CarouselInner>
        </Carousel>
      </MainBanner>
    </MainPageLayout>
  );
}

const SwiperNav  = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  gap: 5px;
`;

const SwiperNavButton = styled.button`
  padding: 0;
  
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

const MainPageLayout = styled.main`
  min-height: 616.734px;
`;

const MainBanner = styled.div`
  transition: background-color linear 300ms;
`;

// const MainBannerImg = styled.img`
  
// `;

const Carousel = styled.div`
  position: relative;
  margin: 0 auto;

  width: 80.625%;
  max-width: 1032px;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  padding-top: 50%;
`;

const SliderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

const SwiperButtonPrev = styled.div`
  background-image: url("https://www.univstore.com/image/ic-arrow-forward-black.png");
  left: 0;
  transform: rotate(180deg);
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  width: 48px;
  height: 100%;
  background-position-x: 16px;
  right: auto;
  position: absolute;
`;

const SwiperButtonNext = styled.div`
  background-image: url("https://www.univstore.com/image/ic-arrow-forward-black.png");
  right: 0;
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  width: 48px;
  height: 100%;
  background-position-x: 6px;
  left: auto;
  position: absolute;
`;