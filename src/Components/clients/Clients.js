import React, { useEffect } from "react";
import ClientList from "../clientList/ClientList";
import ClientsForm from "../clientsForm/ClientsForm";
import Filter from "../filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { ClientStyled } from "./ClientStyled";

import {
  getError,
  getLoader,
} from "../../redux/clients/clientsReducer/clientsSelector";
import { addALLClientsOperations } from "../../redux/clients/clientsReducer/clientsOperations";

const Clients = () => {
  const error = useSelector(getError);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addALLClientsOperations());
  }, [dispatch]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {loader && <h2>Loading....</h2>}
      <ClientStyled>Phonebook</ClientStyled>
      <ClientsForm />

      <Filter />
      <h2>Contacts:</h2>
      <ClientList />
    </>
  );
};

export default Clients;
