interface names{
    fileName: string[];
    id: number
}

let renderData = {} as names;
renderData.fileName = [];

document.addEventListener('DOMContentLoaded', () => {
    init();
})
async function init(){
    await getName();
    InjectModels();
}
async function getName() {
    let ServerArr : names = <names>  await $.get("http://localhost:3000/todos");
    let fileNames : string[] = ServerArr[0].fileNames.fileName;

    renderData.fileName = fileNames;
}
function InjectModels(){

    let DivToBeInjected = document.getElementById("fillModelsIntoThisDiv");
    let html = `<ul style="list-style-type: none;">`;

    for (let i = 0; i < renderData.fileName.length; i++){
        html+= `<li><model-viewer bounds="tight" enable-pan src="../uploads/${renderData.fileName[i]}" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    </model-viewer></li>`;
    }
    html += "</ul>";
    DivToBeInjected.innerHTML = html;
}