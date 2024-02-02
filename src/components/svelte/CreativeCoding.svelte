<script>
	import walldrawing11 from "../../images/walldrawing11.png";
	import sphere from "../../images/sphere.png";
	import moon from "../../images/moon.png";
	let projects = [
		{
			name: "wall Drawing 11 (1969)",
			link: "creative_coding/wallDrawing11",
			description:
				"A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed.",
			imageurl: walldrawing11,
		},

		{
			name: "sphere",
			link: "creative_coding/sphere",
			description: "A sphere with a Threejs",
			imageurl:sphere,
		},
		// {
		// 	name: "wall Gallery",
		// 	link: "creative_coding/wallGallery",
		// 	description: "A gallery of wall drawings",
		// 	imageurl: walldrawing11,
		// },
		{
			name:"moon",
			link:"creative_coding/moon",
			description:"A moon with canvas Sketch",
			imageurl:moon,
		}
	];
</script>

<div>
	<h1>creative coding solutions!</h1>
	<div class="grid-wrapper">
		{#each projects as project (project)}
			<div class="grid-item">
				<a href={project.link}>
					<img src={project.imageurl.src} alt={project.name} />
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
