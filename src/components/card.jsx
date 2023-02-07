import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../redux/feature/todoSlice";
const Cards = ({ setValue, setEdit, id, name, lastName, phone }) => {
  const dispet = useDispatch();
  const deleteItem = () => dispet(deleteUsers(id));
  const editUser = () => {
    setValue({ id, name, lastName, phone });
    setEdit(true);

  };
  return (
    <Container>
      <Stack>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h4">{lastName}</Typography>
        <Typography variant="body1">{phone}</Typography>
      </Stack>
      <Button
        onClick={editUser}
        style={{ backgroundColor: "green", color: "#fff" }}
      >
        Edit
      </Button>
      <Button
        onClick={deleteItem}
        style={{ backgroundColor: "red", color: "#fff" }}
      >
        Delete
      </Button>
    </Container>
  );
};

export default Cards;
