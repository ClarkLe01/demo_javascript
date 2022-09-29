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
    var current_page = get_current_page();
    var paging_data = pagination(5,Jsondata);
    var data = paging_data[1][current_page-1];
    var drow = document.createElement('tr');
    dataTableBody.append(drow);
    for(let i in data){
        console.log(i);
        var drow = document.createElement('tr');
        drow.setAttribute("id", `project_${i}`);
        let df = new Project_html(data[i]);
        drow.append(df.getTdId());
        drow.append(df.getTdName());
        drow.append(df.getDesc());
        drow.append(df.getEnd());
        drow.append(df.getDev());
        drow.append(df.getAction());
        dataTableBody.append(drow);
    }
    add_nav_pagination(paging_data[0],current_page);
}


var get_current_page = ()=>{
    var queryString = location.search.substring(1);
    if(queryString.length==0){
        return 1;
    }
    var splited_qString = queryString.split("=");
    return splited_qString[1];
}