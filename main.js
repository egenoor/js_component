//uus tyhi tabel
let data = []
let table = new Table(data)

document.getElementById("fileinput")/addEventListener('change', (e) => {
  const files = e.target.files
  table.addData(files)
  table.create()
  e.target.value = null
})