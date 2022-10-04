$(document).ready(() => {
    console.log("ready");
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
            if (search_data == undefined) {
                var paging_data = pagination(5, Jsondata);
                add_data_table(paging_data);
            }
            else{
                Jsondata = filter_byName(search_data["search_input"][0], Jsondata);
                Jsondata = filter_byStartDate(search_data["search_dateStart"][0], Jsondata);
                Jsondata = filter_byEndDate(search_data["search_dateEnd"][0], Jsondata);
                var paging_data = pagination(5, Jsondata);
                add_data_table(paging_data);
            }
        }
    })
})

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}