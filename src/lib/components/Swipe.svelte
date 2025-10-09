<script>
    let touchstartX = $state(0);
    let touchstartY = $state(0);
    let touchendX = $state(0);
    let touchendY = $state(0);

    let { direction = $bindable() } = $props();

    const findSwipeDirection = () => {
        if (touchstartX - touchendX > 80) {
            // console.log("Swiped Left");
            direction = "left";
        }

        if (touchendX - touchstartX > 80) {
            // console.log("Swiped Right");
            direction = "right";
        }

        // if (touchstartY - touchendY > 60) {
        //     // console.log("Swiped Up");
        //     direction = "up";
        // }

        // if (touchendY - touchstartY > 60) {
        //     // console.log("Swiped Down");
        //     direction = "down";
        // }

        // if (touchendY === touchstartY) {
        //     // console.log("Tap");
        //     direction = "none";
        // }
    };
</script>

<svelte:window
    ontouchstart={(e) => {
        touchstartX = e.changedTouches[0].clientX;
        touchstartY = e.changedTouches[0].clientY;
    }}
    ontouchend={(e) => {
        touchendX = e.changedTouches[0].clientX;
        touchendY = e.changedTouches[0].clientY;
        findSwipeDirection();
    }}
/>
