<script lang="ts">
    import { initialChecklist } from "$lib/initialChecklist"
    import Box from "../components/Box.svelte"

    const checklist = initialChecklist()
</script>

<main class="content roboto-font">
    {#each checklist as cl}
        <Box id={cl.id} bgColor={cl.bgColor} content={cl.id} />
    {/each}
</main>

<style lang="scss">
    main {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
</style>
