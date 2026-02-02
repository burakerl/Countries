const searchInput = document.querySelector("#search-input");
const mainArea = document.querySelector(".main-content");
const cardAreaOne = document.querySelector(".one");
const cardAreaTwo = document.querySelector(".two");

mainArea.style.display = "none";
let nCountry;
async function getCountry(country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`,
  );
  const data = await response.json();
  console.log(data);

  countryName = data[0].name.common;
  flag = data[0].flags.png;
  capital = data[0].capital[0];
  region = data[0].continents[0];
  population = data[0].population;
  language = Object.values(data[0].languages);
  currency = Object.values(data[0].currencies)[0].name;
  currencySign = Object.values(data[0].currencies)[0].symbol + ",";
  timeZone = data[0].timezones[0];
  nameAbbr = data[0].altSpellings[0];

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<img src="${flag}" class="flag" />

    <h1 class="country-name">${countryName} - [${nameAbbr}]</h1>

    <div class="details">
      <div>
        <i class="fa-solid fa-landmark-flag"></i>
        <p>-</p>
        <p class="capital">${capital}</p>
      </div>

      <div>
        <i class="fa-solid fa-earth-americas"></i>
        <p>-</p>
        <p class="region">${region}</p>
      </div>

      <div>
        <i class="fa-solid fa-people-group"></i>
        <p>-</p>
        <p class="population">${population}</p>
      </div>

      <div>
        <i class="fa-solid fa-language"></i>
        <p>-</p>
        <p class="language">${language}</p>
      </div>

      <div>
        <i class="fa-solid fa-coins"></i>
        <p>-</p>
        <span class="currency-sign">${currencySign}</span>
        <span class="currency">${currency}</span>
      </div>

      <div>
        <i class="fa-solid fa-clock"></i>
        <p>-</p>
        <p class="time-zone">${timeZone}</p>
      </div>
    </div>
  `;
  document.querySelector(".one").appendChild(card);

  nCountry = data[0].borders;

  nCountry.forEach((element) => {
    nCountry = element;
    getNeighbours(nCountry);
  });

}

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    cardAreaOne.innerHTML = "";
    cardAreaTwo.innerHTML = "";
    mainArea.style.display = "block";
    getCountry(searchInput.value);
  }
});

async function getNeighbours(nCountry) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${nCountry}`,
  );
  const data = await response.json();
  countryName = data[0].name.common;
  flag = data[0].flags.png;
  capital = data[0].capital[0];
  region = data[0].continents[0];
  population = data[0].population;
  language = Object.values(data[0].languages);
  currency = Object.values(data[0].currencies)[0].name;
  currencySign = Object.values(data[0].currencies)[0].symbol + ",";
  timeZone = data[0].timezones[0];
  nameAbbr = data[0].altSpellings[0];

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<img src="${flag}" class="flag" />

    <h1 class="country-name">${countryName} - [${nameAbbr}]</h1>

    <div class="details">
      <div>
        <i class="fa-solid fa-landmark-flag"></i>
        <p>-</p>
        <p class="capital">${capital}</p>
      </div>

      <div>
        <i class="fa-solid fa-earth-americas"></i>
        <p>-</p>
        <p class="region">${region}</p>
      </div>

      <div>
        <i class="fa-solid fa-people-group"></i>
        <p>-</p>
        <p class="population">${population}</p>
      </div>

      <div>
        <i class="fa-solid fa-language"></i>
        <p>-</p>
        <p class="language">${language}</p>
      </div>

      <div>
        <i class="fa-solid fa-coins"></i>
        <p>-</p>
        <span class="currency-sign">${currencySign}</span>
        <span class="currency">${currency}</span>
      </div>

      <div>
        <i class="fa-solid fa-clock"></i>
        <p>-</p>
        <p class="time-zone">${timeZone}</p>
      </div>
    </div>
  `;

  document.querySelector(".two").appendChild(card);
}
