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
                <ItemCardThumnail src={item.thumnailLink}></ItemCardThumnail>
                <ItemCardInfo>
                  <ItemCardInfoBrandName>{item.cardInfo.brandName}</ItemCardInfoBrandName>
                  <ItemCardInfoName>{item.cardInfo.name}</ItemCardInfoName>
                  <ItemCardInfoCode>{item.cardInfo.code}</ItemCardInfoCode>
                  <ItemCardInfoPrice>{item.cardInfo.price}</ItemCardInfoPrice>
                  <ValidationMessage></ValidationMessage>
                  <ItemCardInfoReview>{item.cardInfo.review}</ItemCardInfoReview>
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
  margin-bottom: 32px;
`;

const ItemCardThumnail = styled.img`
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