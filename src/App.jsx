import React from "react";
import { useForm } from "react-hook-form";
import { Button, Stack, TextField, Container } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./redux/feature/todoSlice";
import Cards from "./components/card";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const [value, setValue]=React.useState({name:"", lastName:"", phone:""})
  const [edit, setEdit]=React.useState()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({defaultValues:(value)});
  const dispatch=useDispatch()
const {users} = useSelector((state)=>state.todo) 
  const submit = (data) => {
   dispatch(addTodo({...data, id:nanoid()}))
    reset();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <Stack gap="15px">
          <TextField
            defaultValue={value.name}
            {...register("name", { required: true })}
            label="name"
            error={errors.name ? true : false}
            helperText={errors.name ? "Ismingizni kiriting?" : ""}
          />
          <TextField
            defaultValue={value.lastName}
            {...register("lastName", { required: true })}
            label="lastName"
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? "Familyangizni kiriting?" : ""}
          />
          <TextField
            defaultValue={value.phone}
            {...register("phone", { required: true })}
            maxLength={6}
            label="phone"
            error={errors.phone ? true : false}
            helperText={errors.phone ? "Telefon raqamingizni kiriting?" : ""}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      {users?.map((users) => (
        <Cards
          setValue={setValue}
          setEdit={setEdit}
          key={nanoid()}
          {...users}
        />
      ))}
    </Container>
  );
};

export default App;
