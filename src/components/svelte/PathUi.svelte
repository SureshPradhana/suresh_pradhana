<script>
	export let path;
</script>

<div class="path">
	{#each path as p (p)}
		<span>{p}</span>
		{#if p != path[path.length - 1]}
			<span class="arrow"> > </span>
		{/if}
	{/each}
</div>

<style>
	/* Your styles here */
	.path {
		display: flex;
		font-size: 0.8rem;
		color: var(--time);
	}

	.arrow {
		color: var(--time);
	}
	.path > span {
		padding: 0 0.2rem 0 0;
		margin: 0 0.2rem 0 0;
		color: var(--time);
	}
</style>
