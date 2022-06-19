const actualBtn = document.getElementById('folder-upload-btn');

const fileChosen = document.getElementById('files-uploaded');

actualBtn.addEventListener('change', function(){
    console.log(this.files.length);
  fileChosen.textContent = this.files.length + " files";
})