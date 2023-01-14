import { useState, useEffect } from "react";
import { Box, Grid, Card, CardActions, Button } from "@mui/material";

import Gender from "./components/Gender";
import Title from "./components/Title";
import MyTextField from "./components/MyTextField";
import Birthday from "./components/Birthday";
import Nationality from "./components/Nationality";
import AreaCode from "./components/AreaCode";

function App() {
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [citizenID, setCitizenID] = useState("");
  const [nationality, setNationality] = useState("");
  const [callingCode, setCallingCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const allSelected =
    gender &&
    title &&
    firstName &&
    lastName &&
    birthday &&
    citizenID &&
    nationality &&
    callingCode &&
    phone &&
    email;

  const [countries, setCountries] = useState([]);
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setNationalities(data.map((country) => country?.demonym).sort());
        setCountries(
          data.map((country) => [country?.flags?.svg, country?.callingCodes[0]])
        );
      });
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      <Card
        sx={{ p: 2, width: "720px", m: "auto", height: "400px" }}
        elevation={4}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Title title={title} setTitle={setTitle} />
          </Grid>
          <Grid item xs={10}>
            <Gender gender={gender} setGender={setGender} />
          </Grid>
          <Grid item xs={6}>
            <MyTextField label="First Name" method={setFirstName} />
          </Grid>
          <Grid item xs={6}>
            <MyTextField label="Last Name" method={setLastName} />
          </Grid>
          <Grid item xs={3}>
            <Birthday birthday={birthday} setBirthday={setBirthday} />
          </Grid>
          <Grid item xs={4}>
            <MyTextField label="Citizen ID" method={setCitizenID} />
          </Grid>
          <Grid item xs={5}>
            <Nationality
              nationalities={nationalities}
              nationality={nationality}
              setNationality={setNationality}
            />
          </Grid>
          <Grid item xs={3}>
            <AreaCode
              countries={countries}
              callingCode={callingCode}
              setCallingCode={setCallingCode}
            />
          </Grid>
          <Grid item xs={4}>
            <MyTextField label="Mobile Phone" method={setPhone} />
          </Grid>
          <Grid item xs={5}>
            <MyTextField label="Email" method={setEmail} type={"email"} />
          </Grid>
        </Grid>
        <CardActions>
          <Button sx={{ ml: "auto" }} disabled={!allSelected}>
            Create User
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default App;
