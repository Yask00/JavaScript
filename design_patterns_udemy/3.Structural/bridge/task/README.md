You are given an example of an inheritance hierarchy which results in Cartesian-product duplication.

Please refactor this hierarchy, giving the base class Shape  a constructor that takes a renderer, whose expected interface is:

class <SomeRenderer>
{
  get whatToRenderAs()
  {
    // todo
  }
}
There's no need to implement the type above (due to duck typing), but I do want you to implement classes VectorRenderer  and RasterRenderer . Each inheritor of the Shape  class should have a constructor that takes a Renderer  such that, subsequently, each constructed object's toString()  operates correctly, for example,

new Triangle(new RasterRenderer()) # returns "Drawing Triangle as pixels" 