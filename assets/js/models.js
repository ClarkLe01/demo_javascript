class Project_html {
    constructor(json) {
        this.id = json['id'];
        this.name = json['name']
        this.desc = json['description']
        this.dev = json['owner']
        this.from = json['start']
        this.end = json['end']
    }
    getTdId() {
        let th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = this.id;
        return th;
    }
    getTdName() {
        let td = document.createElement('td');
        let a_link = document.createElement('a');
        a_link.setAttribute('href', `./update_Project.html?id=${this.id}`);
        a_link.innerText = this.name;
        td.appendChild(a_link);
        td.appendChild(document.createElement('br'));
        let small_from = document.createElement('small');
        small_from.innerText = this.from;
        td.appendChild(small_from);
        return td;
    }
    getDesc() {
        let td = document.createElement('td');
        td.setAttribute('class', 'des-project');
        td.innerText = this.desc;
        return td;
    }
    getEnd() {
        let td = document.createElement('td');
        td.innerText = this.end;
        return td;
    }
    getDev() {
        let td = document.createElement('td');
        let a_link = document.createElement('a');
        a_link.setAttribute('href', `./update_Developer.html?id_project=${this.id}`);
        a_link.innerText = this.dev;
        td.appendChild(a_link);
        return td;
    }
    getAction() {
        let td = document.createElement('td');
        td.setAttribute('class', 'm-1')
        td.innerHTML = ` 
        <div class="btn-container">
            <a href="./update_Project.html?id=${this.id}" class="btn btn-info btn-sm">
                <i class="fa fa-pencil"></i>
                <spanclass="m-1">Edit</spanclass=>
            </a>
        <a href="#" class="btn btn-danger btn-sm">
            <i class="fas fa-trash-can"></i>
            <span class="m-1">Del</span></a>
        </div> `;
        return td;
    }

}


// class Queue {
//     #queue = [];
//     constructor(max_size){
//         this.max_size = max_size;
//     }

//     enqueue(item) {
//         return this.#queue.unshift(item);
//     }

//     dequeue() {
//         return this.#queue.pop();
//     }

//     peek() {
//         return this.#queue[this.length - 1];
//     }

//     get length() {
//         return this.#queue.length;
//     }

//     isEmpty() {
//         return this.#queue.length === 0;
//     }
//     isFull(){
//         return this.#queue.length == this.max_size;
//     }
// }