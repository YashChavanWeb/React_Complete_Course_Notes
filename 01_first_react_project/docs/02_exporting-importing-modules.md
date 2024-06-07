# Exporting and Importing Modules

## Default Export and Import

Default export allows you to export one thing per module, such as a function, class, or variable.

### Example:

In `yashmodule.js`:

```javascript
const a = "Default Export Example";
export default a;
```

In another file:

```javascript
import yash221 from "./yashmodule";
console.log(yash221); // Output: "Default Export Example"
```

## Named Export and Import

Named exports allow you to export multiple things from a module.

### Example:

In `yashmodule.js`:

```javascript
const yash = "Yash";
const sarth = "Sarth";
const krisha = "Krisha";

export { yash, sarth, krisha };
```

In another file:

```javascript
import { yash, sarth, krisha } from "./yashmodule";
console.log(sarth); // Output: "Sarth"
console.log(sarth221); // This will give an error
```

```

```
