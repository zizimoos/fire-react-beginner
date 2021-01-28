import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Movie from "./components/Movie";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
  });
  const { isLoading, movies } = state;
  const api = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    setState({ movies, isLoading: false });
  };

  useEffect(() => {
    try {
      api();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Section>
      {isLoading ? (
        <Loading>
          <span>Loading...</span>
        </Loading>
      ) : (
        movies.map((m) => (
          <Movie
            key={m.id}
            id={m.id}
            year={m.year}
            title={m.title}
            genres={m.genres}
            summary={m.summary}
            poster={m.medium_cover_image}
          ></Movie>
        ))
      )}
    </Section>
  );
}

export default App;
