const axios = require('axios').default;
function getNames() {
    const fs = require('fs');
    const dir = '../../uploads';
    const files = fs.readdirSync(dir);
    let dataNames = {};
    dataNames.fileName = [];
    for (let i = 0; i < files.length; i++) {
        if (files[i].split(".")[1] == "glb") {
            dataNames.fileName.push(files[i]);
        }
    }
    return dataNames;
}
axios.delete("http://localhost:3000/todos/1").then(function () {
    axios.post("http://localhost:3000/todos", {
        fileNames: getNames()
    }).then(() => {
        console.log("Worked");
    });
});
//# sourceMappingURL=serverSide.js.map