* What are they? - Common architecture approaches, observed and applicated across languages. Sometimes you are using such, even without realizing that.
* `SOLID` desing principle - Creational / Structural / Behavioral - Gamma categorzation - frequently reffered in design principles
    * `Single responsibility principle` - it tells a class has single primary responsibility. Journal class have to any add/remove entries and can return count
    * `Open Close principle` - open for extension, closed for modification - not having different methods in a class that filter but write modular separate classes for filter. Example includes separate of concern.
    * `Liskov substitution principle` - if some method/function can take some base type it should also equally be able to take a derived type
    * `Interface segregaton` - class behaves as interface definition, no construction. Segragate into multiple interfaces - Machine -> Printer, Scanner, Photocopier
    * `Dependency Inversion principle` - no connection with dependency injection. Defines relationships that should have btw low and high level modules. High lever Research should not depend on low level like Relationships
* `Creational`
    * `Builder` - more complicated object with complexity, privdes API constructing objects step by step for object with more init properties - classes `Tag` and `HTMLBulder` 
    * `Factory` - Initializer is not descriptive, wholesale obj creation, factory method is static method letting you create an object - `Point` and `PointFactory`
    * `Prototype` - iterate exisiting design and improve on them, clone the ptototype and customize it. It is by description a partially or fully initilizaed object that you copy and make use of - `John` is prototype for `Jane` objects both `Person` witn `Address` w or without deep copying props examples.
    * `Singleton` - one instance - database, object factory, construcor call is expective
* `Structural`
    * 
    * 
