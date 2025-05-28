import styled from "styled-components";
import mainPopularItem from "../../data/mainPopularItem.json";

export default function MainPopular(){
  const dummy = mainPopularItem.mainPopularItem[0]
  const items = Array.from({length: 24}, () => ({...dummy})); // 복사본 반환을 24번 반복

  return (
    <MainPopularLayout>
      <MainPopularTitle>추천  PICK</MainPopularTitle>
      <ItemList>
        {
          items.map((item, idx)=>{
            return (
              <ItemCard key={idx}>
                <ItemCardThumbnailWrapper>
                  <ItemCardThumnail src={item.thumnailLink}></ItemCardThumnail>
                </ItemCardThumbnailWrapper>
                <ItemCardInfo>
                  <ItemCardInfoBrandName>{item.cardInfo.brandName}</ItemCardInfoBrandName>
                  <ItemCardInfoName>{item.cardInfo.name}</ItemCardInfoName>
                  <ItemCardInfoCode>{item.cardInfo.code}</ItemCardInfoCode>
                  <ItemCardInfoPrice>{item.cardInfo.price}</ItemCardInfoPrice>
                  <ValidationMessage></ValidationMessage>
                  <ItemCardInfoReview>
                    <ItemCardInfoReviewPentagram src="https://static.univstore.com/web/image/ic-pentagram-active.svg"/>
                    <ItemCardInfoReviewAverage>{item.cardInfo.review}</ItemCardInfoReviewAverage>
                  </ItemCardInfoReview>
                </ItemCardInfo>
              </ItemCard>
            );
          })
        }
      </ItemList>
    </MainPopularLayout>
  );
}

const MainPopularLayout = styled.div`
  margin: 64px 0;
`;

const MainPopularTitle = styled.h3`
  width: 80.625%;
  max-width: 1032px;

  margin: 0 auto;
  margin-bottom: 32px;

  font-size: 32px;
  font-weight: bold;
`;


const ItemList = styled.div`
  width: 80.625%;
  max-width: 1032px;

  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const ItemCard = styled.div`
  position: relative;
  margin-bottom: 32px;
`;
const ItemCardThumbnailWrapper = styled.div`
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 100%;
  border-radius: 8px;
  background-color: #fff;
  transition: all cubic-bezier(0.4, 0, 1, 1) 200ms;
  opacity: 1;
  overflow: hidden;
`;
const ItemCardThumnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
`;

const ItemCardInfo = styled.div`
  padding: 12px 8px;
`;

const ItemCardInfoBrandName = styled.div`
  color: #787a87;
  font-size: 13px;
  margin-bottom: 4px;
`;

const ItemCardInfoName = styled.div`
  width: 88%;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  word-break: break-all;
  white-space: normal;
`;

const ItemCardInfoCode = styled.div`
  font-size: 13px;
    font-weight: 100;
    margin-top: 4px;
    word-break: break-all;
    white-space: normal;
`;

const ItemCardInfoPrice = styled.div`
  font-size: 13px;
  margin: 12px 0 4px 0;
`;

const ValidationMessage = styled.div`
  background-color: #787a87;
  color: #fff;
  display: flex;
  align-items: center;
`;

const ItemCardInfoReview = styled.div`
  display: flex;
  gap: 3px;
  align-items: baseline;
  margin-top: 6px;
`;

const ItemCardInfoReviewPentagram = styled.img`
  width: 11px;
  height: 11px;
`;

const ItemCardInfoReviewAverage = styled.div`
  font-size: 13px;
  font-weight: bold;
`;