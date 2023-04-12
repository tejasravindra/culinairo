import React from "react";
import { Box, Paper } from "@mui/material";

function Feedback() {
  return (
    <Box mt={4}>
      <Paper elevation={3} sx={{ borderRadius: "10px", padding: "1rem" }}>
        <iframe
          title="Feedback Form"
          src="https://forms.gle/3F9wGyFHfXTYeyu86"
          width="100%"
          height="750px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ borderRadius: "10px" }}
        >
          Loading…
        </iframe>
      </Paper>
    </Box>
  );
}

export default Feedback;
