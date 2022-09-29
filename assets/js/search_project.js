var url_data = './assets/data/project_data.json';

$(document).ready(() => {
    // $('#search_input').keyup(() => {
    //     var Jsondata = null;
    //     var value = $('#search_input').val();
    //     $.ajax({
    //         url: url_data,
    //         type: 'get',
    //         datatype: 'html',
    //         async: true,
    //         success: (data) => {
    //             Jsondata = data.project_list
    //             var search_data = Jsondata.filter((project)=>{return project['name'].includes(value)});
    //             var dataTableBody = $('table#project_data tbody');
    //             dataTableBody.empty();
    //             for(let i in search_data){
    //                 var drow = document.createElement('tr');
    //                 drow.setAttribute("id", `project_${i}`);
    //                 let df = new Project_html(search_data[i]);
    //                 drow.append(df.getTdId());
    //                 drow.append(df.getTdName());
    //                 drow.append(df.getDesc());
    //                 drow.append(df.getEnd());
    //                 drow.append(df.getDev());
    //                 drow.append(df.getAction());
    //                 dataTableBody.append(drow);
    //             }
    //         }
    //     });
    // })

    $('#search_project_btn').click(() => {
        var start_date = $('#startdate-search').val();
        var end_date = $('#finaldate-search').val();
        var name_project = $("#search_input").val();
        valid_filter(name_project, start_date, end_date);
    })
})

var valid_filter = (name, start, end) => {
    if (name.length == 0 && start.length == 0 && end.length==0) {
        alert('Please input least one value');
    }
    else if (Date.parse(start) > Date.parse(end)) {
        alert('Please choose proper the range of date');
    }
    else {
        filter_Data(name, start, end);
    }
}

var filter_Data = (name, start, end) => {
    $.ajax({
        url: url_data,
        type: 'get',
        datatype: 'html',
        async: true,
        success: (data) => {
            Jsondata = data.project_list
            let search_data = filter_byName(name, Jsondata);
            search_data = filter_byStartDate(start, search_data);
            search_data = filter_byEndDate(end, search_data);
            add_data_table(search_data);
        }
    });
}


var filter_byName = (name, data) => {
    if (name.length == 0) return data;
    return data.filter((project) => { return project['name'].includes(name) });
}

var filter_byStartDate = (start, data) => {
    if (start.length == 0) return data;
    return data.filter((project) => { return Date.parse(project['start']) >= Date.parse(start) });
}

var filter_byEndDate = (end, data) => {
    if (end.length == 0) return data;
    return data.filter((project) => { return Date.parse(project['end']) <= Date.parse(end) });
}

