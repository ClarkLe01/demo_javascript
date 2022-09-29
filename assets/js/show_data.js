$(document).ready(() => {
    console.log("ready");
    var Jsondata = null;
    var url_data = './assets/data/project_data.json';
    $.ajax({
        url: url_data,
        type: 'get',
        datatype: 'html',
        async: false,
        success: (data)=>{
            Jsondata = data.project_list;
        }
    });
    console.log(Jsondata);
    add_data_table(Jsondata);
    
})


var add_data_table = (Jsondata)=>{
    var dataTableBody = $('table#project_data tbody');
    dataTableBody.empty();
    var drow = document.createElement('tr');
    dataTableBody.append(drow);
    for(let i in Jsondata){
        console.log(i);
        var drow = document.createElement('tr');
        drow.setAttribute("id", `project_${i}`);
        let df = new Project_html(Jsondata[i]);
        drow.append(df.getTdId());
        drow.append(df.getTdName());
        drow.append(df.getDesc());
        drow.append(df.getEnd());
        drow.append(df.getDev());
        drow.append(df.getAction());
        dataTableBody.append(drow);
    }
}

// var add_nav_pagination = (numPage,current_page=1)=>{
//     var pagination = $('#pagination');
//     pagination.empty();
//     if (numPage <= 1 && current_page==1){
//         let html = `
//         <nav aria-label="Page navigation example">
//             <li class="page-item"><a class="page-link" href="#">1</a></li>
//         </nav>`;
//         pagination.append(html);

//     }
//     else if(current_page==numPage){
//         let html=`
//         <li class="page-item">
//             <a class="page-link" href="./list_projects.html?page=${current_page-1}" aria-label="Previous">
//             <span aria-hidden="true">&laquo;</span>
//             </a>
//         </li>`;
//         for(let i = 1;i<=num;i++){
//             html+=`<li class="page-item"><a class="page-link" href="page=${i}">${i}</a></li>`;

//         }
//     }
//     else{
//         let html=`
//         <li class="page-item">
//             <a class="page-link" href="./list_projects.html?page=${current_page-1}" aria-label="Previous">
//             <span aria-hidden="true">&laquo;</span>
//             </a>
//         </li>`;
//         for(let i = 1;i<=num;i++){
//             html+=`<li class="page-item"><a class="page-link" href="page=${i}">${i}</a></li>`;

//         }
//         html+=`
//         <li class="page-item">
//             <a class="page-link" href="./list_projects.html?page=${current_page1}" aria-label="Next">
//             <span aria-hidden="true">&raquo;</span>
//             </a>
//         </li>`;
//     }
// }