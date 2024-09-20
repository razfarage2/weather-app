import UpdateDate from "./UpdateDate";
import WeatherDisplay from "./WeatherDisplay";
import './card.css'

function Card(){
    return(
        <div className="card">
            <div className="card-header">
                <h1 className="card-title">Weather App</h1>
                <UpdateDate />
            </div>
            
            <div className="card-display">
                <WeatherDisplay />
            </div>
        </div>
    );

}

export default Card