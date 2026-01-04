import rss from "@astrojs/rss";
import type { AstroConfig } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
  // Get collections for notes, Blogs, and blogs
  const notes = await getCollection("notes");
  const blogs = await getCollection("blogs");

  // Generate RSS feed for notes
  const notesFeed = rss({
    title: "Notes Feed",
    description: "Feed for Notes",
    site: context.site,
    items: notes.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/notes/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });

  // Generate RSS feed for blogs
  const blogsFeed = rss({
    title: "Blogs Feed",
    description: "Feed for Blogs",
    site: context.site,
    items: blogs.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blogs/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
  });

  // Combine the feeds
  const allFeeds = [notesFeed, blogsFeed];
  console.log(allFeeds);
  return blogsFeed;
}
