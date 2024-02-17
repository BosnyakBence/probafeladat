"use client";
import React, { useState, useEffect } from "react";
import Character from "../../types/characterInterface";
import Toolbar from "@/components/toolbar";
import CharacterCard from "@/components/characterCard";
import CharacterSearch from "@/components/characterSearch";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Container,
  Stack,
  Pagination,
} from "@mui/material";
import { yellow } from "@mui/material/colors";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  // Pagination
  const charactersPerPage = 12;
  const indexOfLastItem = currentPage * charactersPerPage;
  const indexOfFirstItem = indexOfLastItem - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    let data: Character[] = [];
    let url = "https://swapi.dev/api/people/?page=1";

    while (url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        data = data.concat(json.results);
        url = json.next;
      } catch (error) {
        console.error(error);
        break;
      }
    }

    setCharacters(data);
    setLoading(false);
  };

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  const handleFilter = (filteredCharacters: Character[]) => {
    setFilteredCharacters(filteredCharacters);
    setCurrentPage(1);
  };

  return (
    <>
      <Box mb={2}>
        <Typography
          variant="h2"
          align="center"
          color={yellow[500]}
          gutterBottom
        >
          Star Wars Characters
        </Typography>
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: yellow[500] }} />
        </Box>
      ) : (
        <>
          <Toolbar characters={characters} onFilter={handleFilter} />
          <Container>
            <Grid container spacing={3}>
              {currentCharacters.map((character) => (
                <Grid item key={character.name} xs={12} sm={6} md={3}>
                  <CharacterCard character={character} />
                </Grid>
              ))}
            </Grid>
          </Container>

          <Box mt={2}>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Pagination
                count={Math.ceil(filteredCharacters.length / charactersPerPage)}
                page={currentPage}
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: yellow[500],
                  },
                  "& .Mui-selected": {
                    color: yellow[900],
                  },
                }}
                onChange={(event, page) => setCurrentPage(page)}
              />
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}
