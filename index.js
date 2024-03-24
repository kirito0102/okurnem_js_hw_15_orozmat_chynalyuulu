const xhr = new XMLHttpRequest();
const url ="https://restcountries.com/v3.1/all";
xhr.open("GET", url, true);

xhr.onload = function (){
  const data = JSON.parse(xhr.responseText);
  const countriesContainer = document.getElementById("countries");

  data.forEach(function (country) {
    const countryDiv = document.createElement("div");
    const nameParagraph = document.createElement("p");
    const flagImg = document.createElement("img");
    const capitalParagraph = document.createElement("p");
    const regionParagraph = document.createElement("p");
    const subregionParagraph = document.createElement("p");

    nameParagraph.textContent = "Имя: " + country.name.common;
    flagImg.src = country.flags.svg;
    flagImg.alt = "Флаг";
    capitalParagraph.textContent = "Капитал: " + country.capital;
    regionParagraph.textContent = "Регион: " + country.region;
    subregionParagraph.textContent = "Субрегион: " + country.subregion;

    countryDiv.appendChild(nameParagraph);
    countryDiv.appendChild(flagImg);
    countryDiv.appendChild(capitalParagraph);
    countryDiv.appendChild(regionParagraph);
    countryDiv.appendChild(subregionParagraph);
    countriesContainer.appendChild(countryDiv);



  });
}
xhr.send();