function goBack() {
    alert("Going back to editor...");
    window.location.href = "preview.html"; 
  }
  
  function shareLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Link copied to clipboard!");
    });
  }