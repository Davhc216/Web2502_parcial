const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_pais");
    let valor = inputTexto.value;
    peticionAPI(valor);
}

const peticionAPI = (pais) => {
    const baseurl = 'https://restcountries.com/v3.1/';
    const endpoint = `name/${pais}`;
    const url = `${baseurl}${endpoint}`;

    axios.get(url)
    .then(respuesta => console.log(respuesta.data))
    .catch(error => console.log(error));
}