<script lang="ts">
        import { onMount } from "svelte";
        import Tooltip from "./Tooltip.svelte";
        let tooltipVisible = false;
        let tooltipText = "";
        let tooltipX = 0;
        let tooltipY = 0;

        let tools = [
                {
                        icon_slug: "Svelte",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "Astro",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "html5",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "css",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "javascript",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "typescript",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "Node.js",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "deno",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "mongodb",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "express",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "hono",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "react",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "redux",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "sass",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "bootstrap",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "tailwindcss",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "git",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "github",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "Supabase",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "mysql",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "postgresql",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "docker",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "neo4j",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "redis",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "vite",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "gnubash",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "nginx",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "Three.js",
                        tooltipVisible: false,
                },
                {
                        icon_slug: "neovim",
                        tooltipVisible: false,
                },
        ];
        function showTooltip(event, tool) {
                tooltipText = "This is an image tooltip";
                tooltipX = event.pageX + 10;
                tooltipY = event.pageY + 10;
                tool.tooltipVisible = true;
                tools = tools;
        }

        function hideTooltip(event, tool) {
                tool.tooltipVisible = false;
                tools = tools;
        }
</script>

<div>
        <h1>Tech Toolbox</h1>
        <p>Tools and Technologies I Use Most Often</p>
        <div class="flex flex-wrap">
                {#each tools as tool (tool)}
                        <div
                                class="image-container"
                                role="button"
                                tabindex="0"
                                on:mouseover={(event) =>
                                        showTooltip(event, tool)}
                                on:mouseleave={(event) =>
                                        hideTooltip(event, tool)}
                                on:focus={(event) => showTooltip(event, tool)}
                                on:blur={(event) => hideTooltip(event, tool)}
                        >
                                <img
                                        height="32"
                                        width="32"
                                        src="https://cdn.simpleicons.org/{tool.icon_slug}/d8dadb"
                                        alt={tool.icon_slug}
                                />
                                {#if tool.tooltipVisible}
                                        <Tooltip text={tool.icon_slug} />
                                {/if}
                        </div>
                {/each}
        </div>
</div>

<style>
        div > p {
                margin: 1rem 0;
        }
        .image-container {
                position: relative;
                display: inline-block;
        }

        img {
                max-width: 100%;
                height: auto;
        }
        img {
                margin: 0.5rem;
        }
        img:hover {
                transform: scale(1.2);
        }
        img:active {
                transform: scale(1);
        }
        img::after {
                content: "]";
                display: inline-block;
                width: 0;
                height: 2px;
                background-color: var(--blue);
                transition: width 0.3s ease-in-out;
                margin: 0 0.5rem 0 0.5rem;
        }
</style>
