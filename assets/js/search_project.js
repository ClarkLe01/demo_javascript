var valid_filter = (name, start, end) => {
    console.log("valid_filter function");
    if (name.length == 0 && start.length == 0 && end.length == 0) {
        alert('Please input least one value');
    }
    else if (Date.parse(start) > Date.parse(end)) {
        alert('Please choose proper the range of date');
    }
    else {
        console.log("start filter_Data");
        filter_Data(name, start, end);
    }
}

var filter_Data = (name, start, end) => {
    console.log("In filter_Data function");
    var url_data = './assets/data/project_data.json';
    var Jsondata = null;
    $.ajax({
        url: url_data,
        type: 'get',
        datatype: 'html',
        async: true,
        success: (data) => {
            console.log("get data success!");
            Jsondata = data.project_list
            let search_data = filter_byName(name, Jsondata);
            search_data = filter_byStartDate(start, search_data);
            search_data = filter_byEndDate(end, search_data);
            console.log("paginate search_data");
            var paging_data = pagination(5, search_data);
            console.log("paginate add_data_table");
            console.log(paging_data);
            add_data_table(paging_data);
            
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

