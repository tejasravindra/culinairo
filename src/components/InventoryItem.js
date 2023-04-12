import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const InventoryItem = ({ item, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={item} />
      <IconButton edge="end" aria-label="delete" onClick={() => onDelete(item)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default InventoryItem;
