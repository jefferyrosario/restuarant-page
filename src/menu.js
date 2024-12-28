export function Menu (){

    const content = document.querySelector('#content')

    const menu = document.createElement("header")
    menu.textContent = 'Menu'

    const appetizerHeader = document.createElement('header')
    appetizerHeader.textContent = "Appetizer"

    const plaintainsParagraph = document.createElement("p")
    plaintainsParagraph.textContent = "Plantains"

    const appetizers = [
        ['Item', 'Price'],
        ['Plantains', '2.99'],
        ['Shrimp', '3.99'],
        ['Rice with seasoning', '3.99']
    ]

    const table = document.createElement('table')

    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    appetizers.forEach((rowData, rowIndex) => {
        const row = document.createElement('tr')

        rowData.forEach(cellData => {
            const cell = rowIndex === 0 ? document.createElement('th') : document.createElement('tr')
            cell.textContent = cellData
            row.appendChild(cell)
        })
        
        if (rowIndex === 0) {
            thead.appendChild(row)
        } else {
            tbody.appendChild(row)
        }

        table.appendChild(thead)
        table.appendChild(tbody)

        const container = document.createElement('div')
        container.appendChild(menu)
        container.appendChild(appetizerHeader)
        container.appendChild(plaintainsParagraph)
        container.appendChild(table)

        content.appendChild(container)

    });

}