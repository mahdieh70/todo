import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setListItems([...listItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="w-full mx-auto h-[100px] bg-white flex justify-between rounded-xl p-5 sm:max-w-[600px]">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="add todo..."
          className="w-full h-full p-3 outline-none text-[16px] placeholder:text-[16px]"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-[25%] h-full bg-green-500 rounded-xl text-white text-[16px] cursor-pointer"
        >
          Add
        </button>
      </div>
      {listItems.length > 0 ? (
        <div className="w-full mx-auto max-h-[400px] rounded-xl bg-white mt-5 p-5 sm:max-w-[600px]">
          <ul className="w-full h-full overflow-auto">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="w-full bg-gray-300 rounded-xl my-4 text-[16px] py-3 pl-3 pr-6 flex justify-between items-center"
              >
                {item}
                <div className="flex w-[30%] gap-2 ">
                  <button className="w-[50%] rounded-xl py-2 px-3 text-white bg-orange-400">
                    Edit
                  </button>
                  <button className="w-[50%] rounded-xl py-2 px-3 text-white bg-rose-700">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Todo;
