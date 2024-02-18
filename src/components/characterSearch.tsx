import { useState } from "react";
import { TextField } from "@mui/material";
import { yellow } from "@mui/material/colors";

export interface Props {
  onSearch: (searchText: string) => void;
}

export default function CharacterSearch({ onSearch }: Props) {
  const [searchText, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    onSearch(searchText);
  };

  return (
    <TextField
      label="Search Characters"
      variant="outlined"
      value={searchText}
      onChange={handleChange}
      fullWidth
      margin="normal"
      autoComplete="off"
      placeholder="Enter character name"
      sx={{
        "& .MuiOutlinedInput-root": {
          color: yellow[500],
          "& fieldset": {
            borderColor: yellow[500],
          },
          "&:hover fieldset": {
            borderColor: yellow[500],
          },
          "&.Mui-focused fieldset": {
            borderColor: yellow[500],
          },
        },
        "& .MuiInputLabel-root": {
          color: yellow[500],
          "&.Mui-focused": {
            color: yellow[500],
          },
        },
      }}
    />
  );
}
