var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let renderData = {};
renderData.fileName = [];
document.addEventListener('DOMContentLoaded', () => {
    init();
});
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getName();
        InjectModels();
    });
}
function getName() {
    return __awaiter(this, void 0, void 0, function* () {
        let ServerArr = yield $.get("http://localhost:3000/todos");
        let fileNames = ServerArr[0].fileNames.fileName;
        renderData.fileName = fileNames;
    });
}
function InjectModels() {
    let DivToBeInjected = document.getElementById("fillModelsIntoThisDiv");
    let html = `<ul style="list-style-type: none;">`;
    for (let i = 0; i < renderData.fileName.length; i++) {
        html += `<li><model-viewer bounds="tight" enable-pan src="../uploads/${renderData.fileName[i]}" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    </model-viewer></li>`;
    }
    html += "</ul>";
    DivToBeInjected.innerHTML = html;
}
//# sourceMappingURL=clientSide.js.map