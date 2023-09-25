import { searchMusic } from "@/actions/musicActions";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "../molecules/SearchItem";
import { Music } from "@/types/musicTypes";

const SearchResults = () => {
  const results = useSelector((state: any) => state.music.results as Music[]);
  const loading = useSelector((state: any) => state.music.loading as boolean);
  const error = useSelector((state: any) => state.music.error as string);

  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  // State to keep track of the current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSearch = () => {
    const { terms } = router.query;

    const newPageCount = Number(results.length || 0) + 10;
    dispatch(searchMusic(terms?.toString() || "", newPageCount));

    // Save the current scroll position
    setScrollPosition(window.scrollY);
    router.push({
      pathname: location.pathname,
      query: { terms: terms, limit: newPageCount },
    });
  };

  useEffect(() => {
    // Restore the scroll position when new results are loaded
    if (results.length > 10) {
      window.scrollTo(0, scrollPosition);
    }

    if (results.length < 10) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [results, scrollPosition]);

  if (loading) {
    return (
      <div>
        <Box
          mt={15}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <Box
        mt={15}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>No results</h2>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        mt={15}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error}
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box>
        <Box mt={15}>
          <InfiniteScroll
            dataLength={results.length}
            next={handleSearch}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <Grid container spacing={3}>
              {results.map((result: Music) => (
                <Grid key={result.artistId} xs={4} item>
                  <SearchItem
                    type={result.kind}
                    imageUrl={result.artworkUrl100}
                    title={result.trackName}
                    artistName={result.artistName}
                    collectionName={result.collectionName}
                  ></SearchItem>
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchResults;
