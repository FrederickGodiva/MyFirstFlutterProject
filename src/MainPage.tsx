import { useState } from "react";

const MainPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You have pushed the button this many times</p>
      <p className="text-5xl text-center">{count}</p>
      <div className="absolute bottom-5 right-5">
        <button
          className="bg-violet-300 rounded-lg p-3 h-11 flex items-center justify-center"
          onClick={handleClick}
        >
          <span className="text-2xl mb-1">+</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
