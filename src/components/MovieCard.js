import React, { useState } from "react";
import { Card, CardRating, CardTitle } from "../style/CardStyles";
import CardModal from "./CardModal";

const MovieCard = ({ movie, openModal }) => {

  return (
			<Card key={movie.id} image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} onClick={(movie) => openModal(movie)}>
				<CardRating>{movie.vote_average}</CardRating>
				<CardTitle>{movie.title}</CardTitle>
			</Card>
  )
}

export default MovieCard;
