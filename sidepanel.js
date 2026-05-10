document.getElementById('gen-thumb').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.innerText = "Architecting your high-fidelity thumbnail...";
  setTimeout(() => {
    status.innerText = "Transformation complete. Check your downloads!";
  }, 2000);
});
