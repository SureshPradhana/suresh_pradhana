<script>
</script>

<div>
	<h1>Projects!</h1>
	<p>
		Here are some semi-completed tech projects I worked on during the
		process of learning
	</p>
	<ul>
		<li>
			<a href="https://advent-of-svelte-one.vercel.app/"
				>Advent Of Svelte 2023</a
			>: Created a dedicated webpage for the Advent of Svelte challenge,
			featuring content for each of the 24 days.
		</li>
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
		margin: 0.5rem 0 0 2rem;
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
