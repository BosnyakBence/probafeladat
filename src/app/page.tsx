"use client";
import React, { useState, useEffect } from "react";
import Character from "../../types/characterInterface";
import CharacterCard from "@/components/characterCard";
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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 12;
  const indexOfLastItem = currentPage * charactersPerPage;
  const indexOfFirstItem = indexOfLastItem - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);

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

  return (
    <>
      <Box mb={2}>
        <Typography variant="h2" align="center" gutterBottom>
          Star Wars Characters
        </Typography>
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: yellow[500] }} />
        </Box>
      ) : (
        <>
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
                count={Math.ceil(characters.length / charactersPerPage)}
                page={currentPage}
                size="large"
                onChange={(event, page) => setCurrentPage(page)}
              />
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}
