"use client";
import React, { useState, useEffect } from "react";
import Character from "../../types/characterInterface";
import Toolbar from "@/components/toolbar";
import CharacterCard from "@/components/characterCard";
import CharacterPagination from "@/components/characterPagination";
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
  const [currentCharacters, setCurrentCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

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
  };

  return (
    <>
      <Box mb={2}>
        <Typography
          variant="h2"
          align="center"
          color={yellow[500]}
          className="title"
        >
          Star Wars Characters
        </Typography>
      </Box>
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "35vh" }}
        >
          <CircularProgress size={75} sx={{ color: yellow[500] }} />
        </Box>
      ) : (
        <>
          <Container>
            <div className="toolbar">
              <Toolbar characters={characters} onFilter={handleFilter} />
            </div>

            <Grid container spacing={3}>
              {currentCharacters.map((character) => (
                <Grid item key={character.name} xs={12} sm={6} md={4} lg={3}>
                  <CharacterCard character={character} />
                </Grid>
              ))}
            </Grid>

            <div className="pagination">
              <CharacterPagination
                filteredCharacters={filteredCharacters}
                onChange={(value) => setCurrentCharacters(value)}
              />
            </div>
          </Container>
        </>
      )}
    </>
  );
}
