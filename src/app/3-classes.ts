

export class Foo{
  message: string;

  constructor(){
    this.message = "Hello";
  }

  public sayHello(): void{
    console.log(this.message);
  }

  public getMessage(): string{
    return this.message;
  }
}


var Shape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};


var Rectangle = function (id, x, y, width, height) {
  Shape.call(this, id, x, y);
  this.width  = width;
  this.height = height;
};
Rectangle.prototype.override= function(){
  return Shape.prototype.move.call(this, 5,5)
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;



export class Parent{
  a: string;
  private b: string;
  protected c: string;

  constructor(){
    this.b = "b";
    this.a = "a";
    this.c = "c";
  }

  protected inheritedMethod(): string{
    return this.a;
  }

  // constructor(a: string,
  //   //             b: string,
  //   //             c: string){
  //   //   this.a = a;
  //   //   this.b = b;
  //   //   this.c = c;
  //   // }
}

export class Child extends Parent{
  constructor(){
    super();
    // super("a", "b", "c");
  }

  public foo(): string{
    return this.inheritedMethod();
  }
}
