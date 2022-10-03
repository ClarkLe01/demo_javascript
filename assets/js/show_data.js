var add_data_table = (paging_data, current_page=1) => {
    console.log('-------------------------------------------')
    console.log(current_page);
    
    var dataTableBody = $('table#project_data tbody');
    dataTableBody.empty();
    
    var data = paging_data[1][current_page - 1];
    var drow = document.createElement('tr');
    dataTableBody.append(drow);
    console.log('=========================================')
    for (let i in data) {
        var drow = document.createElement('tr');
        drow.setAttribute("id", `project_${i}`);
        if(data[i]==undefined){
            break;
        }
        else{
            let df = new Project_html(data[i]);
            drow.append(df.getTdId());
            drow.append(df.getTdName());
            drow.append(df.getDesc());
            drow.append(df.getEnd());
            drow.append(df.getDev());
            drow.append(df.getAction());
            dataTableBody.append(drow);
        }
        console.log(i);
    }
    console.log('=========================================')
    console.log(paging_data[0]);
    console.log('-------------------------------------------')
    
    // if(current_page==paging_data[0]) console.log("Final " + current_page);
    
    add_nav_pagination(paging_data[0], current_page);
}




