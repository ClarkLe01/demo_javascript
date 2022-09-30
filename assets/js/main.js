$(document).ready(() => {
    console.log("ready");
    var url_data = './assets/data/project_data.json';
    var Jsondata = null;
    $.ajax({
        url: url_data,
        type: 'get',
        datatype: 'html',
        async: true,
        success: (data) => {
            Jsondata = data.project_list;
            var paging_data = pagination(5, Jsondata);
            add_data_table(paging_data);
        }
    })
})