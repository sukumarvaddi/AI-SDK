import { z } from "zod";

export const recipeSchema = z.object({
  recipe: z.object({
    name: z.string().describe("The name of the recipe"),
    ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
    steps: z.array(z.string())
  })
})