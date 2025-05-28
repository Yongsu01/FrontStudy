import { useRef, useState } from "react";
import styled from "styled-components";

export default function MainPageBasic() {
  const [col, setColor] = useState("#FFFFFF");
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const isTransition = useRef(false);

  const Slides = [
    {
      id: 12,
      color: "#ffe0ed",
      src: "https://image.univstore.com/20250407_perfumehub_brandweek_web_maintop.png",
    },
    {
      id: 0,
      color: "#FFFFFF",
      src: "https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg",
    },
    {
      id: 1,
      color: "#6588b8",
      src: "https://image.univstore.com/20250403_samsung_galaxytabs10fe_6688b9_web_maintop.png",
    },
    {
      id: 2,
      color: "#FFFFFF",
      src: "https://image.univstore.com/20250403_apple_ipadair_m3_preorder_web_maintop.jpg",
    },
    {
      id: 3,
      color: "#e6ffe5",
      src: "https://image.univstore.com/20250401_samsung_galaxybook5_promotion_e6ffe5_web_maintop.png",
    },
    {
      id: 4,
      color: "#ddddff",
      src: "https://image.univstore.com/20250113_dyson_dyson_brandweek_web_maintop_DDDDFE.png",
    },
    {
      id: 5,
      color: "#ebdcd7",
      src: "https://image.univstore.com/20250217_sony_audio_brandweek_ebdcd7_web_maintop.png",
    },
    {
      id: 6,
      color: "#dae7e9",
      src: "https://image.univstore.com/20250211_samsung_tabphone_web_maintop.png",
    },
    {
      id: 7,
      color: "#cecece",
      src: "https://image.univstore.com/20250407_canon_powershotv1_launching_web_maintop_CFCFCF.jpg",
    },
    {
      id: 8,
      color: "#c9ced2",
      src: "https://image.univstore.com/20250219_sennheiser_nukak_v2_c9ced2_web_maintop.png",
    },
    {
      id: 9,
      color: "#fbd9ed",
      src: "https://image.univstore.com/20250407_lg_gram_lunarlake_launching_rev2_fbd8ec_web_maintop.png",
    },
    {
      id: 10,
      color: "#fff8f3",
      src: "https://image.univstore.com/20250407_microsoft_windows11_eos_fff8f3_web_maintop.png",
    },
    {
      id: 11,
      color: "#faf0f0",
      src: "https://image.univstore.com/20250317_bose_brandweek_faf0f0_web_maintop.png",
    },
    {
      id: 12,
      color: "#ffe0ed",
      src: "https://image.univstore.com/20250407_perfumehub_brandweek_web_maintop.png",
    },
    {
      id: 0,
      color: "#FFFFFF",
      src: "https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg",
    },
  ];

  const SlideLength = Slides.length;

  const PopularItems = [
    {
      title: "TOUR ONE M3 SMART TX 노이즈 캔슬링 무선 헤드폰 블랙",
      dataId: 81903,
      brandId: 6,
      name: "JBLTOM3AVIBLK",
      price: "499,000",
      score: null,
      scoreCount: null,
      img: "https://image.univstore.com/JBLTOM3AVIBLK_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "젠하이저 HD560S 오픈형 레퍼런스 유선 헤드폰",
      dataId: 48684,
      brandId: 85,
      name: "HD560S",
      price: "249,000",
      score: "4.8",
      scoreCount: "5",
      img: "https://image.univstore.com/HD560S-pcd_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "애플 iPad Air 11(M3 모델) Wi-Fi 128GB 스페이스 그레이",
      dataId: 65537,
      brandId: 1,
      name: "MC9W4KH/A",
      price: "949,000",
      score: "5.0",
      scoreCount: "15",
      img: "https://image.univstore.com/MC9W4KHA_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "애플 iPad Air 13(M3 모델) Wi-Fi 128GB 스페이스 그레이",
      dataId: 65585,
      brandId: 1,
      name: "MCNH4KH/A",
      price: "1,249,000",
      score: "5.0",
      scoreCount: "5",
      img: "https://image.univstore.com/MCNH4KHA_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title:
        "삼성 갤럭시 북5 Pro 40.6cm Ultra 5 226V 16GB 512GB 실버 Windows 11 Home",
      dataId: 62337,
      brandId: 6,
      name: "NT961XHA-KE51S",
      price: "2,308,000",
      score: "4.9",
      scoreCount: "98",
      img: "https://image.univstore.com/NT961XHA-KE51S_thumbnail-00.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "삼성 갤럭시 S25+ 자급제 256GB 아이스 블루",
      dataId: 63116,
      brandId: 6,
      name: "SM-S936NLBAKOO",
      price: "1,353,000",
      score: "5.0",
      scoreCount: "31",
      img: "https://image.univstore.com/SM-S936NLBAKOO_thumbnail-00-re2.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "애플 Apple Pencil Pro",
      dataId: 48726,
      brandId: 1,
      name: "MX2D3KH/A",
      price: "195,000",
      score: "4.7",
      scoreCount: "115",
      img: "https://image.univstore.com/MX2D3KHA_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "애플 MacBook Air 15 M4 CPU 10코어 GPU 10코어 16GB 256GB 실버",
      dataId: 65146,
      brandId: 1,
      name: "MW1G3KH/A",
      price: "1,890,000",
      score: "5.0",
      scoreCount: "2",
      img: "https://image.univstore.com/MW1G3KHA_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title:
        "LG 그램 Pro 16 40.6cm Arrow Ultra 5 16GB 512GB Windows 11 Home 화이트",
      dataId: 62554,
      brandId: 2,
      name: "16Z90TP-GA5JK",
      price: "2,290,000",
      score: "5.0",
      scoreCount: "11",
      img: "https://image.univstore.com/16Z90TP-GA5JK_thumbnail-01.png?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "SONY WH-1000XM4 실버 - 거치대 증정",
      dataId: 5781,
      brandId: 27,
      name: "WH-1000XM4/SME",
      price: "459,000",
      score: "4.7",
      scoreCount: "58",
      img: "https://image.univstore.com/WH1000XM4실버_thumbnail_1-F5.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "BOSE QC 울트라 헤드폰 화이트",
      dataId: 35271,
      brandId: 30,
      name: "880066-0200",
      price: "499,000",
      score: "4.7",
      scoreCount: "90",
      img: "https://image.univstore.com/880066-0200_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "젠하이저 모멘텀 4세대 무선 M4AEBT 헤드폰 블랙",
      dataId: 9734,
      brandId: 85,
      name: "M4AEBT-BK",
      price: "479,000",
      score: "4.6",
      scoreCount: "9",
      img: "https://image.univstore.com/M4AEBT-BK_thumbnail-01-F5.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "New 다이슨 에어랩™ 멀티 스타일러  오리진 롱 플러스 니켈-코퍼",
      dataId: 40395,
      brandId: 545,
      name: "HS05_long_Origin",
      price: "629,000",
      score: "4.8",
      scoreCount: "12",
      img: "https://image.univstore.com/HS05_long_thumbnail-02.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title:
        "HP Omnibook 울트라 플립 14 U7 32GB 1TB Windows 11 Home 이클립스 그레이",
      dataId: 56194,
      brandId: 22,
      name: "B15J4PA",
      price: "2,349,000",
      score: "5.0",
      scoreCount: "9",
      img: "https://image.univstore.com/HP-B15J4PA_thumbnail_04.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title:
        "Surface Laptop7 Copilot+PC 35.3cm C10 16GB 256GB Windows 11 Home 플래티넘",
      dataId: 50644,
      brandId: 21,
      name: "ZGJ-00021",
      price: "1,609,000",
      score: "4.8",
      scoreCount: "5",
      img: "https://image.univstore.com/ZGJ-00021_thumbnail-01-1209.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title:
        "Surface Pro11 Copilot+PC 33.2cm C10 16GB 512GB Windows 11 Home 블랙 + 코파일럿 키보드+슬림펜2",
      dataId: 52450,
      brandId: 21,
      name: "ZHY-00033/8X6-00184",
      price: "2,349,000",
      score: "5.0",
      scoreCount: "1",
      img: "https://image.univstore.com/ZHY-00033-3_thumbnail-01-1210.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "[10PACK] 남성 페이크 삭스 화이트 250~280",
      dataId: 78888,
      brandId: 1719,
      name: "1996socks01",
      price: "19,900",
      score: null,
      scoreCount: null,
      img: "https://image.univstore.com/1996socks01_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "쿠첸 모던 다이얼식 20L 전자레인지 화이트",
      dataId: 49974,
      brandId: 100,
      name: "CMW-N202W",
      price: "89,000",
      score: null,
      scoreCount: null,
      img: "https://image.univstore.com/CMW-N202W_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "다이슨 슈퍼소닉™ HD-15 니켈코퍼",
      dataId: 39042,
      brandId: 545,
      name: "HD15-NC",
      price: "499,000",
      score: "5.0",
      scoreCount: "4",
      img: "https://image.univstore.com/HD15-NC_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "New Balance 574 남여공용 운동화 ML574EVG 250",
      dataId: 65668,
      brandId: 427,
      name: "ML574EVG",
      price: "189,000",
      score: null,
      scoreCount: null,
      img: "https://image.univstore.com/ML574EVG.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "퍼퓸허브 아쿠아디파르마 미르토 디 파나레아 EDT 30ml",
      dataId: 42341,
      brandId: 1178,
      name: "ACQUA-DI-PARMA-MIRTO-30-30ml",
      price: "85,000",
      score: "5.0",
      scoreCount: "2",
      img: "https://image.univstore.com/ACQUA-DI-PARME-MIRTO-30-30ml_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "워터리 에센스 선크림 80ml",
      dataId: 63889,
      brandId: 1638,
      name: "forest-11039665",
      price: "20,000",
      score: null,
      scoreCount: null,
      img: "https://image.univstore.com/forest-11039665_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "[1+1]&nbsp;오어스 비건 민들레 진정 수분 토너패드&nbsp;90매",
      dataId: 45790,
      brandId: 1198,
      name: "OESTP10010x2",
      price: "48,000",
      score: "5.0",
      scoreCount: "2",
      img: "https://image.univstore.com/tonnerpad.png?w=400&amp;h=400&amp;q=80",
    },
    {
      title: "세잔느 메이크 킵 베이스 라이트 블루 더블 기획",
      dataId: 53922,
      brandId: 1370,
      name: "100987",
      price: "34,000",
      score: null,
      scoreCount: null,
      img: "https://image.univstore.com/SOSAN-100987_thumbnail-01.jpg?w=400&amp;h=400&amp;q=80",
    },
  ];

  function slideChange(idx) {
    if (!isTransition.current) {
      if (idx === -1 || idx === SlideLength) return;
      isTransition.current = true;
      setTransition(true);
      setIndex(idx);
      setColor(Slides[idx].color);
      if (idx === 0 || idx === SlideLength - 1) {
        setTimeout(() => {
          setTransition(false);
          idx === 0 ? setIndex(SlideLength - 2) : setIndex(1);
        }, 500);
      }
      setTimeout(() => {
        isTransition.current = false;
      }, 500);
    }
  }

  function getBrandName(id) {
    switch (id) {
      case 6:
        return "삼성";
      case 85:
        return "젠하이저";
      case 1:
        return "Apple";
      case 2:
        return "LG";
      case 27:
        return "SONY";
      case 30:
        return "BOSE";
      case 22:
        return "HP";
      case 21:
        return "Microsoft";
      case 1719:
        return "1996스탠다드";
      case 100:
        return "쿠첸첸";
      case 545:
        return "다이슨";
      case 427:
        return "New Balance";
      case 1178:
        return "퍼퓸허브";
      case 1638:
        return "그린핑거포레스트";
      case 1198:
        return "톤핏선앤오어스";
      case 1370:
        return "세잔느";
    }
  }

  return (
    <MainPageLayout className="MainPage">
      <MainBanner className="MainBanner" style={{ backgroundColor: col }}>
        <Carousel className="Carousel">
          <CarouselInner className="CarouselInner">
            <SliderWrapper>
              <div
                style={{
                  display: "flex",
                  transition: transition
                    ? `transform 0.5s ease-in-out`
                    : `transform 0s ease-in-out`,
                  transform: `translateX(${-(100 / SlideLength) * index}%)`,
                }}
              >
                {Slides.map((img, idx) => {
                  return (
                    <a href="#!">
                      <img
                        key={idx}
                        src={img.src}
                        alt="slide img"
                        style={{}}
                      ></img>
                    </a>
                  );
                })}
              </div>
            </SliderWrapper>
            <SwiperButtonPrev
              onClick={() => {
                slideChange(index - 1);
              }}
            ></SwiperButtonPrev>
            <SwiperButtonNext
              onClick={() => {
                slideChange(index + 1);
              }}
            ></SwiperButtonNext>
            <SwiperNav>
              {Array(SlideLength - 2)
                .fill()
                .map((_, idx) => {
                  return (
                    <SwiperNavButton
                      key={idx}
                      onClick={() => slideChange(idx)}
                      style={{
                        backgroundColor: "#000",
                        opacity: index !== idx ? ".2" : "",
                      }}
                    ></SwiperNavButton>
                  );
                })}
            </SwiperNav>
          </CarouselInner>
        </Carousel>
      </MainBanner>
      <Shortcut>
        <ShortcutInner>
          <ShortcutItem>
            <img src="https://image.univstore.com/20241202_mdspick_promotion_52p_shortcut.png?f=avif" />
            <p>오늘의 추천</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/0519icon.jpg?f=avif" />
            <p>체험단 모집</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/20250519_everyuneez_exam_promotion_2_2.png?f=avif" />
            <p>기말고사특가</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/20250314_shortcut_telecom_iphone.jpg?f=avif" />
            <p>통신비 할인</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/20250314_shortcut_samsung_tab.jpg?f=avif" />
            <p>Galaxy</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/20250519_shortcut_speaker.jpg?f=avif" />
            <p>스피커할인</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/newbalance_icon.jpg?f=avif" />
            <p>뉴발란스</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/20250407_shortcut_summerelec.png?f=avif" />
            <p>여름대비할인</p>
          </ShortcutItem>
          <ShortcutItem>
            <img src="https://image.univstore.com/crocsicon.jpg?f=avif" />
            <p>크록스</p>
          </ShortcutItem>
        </ShortcutInner>
      </Shortcut>
      <LineBanner>
        <a href="">
          <div />
        </a>
      </LineBanner>
      <Popular>
        <h3>추천 PICK</h3>
        <PopularItemWrapper>
          {PopularItems.map((e) => (
            <PopularItem>
              <PopularItemImg img={e.img}></PopularItemImg>
              <PopularItemTextContentBox>
                <PopularItemBrand><span>{getBrandName(e.brandId)}</span></PopularItemBrand>
                <PopularItemTitle>{e.title}</PopularItemTitle>
                <PopularItemName>{e.name}</PopularItemName>
                <PopularItemPrice>{e.price}원</PopularItemPrice>
                <PopularItemCheckRealPrice>
                  학생인증 후 가격 확인
                </PopularItemCheckRealPrice>
                {e.score ? (
                  <PopularItemScore>
                    <span>{e.score}</span>
                    <PopularItemScoreCount>
                      ({e.scoreCount})
                    </PopularItemScoreCount>
                  </PopularItemScore>
                ) : null}
              </PopularItemTextContentBox>
            </PopularItem>
          ))}
        </PopularItemWrapper>
      </Popular>
    </MainPageLayout>
  );
}
//#region
const SwiperNav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  gap: 6px;
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

