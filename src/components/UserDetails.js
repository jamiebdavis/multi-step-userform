import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const UserDetails = () => {
  return (
    <div>
      <Typography>User Details</Typography>
      <Grid item xs={12} sm={6}>
        <Paper>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="name"
          />
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="age"
          />
          <TextField
            required
            id="email"
            name="email"
            label="email"
            fullWidth
            autoComplete="email"
          />
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="phoneNumber"
            fullWidth
            autoComplete="phoneNumber"
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default UserDetails;
