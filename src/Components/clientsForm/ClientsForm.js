import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../redux/clients/clientsReducer/clientsAction";
import { addClientOperation } from "../../redux/clients/clientsReducer/clientsOperations";
import {
  getAllItems,
  getError,
} from "../../redux/clients/clientsReducer/clientsSelector";
import { ClientsFormStyled } from "./ClientsFormStyled";

const ClientsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const error = useSelector((state) => getError(state));
  const dispatch = useDispatch();
  const contacts = useSelector(getAllItems);

  const onCheckRepeated = (name) => {
    console.log(contacts);

    return contacts.some((contact) => contact.name === name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(onCheckRepeated());
    if (onCheckRepeated(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addClientOperation({ name, number }));
    setName("");
    setNumber("");
  };

  const changeInput = (e) => {
    error && dispatch(resetError());
    const { name, value } = e.target;
    name === "name" && setName(value);
    name === "number" && setNumber(value);
  };

  return (
    <>
      <ClientsFormStyled onSubmit={onSubmit}>
        Name:
        <input
          onChange={changeInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        Number:
        <input
          onChange={changeInput}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit">Add</button>
      </ClientsFormStyled>
    </>
  );
};

export default ClientsForm;

// class ClientsForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   changeInput = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

// onSubmit = (e) => {
//   e.preventDefault();
//   if (this.props.onCheckRepeated(this.state.name)) {
//     alert(`${this.state.name} is already in contacts.`);
//     return;
//   }
//   this.props.addClient(this.state);
// };

//   render() {
//     return (
//       <>
//         <ClientsFormStyled onSubmit={this.onSubmit}>
//           Name:
//           <input
//             onChange={this.changeInput}
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//           Number:
//           <input
//             onChange={this.changeInput}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//           <button type="submit">Add</button>
//         </ClientsFormStyled>
//       </>
//     );
//   }
// }

// export default ClientsForm;
