import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";
const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>TV | Noflex</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section
              title="TopRated"
              children={topRated.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                  isMovie={false}
                ></Poster>
              ))}
            ></Section>
          )}
          {popular && popular.length > 0 && (
            <Section
              title="popular"
              children={popular.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                  isMovie={false}
                ></Poster>
              ))}
            ></Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section
              title="airingToday"
              children={airingToday.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                  isMovie={false}
                ></Poster>
              ))}
            ></Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
      ;
    </>
  );
};
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
