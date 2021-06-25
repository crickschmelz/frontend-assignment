import styled from "styled-components";
import px2vw from "../utils";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 348px;
  width: 280px;
  radius: 8px;
  border: 1px solid #E1E3E6;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  cursor: pointer;
  position: relative;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const CardRating = styled.div`
  height: 34px;
  width: 34px;
  border: 1px solid #000000;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardTitle = styled.h3`
  color: #000000;
  font-size: 16px;
  text-align: center;
  position: absolute;
  bottom: -1px;
  margin: 0;
  padding: 10px;
  width: inherit;
`
