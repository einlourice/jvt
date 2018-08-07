

class Simple{
  map: Map<string, number>;

  constructor(){
    this.map = new Map<string, number>();
    this.map.set("key", 5);
  }
}


interface Contract<T>{
  foo(): T;
  bar(bar: T): void;
}

class PlainObject{
  a: number;
}

class Impl implements Contract<PlainObject>{
  foo(): PlainObject{
    return new PlainObject();
  }

  bar(bar: PlainObject): void{

  }
}


interface WfDocument{
}

class Sad implements WfDocument{
}

interface WFContract<T extends WfDocument>{
  foo(): T;
  bar(bar: T): void;
}


class Impl2 implements WFContract<Sad>{
  foo(): Sad{
    return new Sad();
  }

  bar(bar: Sad): void{

  }
}
