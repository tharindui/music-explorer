import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchMusic } from "../../actions/musicActions";
import SearchInput from "../atoms/SearchInput";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const { terms } = router.query;
    if (terms) {
      setQuery(terms.toString());
    }
  }, [router.query]);
  const handleSearch = () => {
    dispatch(searchMusic(query, 10));
    router.push({
      pathname: location.pathname, // Replace with your actual search route
      query: { terms: query, limit: 10 },
    });
  };

  return (
    <Box display={"flex"}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search for artists, albums, or songs"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Button color="secondary" variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchForm;
