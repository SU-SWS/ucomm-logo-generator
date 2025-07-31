import {z} from "zod"

export const convertImageSchema = z.object({
  image: z
    .string()
    .trim()
    .describe("SVG Image")
    .startsWith("<svg ")
    .endsWith("</svg>")
    .includes("M3.42,15.19c-1.22,0-2.15-.13-3.11-.44l")
    .max(5000),
  width: z.number().describe("SVG Browser Width").min(0).max(10000),
  height: z.number().describe("SVG Browser Height").min(0).max(10000),
})
