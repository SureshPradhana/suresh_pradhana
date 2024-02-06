<script>
    import { icons } from "feather-icons";
</script>

<footer>
    <div>
        <a href="https://github.com/sureshpradhana" target="_blank">
                {@html icons.github.toSvg({ class: "feather",width: "18px", height: "18px"})}
        </a>
        <a href="https://twitter.com/suresh_pradhana" target="_blank">
                {@html icons.twitter.toSvg( { class: "feather",width: "18px", height: "18px"})}
        </a>
        <a href="https://www.linkedin.com/in/suresh-pradhana-b322851bb/" target="_blank">
                {@html icons.linkedin.toSvg( { class: "feather",width: "18px", height: "18px"})}
        </a>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        /* position:fixed; */
        /* bottom:0; */
        width:100%;
    }

    footer div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
     footer div a {
        color: var(--green);
        transition: color 0.2s ease;
     }

     footer div a:hover{
        color: var(--blue);
     }
     
    
</style>