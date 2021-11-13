import giveMeAJoke from 'give-me-a-joke';
import axios from "axios";

giveMeAJoke.getRandomDadJoke( (joke) => {
    console.log("Slechte grap is:",joke);
    document.getElementById("demo").innerHTML = joke;
    console.log(joke);
} )

async function fetchAPI() {
    try {
        // MAAK REQUEST NAAR SPECIFIEK ENDPOINT
        // await werkt noooooit zonder async
        const result = await axios.get('https://restcountries.com/v3.1/region/europe');
        console.log("alle europese landen:",result);
        console.log("het eerste land:",result.data[0].name.common);
        // LAAT DE GRAP ZIEN OP DE PAGINA

        // een object kan niet geprint worden, dus stringify methode
        // dit is niet juist maar ik weet niet hoe ik een object kan printen
        const makeObjectToString = JSON.stringify(result, null, 4);
        // node maken
        document.getElementById("joke-les").innerHTML = makeObjectToString;
        console.log(makeObjectToString); //dit logt je element
        document.getElementById("joke-les").setAttribute("class", "pre");

        // 1. Sla de referentie naar ons "echte" HTML element op
        // const jokeContainer = document.getElementById('joke-les');
        // // 2. Vul dat element met de data waarde
        // jokeContainer.textContent = result.data.value;
    } catch(e) {
        console.error(e);
        // LAAT EEN ERROR MELDING ZIEN OP DE PAGINA
    }
}

fetchAPI();