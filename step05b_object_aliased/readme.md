# Object Types
[Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

[Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)


[Type vs. Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

## TypeScript Code Explanation

### Type and Interface Definitions
```typescript
type studClass = {
    name: string;
    FatherName: string;
}
type studName = {
    age: number;
    class: number;
}
type DataOption = studClass | studName

interface collegeString {
    name: string;
    FatherName: string;
}
interface collegeNumber {
    class: number;
    age: number;
}

```

### Differences Between Type and Interface
1. **Union Usage:**
   - **Type**: You can use union "|" for combining types.
   - **Interface**: You cannot use union "|" to combine types within the interface.

2. **Type Redefinition:**
   - **Type**: You cannot redeclare the same type name using type declarations.
   - **Interface**: You can redeclare the same type name using interface declarations.
#### Example:

```typescript
// Type Declaration
type PersonType = {
    name: string;
    age: number;
}

type ProductType = {
    name: string;
    price: number;
}

type Entity = PersonType | ProductType;

// Interface Declaration
interface PersonInterface {
    name: string;
    age: number;
}

interface ProductInterface {
    name: string;
    price: number;
}

interface EntityInterface extends ProductInterface {}
```

These examples illustrate the differences between type and interface in TypeScript.
