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
            Jsondata = data.project_list;
        }
    });
    add_data_table(Jsondata);
})


var add_data_table = (Jsondata)=>{
    var dataTableBody = $('table#project_data tbody');
    dataTableBody.empty();
    var drow = document.createElement('tr');
    dataTableBody.append(drow);
    for(let i in Jsondata){
        console.log(i);
        var drow = document.createElement('tr');
        drow.setAttribute("id", `project_${i}`);
        let df = new Project_html(Jsondata[i]);
        drow.append(df.getTdId());
        drow.append(df.getTdName());
        drow.append(df.getDesc());
        drow.append(df.getEnd());
        drow.append(df.getDev());
        drow.append(df.getAction());
        dataTableBody.append(drow);
    }
}