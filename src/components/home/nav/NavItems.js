import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavItems() {
   
    const NavItemArr = [
        {
          label : "오늘의 추천",
          imageUrl : "https://image.univstore.com/20241202_mdspick_promotion_52p_shortcut.png"
        },
        {
          label : "선물가게",
          imageUrl : "https://image.univstore.com/20250212_gift_shortcut.png"
        },
        {
          label : "뉴발란스",
          imageUrl : "https://image.univstore.com/newbalance_icon.jpg"
        },
        {
          label : "통신비 할인",
          imageUrl : "https://image.univstore.com/20250314_shortcut_telecom_iphone.jpg"
        },
        {
          label : "입점 이벤트",
          imageUrl : "https://image.univstore.com/icon.jpg"
        },
        {
          label : "크록스",
          imageUrl : "https://image.univstore.com/crocsicon.jpg"
        },
        {
          label : "체험단",
          imageUrl : "https://image.univstore.com/20250505_plaudnote_review_icon.png"
        },
        {
          label : "여름대비할인",
          imageUrl : "https://image.univstore.com/20250407_shortcut_summerelec.png"
        },
        {
          label : "에브리뷰티",
          imageUrl : "https://image.univstore.com/icon_04.png"
        },
      ];
  return (
    <Layout>
    <Container>
      {NavItemArr.map((item, index) => (
        <ListItem key={index}>
          <img src={item.imageUrl} alt={item.label} />
          <div>{item.label}</div>
        </ListItem>
      ))}
    </Container>
  </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1044px;
`;

const ListItem = styled.div`
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;
