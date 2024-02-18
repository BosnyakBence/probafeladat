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
  const [homeWorldOptions, setHomeWorldOptions] = useState<
    Record<string, string>
  >({});
  const [selectedHomeWorld, setSelectedHomeWorld] = useState<string | null>(
    null
  );

  useEffect(() => {
    getGenderOptions();
    getHomeWorldOptions();
  }, [characters]);

  const getGenderOptions = () => {
    const genders = characters
      .reduce((genders: string[], character: Character) => {
        if (!genders.includes(character.gender)) {
          genders.push(character.gender);
        }
        return genders;
      }, [])
      .sort((a, b) => a.localeCompare(b));
    setGenderOptions(genders);
  };

  const getHomeWorldOptions = async () => {
    const worldURLs = characters.reduce(
      (worlds: string[], character: Character) => {
        if (!worlds.includes(character.homeworld)) {
          worlds.push(character.homeworld);
        }
        return worlds;
      },
      []
    );

    const homeWorlds: Record<string, string> = {};

    for (const url of worldURLs) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        homeWorlds[json.name] = url;
      } catch (error) {
        console.error(`Error fetching homeworld: ${error}`);
      }
    }

    setHomeWorldOptions(homeWorlds);
  };

  useEffect(() => {
    filterCharacters();
  }, [searchText, selectedGender, selectedHomeWorld]);

  const filterCharacters = () => {
    let filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedGender) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.gender === selectedGender
      );
    }

    if (selectedHomeWorld) {
      filteredCharacters = filteredCharacters.filter(
        (character) =>
          character.homeworld === homeWorldOptions[selectedHomeWorld]
      );
    }

    onFilter(filteredCharacters);
  };

  return (
    <Box mt={2}>
      <CharacterSearch onSearch={(searchText) => setSearchText(searchText)} />
      <Autocomplete
        id="gender-filter"
        options={["all", ...genderOptions]}
        value={selectedGender}
        onChange={(event, newValue) =>
          newValue === "all"
            ? setSelectedGender(null)
            : setSelectedGender(newValue)
        }
        renderInput={(params) => <TextField {...params} label="Gender" />}
      />
      <Autocomplete
        id="homeworld-filter"
        options={["all", ...Object.keys(homeWorldOptions)]}
        value={selectedHomeWorld}
        onChange={(event, newValue) =>
          newValue === "all"
            ? setSelectedHomeWorld(null)
            : setSelectedHomeWorld(newValue)
        }
        renderInput={(params) => <TextField {...params} label="Homeworld" />}
      />
    </Box>
  );
}
