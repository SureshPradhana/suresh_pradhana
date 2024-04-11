<script>
	let projects = [
		{
			name: "NotesHub",
			link: "https://notes-gui.vercel.app/",
			description:
				"Your digital workspace for notes, lists, and flashcards, all in one place, with Markdown support for easy formatting",
		},
		{
			name: "SvelNews",
			link: "https://hn-svelte-deno.deno.dev/",
			description:
				"It's a simple project where I tried out Deno, making a basic version of Hacker News using SvelteKit.",
		},

		{
			name: "ematchi",
			link: "https://ematchi-jade.vercel.app/",
			description:
				"eMatchi is a fun game where you match emojis before time's up. Find all the pairs to win!",
		},
		{
			name: "svelteflix",
			link: "https://svelteflix-omega.vercel.app/",
			description:
				"A Netflix clone built with SvelteKit and Supabase where users can add movies to their watchlist and watched list.",
		},
		{
			name: "Advent Of Svelte 2023",
			link: "https://advent-of-svelte-one.vercel.app/",
			description:
				"Created a dedicated webpage for the Advent of Svelte challenge, featuring content for each of the 24 days.",
		},
		{
			name: "Marketing Web app",
			link: "https://astro-frontend-masters-phi.vercel.app/",
			description: `full featured frontend web app with marketing
			homepage,ecommerce store,news letter, blog with rss feed.`,
		},
		{
			name: "Christmas Greeting Popup",
			link: "https://www.npmjs.com/package/@sureshpradhana/christmas-popup",
			description: `Created a npm SvelteKit package for a christmas greeting
			popup.`,
		},
		{
			name: "Anonymous message board",
			link: "https://replit.com/@codebrakerk/boilerplate-project-messageboard",
			description: `created an anonymous message board for making threads, commenting, and deleting threads using Express, Mongoose, and Node.js. The application was tested with Chai and Chai-HTTP.`,
		},
		{
			name: "Stock Price Checker",
			link: "https://replit.com/@codebrakerk/boilerplate-project-stockchecker",
			description: `created a stock price checker using Express, Mongoose, and Node.js. The application was tested with Chai and Chai-HTTP.`,
		},
		{
			name: "Markdown Previewer React",
			link: "https://sureshpradhana.github.io/fcc-markdown-preview-2/",
			description: `created a markdown previewer using React and marked`,
		},
		{
			name: "Markdown Previewer Svelte",
			link: "https://markdown-preview-roan-six.vercel.app/",
			description: `Created a markdown previewer using svelte and marked`,
		},

		{
			name: "Drum Machine",
			link: "https://sureshpradhana.github.io/fcc-drum-machine/",
			description: `created a drum machine using React`,
		},

		{
			name: "Calculator",
			link: "https://sureshpradhana.github.io/fcc-calculator/",
			description: `created a calculator using React`,
		},
	];
</script>

<div>
	<h1>Projects!</h1>
	<p>
		Here are some semi-completed tech projects I worked on during the
		process of learning
	</p>
	<ul>
		{#each projects as project (project)}
			<li>
				<a href={project.link}>{project.name}</a>: {project.description}
			</li>
		{/each}
	</ul>
</div>

<style>
	h1 {
		color: var(--red);
		font-size: var(--h1);
	}
	p,
	a,
	li {
		font-size: 1rem;
	}
	ul {
		list-style: circle;
		margin: 0.5rem 0 0 1.2rem;
		padding: 0;
	}
	a {
		color: var(--blue);
		font-weight: bold;
	}
	a:hover {
		background-color: var(--blue);
		color: var(--white);
	}
	a::after {
		content: "]";
		display: inline-block;
		width: 0;
		height: 2px;
		background-color: var(--blue);
		transition: width 0.3s ease-in-out;
		margin: 0 0.5rem 0 0.5rem;
	}
	a::before {
		content: "[";
		display: inline-block;
		width: 0;
		height: 2px;
		background-color: var(--blue);
		transition: width 0.3s ease-in-out;
		margin: 0 1rem 0 0rem;
	}
	li::marker {
		color: white;
	}
</style>
