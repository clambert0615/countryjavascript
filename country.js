class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let canada = new Country("Canada", "English", "Hello World", ["red", "white", "red"]);
let france = new Country("France", "French", "Bonjour le monde", ["blue", "white", "red"]);

function SwitchCountry(input) {
  
    
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
       
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Canada") {
        country = canada
    }
    else if (input === "France") {
        country = france;
    }
    document.getElementById("CountryName").innerHTML = country.name;
    document.getElementById("OfficialLanguage").innerHTML = country.lang;
    document.getElementById("HelloWorld").innerHTML = country.greeting;
    displayColors(country);
}

function displayColors(country)
{
    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    document.getElementById("Color3").style.backgroundColor = country.colors[2];
}
function SwitchCountryByPrompt()
{
    let input = prompt("What country would you like to see? Enter USA, Mexico, Algeria, Canada, or France");
    SwitchCountry(input);
}

function SwitchCountryByDropDown()
{
    let input = document.getElementById("CountryList").value;
    SwitchCountry(input);
}