import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";


const proyectos = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/proyectos", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    periodo: z.string(),
    integrantes: z.array(z.string()),
    imagen: z.string().optional(),
    hide: z.boolean().optional()
  }),
});

// Define the estudiantes collection
const estudiantes = defineCollection({
  type: "content",
  schema: z.object({
    nombre: z.string(),
    periodo: z.string(),
    orden_merito: z.string(),
    // Add other fields as needed
  }),
});
export const collections = {
  proyectos,
  estudiantes
};
