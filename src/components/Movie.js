import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  margin-left: 50px;
  margin-bottom: 20px;
  padding: 5px 5px 0px 5px;
  font-family: "Roboto Mono", monospace;
  background-color: whitesmoke;
  /* background-color: #5c97bf; */
  border-radius: 5px;
`;

const Poster = styled.img`
  width: 200px;
  margin-right: 10px;
  border-radius: 5px;
`;

const Context = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const UpperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
`;
const Year = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Genres = styled.div`
  font-size: 10px;
  margin-top: 2px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

const Summary = styled.div`
  width: 500px;
  padding-bottom: 15px;
  font-size: 12px;
  opacity: 0.5;
`;

const Movie = ({ year, title, genres, summary, poster }) => {
  return (
    <Container>
      <Context>
        <Poster src={poster} alt="poster"></Poster>
        <UpperInfo>
          <Title>
            {title.length < 20 ? `${title}` : `${title}`.slice(0, 50) + `...`}
          </Title>
          <Year>{year}</Year>
          <Genres>
            {genres
              .slice(0, 5)
              .map((g, index) =>
                (index < genres.length - 1) &
                (genres.length < 10) &
                (index !== 4)
                  ? `${g} • `
                  : g
              )}
          </Genres>
        </UpperInfo>
      </Context>
      <Summary>{summary.slice(0, 350)}...</Summary>
    </Container>
  );
};

export default Movie;
