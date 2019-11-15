import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section
          title="TopRated"
          children={topRated.map(show => (
            <span key={show.id}>{show.name}</span>
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="popular"
          children={popular.map(show => (
            <span key={show.id}>{show.name}</span>
          ))}
        ></Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="airingToday"
          children={airingToday.map(show => (
            <span key={show.id}>{show.name}</span>
          ))}
        ></Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
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
