import React from "react";
import styled from "styled-components";
import logo from "../images/timescale-logo.svg";
import search from "../images/search.svg"

const Navbar = ({ searchMovies, searchInput }) => {
  return (
    <Topbar>
      <img src={logo} alt="Timescale logo" />
      <Form>
      <Search
        placeholder="Search for a movie"
        type="text"
        value={searchInput}
        onChange={(e) => searchMovies(e)}
      />
      <img src={search} alt="Search icon"/>
      </Form>
    </Topbar>
  )
}

export default Navbar;

const Topbar = styled.div`
height: 77px;
width: 100%;
border-bottom: 1px solid #C0C4CC;
display: flex;
justify-content: space-between;
align-items: center;
`
const Search = styled.input`
border: 1px solid #C0C4CC;
border-radius: 2px;
padding: 10px 10px 10px 30px;
width: 180px;

:focus {
  outline: none;
}
`
const Form = styled.form`
position: relative;

img {
  position: absolute;
  z-index: 1;
  left: 5%;
  top: 30%;
}
`
