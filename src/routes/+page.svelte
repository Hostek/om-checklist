<script lang="ts">
    import Box from "../components/Box.svelte"
    import { bgColors } from "../constants"
</script>

<main class="content roboto-font">
    {#each bgColors as cl}
        <Box id={cl} bgColor={cl} content={cl} />
    {/each}
</main>

<style lang="scss">
</style>
