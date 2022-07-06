import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'lucho';
  age = 28;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name:'lucho',
    age: 23,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['lucho', 'nehemias', 'iveth'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

   increaseAge(){
    this.person.age += 1;
   }

   onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

   }

   changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

   }

   addName(){
    this.names.push(this.newName);
    this.newName = '';

   }

   deleteName(index: number) {
    this.names.splice(index,1);
   }

}

//https://www.w3schools.com/howto/img_avatar.png
//https://images.unsplash.com/photo-1656051171336-f7430be33a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NjQ0ODYyMw&ixlib=rb-1.2.1&q=80&w=1080