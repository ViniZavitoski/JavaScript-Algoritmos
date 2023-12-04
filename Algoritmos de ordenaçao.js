//Algoritmo de ordenaçao por seleçao:
function selectionSort(array) {
    for ( let i = 0; i < array.length - 1; i++ ) {
        let minIndex = i;

        for ( let j = i + 1; j < array.length; j++ ) {
            if ( arr[j] < arr[minIndex] ) {
                minIndex = j;
            }
        }

        if ( minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
    return array;
}
//ex:
//const list = [64,25,12,22,11];
//const sortedList = selectionSort(list);
//console.log("Lista ordenado:",sortedList);

//const temp = arr[0];   // temp = 64
//arr[0] = arr[4];       // arr[0] agora é 11
//arr[4] = temp;         // arr[4] agora é 64

//const temp = arr[1];   // temp = 25
//arr[1] = arr[2];       // arr[1] agora é 12
//arr[2] = temp;         // arr[2] agora é 25
//------------------------------------------------------------------------

//Algoritmo de Pesquisa Simples:
function LinearSearch( array, alvo ) {
    for (let i = 0; i < array.length; i++)
    if ( array[i] == alvo ){
        return i
    }
    return -1
}
// Exemplo de uso
//const array = [3, 7, 1, 4, 2, 8];
//const alvo = 4;

//const resultado = pesquisaLinear(array, alvo);

//if (resultado !== -1) {
//    console.log(`Elemento ${alvo} encontrado no índice ${resultado}.`);
//} else {
//    console.log(`Elemento ${alvo} não encontrado no array.`);
//}
//----------------------------------------------------------------------------
//algoritmo de pesquisa binaria(binarySearch)
function binarySearch( array,target ) {
    let begin = 0
    let end = array.length - 1

    while ( begin <= end ) {
        const middle = ( (begin + end) /2 )

        if ( array[middle] === target ) {
            return middle
        } if ( array[middle] < target ) {
            let begin = middle + 1
        } else {
            let end = middle - 1 
        }

    } return - 1
}
// Exemplo de uso
//const arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const target = 6;

//const result = binarySearch( arrayOrdenado, target );

//if ( result !== -1 ) {
//    console.log( `Elemento ${target} encontrado no índice ${result}.` );
//} else {
//    console.log( `Elemento ${target} não encontrado no array.` );
//}
//Algoritmo QuickSort:
function QuickSort( array ) {
    if ( array.length <= 1 ) {
        return array;
    }
    const pivot = array[0]
    menores = []
    maiores = []

    for ( let i = 1; i < array.length; i++ ) {
        if ( pivot > array[i] ) {
            menores.push( array[i] )
        } else {
            maiores.push( array[i] )
        }
    } return [ QuickSort( menores ), pivot ,QuickSort( maiores ) ]
}
// Exemplo de uso
//const arrayDesordenado = [ 64, 34, 25, 12, 22, 11, 90 ];
//const arrayordenado = quicksort( arrayDesordenado );
//console.log( "Array ordenado:", arrayOrdenado );
// ------------------------------------------------------------------------------
//algoritmo MergeSort:
function MergeSort( array ) {
    if ( array.length <= 1 ) {
        return array
    }
    const meio = math.floor( array.length / 2 );
    const metadeEsquerda = array.slice( 0,meio );
    const metadeDireita = array.slice( meio );

    const metadeEsquerdaOrdenada = MergeSort( metadeEsquerda );
    const metadeDireitaOrdenada = MergeSort( metadeDireita );
    return merge( metadeEsquerdaOrdenada, metadeDireitaOrdenada )
}
function merge( metadeEsquerda,metadeDireita ) {
    let resultado = []
    let i = 0
    let j= 0

    while ( i < metadeEsquerda && j < metadeDireita ) {
        if ( metadeEsquerda[i] < metadeDireita[j] ) {
            resultado.push( metadeEsquerda[i] );
            i ++;
        } else {
            resultado.push( metadeDireita[j] );
            j ++;
        }
    }
} return resultado.concat( metadeEsquerda.slice(i), metadeDireita.slice(j) )
// Exemplo de uso
//const arrayDesordenado = [ 64, 34, 25, 12, 22, 11, 90 ];
//const arrayOrdenado = mergesort(arrayDesordenado);
//console.log("Array ordenado:", arrayOrdenado);

