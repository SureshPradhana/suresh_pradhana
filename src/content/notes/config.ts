import { defineCollection ,z} from "astro:content";

export const collection ={
    notes:defineCollection({
        schema:z.object({
            title:z.string(),
            slug:z.string(),
            content:z.string(),
            date:z.string(),
            description:z.string().max(200),

        })
    })
}
