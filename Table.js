class Table {
  constructor(data){
    this.data = data
    this.table = document.getElementById("table")
  }
  create() {
    let column
    const sortedData = this.data.sort((a, b) => a.size - b.size)
    sortedData.forEach((file) => {
        //this.axis_y.push(file.size)
        //this.axis_x.push(file.filename)
        column = new Column(file.size, file.name).create()
        this.table.appendChild(column)
    })
  }
  addData(files) {
    this.table.innerHTML = ''
    Array.from(files).forEach((file) => {
      this.data.push(file)
    })
  }
}