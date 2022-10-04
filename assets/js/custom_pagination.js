var pagination = (numRecord_per_page, Jsondata) => {
    var numPage = Math.ceil(Jsondata.length / numRecord_per_page);
    var dem = 0;
    var arrData_perPage = []
    for (let i = 1; i <= numPage; i++) {
        let arr_temp = [];
        while (arr_temp.length != numRecord_per_page) {
            arr_temp.push(Jsondata[dem++]);
        }
        arrData_perPage.push(arr_temp);
    }
    return [numPage, arrData_perPage];
}

var add_nav_pagination = (numPage, current_page = 1) => {
    
    var pagination = $('#pagination');
    var prevValue = (current_page == 1) ? 1 : current_page - 1;
    var nextValue = (current_page == numPage) ? numPage : current_page+1;
    pagination.empty();
    var html = `    
    <li class="page-item btn-${prevValue}" onclick="btn_page_click(${prevValue})" >
        <button class="page-link btn-paging " aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </button>
    </li>`;

    for (let i = 1; i <= numPage; i++) {
        if(i==current_page){
            html += `<li class="page-item btn-${i}" onclick="btn_page_click(${i})"><button class="page-link btn-paging" style="background-color:red;" id="btn-${i}">${i}</button></li>`;
        }
        else{
            html += `<li class="page-item btn-${i}" onclick="btn_page_click(${i})"><button class="page-link btn-paging" id="btn-${i}">${i}</button></li>`
        }
    }

    html += `
    <li class="page-item btn-${nextValue}" onclick="btn_page_click(${nextValue})">
        <button class="page-link btn-paging " aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
        </button>
    </li>`;
    

    pagination.append(html);
}








