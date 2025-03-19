const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

  // risoluzione con toReversed
const reversedTeachers1 = teachers.toReversed();
// stampa di controllo
console.log(reversedTeachers1);

  // risoluzione con ciclo for
const reversedTeachers2 = [];
for(i=0; i<teachers.length; i++){
  reversedTeachers2.unshift(teachers[i]);
}
// stampa di controllo
console.log(reversedTeachers2);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(let i=0; i<teachers.length; i++){
  if (teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}
// stampa di controllo
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1,1);
// stampa di controllo
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let flag = false;
for(i=0; i<teachers.length; i++){
  if(teachers[i] === 'Fabio'){
    flag = true;
  }
}
const isFabioPresent = flag;
// stampa di controllo
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let string = "";
for(i=0; i<teachers.length-1; i++){ //aggiungo gli insegnanti separati da una virgola
  string += teachers[i]+", ";
}
string += teachers[teachers.length-1]; //aggiungo l'ultimo insegnante
const teachersString = string;
// stampa di controllo
console.log(teachersString);

