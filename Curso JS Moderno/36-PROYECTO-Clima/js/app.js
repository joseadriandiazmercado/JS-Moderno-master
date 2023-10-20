const container =  document.querySelector('.container');
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')


window.addEventListener('load', () => {

formulario.addEventListener('submit', buscarClima);

})


const buscarClima = (e) =>{
	e.preventDefault();
	const cuidad = document.querySelector('.cuidad').value
	const pais =  document.querySelector('#pais').value;
	
	if(cuidad === '' || pais === '' ){
		alert('Seleccionar cuidad y pais...')
		return;
	}
	consultarAPI(cuidad, pais);
}

	const consultarAPI = (cuidad, pais) => {
		
		const appId ='98e834540fa7d63f3c4e108b328ecee6'
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=${appId}`;

		fetch(url)
			.then(response => response.json())
			.then(data => {	
				if(data.cod === '404'){
					alert(`${data.message}${' - '}Introduce una cuidad correctamente`)
					return;
				}
				mostrarClima(data)
			})
			.catch(error => alert(error))
	}

	const mostrarClima = (data) => {
		// destructurar un objeto dentro de otro objeto
		const {name,main: {temp, temp_max, temp_min}} = data;
		const tempCelcuis = kelvinACentigrados(temp)
		const max = kelvinACentigrados(temp_max)
		const min = kelvinACentigrados(temp_min)
		
		//!Colocar le nombre de la ciudad
		const nombreCuidad = document.createElement('p');
		nombreCuidad.textContent = `Ciudad: ${name}`;
		nombreCuidad.classList.add('font-bold','text-2xl')


		resultado.innerHTML = '';
		//!Obtener la tempueratura actual
		const actual = document.createElement('p');
		// &#8451 => colocar el ℃ al lado de la temperatura
		actual.innerHTML = `${tempCelcuis}&#8451`;
		actual.classList.add('font-bold', 'text-6xl');

		//!Obtener la tempueratura maxima
		const tmpMaxima = document.createElement('p');
		tmpMaxima.innerHTML = `Max: ${max}&#8451`;
		tmpMaxima.classList.add('text-xl');

		//!Obtener la temperatura minima
		const tmpMinima = document.createElement('p');
		tmpMinima.innerHTML = `Min: ${min}&#8451`;
		tmpMinima.classList.add('text-xl');

		//!colocar los resultados en el DOM
		const resultadoDiv = document.createElement('div');
		resultadoDiv.classList.add('text-center', 'text-white');

		resultadoDiv.appendChild(nombreCuidad)
		resultadoDiv.appendChild(actual)
		resultadoDiv.appendChild(tmpMaxima)
		resultadoDiv.appendChild(tmpMinima)

		resultado.appendChild(resultadoDiv)
	}

const kelvinACentigrados = (grados) => parseInt(grados - 273.15).toPrecision().split('0')[0]

	// const limpiarHTML = () => {
	// 	// mientras el div "resultado" tengo un hijo, eliminar ese hijo para el siguiente.
	// 	while(resultado.firstChild) resultado.remove(resultado.firstChild)
		
	// }