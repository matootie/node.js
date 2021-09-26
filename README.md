# Node.js TypeScript starter

A helpful template to get you started with developing a Node.js application using TypeScript.

## Features

### Development

The template aim to make it as easy as possible to get started developing a new Node.js project. There's a useful script that you can run to automatically build and run your code on changes.

Start the development script.

```
$ npm run develop
```

As you make changes to your source code, the script will automatically re-run the code!

### TypeScript

The language of choice is TypeScript. It's a superset of JavaScript, so it should look familiar to anyone who has worked with JavaScript before. However it helps ease a lot of stress with the development process by providing tools to make your code more predictable. Ultimately, the code you write will be more maintainable, and easier for other people to work with you on. Type checking is unfortunately not part of the build process, but if you're using Visual Studio Code and the TypeScript extension, you'll get inline type check as you code. Then, before building or as a step in your CI, you can manually run type checks.

Run TypeScript type checking manually.

```
$ npm run check:typescript
```

### Bundling

Since the template uses TypeScript as its primary language, before it can be run it must be transpiled into regular JavaScript. To take this process one step further I've included the use of a bundler to also bundle together all dependencies, and optimize the final copy. As a result, you're left with one JavaScript file (and it's sourcemap) that has within it only the required bits of code from dependencies as well as the original authored code, _bundled_ together. For this I've chosen to use the `esbuild` bundler for its wicked speed and convenient out-of-box support for TypeScript.

Bundle code.

```
$ npm run build
```

The bundled code is outputted to the `dist` directory.

### Formatting

The template makes use of the Prettier library to automatically format code. If you're using Visual Studio Code, install the Prettier plugin and your code will automatically be formatted as you edit. In other cases, there are some helpful scripts to deal with the formatting process.

Check for formatting errors.

```
$ npm run check:format
```

Automatically format code.

```
$ npm run format
```

### Testing

Unit tests can be written alongside source code as it's completely ignored by the bundler. For testing the template uses Jest. After tests, Jest will generate a coverage report that can be forwarded to diagnostic tools like Codecov, and it will also report coverage to the terminal.

Run the test suite.

```
$ npm test
```

### Using external dependencies

Often times an application depends on some external dependencies, most often a database. To help with this, the template includes a Docker Compose config to allow you to easily spin up all required services for your application.

Modify services in `docker-compose.yml`. For example, to add Redis:

```yaml
# docker-compose.yml
version: "3.9"
services:
  redis:
    image: redis
    ports:
      - "6379:6379"
```

Redis will be available on `localhost` at port `6379`.

Then run the services.

```
$ docker compose up
```

## Future

I will write a more detailed description of the features I plan to include in the future, but for now I will simply include a rough list.

- CI with GitHub Actions
- Lint with ESLint
- Possibly run the application itself inside of Docker Compose.
  - This one has proven to be stubborn as in order for the watcher to work as you edit files, you must sync the volumes. However, when you sync volumes, you sync `node_modules`, and some dependencies may be specifically build for the developers platform and not for the container runtime. In my personal case, `esbuild` can't use the prebuilt`darwin-arm64` binary in a `node:alpine` Docker container.
