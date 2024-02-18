import { useState, useEffect } from "react";
import { Box, Stack, Pagination } from "@mui/material";
import { yellow } from "@mui/material/colors";
import Character from "../../types/characterInterface";

export interface Props {
  filteredCharacters: Character[];
  onChange: (currentCharacters: Character[]) => void;
}

export default function CharacterPagination({
  filteredCharacters,
  onChange,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredCharacters]);

  useEffect(() => {
    getCurrentCharacters();
  }, [filteredCharacters, currentPage]);

  const getCurrentCharacters = () => {
    const indexOfLastItem = currentPage * charactersPerPage;
    const indexOfFirstItem = indexOfLastItem - charactersPerPage;
    const currentCharacters = filteredCharacters.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    onChange(currentCharacters);
  };

  return (
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
  );
}
