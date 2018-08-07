

interface A {
  fromA(): void;
}

interface B {
  fromB(): void;
}

class Implementation implements A, B{
  fromA(): void{

  }

  fromB(): void{

  }
}

class Example{
  private imp: A;

  constructor(){
    this.imp = new Implementation();
  }

  test(): void{
    this.imp.fromA();
    // this.imp.fromB();
    (this.imp as Implementation).fromB();
  }
}
