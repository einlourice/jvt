function use():void{
  console.log(add(1,2));
  // console.log(usingDefault(0));
  console.log(optional(1))
}

function add(x: number, y: number): number {
  return x + y;
}

function usingDefault(x : number = 5): number{
  return x;
}

function optional(x: number, y?: number): number {
  return x + y;
}
