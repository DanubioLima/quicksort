/**
 * @author Danubio Lima
 * @version 1.0
 *
 * @description Script de estudo do algoritmo de ordenação Quick Sort
 *
 * O Quick Sort consiste em dividir um vetor de n elementos em partes menores. Depois ordenar essa partes separadamente e juntar
 * as partes ordenadas como resultado final.
 *
 * É um dos algoritmos mais usados do mundo.
 *
 * Para dividir em partes menores é preciso selecionar um pivô ou elemento que sirva como base para separar os outros itens do array.
 * Quem for maior do que o pivô fica do lado direito e quem for menor fica do lado esquerdo.
 *
 * Aqui eu implemento duas funções, as duas usam quickSort para ordenar uma lista. A primeira é de fácil implementação, mas gasta
 * recursos gerando novas pequenas listas em memória.
 *
 * A segunda apenas muta o array original repassado gastando menos memória, porém tem uma implementação mais complicada.
 */

function quickSort(numbers) {
  if (numbers.length <= 1) return numbers;

  let pivot = numbers[0];
  let left = [];
  let right = [];

  for (let index = 1; index < numbers.length; index++) {
    const elem = numbers[index];
    if (elem > pivot) {
      right.push(elem);
    } 
    
    if (elem <= pivot) {
      left.push(elem);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function quickSortWithMutation(numbers) {
  quickSortHelper(numbers, 0, numbers.length - 1);
}

function quickSortHelper(numbers, start, end) {
  if (start > end) return;

  splitpoint = partition(numbers, start, end);

  quickSortHelper(numbers, start, splitpoint - 1);
  quickSortHelper(numbers, splitpoint + 1, end);
}

function partition(numbers, start, end) {
  let pivot = numbers[start];
  let leftMark = start + 1;
  let rightMark = end;

  let done = false;
  while (!done) {
    while (leftMark <= rightMark && numbers[leftMark] <= pivot) leftMark += 1;

    while (rightMark >= leftMark && numbers[rightMark] >= pivot) rightMark -= 1;

    if (rightMark < leftMark) {
      done = true;
    } else {
      let oldLeft = numbers[leftMark];
      numbers[leftMark] = numbers[rightMark];
      numbers[rightMark] = oldLeft;
    }
  }

  numbers[start] = numbers[rightMark];
  numbers[rightMark] = pivot;

  return rightMark;
}

let vector = [7, 7, 14, 3, 9, 9, 18, 5, 11, 6, 2, 16];
console.log(quickSort(vector));

quickSortWithMutation(vector);
console.log(vector);
