// enum Avengers {
//   Capt,
//   IronMan,
//   Thor,
// }
// // let hero: Avengers = Avengers[0];
// console.log(typeof Avengers);
// console.log("hee");

// interface login {
//   (username: string, password: string): boolean;
// }

// let loginUser: login = function (id: string, pw: string) {
//   console.log("로그인 했습니다");
//   return true;
// };

// console.log(loginUser("sdsf", "sdd"));

// interface CraftBeer {
//   beerName: string;
//   nameBeer(beer: string): void;
// }

// class myBeer implements CraftBeer {
//   beerName = "Baby Guinness";
//   nameBeer(b: string) {
//     this.beerName = b;
//   }
//   constructor(name: string) {
//     this.beerName = "Ddd";
//   }
// }

// let test = new myBeer("Dd");
// console.log(test);
// interface Person {
//   name: string;
// }
// interface Developer extends Person {
//   skill: string;
// }
// let fe:Developer;
// // let fe = { name: "ddd", skill: "dd" } as Developer;
// // let fe: Developer = { name = "dd", skill = "dd" };
// console.log(fe.name);
// /
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

// function myBeer(): CraftBeer {
//   let my = function (beers: string) {} as CraftBeer;
//   my.brand = "Beer Kitchen";
//   my.brew = function () {};
//   return my;
// }

// let brewedBeer = myBeer();
// brewedBeer("My First Beer");
// brewedBeer.brand = "Pangyo Craft";
// brewedBeer.brew();

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type test = keyof typeof LogLevel;
type sex = string;

function a(): sex {
  return "Dd";
}

interface Person {
  name: string;
  age: number;
}

type Test = keyof Person; // ("name", "age")
type Foo = {
  readonly bar: number;
  readonly bas: number;
};

// 초기화는 오케이
let foo: Foo = { bar: 123, bas: 456 };

class sexx {
  readonly dd: number;
}

let s = new sexx();

console.log(s.dd);
