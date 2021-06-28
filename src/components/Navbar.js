import React from "react";
import { Topbar, Form, Search } from "../style/NavStyles";
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


