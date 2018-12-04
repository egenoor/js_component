class Column {
  constructor(size, name){
    this.size = size
    this.name = name
    this.create()
  }
  create(){
    let container = document.createElement("DIV")
    let size = document.createElement("p")
    let mb_size = Math.round(this.size / (1024*1024))
    size.classList.add('size')
    size.innerHTML = mb_size + " MB"
    let column = document.createElement("DIV")
    column.classList.add('column')
    column.style.height = this.size / 1000 + "px"
    let name = document.createElement("p")
    name.classList.add('name')
    name.innerHTML = this.name

    container.appendChild(size)
    container.appendChild(column)
    container.appendChild(name)

    return container
  }
}