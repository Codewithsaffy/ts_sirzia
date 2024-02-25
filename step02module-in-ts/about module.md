
# TypeScript Modules

## Default Exports

A module can export a single member as the default export. This is typically used for a module's main export.

**Syntax to create a default export:**

```typescript
// In a file, say `ExampleModule.ts`
const exampleExport = "some value";
export default exampleExport;
```

**Syntax to import a default export:**


```typescript
// In another file, where you want to use the default export
import exampleImport from './ExampleModule';
```

## Named Exports

To export several variables or functions, you can use named exports.

**Syntax to export specific items:**

```typescript
// In a file, say `ExampleModule.ts`
export const exampleNumber = 5;
export function exampleFunction() {}
```

**Syntax to import specific items:**

```typescript
// In another file, where you want to use the named exports
import { exampleNumber, exampleFunction } from "./ExampleModule";
```

**Syntax to import a named export with a new name:**

```typescript
// In another file, where you want to use the named exports
import { exampleNumber as num } from "./ExampleModule";
```

## Transpilation to CommonJS

If you're noticing that TypeScript is transpiling to CommonJS (`require`/`exports`) instead of ES Modules (`import`/`export`), this is controlled by the `module` option in your `tsconfig.json` file.

**To use ES Modules in the transpiled code, update your `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "module": "ESNext" // or "ES6", "ES2020", etc., depending on the target environment
  }
}
```

After setting the `module` to `ESNext` or your desired ES module version, TypeScript will generate `.js` files with `import` and `export` statements.

---

This structured response should help you understand the basics of how to work with modules in TypeScript. If you're experiencing 404 errors while trying to access documentation, ensure that the URLs are correct and the resources are indeed available. In the context of web development, a 404 error indicates that the server could not find the requested page or resource.