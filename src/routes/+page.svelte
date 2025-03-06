<script lang="ts">
    import { initialChecklist } from "$lib/initialChecklist"
    import Box from "../components/Box.svelte"
    import { bgColors } from "../constants"

    console.log({ s: initialChecklist() })
</script>

<main class="content roboto-font">
    {#each bgColors as cl}
        <Box id={cl} bgColor={cl} content={cl} />
    {/each}
</main>

<style lang="scss">
</style>
