import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClientOperation } from "../../redux/clients/clientsReducer/clientsOperations";
import { getFilterClients } from "../../redux/clients/filterReducer/filterSelector";
import { ClientListStyled } from "./ClientListStyled";

const ClientList = () => {
  const clients = useSelector(getFilterClients);
  const dispatch = useDispatch();

  const deleteClient = (e) => {
    let { id } = e.target;
    dispatch(deleteClientOperation(id));
  };

  return (
    <ClientListStyled>
      {clients?.map((client) => (
        <li key={client.id}>
          <p>
            {client.name}:{client.number}
          </p>
          <button type="button" onClick={deleteClient} id={client.id}>
            Delete
          </button>
        </li>
      ))}
    </ClientListStyled>
  );
};

export default memo(ClientList);
