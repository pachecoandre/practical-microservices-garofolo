const { loadEnvFile} = require("process")
const packageJson = require("../package.json");

loadEnvFile();

function requireFromEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

module.exports = {
  appName: requireFromEnv("APP_NAME"),
  env: requireFromEnv("NODE_ENV"),
  port: parseInt(requireFromEnv("PORT"), 10),
  databaseUrl: requireFromEnv("DATABASE_URL"),
  version: packageJson.version,
};
