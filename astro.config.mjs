import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    define: {
      "import.meta.env.PUBLIC_SUPABASE_URL": JSON.stringify(
        process.env.PUBLIC_SUPABASE_URL
      ),
      "import.meta.env.PUBLIC_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.PUBLIC_SUPABASE_ANON_KEY
      ),
    },
  },
});
