import { Modal, Box, Grid, Typography } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Character from "../../types/characterInterface";
import { yellow, red, green } from "@mui/material/colors";
import characterImages from "@/constants/characterImages";
import movies from "@/constants/movies";

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
  width: 450,
  backgroundColor: "rgba(0, 0, 0, 0.9)",
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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <img
            src={characterImages[character.name]}
            alt={character.name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              border: `2px solid ${yellow[500]}`,
            }}
          />
        </div>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="name"
          sx={{ textAlign: "center", color: yellow[500] }}
        >
          {character.name}
        </Typography>
        <hr
          style={{
            borderTop: `1px solid ${yellow[500]}`,
            width: "100%",
            margin: "16px auto",
          }}
        />
        <Grid container spacing={2} alignItems="center">
          <Grid item container xs={6} alignItems="center">
            <Grid item>
              <HeightIcon style={{ color: yellow[500] }} />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ color: yellow[500], paddingLeft: "5px" }}
              >
                {character.height} {character.height !== "unknown" && "cm"}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6} alignItems="center">
            <Grid item>
              <ScaleIcon style={{ color: yellow[500] }} />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ color: yellow[500], paddingLeft: "10px" }}
              >
                {character.mass} {character.mass !== "unknown" && "kg"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <hr
          style={{
            borderTop: `1px solid ${yellow[500]}`,
            width: "100%",
            margin: "16px auto",
          }}
        />
        <Grid container spacing={2}>
          {Object.keys(movies).map((movie) => (
            <Grid container key={movie} item xs={6} alignItems="center">
              <Grid item>
                <Typography variant="body1" style={{ color: yellow[500] }}>
                  {movie}
                </Typography>
              </Grid>
              <Grid item>
                {character.films.includes(movies[movie]) ? (
                  <CheckIcon
                    style={{ color: green[500], paddingLeft: "10px" }}
                  />
                ) : (
                  <ClearIcon style={{ color: red[500], paddingLeft: "10px" }} />
                )}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
}
