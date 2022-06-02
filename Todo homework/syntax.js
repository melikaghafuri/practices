function run() {
    fetch('https://dummyjson.com/todos').then(function (response) {
        response.json().then(function (data) {
            let todos = data.todos
            todos.forEach(function (item, index) {
                console.log(item, index);
                let row = document.createElement("div")
                row.classList.add("row")

                let input = document.createElement("input")
                input.type = "checkbox"
                let completed = item.completed 
                input.checked = completed

                let paragraph = document.createElement("p")
                paragraph.innerText = item.todo

                row.appendChild(input)
                row.appendChild(paragraph)
                
                document.body.appendChild(row)
            })
        })
    })
}

run()