<script>
    export let refPosts = [];
</script>

<div>
    <section class="blog-entries">
        <h2>Posts</h2>
        {#each refPosts.slice(0, 3) as post}
            <div class="post">
                <div class="flex justify-between items-baseline">
                    <div>
                        <h3 class="text-[14px] m-2">
                            <a
                                href={`/blogs/${post.slug}`}
                                class="text-gray-300 border-none font-thin"
                                >{post.data.title}</a
                            >
                        </h3>
                    </div>
                    <div>
                        <time datetime={post.data.date.toISOString()}>
                            {post.data.date.toDateString()}
                        </time>
                    </div>
                </div>
            </div>
        {/each}
        <div class="flex justify-end">
            <a href="/blogs" class="">View All</a>
        </div>
    </section>
</div>
