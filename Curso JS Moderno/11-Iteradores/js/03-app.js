// Fizz buzz - 100 numeros 

// 3.6.9.12... imprimir fizz
// 5.10.15.20 imprimir buzz
// multiplos de ambos 15,30,45 imprimir fizzbuzz


// reto de fizz buzz

for(let i = 1; i < 100; i++ ){

    if(i % 3 == 0 && i % 5 ==0){
        console.log(`Numero ${[i]}: FIZZBUUZ`)
        continue;
    }

    else if(i % 3 ==0){
        console.log(`Numero ${[i]}: fizz`)
        continue;
    }
    if(i % 5 == 0){
        console.log(`Numero ${[i]}: buzz`)
        continue;
    }
    console.log(`Numero: ${[i]}`);
}