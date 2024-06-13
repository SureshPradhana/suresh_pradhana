<script>
        import { icons } from "feather-icons";
</script>

<div class="hero">
        <h1>Hi, I'm Suresh Pradhana</h1>

        <p>
                I am a full-stack engineer with experience in building web
                applications using Svelte, SvelteKit, React, Node.js, Express,
                MongoDB, PostgreSQL, Neo4j, Redis, Bash scripting, and Docker. I
                am also familiar with the JAMstack and serverless architecture.
                I enjoy working on the command line, automating tasks, and
                writing tests for code.
        </p>
        <div class="logo-wrapper">
                <a href="https://github.com/sureshpradhana" target="_blank">
                        {@html icons.github.toSvg({
                                class: "feather",
                                width: "18px",
                                height: "18px",
                        })}
                </a>
                <a
                        href="https://mastodon.social/@SureshPradhana"
                        target="_blank"
                >
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                class="bi bi-mastodon"
                                viewBox="0 0 16 16"
                        >
                                <path
                                        d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"
                                />
                        </svg>
                </a>

                <a
                        href="https://www.linkedin.com/in/sureshpradhana"
                        target="_blank"
                >
                        {@html icons.linkedin.toSvg({
                                class: "feather",
                                width: "18px",
                                height: "18px",
                        })}
                </a>
                <a href="https://twitter.com/suresh_pradhana" target="_blank">
                        {@html icons.twitter.toSvg({
                                class: "feather",
                                width: "18px",
                                height: "18px",
                        })}
                </a>

                <a href="mailto:sureshpradhana19@gmail.com" target="_blank">
                        {@html icons.send.toSvg({
                                class: "feather",
                                width: "18px",
                                height: "18px",
                        })}
                </a>
        </div>
</div>

<style>
        p {
                margin: 1rem 0;
        }
        .logo-wrapper {
                display: flex;
                justify-content: left;
                align-items: center;
                gap: 20px;
                margin-top: 10px;
        }
        .logo-wrapper a {
                border: 1px solid var(--stroke);
                border-radius: 20%;
                padding: 8px;
                color: var(--green);
                transition: color 0.2s ease;
        }

        .logo-wrapper a:hover {
                border: 1px solid var(--blue);
                color: var(--blue);
        }
</style>
