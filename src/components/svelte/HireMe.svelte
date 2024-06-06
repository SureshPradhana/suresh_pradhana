<script>
        export let type = "button";
        export let disabled = false;
        export let className = "";
        export let email = "sureshpradhana19@gmail.com";
</script>

<a href={`mailto:${email}`} class="email-link" aria-disabled={disabled}>
        <button {type} {disabled} class={className}> Hire Me </button>
</a>

<style>
        button {
                position: fixed;
                bottom: 20px;
                right: 0px;
                padding: 10px 20px;
                font-size: 16px;
                color: #1a1a1a;
                background-color: #eeba2b;
                border: none;
                cursor: pointer;
                transition: background-color 0.3s ease;
                transform: rotate(-30deg) translate(5px, 20px);
                box-shadow: 8px 8px #000000;
        }

        button:hover {
                background-color: #716189;
        }

        button:disabled {
                background-color: #cccccc;
                cursor: not-allowed;
        }
</style>
