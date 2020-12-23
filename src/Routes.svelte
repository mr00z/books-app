<script lang="ts">
    import router from "page";
    import currentRoute from "./store/routerStore";
    import Archive from "./views/Archive.svelte";
    import Tasks from "./views/Tasks.svelte";

    let currentComponent = Tasks;

    function setCurrentPathname(ctx: PageJS.Context, next: () => void) {
        $currentRoute = ctx.pathname;
        next();
    }

    router("/", setCurrentPathname, () => (currentComponent = Tasks));
    router("/archive", setCurrentPathname, () => (currentComponent = Archive));

    router.start();
</script>

<svelte:component this={currentComponent} />
