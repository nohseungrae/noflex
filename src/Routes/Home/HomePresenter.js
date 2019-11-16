import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>Movies | Noflex</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section
              title="Now Playing"
              children={nowPlaying.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                ></Poster>
              ))}
            ></Section>
          )}
          {upComing && upComing.length > 0 && (
            <Section
              title="Now upComing"
              children={upComing.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                ></Poster>
              ))}
            ></Section>
          )}
          {popular && popular.length > 0 && (
            <Section
              title="Now Popular"
              children={popular.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                ></Poster>
              ))}
            ></Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upComing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};
export default HomePresenter;
