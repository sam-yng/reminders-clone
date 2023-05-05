import React from "react";
import darkSlider from "../assets/icons/dark.png";
import lightSlider from "../assets/icons/light.png";
import { useReminders } from "../utils/RemindersContext";

const ThemeButton = () => {
  const { theme, setTheme } = useReminders();

  return (
    <div className="flex justify-end mr-4">
      <button className="h-14" onClick={() => setTheme(!theme)} type="button">
        <img
          alt="Theme button"
          src={theme === true ? darkSlider : lightSlider}
          className="h-10"
        />
      </button>
    </div>
  );
};

export default ThemeButton;
