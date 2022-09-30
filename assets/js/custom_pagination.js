var pagination = (numRecord_per_page, Jsondata) => {
    var numPage = Math.ceil(Jsondata.length / numRecord_per_page);
    console.log("pagination_numpage = "+numPage)
    var dem = 0;
    var arrData_perPage = []
    for (let i = 1; i <= numPage; i++) {
        let arr_temp = [];
        while (arr_temp.length != numRecord_per_page) {
            arr_temp.push(Jsondata[dem++]);
        }
        arrData_perPage.push(arr_temp);
    }
    return [numPage,arrData_perPage];
}

var add_nav_pagination = (numPage, current_page = 1) => {
    var pagination = $('#pagination');
    var prevDis = (current_page==1)?"disabled":"";
    var nexDis = (current_page==numPage)?"disabled":"";
    pagination.empty();
    var html = `    
    <li class="page-item btn-${current_page - 1}" onclick="btn_page_click(${current_page - 1})" ${prevDis}>
        <button class="page-link btn-paging " aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
        </button>
    </li>`;
    
    for (let i = 1; i <= numPage; i++) {
        html += `<li class="page-item btn-${i}" onclick="btn_page_click(${i})"><button class="page-link btn-paging" id="btn-${i}">${i}</button></li>`;
    }  

    html += `
    <li class="page-item btn-${current_page + 1}" onclick="btn_page_click(${current_page + 1})">
        <button class="page-link btn-paging" id="btn-${Number.parseInt(current_page)+1}" aria-label="Next" ${nexDis}>
        <span aria-hidden="true">&raquo;</span>
        </button>
    </li>`;
    
    pagination.append(html);
}








