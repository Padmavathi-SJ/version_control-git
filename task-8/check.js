const { execSync } = require("child_process");

try {
  console.log("Running lint check...");

  // Example: simulate lint/test
  execSync("npm run lint", { stdio: "inherit" });

  console.log("✅ Lint passed");
} catch (error) {
  console.error("❌ Lint failed. Commit aborted.");
  process.exit(1);
}