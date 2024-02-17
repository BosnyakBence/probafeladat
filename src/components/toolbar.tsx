import { useEffect, useState } from "react";
import { Box, Autocomplete, TextField } from "@mui/material";
import Character from "../../types/characterInterface";
import CharacterSearch from "./characterSearch";

export interface Props {
  characters: Character[];
  onFilter: (filteredCharacters: Character[]) => void;
}

export default function Toolbar({ characters, onFilter }: Props) {
  const [searchText, setSearchText] = useState("");
  const [genderOptions, setGenderOptions] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  useEffect(() => {
    const genders = characters
      .reduce((genders: string[], character: Character) => {
        if (!genders.includes(character.gender)) {
          genders.push(character.gender);
        }
        return genders;
      }, [])
      .sort((a, b) => a.localeCompare(b));
    setGenderOptions(genders);
  }, [characters]);

  useEffect(() => {
    filterCharacters();
  }, [searchText, selectedGender]);

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  const handleGenderChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    setSelectedGender(newValue);
  };

  const filterCharacters = () => {
    let filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedGender) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.gender === selectedGender
      );
    }

    onFilter(filteredCharacters);
  };

  return (
    <Box mt={2}>
      <CharacterSearch onSearch={handleSearch} />
      <Autocomplete
        id="gender-filter"
        options={genderOptions}
        value={selectedGender}
        onChange={handleGenderChange}
        renderInput={(params) => <TextField {...params} label="Gender" />}
      />
    </Box>
  );
}
