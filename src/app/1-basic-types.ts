
export class BasicTypes{

  //BOOLEAN
  a : boolean = true;
  b : boolean = false;

  //NUMBERS
  wholeNumber: number = 6;
  decimal: number = 6.6;

  //STRING
  plainString: string = "hello";
  template: string = `${this.plainString} World!`;

  //TUPLE
  x: [string, number] = ["hello", 10];

  //ARRAYS
  list: number[] = [1, 2, 3];

  //ANY
  boring: any = 1;

  //READ ONLY
  readonly readOnly: number = 1;

  constructor(){
    this.readOnly = 2;
  }

  test():any{
    // this.readOnly = 3;
  }
}
