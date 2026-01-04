import rss from "@astrojs/rss";
import type { AstroConfig } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
  const blog = await getCollection("blogs");

  return rss({
    title: "blogs",
    description: "description",
    site: context.site,
    items: blog.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blogs/${post.slug}`,
        content: sanitizeHtml(parser.render(post.body)),
      };
    }),
  });
}
