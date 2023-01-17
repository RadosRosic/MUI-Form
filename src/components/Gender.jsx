import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const genders = ["Female", "Male", "Other"];

const Gender = ({ gender, setGender }) => {
  return (
    <>
      {" "}
      <FormControl id="gender">
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name="gender"
          aria-labelledby="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          row
        >
          {genders.map((gender) => (
            <FormControlLabel
              key={gender}
              control={<Radio />}
              label={gender}
              value={gender}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Gender;
