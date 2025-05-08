Visitor Coding Exercise

You are asked to implement a visitor called ExpressionPrinter  for printing different mathematical expressions. The range of expressions covers addition and multiplication - please put round brackets around addition operations (but not multiplication ones)! Also, please avoid any blank spaces in output.

Example:

Input: AdditionExpression(Value(2), Value(3)) 

Output: (2+3) 

Here is the corresponding unit test:

let simple = new AdditionExpression(
  new Integer(2), new Integer(3)
);
let ep = new ExpressionPrinter();
ep.visitAddition(simple);
expect(ep.toString()).toEqual('(2+3)');