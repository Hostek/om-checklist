<script lang="ts">
    import { checklistOM } from "$lib/stores/checklist"
    import { theme } from "$lib/stores/theme"
    import Box from "../components/Box.svelte"
</script>

<header>
    om-checklist
    <button
        on:click={() => {
            if ($theme === "dark") {
                theme.set("light")
            } else {
                theme.set("dark")
            }
        }}>Toggle Theme</button
    >
</header>

<main class="content roboto-font">
    {#each $checklistOM as cl}
        <Box id={cl.id} content={cl.id} />
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
