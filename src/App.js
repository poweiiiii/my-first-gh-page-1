import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';




function App() {


  const cssColorNames = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
    "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
    "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
    "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
    "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
    "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
    "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
    "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
    "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey",
    "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
    "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
    "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey",
    "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin",
    "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru",
    "Pink", "Plum", "PowderBlue", "Purple", "Red",
    "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue",
    "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato",
    "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"
  ];

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)

  const [fontsize, setFontsize] = useState(50)
  const [fontweight, setFontweight] = useState(100)

  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleChangeq1 = (e) => {
    setValue1(e.target.value)
    setFontsize(e.target.value)
  }
  const handleChange2 = (e) => {
    setValue2(e.target.value)
    setFontweight(e.target.value)
  }


  const handleInputcolor = (e) => {
    setDisplayValue(e.target.value)
    setInputValue(e.target.value)
  }
  const handlebuttoncolor = () => {
    if (cssColorNames.includes(inputValue)) {
      setDisplayValue(inputValue)
    }
    else {
      window.alert('Enter again please')
    }
  }
  const handleclearcolor = () => {
    document.getElementById('slider').style.color = 'black'
    document.getElementById('dispaly_color').innerHTML = ''
  }



  return (

    <div className='Main'>
      <div className='ID'>4B0G0175</div>

      <div className='Slider'>
        <p>For Size</p>
        <input type='range'
          width="200"
          min="100"
          max='500'
          value={value1}
          onChange={handleChangeq1}
        ></input>

        <span>{value1}</span>
        <br></br>
        <p>For Weight</p>
        <input type='range' width="200"
          min="100"
          max='1000'
          value={value2}
          onChange={handleChange2}></input>

        <span>{value2}</span>
        <p>For Color</p>
        {/* For FontColor */}
        <input type='text' placeholder='Change color (First letter is "Upper")' value={inputValue} onChange={handleInputcolor}></input>

        <button type='button' onClick={handlebuttoncolor}
          style={{ width: '30px', height: '30px', borderRadius: '6cm', margin: '10px' }}>ok
        </button>

        <button type='button' style={{ width: '100PX', height: '30px', borderRadius: '6cm', margin: '10px' }}
          onClick={handleclearcolor}  >CLEAR
        </button>

        

        <br></br>
        <span id='dispaly_color'>{displayValue}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center ', alignItems: 'center', height: '100vh' }}>
        <p id="slider"
          style={{ fontSize: `${fontsize}px`, fontWeight: `${fontweight}`, color: `${inputValue}` }}>SLIDER</p></div>
    </div>
  );
}

export default App;
