<script>
	let projects = [
		{
			name: "wall Drawing 11 (1969)",
			link: "creative_coding/wallDrawing11",
			description:
				"A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed.",
			imageurl: "./public/images/walldrawing11.png",
		},

		{
			name: "sphere",
			link: "creative_coding/sphere",
			description: "A sphere with a Threejs",
			imageurl: "./public/images/sphere.png",
		},
	];
</script>

<div>
	<h1>creative coding solutions!</h1>

	<!-- <p>
		Here are my creative coding solutions. I am using canvas-sketch and Threejs to create these solutions.
	</p>
	<ul>
		TODO instead of using texts use images as grid and try they should be dynamically generated
		{#each projects as project (project) }
			<li>
			<a href={project.link}>{project.name}</a>: {project.description}
		</li>
			
		{/each}
	</ul> -->

	<div class="grid-wrapper">
		{#each projects as project (project)}
			<div class="grid-item">
				<a href={project.link}>
					<img src={project.imageurl} alt={project.name} />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-flow: column;
		grid-gap: 1rem;
	}
	.grid-item {
		width: 100%;
		height: 200px;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		transition: transform 0.3s ease;
	}

	img:hover {
		transform: scale(1.1);
	}
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

	li::marker {
		color: white;
	}
	@media (max-width: 600px) {
		.grid-wrapper {
			grid-template-columns: repeat(2, auto);
		}
	}
</style>
