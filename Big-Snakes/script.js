<script>
  const button = document.querySelector('.doom-button');
  const doomSound = document.getElementById('doomSound');
  button.addEventListener('click', () => {
    doomSound.play();
  });
</script>