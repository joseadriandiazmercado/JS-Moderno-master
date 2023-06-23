const paises = [];


const nuevoPais = pais => new Promise(res =>{

    setTimeout(() => {
        paises.push(pais)
        res(`AGREGADO ${pais}`);
    }, 3000);
})


nuevoPais('Mexico')
        .then( res => {
            console.log(res)
            console.log(paises)
            return nuevoPais('Suiza')
        })
        .then(res => {
            console.log(res)
            console.log(paises)
        })
        .catch(error =>{
            console.log(error)
        })