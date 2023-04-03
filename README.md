Install & Setup Vite + React + Typescript + MUI 5

![img.png](img.png)

For more information check this article: https://frontendshape.com/post/install-setup-vite-react-typescript-mui-5

After having the initial setup lets configure 

prettier, eslint, and jest are

```
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Create `.eslintrc.cjs` in the root of the project
```
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

and `.prettierrc.json`

```
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

add these script to the package.json file

```
"scripts": {
    "lint": "eslint --config .eslintrc.cjs --ext .js,.jsx,.ts,.tsx src",
    "lint:fix": "eslint --config .eslintrc.cjs --ext .js,.jsx,.ts,.tsx src --fix"
}
```

add jest and its dependencies

```
npm install --save-dev jest ts-jest @types/jest
```
