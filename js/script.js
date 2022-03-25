const elForm = selectElem('#form');
const elSearchInput = selectElem('.searcInput');
const elFilter = selectElem('.filter');
const elTbody = selectElem('.tbody');

function renderData(arr, element) {
    element.innerHTML = null;

    arr.map(students => {
        let newTr = createDom('tr');

        for (student in students) {
            let newTd = createDom('td')

            newTd.textContent = students[student]

            newTr.appendChild(newTd)
        }

        element.appendChild(newTr)
    })
}

renderData(pupils, elTbody)


elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let foundPupil = []

    let inputValue = elSearchInput.value.trim()
    let selectValue = elFilter.value

    let regex = new RegExp(inputValue, 'gi')

    let searchedData = pupils.filter(s => s.name.match(regex))

    let sorted = searchedData.sort((a,b) => a.age - b.age)

    if(selectValue === 'unsorted'){
        foundPupil = pupils
    }else if(selectValue === 'new_old'){
        foundPupil = sorted
    }else if(selectValue === 'old_new'){
        foundPupil = sorted.reverse()
    }

    renderData(foundPupil, elTbody)
    
    elSearchInput.value = null;
})