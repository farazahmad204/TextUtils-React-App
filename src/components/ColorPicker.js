import React, {useState} from "react";
import "./ColorPicker.css"; // Importing CSS file



const colorOptions = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
    "#FFFFFF", "#000000", "#FFA500", "#800080", "#FFC0CB", "#A52A2A",
  ];


export default function ColorPicker({showalert=null}) {


    const [selectedColor, setSelectedColor] = useState("#000000");

  const handleClick = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor=color;
    showalert("Background color has been changed"+ color, "success");
  }; 


  return (
     <div className="color-picker-container">
      <div className="color-picker-scroll">
        {colorOptions.map((color) => (
          <div
            key={color}
            className={`color-swatch ${selectedColor === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          />
        ))}
      </div>
    </div>
  );
}
