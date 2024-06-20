<script>
        export let name = "User";
        export let imageUrl = "https://placehold.co/16/262626/e1eecd?text=User"; // Replace with your image URL
        export let comment = "This is a comment about the avatar.";
</script>

<div class="flex items-center space-x-2 my-2">
        <img
                src={imageUrl}
                alt={name}
                class="w-4 h-4 rounded-full self-start"
        />
        <div>
                <div class="text-gray-700 text-sm font-semibold">{name}</div>
                <p class="text-white-300 text-xs">
                        {comment}
                </p>
        </div>
</div>
