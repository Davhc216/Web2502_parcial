const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_pais");
    let valor = inputTexto.value;
    peticionAPI(valor);
}

const peticionAPI = (pais) => {
    const baseurl = 'https://restcountries.com/v3.1/';
    const endpoint = `name/${pais}`;
    const url = `${baseurl}${endpoint}`;

    axios
    .get(url)
    .then((respuesta) => printData(respuesta.data))
    .catch((error) => console.log(error));
}

const printData = (data) => {
    let respuesta = document.getElementById("show-info");
    respuesta.innerHTML = ` 
        <span>${data[0]['flag']}</span>
        <h3>Nombre: ${data[0]['name']['common']}</h3>
        <h3>Capital: ${data[0]['capital']}</h3>
        <h3>Region: ${data[0]['region']}</h3>
        <h3>Poblacion: ${data[0]['population']}</h3>
        <h3>Area: ${data[0]['area']} km²</h3>
    `;
}