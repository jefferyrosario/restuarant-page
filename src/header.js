export function Homepage (){
    const div_content = document.getElementById('content')
                
    const header = document.createElement('header')
    header.textContent = 'La Serena'
    div_content.appendChild(header)

    const restuarantContent = document.createElement('div')
    restuarantContent.id = 'restuarantContent'
    div_content.appendChild(restuarantContent)

    const restuarantDescription = document.createElement('p')
    restuarantDescription.textContent = "The best dominican food you will find.Brought by the Rosario family of San Francisco de Macoris. The sweetest plaintains you will find."
    restuarantContent.appendChild(restuarantDescription)

    const hours = ['Monday 10am - 8pm',
                    'Tuesday 10am - 8pm',
                    'Wednesday 10am - 8pm',
                    'Thursday 10am - 8pm',
                    'Friday 10am - 10pm',
                    'Saturday 10am - 10pm',
                    'Sunday 10am - 8pm'
    ]

    const hoursDiv = document.createElement('div')
    restuarantContent.appendChild(hoursDiv)

    const hoursHeader = document.createElement('header')
    hoursHeader.textContent = "Hours"
    hoursDiv.appendChild(hoursHeader)

    hours.forEach(label => {
        const li = document.createElement('li')
        li.textContent = label
        li.id = label
        hoursDiv.appendChild(li)
    })

    const locationDiv = document.createElement('div')
    restuarantContent.appendChild(locationDiv)

    const locationHeader = document.createElement('header')
    locationHeader.textContent = "Location"
    locationDiv.appendChild(locationHeader)

    const location = document.createElement('p')
    location.textContent = '1550 E 20th Street Richmond Hill, NY'
    locationDiv.appendChild(location)


    const restuarantHours = document.createElement('li')
}


