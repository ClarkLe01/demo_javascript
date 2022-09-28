$(document).ready(() => {
    console.log("ready");
    var Jsondata = null;
    var url_data = './assets/data/project_data.json';
    $.ajax({
        url: url_data,
        type: 'get',
        datatype: 'html',
        async: false,
        success: (data)=>{
            Jsondata = data
        }
    });
    var dataJson = Jsondata.project_list;
    var dataTableBody = $('table#project_data tbody');
    dataTableBody.empty();
    for(let i in dataJson){
        var drow = document.createElement('tr');
        drow.setAttribute("id", `project_${i}`);
        let df = new Project_html(dataJson[i]);
        drow.append(df.getTdId());
        drow.append(df.getTdName());
        drow.append(df.getDesc());
        drow.append(df.getEnd());
        drow.append(df.getDev());
        drow.append(df.getAction());
        dataTableBody.append(drow);
    }
})


// async function getData(){
//     let myPromise = new Promise((resolve)=>{
//         let req = new XMLHttpRequest();
//         req.open('GET','./assets/data/sample1.json');
//         req.onload = ()=>{
//             if (req.status == 200){
//                 resolve(req.response);
//             }
//             else{
//                 resolve("File not Found");
//             }
//         };
//         req.send();
//     })
// }