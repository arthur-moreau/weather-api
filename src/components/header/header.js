import "./header.css";
import useWeather from "../../hooks/weather-hooks";
import leftArrow from "../../images/vector.png";

// Class created to use a Global variable to change the type of the temperature

export class Globals {
  static typeOfTemp = true;
}

const Header = () => {
  // State used to show the GoBack Button

  const { weatherState, resetApp } = useWeather();

  const handleGoBack = () => resetApp();

  const handleTemp = () => (Globals.typeOfTemp = !Globals.typeOfTemp);

  return (
    <header>
        {weatherState.searching === true ? (
          <button className="go-back" onClick={handleGoBack}>
            <img src={leftArrow} alt="seta para esquerda" />
          </button>
        ) : (
          <div></div>
        )}
        <div className="temp-type-container">
          <label className="switch">
            <input type="checkbox" onClick={handleTemp} />
            <span className="slider" />
          </label>
        </div>
    </header>
  );
};

export default Header;
