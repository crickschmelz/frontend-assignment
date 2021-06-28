import styled from "styled-components";

export const ModalContainer = styled.div`
  background: rgba(0,0,0,0.7);
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 100%;
`
export const Modal = styled.div`
  width: 350px;
  height: 474px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;

  @media screen and (min-width: 768px) {
    width: 583px;
    height: 474px;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;

  img {
    cursor: pointer;
  }
`
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 22px;
`
