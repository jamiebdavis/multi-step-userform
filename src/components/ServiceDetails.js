import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const ServiceDetails = () => {
  return (
    <div>
      <Typography>Service Details</Typography>
      <Grid item xs={12} sm={6}>
        <Paper>
          <TextField
            required
            id="phoneProvider"
            name="phoneProvider"
            label="phoneProvider"
            fullWidth
            autoComplete="phoneProvider"
          />
          <TextField
            required
            id="gasProvider"
            name="gasProvider"
            label="gasProvider"
            fullWidth
            autoComplete="gasProvider"
          />
          <TextField
            required
            id="electricProvider"
            name="electricProvider"
            label="electricProvider"
            fullWidth
            autoComplete="electricProvider"
          />
          <TextField
            required
            id="insuranceProvider"
            name="insuranceProvider"
            label="insuranceProvider"
            fullWidth
            autoComplete="insuranceProvider"
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default ServiceDetails;
