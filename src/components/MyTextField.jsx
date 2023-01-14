import { TextField } from "@mui/material";

const MyTextField = ({ label, method, type = "text" }) => {
  return (
    <>
      <TextField
        type={type}
        label={label}
        fullWidth
        onChange={(event) => method(event.target.value)}
      />
    </>
  );
};

export default MyTextField;
