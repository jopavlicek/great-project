fetch("shared/people/people.json")
    .then(response => response.json())
    .then(data => displayData(data))

function displayData(data) {
    data.forEach(person => {
        const list = document.querySelector("ul")
        list.innerHTML += `<li>Id: ${person.id}, Name: ${person.name}</li>`
    })
}