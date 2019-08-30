import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default StyledHero;
