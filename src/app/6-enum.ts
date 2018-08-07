enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

class Foo{

  use(direction: Direction): void{
    console.log(direction.toString())
  }
}
