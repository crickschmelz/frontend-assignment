import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Global } from "../style/global";
import { Overlay, Container, Title, ContentWrapper } from "../style/AppStyles";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import CardModal from "./CardModal";

const App = () => {
	const base = "https://api.themoviedb.org/3/";
	const [movies, setMovies] = useState();
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [searchInput, setSearchInput] = useState("");
	const [filteredMovies, setFilteredMovies] = useState(movies);

	const getMovies = () => {
		return fetch(`${base}movie/now_playing?api_key=7315ec59ea2264da1fa4f4eb8d647853&language=en-US&page=1`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.results);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
    getMovies();
  }, []);

	useEffect(() => {
		setFilteredMovies(movies && movies.filter((movie) =>
			movie.title.toLowerCase().includes(searchInput.toLowerCase())
		))
	}, [searchInput, movies])

	const searchMovies = (e) => {
		setSearchInput(e.target.value);
	}

	const openModal = (movie) => {
		setSelectedMovie(movie);
	}

	const closeModal = () => {
		setSelectedMovie(null);
	}

	return (
		<>
		{selectedMovie && <CardModal movie={selectedMovie} closeModal={closeModal}/>}
		<ContentWrapper>
			<Global />
			<Navbar searchMovies={searchMovies} searchInput={searchInput}/>
			<Title>Most Recent Movies</Title>
			<Container>
				{movies && filteredMovies.map(movie => {
					return (
						<MovieCard movie={movie} openModal={openModal}/>
					)
				})}
			</Container>
		</ContentWrapper>
		</>
	)
}

export default App;
