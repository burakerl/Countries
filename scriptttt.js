function addCountryInfo() {
  countryName.innerHTML = data[0].altSpellings[1];
  flag.src = data[0].flags.png;
  capital.innerHTML = data[0].capital[0];
  region.innerHTML = data[0].continents[0];
  population.innerHTML = data[0].population;
  language.textContent = Object.values(data[0].languages);
  currency.innerHTML = Object.values(data[0].currencies)[0].name;
  currencySign.innerHTML = Object.values(data[0].currencies)[0].symbol + ",";
  timeZone.textContent = data[0].timezones[0];
}