document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')

    //This function is putting doodler into the grid HTML
    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
    }
    createDoodler()
})