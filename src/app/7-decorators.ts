function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  }
}

export class C {
  @f()
  @g()
  method() {

  }
}


function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

@classDecorator
export class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}
