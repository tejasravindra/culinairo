import React, { useState, useEffect } from "react";
import { Container, TextField, Button } from "@mui/material";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const storedApiKey = localStorage.getItem("openaiApiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("openaiApiKey", apiKey);
    alert("API key saved.");
  };

  return (
    <Container className="content">
      <h1 style={{ textAlign: "center" }}>Settings</h1>
      <TextField
        fullWidth
        variant="outlined"
        label="OpenAI API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save
      </Button>
    </Container>
  );
};

export default Settings;
