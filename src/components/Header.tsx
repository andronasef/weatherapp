import WeatherSearchBox from './WeatherSearchBox';

function Header(props: any) {
  const currentLocation = props;
  function handleSearch(e: any) {
    if (e.key === 'Enter') {
      console.log(e.target.value);

      props.onWeatherSearch(e.target.value);
    }
  }
  return (
    <header>
      <div className="info">
        <div>
          {currentLocation.country}, {currentLocation.name}
        </div>
        <div>
          {new Date().toLocaleString('en-US', {
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </div>
      </div>
      <WeatherSearchBox handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
