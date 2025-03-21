const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
// stampa di controllo
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, "Patrick");
// stampa di controllo
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length-1];
teachers.pop();
// stampa di controllo
console.log(lastTeacher, teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
teachers.shift();
// stampa di controllo
console.log(firstTeacher, teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
// stampa di controllo
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
// stampa di controllo
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
  
  // risoluzione con indexOf 
const lewisIndex1 = teachers.indexOf("Lewis");
// stampa di controllo
console.log(lewisIndex1);

  // risoluzione con ciclo for
let teacherIndex;
for(i=0; i<teachers.length; i++){
  if(teachers[i] === "Lewis"){
    teacherIndex = i;
  }
}
const lewisIndex2 = teacherIndex;
// stampa di controllo
console.log(lewisIndex2);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length < 1;
// stampa di controllo
console.log(isTeachersEmpty);