const file=document.getElementById("file");
const URLBox=document.getElementById("DataURL");
const chosseBtn=document.getElementById("chooseBtn");
const preView=document.getElementById("preview");
const copyBtn=document.getElementById("copy");
const copiedPrompt=document.getElementById("copied");

chosseBtn.onclick=()=>{
    file.click();
}

file.addEventListener("change",function(){
    const reader=new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load",function(){
        if(reader.result[5]=="i"){
        preView.src=reader.result;
        preView.style.visibility="visible";
    }if(reader.result[5]!="i"){
        preView.src="";
        preView.style.visibility="hidden";
    }
        URLBox.value=reader.result;
    copyBtn.style.visibility="visible";
    copyBtn.onclick=()=>{
          
            URLBox.select();
            URLBox.setSelectionRange(0, 99999); /* For mobile devices */
          
            document.execCommand("copy");
            copiedPrompt.style.visibility="visible";
            setTimeout(()=>{
            copiedPrompt.style.visibility="hidden";
            },2000)
        }

    })
})