

abstract class AbstractParent{
  abstract foo(): number;
}


class ChildImpl extends AbstractParent{
  foo(): number{
    return 1;
  }
}