const Shortcut = styled.div`
  padding: 32px 0 36px;
  margin: 0 auto;
  width: 80.625%;
  max-width: 1032px;
`;

const ShortcutInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -6px;
  overflow: auto;
`;

const ShortcutItem = styled.a`
  position: relative;
  flex: 0 1 90px;
  margin: 0 6px;
  img {
    border-radius: 50%;
    width: 100%;
  }
  p {
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    margin-top: 7px;
  }
`;

const LineBanner = styled.div`
  background-color: rgb(255, 225, 226);
  a {
    div {
      background-image: url(https://image.univstore.com/20250501_에브리유니즈_everybeauty_web_maincarousel_FFE1E1_main_linebanner.jpg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      padding-top: 84px;
    }
  }
`;
//#endregion
//#region
const Popular = styled.div`
  margin: 64px 0;
  h3 {
    margin: 0 auto;
    margin-bottom: 27px;
    width: 80.625%;
    max-width: 1032px;
  }
`;

const PopularItemWrapper = styled.div`
  margin: 0 auto;
  width: 80.625%;
  max-width: 1032px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  gap: 16px;
`;

const PopularItem = styled.div`
  position: relative;
  display: block;
  margin-bottom: 40px;
  display: block;
  padding: 8px 0;
`;

const PopularItemImg = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
  width: 242.56px;
  height: 242.56px;
  border-radius: 8px;
  cursor: pointer;
`;

const PopularItemTextContentBox = styled.div`
  padding: 12px 8px;
`;

const PopularItemBrand = styled.div`
  cursor: pointer;
  color: #787a87;
  font-size: 13px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  &::after {
    background-image: url(https://static.univstore.com/web/image/ic-arrow-forward-mini-gray-bold.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    display: inline-block;
    width: 5px;
    height: 8px;
    vertical-align: middle;
    margin-left: 3px;
  }
`;

const PopularItemTitle = styled.div`
  cursor: pointer;
  width: 88%;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  word-break: break-all;
  white-space: normal;
`;

const PopularItemName = styled.div`
  color: #222;
  font-size: 13px;
  font-weight: 100;
  margin-top: 4px;
  word-break: break-all;
  white-space: normal;
`;

const PopularItemPrice = styled.div`
  text-decoration: line-through;
  color: #a4a6b5;
  font-size: 13px;
  margin: 12px 0 4px 0;
`;

const PopularItemCheckRealPrice = styled.a`
  cursor: pointer;
  color: #fff;
  background-color: #787a87;
  padding: 8px 10px;
  font-size: 13px;
  border-radius: 3px;
  font-weight: 600;
  transition: all ease-in-out 200ms;
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    background-color: #555;
  }
  &::after {
    background-image: url(https://static.univstore.com/web/image/ic-cta.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    content: "";
    width: 8px;
    height: 12px;
    margin-left: 4px;
  }
`;

const PopularItemScore = styled.div`
  margin-top: 6px;
  font-size: 13px;
  span {
    font-weight: bold;
    margin-right: 3px;
    padding-left: 3px;
  }
  &::before {
    background: url(https://static.univstore.com/web/image/ic-pentagram-active.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    width: 11px;
    height: 11px;
    display: inline-block;
  }
`;

const PopularItemScoreCount = styled.div`
  display: inline-block;
  color: #787a87;
`;
//#endregion

