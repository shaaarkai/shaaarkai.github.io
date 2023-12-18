class Sprite {
	constructor({position, velocity, image, frames = {max:1}}){
		this.position = position;
		this.image = image;
		this.frames = {...frames, val: 0, elapsed: 0}

		this.image.onload = () => {
			this.width = this.image.width/this.frames.max
			this.height = this.height
		}

		this.moving = false
		this.beforeAnimation1 = false
		this.beforeAnimation2 = false
		
	}

	draw(){
		c.drawImage(this.image,
		 this.frames.val*this.width,
		 0,
		 this.image.width/this.frames.max,
		 this.image.height,
		 this.position.x,
		 this.position.y,
		 this.image.width/this.frames.max,
		 this.image.height);

		if(this.frames.max>1){
			this.frames.elapsed++
		}
		
		if (this.frames.elapsed%10 === 0){
			if (this.frames.val < this.frames.max-1) this.frames.val++
			else {
				this.frames.val = 0
				this.beforeAnimation1 = true
				this.beforeAnimation2 = true
			}
		}
	}

}

class Boundary {
	static width = 56
	static height = 56

	constructor({position}) {
		this.position = position
		this.width = 56
		this.height = 56
	}

	draw() {
		c.fillStyle = 'rgba(255, 0, 0, 0)'
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
}

class JavascriptDataDownloader {

    constructor(data={}) {
        this.data = data;
    }

    download (type_of = "text/plain", filename= "data.txt") {
        let body = document.body;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(this.data, null, 2)], {
            type: type_of
        }));
        a.setAttribute("download", filename);
        body.appendChild(a);
        a.click();
        body.removeChild(a);
    }
} 

