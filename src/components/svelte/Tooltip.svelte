<!-- src/Tooltip.svelte -->
<script>
        export let text = "";
</script>

<div class="tooltip">
        {text}
</div>

<style>
        .tooltip {
                position: absolute;
                background-color: #333;
                color: #fff;
                padding: 8px;
                font-size: 16px;
                pointer-events: none;
                z-index: 1000;
                white-space: nowrap;
        }
</style>
