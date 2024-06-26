<script>
    export let blogs = [
        {
            title: "Birds are not real",
            url: "birdsarenotreal.com",
            description:
                "Who says birds are not real are the ones who are not real",
        },
        {
            title: "Birds are not real",
            url: "birdsarenotreal.com",
            description:
                "who says birds are not real are the ones who are not real",
        },
        {
            title: "Birds are not real",
            url: "birdsarenotreal.com",
            description:
                "who says birds are not real are the ones who are not real",
        },
    ];
    $: pocketData = blogs;
    function formattedDate(date) {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    }
    function truncateExcerpt(excerpt, words = 20) {
        const wordArray = excerpt.trim().split(" ");
        const truncatedArray = wordArray.slice(0, words);
        return truncatedArray.join(" ") + "...";
    }
    function getDomainFromUrl(url) {
        const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
            return match[2];
        } else {
            return url;
        }
    }
    
function isToday(date) {
    const today = new Date();

     if(date === today.toISOString().substr(0,10)){
        return "Today"
     }else{
       return date;
     }

}

</script>

<div>
    <h1>Readings</h1>
    {#if pocketData.length > 0}
        <div class="my-4">
            {#each pocketData as { date, items }}
                <div class="py-2">
                    <h3>{isToday(date)}</h3>
                    {#each items as item}
                        <div class="wrapper mx-0 my-3">
                            <div class="flex flex-row justify-between">
                                <h3 class="">
                                    {item.given_title}
                                </h3>
                                <a
                                    href={item.given_url}
                                    class="inline-block text-gray-400"
                                    >{getDomainFromUrl(item.given_url)}</a
                                >
                            </div>
                            <p class="text-gray-400 py-1">
                                {truncateExcerpt(item.excerpt, 20)}
                            </p>
                            <hr />
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .wrapper > * > * {
        font-size: 14px;
    }
    p {
        margin: 0;
        font-size: 14px;
        line-height: 1.2;
    }
    hr {
        border-top: 1px solid #282828;
    }
</style>
