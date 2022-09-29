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
    return [numPage,arrData_perPage];
}

var add_nav_pagination = (numPage, current_page = 1) => {
    var pagination = $('#pagination');
    pagination.empty();
    var html = '';
    if (numPage <= 1) {
        html = `<li class="page-item"><a class="page-link" href="./list_projects.html?page=1">1</a></li>`;
        

    }
    else if (current_page == numPage) {
        html = `    
        <li class="page-item">
            <a class="page-link" href="./list_projects.html?page=${current_page - 1}" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            </a>
        </li>`;
        for (let i = 1; i <= numPage; i++) {
            html += `<li class="page-item"><a class="page-link" href="./list_projects.html?page=${i}">${i}</a></li>`;
        }   
    }
    else if (current_page == 1) {
        for (let i = 1; i <= numPage; i++) {
            html += `<li class="page-item"><a class="page-link" href="./list_projects.html?page=${i}">${i}</a></li>`;
        }
        html += `
        <li class="page-item">
            <a class="page-link" href="./list_projects.html?page=${Number.parseInt(current_page)+1}" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            </a>
        </li>`;
    }
    pagination.append(html);
}