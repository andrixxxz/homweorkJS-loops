// luksofora loģika

const redOn = false;
const yellowOn = false;
const greenOn = true;

if (greenOn) {
  console.log("Drīskt braukt");
} else if (yellowOn) {
  console.log("Nebrauc krustojumā");
} else if (redOn) {
  console.log("Braukt aizliegts");
} 
console.log("--------------------------------------")

//Izveidot for ciklu, kas konsolē izvadīs ciparus no 9 līdz -9
for (let i = 9; i > -10; i--) {
  console.log(i);
}
console.log("--------------------------------------")
//Izveidot for ciklu, kas konsolē izvadīs ciparus no -50 līdz 50, ar soli 5. Tātad -50, -45, -40....50
for (let i = -50; i < 51; i +=5) {
  console.log(i);
}
console.log("--------------------------------------")
//Ir dots masīvs ar nosaukumu `array`. Nepieciešams, izmantojot ciklu (for vai forEach), iziet cauri masīvam un uztaisīt jaunu masīvu, kas saturēs tikai ciparus no massīva `array
// Rezultāts pēc izpildes: newArray = [1, 2, 3])

const array = [1, 2, true, "a", "b", 3];
const newArray = [];
for(let i=0; i<array.length; i++){
  let arr = array[i];
  if (typeof arr === "number"){
    newArray.push(arr);}
  }
  console.log(newArray);
  console.log("--------------------------------------")

//Ir dots masīvs ar nosaukumu `names`. Izmantojot `map` ciklu, pārbaudiet un noformatējiet masīva ierakstus, lai:
// * Vārdos nav nevienas atstarpes
// * Vārdi sākas ar lielo burtu
// Opcionāli - lai tikai 1 burts ir liels, visi parējie mazi
// Katrai validācijai jāuztaisa funkciju, kas pieņems vārdu, un atgriezis noformatētu vārdu. Kā piemērs 1. funckijai - function removeSpaces(string) {...}
// Rezultātā `names` masīvs izskatīsies šādi: names = ["Jānis", "Kārlis", "Māris", "Dace", "Ervīns"];
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
let names = [" Jānis ", "Kār lis", "māris", "dac e", "ErVīNs"];
for(let i=0; i<names.length; i++){
  let name = names[i];
  name = name.replace(" ", "");

  name=capitalizeFirstLetter(name);
  console.log(name);

}
console.log("--------------------------------------")
//Foreach test
names.forEach((vards) => console.log(vards));
