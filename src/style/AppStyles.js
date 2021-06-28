import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  grid-gap: 26px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
  }
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 37px 0 23px 0;
`

