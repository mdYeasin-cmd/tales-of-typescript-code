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
