import { TextField, MenuItem } from "@mui/material";

const titles = ["Ms.", "Mr."];

const Title = ({ title, setTitle }) => {
  return (
    <>
      {" "}
      <TextField
        select
        label="Title"
        fullWidth
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        children={titles.map((title) => (
          <MenuItem key={title} value={title}>
            {title}
          </MenuItem>
        ))}
      />
    </>
  );
};

export default Title;
