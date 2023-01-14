import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const Birthday = ({ birthday, setBirthday }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          disableFuture
          label="Birthday"
          value={birthday}
          onChange={(newValue) => {
            setBirthday(newValue);
          }}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default Birthday;
