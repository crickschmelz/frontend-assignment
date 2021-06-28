import styled from "styled-components";

export const Topbar = styled.div`
  height: 77px;
  width: 100%;
  border-bottom: 1px solid #C0C4CC;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Search = styled.input`
  border: 1px solid #C0C4CC;
  border-radius: 2px;
  padding: 10px 10px 10px 30px;
  width: 180px;

  :focus {
    outline: none;
  }
`
export const Form = styled.form`
  position: relative;

  img {
    position: absolute;
    z-index: 1;
    left: 5%;
    top: 30%;
  }
`
