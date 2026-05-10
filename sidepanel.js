document.getElementById('gen-thumb').addEventListener('click', () => {
  const status = document.getElementById('status');
  const previewArea = document.getElementById('preview-area');
  
  status.innerText = "Architecting your high-fidelity thumbnail... 0%";
  previewArea.innerHTML = 'Generating...';

  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    status.innerText = `Architecting your high-fidelity thumbnail... ${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      status.innerText = "Transformation complete. Check your preview!";
      previewArea.innerHTML = '<div class="placeholder-image">Dr. De SouzAI Viral Thumbnail</div>';
    }
  }, 500);
});
