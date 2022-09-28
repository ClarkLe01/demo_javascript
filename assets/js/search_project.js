$(document).ready(() => {
    $('#search_input').keyup(() => {
        var Jsondata = null;
        var url_data = './assets/data/sample1.json';
        var value = $('#search_input').val();
        $.ajax({
            url: url_data,
            type: 'get',
            datatype: 'html',
            async: true,
            success: (data) => {
                Jsondata = data.project_list
                var search_data = Jsondata.filter((project)=>{return project['name'].includes(value)});
                var dataTableBody = $('table#project_data tbody');
                dataTableBody.empty();
                for(let i in search_data){
                    var drow = document.createElement('tr');
                    drow.setAttribute("id", `project_${i}`);
                    let df = new Project(search_data[i]);
                    drow.append(df.getTdId());
                    drow.append(df.getTdName());
                    drow.append(df.getDesc());
                    drow.append(df.getEnd());
                    drow.append(df.getDev());
                    drow.append(df.getAction());
                    dataTableBody.append(drow);
                }
            }
        });
    })
})