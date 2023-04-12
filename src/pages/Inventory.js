import React, { useState, useEffect } from "react";
import InventoryItem from "../components/InventoryItem";
import { Container, TextField, Button, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("inventory");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAddItem = () => {
    if (input.trim()) {
      const newItems = [...items, input];
      setItems(newItems);
      localStorage.setItem("inventory", JSON.stringify(newItems));
      setInput("");
    }
  };

  const handleDeleteItem = (item) => {
    const newItems = items.filter((i) => i !== item);
    setItems(newItems);
    localStorage.setItem("inventory", JSON.stringify(newItems));
  };

  return (
    <Container className="content">
      <h1 style={{ textAlign: "center" }}>Inventory</h1>
      <TextField
        fullWidth
        variant="outlined"
        label="Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddItem}
      >
        Add Item
      </Button>
      <List>
        {items.map((item) => (
          <InventoryItem key={item} item={item} onDelete={handleDeleteItem} />
        ))}
      </List>
    </Container>
  );
};

export default Inventory;
