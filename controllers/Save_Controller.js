
document.getElementById('save_c').addEventListener("click", async ()=>{

    const text = document.getElementById('editor').value;

    const newFileHandle = await window.showSaveFilePicker({
        suggestedName: currentFileHandle.name,
        types: [
          {
            description: 'C Files',
            accept: {
              'text/plain': ['.c']
            }
          },
        ],
      });

      const writable = await newFileHandle.createWritable();
      await writable.write(text);
      await writable.close();
      alert('File saved successfully.');

})