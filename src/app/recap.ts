const username: string | number = 'lucho';
//const username = 'nehemias';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,2);

class Person {

 constructor(public age: number, public lastName: string) {}

}

const luis = new Person(23, 'Hawkins');
luis.age;
/*
class Person {
  private age: number;
  lastName: string;

  constructor(age:number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
} 
const suma = ( a : number , b: number):number => a + b
const saludar = (nombre: string , edad: number ):string => `Hola me llamo ${nombre} y tengo ${edad} años`

*/
