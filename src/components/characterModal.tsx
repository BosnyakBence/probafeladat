import { useEffect, useState } from "react";
import { Modal, Box, Grid, Typography } from "@mui/material";
import Character from "../../types/characterInterface";
import { yellow } from "@mui/material/colors";
import characterImages from "@/assets/characterImages";

export interface Props {
  character: Character;
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: 10,
  padding: 7,
  boxShadow: 24,
  outline: "none",
};

export default function CharacterModal({
  character,
  open,
  handleClose,
}: Props) {
  const [films, setFilms] = useState<string[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    let data: string[] = [];

    for (const film of character.films) {
      try {
        const response = await fetch(film);
        const json = await response.json();
        data = data.concat(json.title);
      } catch (error) {
        console.error(error);
      }
    }

    setFilms(data);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", color: yellow[500] }}
        >
          {character.name}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, color: yellow[500] }}
        >
          Height: {character.height} cm
          <br />
          Weight: {character.mass} kg
          <br />
          {films.length > 0 && (
            <>Films: {films.map((film) => `${film}`).join(", ")}</>
          )}
        </Typography>
      </Box>
    </Modal>
  );
}
