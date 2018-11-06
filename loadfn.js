const testFolder = './img/portfolio';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
})

fs.readdir(testFolder, (err, files) => {
    var desc = Array();
    var i = 1;
    desc[1] = "香港新世界中心重建项目K11 MUSEA外场";
    desc[2] = "住宅项目 – 香港山顶聂歌信山";
    desc[3] = "住宅项目 – 香港白加道35号";
    desc[4] = "政府机构 – 香港机场";
    desc[5] = "酒店项目 - 香港瑰丽酒店大堂(Rosewood Hotel)";
    desc[6] = "商业大厦项目 - 香港中国农业银行大厦";
    desc[7] = "商业大厦项目 - 香港建设银行大厦";
    desc[8] = "酒店项目 –北京东方君悦大酒店";
    desc[9] = "商业大厦项目 – 厦门海峡明珠";
    desc[10] = "酒店项目 - 澳门美高梅酒店VIP大堂 MGM Macau - VIP Lobby";
    desc[11] = "酒店项目 – 上海半岛酒店";

    files.forEach(file => {
        console.log("<img alt=\"" + desc[file.split("-")[1]] + "\" src=\"img/portfolio/" + file + "\" data-image=\"img/portfolio/" + file + "\" data-description=\"" + desc[file.split("-")[1]] + "\">");
    });
})



