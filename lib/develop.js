const chokidar = require("chokidar")
const { build } = require("esbuild")

async function run() {
  const result = await build({
    entryPoints: ["src/main.ts"],
    outfile: "dist/main.js",
    minify: true,
    sourcemap: true,
    bundle: true,
    platform: "node",
    incremental: true,
  })

  chokidar
    .watch("src/**", {
      ignoreInitial: true,
    })
    .on("all", (event, path) => {
      console.log("✓ ", event, path)
      result.rebuild()
    })
    .on("ready", () => {
      console.log("Waiting for changes...")
    })

  process.on("cleanup", () => {
    console.log("\nCleaning up before exiting...")
    result.rebuild.dispose()
    console.log("Done!")
  })

  process.on("exit", function () {
    process.emit("cleanup")
  })

  process.on("SIGINT", function () {
    process.exit(2)
  })

  process.on("uncaughtException", function (e) {
    console.log("Uncaught Exception...")
    console.log(e.stack)
    process.exit(99)
  })
}

run()
