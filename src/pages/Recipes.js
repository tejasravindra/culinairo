import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

const parseRecipes = (text) => {
  const recipes = text
    .split(/(?=\d+\))/)
    .filter((recipe) => recipe.trim())
    .map((recipe) => {
      const [title, ...description] = recipe
        .split(/[-:]/)
        .filter((line) => line.trim());
      return {
        title: title.trim(),
        description: description.join("").trim(),
      };
    });

  return recipes;
};

const generateRecipe = async (query) => {
  const API_KEY = localStorage.getItem("openAiApiKey");

  if (!API_KEY) {
    console.error("API key not found in local storage.");
    return "Please set the OpenAI API key in the settings.";
  }

  try {
    const response = await axios.post(
      `${window.location.origin}/api/generateRecipe`,
      {
        query,
        apiKey: API_KEY,
      }
    );

    const generatedText = response.data.generatedText;

    if (generatedText.startsWith("Sorry")) {
      console.error(generatedText);
      return [];
    }

    const parsedRecipes = parseRecipes(generatedText);
    return parsedRecipes;
  } catch (error) {
    console.error(error);
    return "Sorry, I am unable to generate a recipe at this time.";
  }
};

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRecipes = async () => {
    setLoading(true);
    const storedItems = localStorage.getItem("inventory");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      const result = await generateRecipe(
        `Generate unique recipes using the following ingredients: ${items.join(
          ", "
        )}`
      );
      if (Array.isArray(result)) {
        setRecipes(result);
      } else {
        alert(result);
      }
    } else {
      alert("No inventory items found. Please add items to your inventory.");
    }
    setLoading(false);
  };

  return (
    <Container className="content">
      <h1 style={{ textAlign: "center" }}>Recipes</h1>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={generateRecipes}
        disabled={loading}
      >
        Generate Recipes
      </Button>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <CircularProgress />
        </div>
      ) : (
        recipes.map((recipe, index) => (
          <Box key={index} mt={index === 0 ? 4 : 2} mb={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              {recipe.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {recipe.description}
            </Typography>
          </Box>
        ))
      )}
    </Container>
  );
};

export default Recipes;
