import { TextField, MenuItem } from "@mui/material";

const Nationality = ({ nationalities, nationality, setNationality }) => {
  return (
    <>
      <TextField
        select
        label="Nationality"
        fullWidth
        value={nationality}
        onChange={(event) => setNationality(event.target.value)}
        children={nationalities.map((nationality, i) => (
          <MenuItem key={`${nationality}${i}`} value={nationality}>
            {nationality}
          </MenuItem>
        ))}
      />
    </>
  );
};

export default Nationality;
