function NextDaysWeather(nextDaysWeatherData: any) {
  return (
    <>
      <div className="weather-container">
        <h1>Next Days</h1>
        <div className="weather-slider">
          {Object.values(nextDaysWeatherData).map((day: any) => {
            const dayOfWeek = new Date(day.date).toLocaleString('en-us', {
              weekday: 'long',
            });

            day = day.day;
            // console.log(day);
            return (
              <>
                <div className="weathercard">
                  <div className="minmaxtemp">
                    <span>
                      {parseFloat(day.maxtemp_c).toFixed(1)}
                      <sup>°</sup>
                    </span>
                    <span className="mintemp">
                      {parseFloat(day.mintemp_c).toFixed(1)}
                      <sup>°</sup>
                    </span>
                  </div>
                  <div className="minmaxtemp_condition">
                    {day.condition.text}
                  </div>
                  <img src={day.condition.icon} alt="" />
                  <div className="dayofweek">{dayOfWeek}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NextDaysWeather;
