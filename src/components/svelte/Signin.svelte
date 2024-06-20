<script>
        import { icons } from "feather-icons";
        export let id;
</script>
<div>
<button
        {id}
        class="my-2 px-3 py-2 border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 mb-8"
>
        {@html icons.github.toSvg({
                class: "feather",
                width: "18px",
                height: "18px",
        })} <span class="px-3"> Sign in with Github</span>
</button>
</div>
<style>
</style>
