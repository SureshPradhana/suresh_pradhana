<script>
        import { icons } from "feather-icons";
</script>

<div class="hero">
        <h1>Hi, I'm Suresh Pradhana</h1>

        <p>
                I am a full stack engineer. I have experience in building web
                applications using Svelte, SvelteKit, React, Node.js, Express,
                MongoDB,PostgreSQL, neo4j, redis, Bashscript,and docker. I am
                also familiar with the JAMstack and serverless architecture. I
                am the guy who loves to work on the command line and automate
                things and write tests for the code.
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
                        href="https://www.linkedin.com/in/suresh-pradhana-b322851bb/"
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
