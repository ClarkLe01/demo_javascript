function btn_page_click(x) {
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
            add_data_table(paging_data, current_page = x);
        }
    });
}

// function filter_Data(event){
//     event.preventDefault();
//     var start_date = $('#startdate-search').val();
//     var end_date = $('#finaldate-search').val();
//     var name_project = $("#search_input").val();
//     console.log("filter_Data function");
//     valid_filter(name_project, start_date, end_date);
   
// }

$("#search_project_btn").click((even)=>{
    event.preventDefault();
    event.stopPropagation(); // Added to solve the problem!
    var start_date = $('#startdate-search').val();
    var end_date = $('#finaldate-search').val();
    var name_project = $("#search_input").val();
    console.log("filter_Data function");
    valid_filter(name_project, start_date, end_date);

})
