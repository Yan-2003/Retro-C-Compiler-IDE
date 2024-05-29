document.getElementById("open--file--project--btn").addEventListener("click", ()=>{
    document.getElementById("project--file").click()
})


/* document.getElementById('project--file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        const contents = e.target.result;
        document.getElementById('fileContent').textContent = contents;
      };

      reader.readAsText(file);
    }
  }); */