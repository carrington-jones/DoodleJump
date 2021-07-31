document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let isGameOver = false;
    let platformCount = 5;
    let platforms = []
    let upTimerId
    let downTimerId

    //This function is putting doodler into the grid HTML
    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    //Platform object.
    class Platform{
        constructor(newPlatformBottom) {
            this.bottom = newPlatformBottom
            this.left = Math.random() * 315 //Spacing is from grid width of 400 minus 85 of platform width.
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)// This places the platform in the grid
        }
    }

    function createPlatforms(){
        for (let i = 0; i < platformCount; i++){
            let platformGap = 600 / platformCount //600 comes from grid size defined in stylesheet.
            let newPlatformBottom = 100 + i * platformGap;
            let newPlatform = new Platform(newPlatformBottom)
            platforms.push(newPlatform)
        }
    }

    //This function moves platforms down the grid by 4px. It is invoked using setInterval with a time of 30.
    function movePlatforms(){
        if (doodlerBottomSpace > 200){
            platforms.forEach(platform=> {
                platform.bottom -= 4 //moving each of the platforms down by 4 each time.
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }
    }

    function jump(){
        clearInterval(downTimerId) //This clear interval makes sure that we are not falling when doodler is supposed to be jumping
        upTimerId = setInterval(function (){
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if(doodlerBottomSpace > 350){
                fall();
            }
        },30)
    }

    function fall(){
        clearInterval(upTimerId) // This clear interval makes sure that we are not jumping when doodler should be jumping
        downTimerId = setInterval(function (){
            doodlerBottomSpace -= 5;
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if(doodlerBottomSpace <= 0){
                gameOver()
            }
        }, 30)
    }

    function gameOver(){
        isGameOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    }

    function start(){
        if(isGameOver === false){
            createDoodler()
            createPlatforms()
            setInterval(movePlatforms,30)
            jump()
        }
    }

    start()
})