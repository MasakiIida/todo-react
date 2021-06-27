import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <>
      <div className="section input-area">
        <input
          disabled={disabled}
          id="add-text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        ></input>
        <button id="add-button" disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
