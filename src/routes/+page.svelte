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
        font-size: 1.3vw;

        @media only screen and (max-width: 1000px) {
            grid-template-columns: repeat(6, 1fr);
            font-size: 2.6vw;
        }

        @media only screen and (max-width: 500px) {
            grid-template-columns: repeat(3, 1fr);
            font-size: 5.2vw;
        }
    }
</style>
