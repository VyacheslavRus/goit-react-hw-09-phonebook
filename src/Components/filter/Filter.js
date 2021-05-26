import React from "react";
import { useDispatch, useSelector } from "react-redux";
import doFilterOperations from "../../redux/clients/filterReducer/filterOperations";
import { getFilter } from "../../redux/clients/filterReducer/filterSelector";
import { FilterStyled } from "./FilterStyled";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const doFilter = (e) => {
    console.log(e);
    dispatch(doFilterOperations(e.target.value));
  };

  return (
    <FilterStyled>
      <h2>Find your contact by name</h2>
      <input
        type="text"
        name="filter"
        onChange={doFilter}
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </FilterStyled>
  );
};

export default Filter;
