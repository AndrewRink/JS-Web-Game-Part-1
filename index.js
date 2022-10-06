
//creates a tile function so we can split the background between sky and grass
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

//Function to simplify adding new Images to document
function newImage (url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}


//adds Items that can be removed with double click
function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('click',function(){
        item.remove() //adds items to inventory at the bottom
        let inventoryItem=document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}

//sets parameters for tiles for background colors
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

//adds background colors with parameters to have sky and grass
tile('assets/sky.png', 0, horizon, window.innerWidth/100,heightOfSky/100 )
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

//Function adds all new Images into screen
newImage ('assets/green-character.gif', 100, 250)
newImage ('assets/pine-tree.png', 450, 200)
newImage ('assets/tree.png', 200, 450)
newImage ('assets/pillar.png', 350, 250)
newImage ('assets/crate.png', 150, 350)
newImage ('assets/well.png', 500, 575)

//removable items list
newItem('assets/sword.png', 500, 555)
newItem('assets/sheild.png', 165, 335)
newItem('assets/staff.png', 600, 250)

//Inventory Function
let inventory;

function newInventory(){
    inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()

