function WeatherSearchBox({ handleSearch }: { handleSearch: any }) {
  return (
    <div className="searchbox">
      <img
        className="searchbox-icon"
        src="https://api.iconify.design/ri:search-line.svg"
        alt=""
      />
      <input
        className="searchbox-input"
        type="search"
        placeholder="Search City..."
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default WeatherSearchBox;
