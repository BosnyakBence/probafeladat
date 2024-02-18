import { useState, useEffect } from "react";
import { Autocomplete, TextField, Paper } from "@mui/material";
import { yellow } from "@mui/material/colors";

export interface Props {
  label: string;
  options: string[];
  onSelect: (value: string | null) => void;
}

export default function CharacterFilter({ label, options, onSelect }: Props) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    onSelect(selectedValue);
  }, [selectedValue]);

  return (
    <Autocomplete
      options={options}
      value={selectedValue}
      onChange={(event, newValue) => setSelectedValue(newValue)}
      disabled={options.length == 0}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          sx={{
            "& label, & input, & .MuiAutocomplete-endAdornment": {
              color: `${yellow[500]} !important`,
              borderColor: `${yellow[500]} !important`,
            },
            "& input::placeholder": {
              color: yellow[500],
            },
            "& fieldset": { borderColor: `${yellow[500]} !important` },
            "& .MuiAutocomplete-popupIndicator": {
              color: `${yellow[500]} !important`,
            },
            "& .MuiAutocomplete-clearIndicator": {
              color: `${yellow[500]} !important`,
            },
          }}
        />
      )}
      PaperComponent={({ children }) => (
        <Paper
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: `${yellow[500]} !important`,
            "& .MuiAutocomplete-option": {
              color: `${yellow[500]} !important`,
            },
          }}
        >
          {children}
        </Paper>
      )}
      sx={{
        paddingTop: "16px",
      }}
    />
  );
}
