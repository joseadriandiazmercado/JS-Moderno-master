//!Propotype -> metodos que se utilian en el fetch


const getTxtBtn = document.querySelector('#cargarTxt');

const getDataText = () => {    

    const url = 'data/datos.txt'

fetch(url).then(
    res => {
        console.log(res)
        return res.text()
    }
).then( data =>{
    console.log(data);
}
)


}

getTxtBtn.addEventListener('click', getDataText);