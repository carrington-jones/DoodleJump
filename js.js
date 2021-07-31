document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 50;
    let isGameOver = false;
    let platformCount = 5;

    //This function is putting doodler into the grid HTML
    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    class Platform{
        constructor(newPlatformBottom) {
            this.bottom = newPlatformBottom
            this.left = Math.random() * 315 //Spacing is from grid width of 400 minus 85 of platform width.
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms(){
        for (let i = 0; i < platformCount; i++){
            let platformGap = 600 / platformCount //600 comes from grid size defined in stylesheet.
            let newPlatformBottom = 100 + i * platformGap;
            let newPlatform = new Platform(newPlatformBottom)
        }
    }

    function start(){
        if(isGameOver === false){
            createDoodler()
            createPlatforms()
        }
    }

    start()
})