const cargarAPIBtn = document.querySelector('#cargarAPI');


const obtenerDatos = () => {
	const apiUrl = 'https://picsum.photos/list';
	fetch(apiUrl)
	.then(response => response.json())
	.then(resultado => mostrarImagenes(resultado))
	.catch(error => console.error(error))
}


const mostrarImagenes = (imagenes) =>{
	const contenido = document.querySelector('.contenido')
	let html = '';
	imagenes.forEach(imagen => {
		console.log(imagen)
		html += `
		<p>${imagen.author}</p>
		<a href=${imagen.author_url} >Ver imagen </a>`
	})
	contenido.innerHTML = html
}

cargarAPIBtn.addEventListener('click', obtenerDatos);
