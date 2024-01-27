<script>
	let projects=[
		{
			name: "wall Drawing 11 (1969)",
			link: "creative_coding/wallDrawing11",
			description: "A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed."
		},	
	

	]
</script>

<div>
	<h1>Projects!</h1>
	<p>
		Here are some semi-completed tech projects I worked on during the
		process of learning
	</p>
	<ul>
		{#each projects as project (project) }
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
