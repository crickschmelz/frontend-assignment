import React, { useEffect, useRef } from "react";
import { ModalContainer, Modal, TitleContainer, BodyContainer, DetailsContainer } from "../style/ModalStyles";
import exit from "../images/exit.svg";

const CardModal = ({ movie, closeModal }) => {
  const node = useRef();

  const handleClickOutside = e => {
    if(node.current.contains(e.target)){
        return;
    }
    closeModal();
}

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return() => {
       document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  return (
    <ModalContainer>
      <Modal ref={node}>
        <TitleContainer>
        {movie.title}
        <img src={exit} alt="Exit button" onClick={closeModal} />
        </TitleContainer>
        <BodyContainer>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <DetailsContainer>
          <p><strong>Release date:</strong> {movie.release_date}</p>
          <p>{movie.overview}</p>
          <p><strong>{movie.vote_average}</strong> / 10 ({movie.vote_count} total votes)</p>
        </DetailsContainer>
        </BodyContainer>
      </Modal>
      </ModalContainer>
  )
}

export default CardModal;
