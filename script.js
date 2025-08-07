document.addEventListener('DOMContentLoaded', () => {
<script>

    const containers = document.querySelectorAll('.image-container');

    document.addEventListener('mousemove', (e) ={">"} {
        containers.forEach(container => {
            const rect = container.getBoundingClientRect ();
            const centerX = rect.left + rect.width / 3;
            const centerY = rect.top + rect.height / 3;

            const dx = e.clientX -centerX;
            const dy = e.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const maxDistance = 250;
            if (distance < maxDistance) {
                const angle = Math.atan2(dy, dx);
                const strength = (1 - distance / maxDistance) * 10;

                const x0ffset = Math.cos(angle) * strength;
                const y0ffset = Math.sin(angle) * strength;
                const rotate = strength * 0.3;

                container.style.transform = `translate(${x0ffset})px, ${y0ffset}px rotate(${rotate}deg)`;
            } else {
                container.style.transform = `translate(0px, 0px) rotate(0deg)`;
            }
            
        })
    });
</script>});