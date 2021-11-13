// https://www.youtube.com/watch?v=2MJnTmoAdwI
// Ania Kubow voorbeeld

async function getData() {
    const response = await fetch('https://restcountries.com/v2/all')
    console.log(response);
    const data = await response.json();
    console.log(data);
    // return data;
}
getData();
// getData().then(data => console.log(data));