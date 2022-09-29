var url_data = './assets/data/project_data.json';

$(document).ready(() => {
    $('#search_input').keyup(() => {
        var Jsondata = null;
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
                    let df = new Project_html(search_data[i]);
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

    $('#search_project_btn').click(()=>{
        var start_date = $('#startdate-search').val();
        var end_date = $('#finaldate-search').val();
        if(start_date.length==0&&end_date.length==0){
            alert('Please input date');
        }
        else{
            filter_byDate(start_date,end_date);
        }
    })
})


var filter_byDate = (name,start,end)=>{
    if(Date.parse(start)>Date.parse(end)){
        alert('Please choose proper the range of date');
    }
    else{
        $.ajax({
            url: url_data,
            type: 'get',
            datatype: 'html',
            async: true,
            success: (data) => {
                Jsondata = data.project_list
                var search_data = Jsondata.filter((project)=>{return Date.parse(project['start'])>= Date.parse(start) && Date.parse(project['end'])<= Date.parse(end)});
                var dataTableBody = $('table#project_data tbody');
                dataTableBody.empty();
                for(let i in search_data){
                    var drow = document.createElement('tr');
                    drow.setAttribute("id", `project_${i}`);
                    let df = new Project_html(search_data[i]);
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
    }
}