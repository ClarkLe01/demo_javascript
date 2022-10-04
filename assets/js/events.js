function btn_page_click(x) {
    var url_data = './assets/data/project_data.json';
    var Jsondata = null;
    var search_data = parseURLParams(window.location.href);
    $.ajax({
        url: url_data,
        type: 'get',
        datatype: 'html',
        async: true,
        success: (data) => {
            Jsondata = data.project_list;
            if (search_data != undefined) {
                Jsondata = filter_byName(search_data["search_input"][0], Jsondata);
                Jsondata = filter_byStartDate(search_data["search_dateStart"][0], Jsondata);
                Jsondata = filter_byEndDate(search_data["search_dateEnd"][0], Jsondata);
            }
            var paging_data = pagination(5, Jsondata);
            add_data_table(paging_data, current_page = x);
        }
    });
}