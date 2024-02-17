"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import characterImages from "@/assets/characterImages";

interface Character {
  name: string;
}

export interface Props {
  character: Character;
}

export default function MediaCard({ character }: Props) {
  return (
    <Card
      sx={{ maxWidth: 300, height: 275 }}
      elevation={3}
      onClick={() => console.log("test")}
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
          color={yellow[800]}
        >
          {character.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
