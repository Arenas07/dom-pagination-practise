const lists__characters = document.getElementById("list__characters");
const buttons = document.getElementById("buttons");
let urlCharacters = "https://dattebayo-api.onrender.com/characters";
let btnNext;
let btnPrevious;
let templateHtml;
console.log("<--  -->")

const getCharacters= async(url) =>{
    try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results)
    dataCharacters(results.characters)
}catch (error) {
        console.log(error)
    }
    } 


getCharacters(urlCharacters)

const dataCharacters = (characters) =>{
    lists__characters.innerHTML=""
    templateHtml = ""
    try {
            characters.forEach((character) => {
            console.log(character); 
            const titulo = character.personal.titles && character.personal.titles.length > 0
            ? `Title: ${character.personal.titles[0]}`
            : character.personal.birthdate
            ? `Birthdate: ${character.personal.birthdate}`
            : "Sin título ni cumpleaños";

            
          const clan =
            character.personal.clan !== undefined
          ? character.personal.clan
          : "No clan 😂";

          const genre = 
          character.personal.sex != "Male" && character.personal.sex != "Female"?
          "Various":
          character.personal.sex

            templateHtml +=`
            <div class="character__container">
            <img  class="image__characters"src="${character.images[0]}" alt=${character.name}>
            <div class="information__container">
                <h2 class="character__name"> ${character.name} </h2>
                <h2 class="character__sex"> ${genre} </h3>
                <h2 class="character__clan"> Clan: ${clan} </h2>
                <h2 class="character__title">  ${titulo} </h2>
            </div>
            </div>`
            
        })
        lists__characters.innerHTML += templateHtml
        
        document.getElementById("characters-container").innerHTML = templateHtml;
    } catch (error) {
        console.log(error)
    }
}

