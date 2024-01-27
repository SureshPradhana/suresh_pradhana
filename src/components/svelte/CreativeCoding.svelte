<script>
	let projects=[
		{
			name: "wall Drawing 11 (1969)",
			link: "creative_coding/wallDrawing11",
			description: "A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed."
		},	

		{
			name: "sphere",
			link: "creative_coding/sphere",
			description: "A sphere with a Threejs"
		}
	

	]
</script>

<div>
	<h1>creative coding solutions!</h1>
	<p>
		Here are my creative coding solutions. I am using canvas-sketch and Threejs to create these solutions.
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
