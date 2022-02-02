const path = "UULRLLDDLU"

function cleanerPosition(pos){
    
    let posX = 0;
    let posY = 0;
    
    [...pos].forEach(el=>{
        switch(el){
            case "U":
                posY++
                break
            case "D":
                posY--
                break
            case "L":
                posX++
                break
            case "R":
                posX--
                break
        }
    })
    
    return posX==0&&posY==0?"at the origin":"different position"
}

console.log("last position.",cleanerPosition(path));