<script>
        export let imageurls;
</script>

<div>
        {#each imageurls as imageurl}
                <img src={imageurl} alt="image dj" />
        {/each}
</div>
