import React, { useState } from "react";

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [temperatureBgColor, setTemperatureBgColor] = useState("#1A5BA6");

  const Increment = () => {
    let incrementValue = temperatureValue + 1;
    let hotTemp = "#F85700";

    if (incrementValue > 16) {
      setTemperatureBgColor(hotTemp);
    } else {
      setTemperatureBgColor("#1A5BA6");
    }
    setTemperatureValue(incrementValue);
  };

  const Decrement = () => {
    let incrementValue = temperatureValue - 1;
    let freezonTemp = "#38B6FF";
    if (incrementValue < 0) {
      setTemperatureBgColor(freezonTemp);
    } else {
      setTemperatureBgColor("#1A5BA6");
    }
    setTemperatureValue(incrementValue);
  };

  return (
    <>
      <div
        style={{ background: "#30566D" }}
        className="w-1/4 h-[32rem] drop-shadow-xl p-4  rounded-md flex flex-col gap-4"
      >
        <div className="h-2/3 p-2 flex justify-center items-center">
          <div
            style={{ background: `${temperatureBgColor}` }}
            className=" border-white border-4 flex justify-center items-center rounded-[50%] w-[80%] h-[90%]"
          >
            <h1 className="text-[72px] text-white">{temperatureValue}°C</h1>
          </div>
        </div>
        <div className="p-4 flex flex-row h-1/3 justify-between items-center">
          <button
            onClick={Decrement}
            className="w-[100px] h-[100px] flex justify-center items-center text-5xl rounded-[50%] bg-stone-400"
          >
            -
          </button>
          <button
            onClick={Increment}
            className="w-[100px] h-[100px] flex justify-center items-center text-5xl rounded-[50%] bg-stone-400"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Temperature;
