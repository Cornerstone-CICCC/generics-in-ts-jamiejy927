# Generics in TypeScript

Welcome to `<generics>` in TypeScript! In this exercise, you will practice your new skills in TypeScript!

### Configuration

1. Clone the repository to your local machine:

```bash
$ git clone https://your-repository-url.git
$ cd your-repository-directory
```

2. Once cloned, initialize and install the `typescript` package:

```bash
npm init -y
npm install -D typescript
```

3. Run the command bellow to create your TS configuration file:

```bash
npx tsc --init
```

4. Inside of the `tsconfig.json`, localize the `oudDir` property and add `./dist`:

```json
"outDir": "./dist"
```

This will create the compiled files in a separate folder.

5. Inside of the `tsconfig.json`, localize the `rootDir` property and add `./exercises`:

```json
"rootDir": "./exercises"
```

This will define the location of your source files.

6. You can run the compiler from the root using the command `tsc`. With the configuration that was defined.

The `tsc` will compile all the files inside of the root folder (`/exercises`), generating the `.js` compiled files in the dist folder.

You can also use the command bellow to compile all the files and watch changes:

```bash
npx tsc -w
```

If you want, you can compile the files individually, but be aware that this will bypass the configuration, meaning you need to indicate the outDir in the command:

```bash
npx tsc exercises/ex01.ts --outDir dist
```

7. After compiling the files, use `node` to run the files.

```bash
node dist/ex01.js
```

Happy codding! 🎉
