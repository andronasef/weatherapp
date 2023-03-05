function TodayWeather(todayWeather: any) {
  const filteredWeather = Object.values(todayWeather).filter(
    (hourWeather: any) => {
      const hour = new Date(hourWeather.time).getHours();
      const nowHour = new Date().getHours() - 1;
      return hour > nowHour;
    }
  );
  return (
    <>
      <div className="weather-container">
        <h1>Today's Weather</h1>
        <div className="weather-slider">
          {Object.values(filteredWeather).map((hourWeather: any) => {
            const time = new Date(hourWeather.time).toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            });
            return (
              <div className="weathercard">
                <div className="data">
                  <div className="time">{time}</div>
                  <div className="temp">
                    {parseFloat(hourWeather.temp_c).toFixed(0)}
                    <sup>°</sup>
                  </div>
                  <div className="condition">{hourWeather.condition.text}</div>
                </div>
                <img src={hourWeather.condition.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TodayWeather;
