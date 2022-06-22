interface names{
    fileName: string[];
}

const axios = require('axios').default;

function getNames(): names {

    const fs = require('fs');
    const dir = '../../uploads';
    const files: string[] = fs.readdirSync(dir);

    let dataNames = {} as names;
    dataNames.fileName = [];

    for (let i = 0; i < files.length; i++){
        if(files[i].split(".")[1] == "glb"){
            dataNames.fileName.push(files[i]);
        }
    }
    return dataNames;
}

axios.delete("http://localhost:3000/todos/1").then(
    function () {
        axios.post("http://localhost:3000/todos", {
            fileNames: getNames()
        }).then(() => {
            console.log("Worked");
        });
    });
