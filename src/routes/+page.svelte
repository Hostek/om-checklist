<script lang="ts">
    import { checklistOM } from "$lib/stores/checklist"
    import { theme } from "$lib/stores/theme"
    import Box from "../components/Box.svelte"
    import MoonIcon from "../components/icons/MoonIcon.svelte"
    import SunIcon from "../components/icons/SunIcon.svelte"
</script>

<header data-theme={$theme} class="roboto-font">
    <div class="title">om-checklist</div>
    <button
        aria-label="Toggle Theme"
        on:click={() => {
            if ($theme === "dark") {
                theme.set("light")
            } else {
                theme.set("dark")
            }
        }}
    >
        {#if $theme === "dark"}
            <MoonIcon />
        {:else}
            <SunIcon />
        {/if}
    </button>
</header>

<main class="content roboto-font">
    {#each $checklistOM as cl}
        <Box id={cl.id} content={cl.id} />
    {/each}
</main>

<style lang="scss">
    @mixin padding-x($size) {
        padding-left: $size;
        padding-right: $size;
    }

    header {
        @include padding-x(1vw);
        display: flex;
        justify-content: space-between;

        --local-bg-color: white;
        color: black;

        &[data-theme="dark"] {
            --local-bg-color: #242526;
            color: snow;
        }

        background-color: var(--local-bg-color);

        .title {
            font-size: 4.5vw;
        }

        button {
            outline: none;
            border: none;
            background-color: var(--local-bg-color);
            color: inherit;
            cursor: pointer;
        }
    }

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
