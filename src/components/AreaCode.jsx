import { TextField, MenuItem, Box } from "@mui/material";

const AreaCode = ({ callingCode, setCallingCode, countries }) => {
  return (
    <>
      <TextField
        select
        label="Area Code"
        fullWidth
        value={callingCode}
        onChange={(event) => setCallingCode(event.target.value)}
        children={countries.map((country, i) => (
          <MenuItem key={`${country}${i}`} value={`+${country[1]}`}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={country[0]}
                alt={`Flag of ${country[0]}`}
                width={"40px"}
              />{" "}
              +{country[1]}
            </Box>
          </MenuItem>
        ))}
      />
    </>
  );
};

export default AreaCode;
