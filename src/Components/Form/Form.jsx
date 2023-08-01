import { useState } from "react";

export default function Form({ setQuery }) {
  const [inputValue, setInputValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(inputValue.toLocaleLowerCase());
    setInputValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        value={inputValue}
        placeholder="Type pokemon name"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}
