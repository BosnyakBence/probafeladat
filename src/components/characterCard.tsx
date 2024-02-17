"use client";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import characterImages from "@/assets/characterImages";
import Character from "../../types/characterInterface";
import CharacterModal from "./characterModal";

export interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card
        sx={{ maxWidth: 300, height: 275, bgcolor: "rgba(0, 0, 0, 0.5)" }}
        elevation={3}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          sx={{ height: 200 }}
          image={characterImages[character.name]}
          title={character.name}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            align="center"
            color={yellow[500]}
          >
            {character.name}
          </Typography>
        </CardContent>
      </Card>
      <CharacterModal
        character={character}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
}
