import { useState } from "react";
import { TextField } from "@mui/material";

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
      placeholder="Enter character name"
    />
  );
}
