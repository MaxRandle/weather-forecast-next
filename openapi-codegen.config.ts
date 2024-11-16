import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";

export default defineConfig({
  openweather: {
    from: {
      source: "file",
      relativePath: "./api-spec/ClaudeAiOpenweatherApiSpec.yml",
    },

    outputDir: "src/generated/openweatherApi",

    to: async (context) => {
      const filenamePrefix = "openweather";

      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });

      await generateReactQueryComponents(context, {
        // all CORS headers
        injectedHeaders: [
          "Access-Control-Allow-Origin: *",
          "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization",
        ],
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
