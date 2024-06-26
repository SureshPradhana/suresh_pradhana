<script>
    let blogs =[
        {
            title:"Birds are not real",
            url:"birdsarenotreal.com",
            description:"Who says birds are not real are the ones who are not real"
        },
        {
            title:"Birds are not real",
            url:"birdsarenotreal.com",
            description:"who says birds are not real are the ones who are not real"
        },
        {
            title:"Birds are not real",
            url:"birdsarenotreal.com",
            description:"who says birds are not real are the ones who are not real"
        }
    ]

</script>

<div>
    <h1>Readings</h1>
    {#each blogs as blog}
       <div class="wrapper mx-0 my-4">
        <div class="flex flex-row justify-between">
        <h3 class="font-semibold">{blog.title}</h3>
        <a href={blog.url} class="inline-block text-gray-400">{blog.url}</a>
        </div>
        <p class="text-gray-400">{blog.description}</p>
       <hr>
       </div>
    {/each}
</div>
<style>
.wrapper > * > *{
  font-size: 14px;
}
p{
    margin:0;
}
hr{
    border-top:1px solid #282828;
}

</style>