function gameplay(){
		coinScoreText.style.color = "rgba(255, 255, 255, 1)";
		 

		coinScoreText.innerHTML = coinsCollected + " / 5";
		levelText.innerHTML = "Level : "+level;

		startH1.innerHTML = "";
		background.draw()
		
		boundaries.forEach(boundary =>{
			boundary.draw()
		})

		if(!coinCollect1){
			coin1.draw()
		}
		if(!coinCollect2){
			coin2.draw()
		}
		if(!coinCollect3){
			coin3.draw()
		}
		if(!coinCollect4){
			coin4.draw()
		}
		if(!coinCollect5){
			coin5.draw()
		}
		coinScore.draw()

		player.draw()

		if (player.position.x - 9 + 20 + player.width >= coin1.position.x &&
				player.position.x + 9 <= coin1.position.x + coin1.width &&
				player.position.y - 15 + 66 >= coin1.position.y &&
				player.position.y <= 66 + coin1.position.y) {
			if (!coinCollect1) coinsCollected += 1
			coinCollect1 = true
		}
		else if (player.position.x - 9 + player.width >= coin2.position.x &&
				player.position.x + 9 <= coin2.position.x + coin2.width &&
				player.position.y + 66 - 15 >= coin2.position.y &&
				player.position.y <= 66 + coin2.position.y) {
			if (!coinCollect2) coinsCollected += 1
			coinCollect2 = true
		}
		else if (player.position.x - 9 + player.width >= coin3.position.x &&
				player.position.x + 9 <= coin3.position.x + coin3.width &&
				player.position.y + 66 - 15 >= coin3.position.y &&
				player.position.y <= 66 + coin3.position.y) {
			if (!coinCollect3) coinsCollected += 1
			coinCollect3 = true
		}
		else if (player.position.x - 9 + player.width >= coin4.position.x &&
				player.position.x + 9 <= coin4.position.x + coin4.width &&
				player.position.y + 66 - 15 >= coin4.position.y &&
				player.position.y <= 66 + coin4.position.y) {
			if (!coinCollect4) coinsCollected += 1
			coinCollect4 = true
		}
		else if (player.position.x - 9 + player.width >= coin5.position.x &&
				player.position.x + 9 <= coin5.position.x + coin5.width &&
				player.position.y + 66 - 15 >= coin5.position.y &&
				player.position.y <= 66 + coin5.position.y) {
			if (!coinCollect5) coinsCollected += 1
			coinCollect5 = true
		}

		let moving = true
		player.moving = false

		if (keys.w.pressed) {
			player.moving = true

			for (let i=0;i<boundaries.length;i++){
				const boundary = boundaries[i]
				if (
				rectangularCollision({
					rectangle1:player,
					rectangle2:{...boundary, position:{
						x:boundary.position.x,
						y:boundary.position.y+3
					}}
				})){
				collideVar = true
				moving = false
				break
				}
			}

			if(moving){
				movables.forEach((movables)=>{
					movables.position.y += gravityAdd/2
				})
				if(gravityAdd < 6) {
						gravityUp *= 1.00002
						gravityAdd += gravityUp
					}
			} else {
				gravityAdd = 0
				gravityDown = -1
				gravityUp = 1
			}
			
		} else {
			player.moving = true

			for (let i=0;i<boundaries.length;i++){
				const boundary = boundaries[i]
				if (
				rectangularCollision({
					rectangle1:player,
					rectangle2:{...boundary, position:{
						x:boundary.position.x,
						y:boundary.position.y+3
					}}
				})){
				collideVar = true
				moving = false
				break
				}
			}

			if(moving){
			movables.forEach((movables)=>{
				movables.position.y += gravityAdd/2
			})
			if(gravityAdd > -6){
					gravityDown *= 1.00002
					gravityAdd += gravityDown}
			}else {
				gravityAdd = 0
				gravityDown = -1
				gravityUp = 1
			}
		}

		if (keys.d.pressed) {
			player.moving = true

			friction.right = true
			friction.rightVal = 2

			for (let i=0;i<boundaries.length;i++){
				const boundary = boundaries[i]
				if (
				rectangularCollision({
					rectangle1:player,
					rectangle2:{...boundary, position:{
						x:boundary.position.x,
						y:boundary.position.y+3
					}}
				})){
				collideVar = true
				moving = false
				break
				}
			}

			if(moving){
				movables.forEach((movables)=>{
					movables.position.x -= 3
			})} else {
				friction.right = false
				friction.left = false
			}

		} else if (friction.right){
			movables.forEach((movables)=>{
				movables.position.x -= friction.rightVal
			})
			friction.rightVal -= .2
			if (friction.rightVal<0) friction.right = false

		} 

		if (keys.a.pressed) {
			player.moving = true

			friction.left = true
			friction.leftVal = 2

			for (let i=0;i<boundaries.length;i++){
				const boundary = boundaries[i]
				if (
				rectangularCollision({
					rectangle1:player,	
					rectangle2:{...boundary, position:{
						x:boundary.position.x,
						y:boundary.position.y+3
					}}
				})){
				collideVar = true
				moving = false
				break
				}
			}
			
			if(moving){
				movables.forEach((movables)=>{
					movables.position.x += 3
				})
			} else {
				friction.left = false
				friction.right = false
			}
		} else if (friction.left){
			movables.forEach((movables)=>{
				movables.position.x += friction.leftVal
			})
			friction.leftVal -= .2
			if (friction.leftVal<0) friction.left = false

		}

		if(lastKey === 'd' && keys.w.pressed){
			if(!player.beforeAnimation1) player.image = playerRightStart
			else player.image = playerRightFly
			player.beforeAnimation2 = false

		} else if(lastKey === 'a' && keys.w.pressed){
			if(!player.beforeAnimation1) player.image = playerLeftStart
			else player.image = playerLeftFly
			player.beforeAnimation2 = false

		} else if(lastKey === 'd' && !keys.w.pressed){
			if(!player.beforeAnimation2) player.image = playerRightEnd
			else player.image = playerRightIdle
			player.beforeAnimation1 = false

		} else if(lastKey === 'a' && !keys.w.pressed){
			if(!player.beforeAnimation2) player.image = playerLeftEnd
			else player.image = playerLeftIdle
			player.beforeAnimation1 = false
		} 

		if (lastKey === 'd' && collideVar) player.image = playerRightDie
		else if (lastKey === 'a' && collideVar) player.image = playerLeftDie

		positionArray.x.push(background.position.x*-1)
		positionArray.y.push(background.position.y)
}

function coinSprite(index, img) {
	return new Sprite({position:{
			x:coins.x[index]*56+offset.x,
			y:coins.y[index]*56+offset.y
			},
			image: img,
			frames:{
				max:4
			},})
}