# Tales of typescript code

### Covered topics in Module 01
- What is TypeScript? It's benefits and drawbacks.
- For get tsconfig.json file use below command.

```bash
    tsc --init
```

- Basic Data Types
- Object, Optional(?) and Literal(value as a type)
- Function in TS
- Spread Operator, Rest Operator and Destructuring
- Type alias in TS
- Uninon ( | ) and Intersection ( ? ) type
- Ternary, Optional Chaining and Nullish Coalescing Operator
- Never, Unknown and Nullable type

### Covered topics in Module 02
- Type assertion
    - A compile time concept (TypeScript --> JavaScript)
    - Type assertion (or type casting) is a way to tell the TypeScript compiler that you know more about the type of a value than it can infer statically
- Type narrowing
    - A runtime concept (JavaScript --> Browser or Node.js)
    - Type narrowing is a process that occurs during runtime based on certain conditions or checks within your code.
- Interface, Type vs Interface
    - Interface can use object only (Object, Array, Function)
    - Type alias can use object and primivite types both
- Generics 
    - Dynamic and Reuseable type
    - Generics can be use with "type alias", "interface" and "function"
- Constraints in TypeScript
    - By using contraints we can keep some property mandatory
- Constraint using "keyof" keyword
    - By using keyof keyword we can get all the key of a object type
- Asynchronous typeScript
    - Promise<"TypeHere">()
- Conditional types
    - One or more types depends on anohter types
- Mapped types
    - By using object look up we can make mapped type
- Utility types
    - Pick
    - Omit
    - Required
    - Partial
    - Readonly
    - Record

### Covered topics in Module 03
- What is Object Oriented Programming? 
- What programming paradigm?
    - The style used to write and organize code.
- Programming Paradigm
    - Procedural programming --> C, Fortran 
    - Functional programming --> JavaScript, Python
    - Declarative programming --> SQL
    - Object Oriented programming --> Java, JavaScript
    - Event Driven programming --> JavaScript/Node.js, C#
- Building blocks of OOP
    - Inheritence
    - Polymorphism
    - Abstraction
    - Encapsulation
- Class and Object
- Inheritance in OOP
    - extends keyword
    - super() keyword
    - borrow property and method from parent component
- Type guard/Type narrowing
    - typeof
    - in
    - instanceof
- If function return type is multiple we can  use is keyword for make sure what that function call will return "is keyword"
- Access modifiers
    - readonly
    - public (by default)
    - private
    - protected
- Getter and Setter
    - get
    - set
- Static in OOP
    - static keyword
- Ploymorphism in OOP
    - depends on situtation give different types of output
- Abstraction in OOP
    - implements & abstract keyword
    - abstraction means you will get idea, but you don't know how implement it
- Encapsulation in OOP
    - encaptulation means hidden