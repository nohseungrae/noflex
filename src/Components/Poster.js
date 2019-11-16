import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Conatiner = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  height: 180px;
  border-radius: 4px;
  background-position: center center;
  transition: 0.1s linear;
`;
const Rating = styled.span`
  position: relative;
  top: -20px;
  opacity: 0;
  transition: 0.1s linear;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Conatiner>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.jpg")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Conatiner>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
