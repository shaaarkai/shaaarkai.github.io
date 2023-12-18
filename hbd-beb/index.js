const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

var startH1 = document.getElementById('text')
startH1.style.marginTop = -380;

var coinScoreText = document.getElementById('coin')
var levelText = document.getElementById('lvl')
var msg1Text = document.getElementById('msg1')
var msg2Text = document.getElementById('msg2')
var canText = document.getElementById('can')

var lvl1Text = document.getElementById('lvl1')
var lvl2Text = document.getElementById('lvl2')
var lvl3Text = document.getElementById('lvl3')


var age = '17'
var easy = 0

// happy 17th raish. sorry that ive made u disappointed :( i love u, i miss u

var txtz1 = 'happy '+age+'th bebe. thank u for being the plot twist that u r in my life.'; 
var txtz2 = 'i love u, i love everything about u. sorry that ive made u disappointed :( i miss u bebe'; 
var txt2 = '(lets gala na soon w chels)'; 


var opacity = 0;

function MyFadeFunction(a, b) {
   if (opacity<1) {
      opacity += .05;
      setTimeout(function(){MyFadeFunction()},100);
   }
   document.getElementById(a).innerHTML = b
   document.getElementById(a).style.opacity = opacity;
}

class Drawing {
	static width = 3
	static height = 3

	constructor({position}) {
		this.position = position
		this.width = 3
		this.height = 3
	}

	draw() {
		c.fillStyle = '#BAADBE'
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
}

var coinsCollected = 0

var bouncyNum = -380
var bouncyMultiplier = -.2

var alpha = 0
var alpha1 = 0

var positionArray = {
	x:[],
	y:[]
}

var positionLevels = {
	lvl1:{
		x:[],
		y:[]
	},
	lvl2:{
		x:[],
		y:[]
	},
	lvl3:{
		x:[],
		y:[]
	},
}

var drawings = []
var iii = 0

const collisionsList = [collisions, collisions2, collisions3]
const coinsList = [coinsPos, coinsPos2, coinsPos3]


var collisionsMap = []
for (let i=0; i<collisions.length;i+=70){
		collisionsMap.push(collisions.slice(i, i+70))
}
var coinsMap = []
for (let i=0; i<coinsPos.length;i+=70){
		coinsMap.push(coinsPos.slice(i, i+70))
}

canvas.width = 1024
canvas.height = 576

var lastKey = 'd'

var coinCollect1 = false
var coinCollect2 = false
var coinCollect3 = false
var coinCollect4 = false
var coinCollect5 = false

var start = true
var gameover = 'not'

var level = 1
var collisionNumber = 1755

var friction = {
	right:false,
	left:false,
	rightVal:3,
	leftVal:3
}


var offset = {
	x: -700,
	y: -100
}

const iImg = new Sprite({
	position : {
		x: 88,
		y: 50
	},
	image: letterI
});

const lImg = new Sprite({
	position : {
		x: 400,
		y: 50
	},
	image: letterL
});

const yImg = new Sprite({
	position : {
		x: 712,
		y: 50
	},
	image: letterY
});

const background = new Sprite({
	position : {
		x: offset.x,
		y: offset.y
	},
	image: bgI
});

const cavee = new Sprite({
	position : {
		x: 0,
		y: 0
	},
	image: cave
});

const startBg = new Sprite({
	position : {
		x: offset.x,
		y: offset.y
	},
	image: startImg
});
var gameoverY = -400
var lvlCompleteBgY = 0


const gameoverBg = new Sprite({
	position : {
		x: offset.x,
		y: gameoverY
	},
	image: gameoverImg
});

var boundaries = []
collisionsMap.forEach((row, i) => {
	row.forEach((symbol, j) => {
		if (symbol === 1755){
		    boundaries.push(new Boundary({position:{
			x:j*Boundary.width+offset.x,
			y:i*Boundary.height+offset.y
		}}))}
	})
})

var coins = {x:[], y:[]}
coinsMap.forEach((row, i) => {
	row.forEach((symbol, j) => {
		if (symbol === 1755){
		coins.y.push(i)
		coins.x.push(j)}
		
	})
})

var coin1 = coinSprite(0, coinImg1)
var coin2 = coinSprite(1, coinImg2)
var coin3 = coinSprite(2, coinImg3)
var coin4 = coinSprite(3, coinImg4)
var coin5 = coinSprite(4, coinImg5)

const coinScore = new Sprite({position:{
			x:15,
			y:27
			},
			image: coinImg,
			frames:{
				max:4
			},})

const keys = {
	w:{
		pressed: false
	},
	a:{
		pressed: false
	},
	s:{
		pressed: false
	},
	d:{
		pressed: false
	}	
};

const player = new Sprite({
	position:{
		x: canvas.width/2-33, 
		y: canvas.height/2-33
	},
	image: playerRightIdle,
	frames:{
		max:6
	},
})

var movables = [background, ...boundaries, coin1, coin2, coin3, coin4, coin5]

function rectangularCollision({rectangle1, rectangle2}){
	return (rectangle1.position.x - 9 - easy + rectangle1.width >= rectangle2.position.x && 
		rectangle1.position.x + 9 +easy <= rectangle2.width + rectangle2.position.x &&
		rectangle1.position.y - 15 - easy + rectangle1.width >= rectangle2.position.y &&
		rectangle1.position.y + easy <= rectangle2.height + rectangle2.position.y)
}


var gravityAdd = 0
var gravityDown = -1
var gravityUp = 1

var collideVar = false
var saved = false

// start = true : start page
// start = false : player pressed space thus game starts

// gameover = 'not' : havent lost
// gameover = 'is' : gameover screen
// gameover = 'retry' : player pressed space on gameover screen thus game starts again

function animate(){
	window.requestAnimationFrame(animate)

	if (bouncyNum <= -380) bouncyMultiplier *= -1
	else if (bouncyNum >= -360) bouncyMultiplier *= -1

	bouncyNum += bouncyMultiplier
	startH1.style.marginTop = bouncyNum;

	if(!start && gameover !== 'retry'){
		gameplay()

		if(collideVar && !saved && coinsCollected === 5 && level === 3){
			saved = true
		// new JavascriptDataDownloader(positionArray).download();
		}

	} else if (start){
		background.draw()
		startBg.draw()
	}
	if (collideVar && gameover === 'not'){
		gameover = 'is'
	}
	if (collideVar && coinsCollected<5){
		c.globalAlpha = alpha
		alpha += .05

		coinScoreText.style.color = "rgba(255, 255, 255, .3)";

		gameoverBg.position.y = gameoverY
		if (gameoverBg.position.y< offset.y) gameoverY +=5

		gameoverBg.draw()
		if (alpha > 3.4){
			startH1.style.marginLeft = 330
			startH1.innerHTML = "Game Over - Press Space";
		}

		c.globalAlpha = 1
		
	} else {
		alpha = 0
		gameoverY = -400
		

	}
	if (collideVar && coinsCollected===5){
		if (lastKey === 'a') player.image = playerLeftIdle
		else if (lastKey === 'd') player.image = playerRightIdle
	}

	if (collideVar) levelText.innerHTML = "";

	if (gameover === 'retry'){
		 gameplay()
	}
	if (collideVar && gameover === 'retry') gameover = 'is'

	if(coinsCollected === 5 && level !==4){
		levelText.innerHTML = "";
		
		coinScoreText.style.color = "rgba(255, 255, 255, .3)";

		c.globalAlpha = alpha1
		alpha1 += .05

		coinScoreText.style.color = "rgba(255, 255, 255, .3)";

		startBg.position.y = lvlCompleteBgY
		if (startBg.position.y< offset.y) lvlCompleteBgY +=5

		startBg.draw()
		if (alpha1 > 3.4){
			startH1.style.marginLeft = 335
			startH1.innerHTML = "Next Level - Press Space";
		}

		c.globalAlpha = 1
		

	} else {
		alpha1 = 0
		lvlCompleteBgY = -400
	}

	if (level === 4){
		// c.fillStyle = '#74647f'
		// c.fillRect(0, 0, canvas.width, canvas.height)
		cavee.draw()
		coinScoreText.innerHTML = "";
		lvl1.innerHTML = "lvl 1";
		lvl2.innerHTML = "lvl 2";
		lvl3.innerHTML = "lvl 3";

		iImg.draw()
		lImg.draw()
		yImg.draw()

		MyFadeFunction('msg1', txtz1)
		MyFadeFunction('msg2', txtz2)
		MyFadeFunction('can', txt2)
			
		
		for (var g = 0; g <= iii; g++) {
			try {
				drawings[g].draw();
			}
			catch(err) {
			  
			  break
			}
		}
		

		if (iii < positionLevels.lvl1.x.length + positionLevels.lvl2.x.length + positionLevels.lvl3.x.length){
			iii+=4
		}

	}
}


animate()


window.addEventListener('keydown', (e)=>{
	if(e.key === 'w'){
		keys.w.pressed = true
	}if(e.key === 'a'){
		lastKey = 'a'
		keys.a.pressed = true
	}if(e.key === 'd'){
		lastKey = 'd'
		keys.d.pressed = true
	}if(e.key === ' '){
		start = false
		if(gameover === 'is') {

			if(coinsCollected === 5 && level < 4){
				if (level === 1) {
					positionLevels.lvl1.x = positionArray.x
					positionLevels.lvl1.y = positionArray.y
				} else if (level === 2){
					positionLevels.lvl2.x = positionArray.x
					positionLevels.lvl2.y = positionArray.y
				} else if (level === 3){
					positionLevels.lvl3.x = positionArray.x
					positionLevels.lvl3.y = positionArray.y
				}
				
				level+=1

			}
			positionArray = {
				x:[],
				y:[]
			}

			if (level === 1) {
				background.image = bgI
				collisionNumber = 1755
			}
			else if (level === 2) {
				background.image = bgL
				collisionNumber = 1762
				offset = {
					x: -200,
					y: -100
				}
			} else if (level === 3){
				background.image = bgY
				collisionNumber = 1753
				offset = {
					x: -200,
					y: -100
				}
			} else if (level === 4){
				for (var ii = 0; ii < positionLevels.lvl1.x.length - 1; ii++) {
					drawings.push(new Drawing({position:{
						x:(positionLevels.lvl1.x[ii] +500)/10 + 85, y:(positionLevels.lvl1.y[ii] *-1 + 280)/10 + 50
					}}))
				}
				for (var ii = 0; ii < positionLevels.lvl2.x.length - 1; ii++) {
					drawings.push(new Drawing({position:{
						x:(positionLevels.lvl2.x[ii] +500)/10 + 224+88+88, y:(positionLevels.lvl2.y[ii] *-1 + 280)/10 + 50
					}}))
				}
				for (var ii = 0; ii < positionLevels.lvl3.x.length - 1; ii++) {
					drawings.push(new Drawing({position:{
						x:(positionLevels.lvl3.x[ii] +500)/10 + 224+88+224+88+88, y:(positionLevels.lvl3.y[ii] *-1 + 280)/10 + 50
					}}))
				}
				c.fillStyle = 'rgba(255, 0, 0, 1)'
				c.fillRect(0, 0, c.width, c.height)
				gameover = 'finish'
			}

			if (level !== 4){

				collisionsMap = []
				for (let i=0; i<collisionsList[level-1].length;i+=70){
						collisionsMap.push(collisionsList[level-1].slice(i, i+70))
				}
				coinsMap = []
				for (let i=0; i<coinsList[level-1].length;i+=70){
						coinsMap.push(coinsList[level-1].slice(i, i+70))
				}

				boundaries = []
				collisionsMap.forEach((row, i) => {
					row.forEach((symbol, j) => {
						if (symbol === collisionNumber){
						    boundaries.push(new Boundary({position:{
							x:j*Boundary.width+offset.x,
							y:i*Boundary.height+offset.y
						}}))}
					})
				})

				coins = {x:[], y:[]}
				coinsMap.forEach((row, i) => {
					row.forEach((symbol, j) => {
						if (symbol === collisionNumber){
						coins.y.push(i)
						coins.x.push(j)}
						
					})
				})
				coinImg1 = new Image()
				coinImg1.src = './img/robo/coin1.png'

				coinImg2 = new Image()
				coinImg2.src = './img/robo/coin2.png'

				coinImg3 = new Image()
				coinImg3.src = './img/robo/coin3.png'

				coinImg4 = new Image()
				coinImg4.src = './img/robo/coin4.png'

				coinImg5 = new Image()
				coinImg5.src = './img/robo/coin5.png'

				coin1 = coinSprite(0, coinImg1)
				coin2 = coinSprite(1, coinImg2)
				coin3 = coinSprite(2, coinImg3)
				coin4 = coinSprite(3, coinImg4)
				coin5 = coinSprite(4, coinImg5)


				coinsCollected = 0
				gameover = 'retry'
				gravityAdd = 0
				gravityDown = -1
				gravityUp = 1
				collideVar = false

				movables.forEach((movables)=>{
					movables.position.x = offset.x
					movables.position.y = offset.y
				})

				coin1.position.x = coins.x[0]*56+offset.x
				coin1.position.y = coins.y[0]*56+offset.y
				coin2.position.x = coins.x[1]*56+offset.x
				coin2.position.y = coins.y[1]*56+offset.y
				coin3.position.x = coins.x[2]*56+offset.x
				coin3.position.y = coins.y[2]*56+offset.y
				coin4.position.x = coins.x[3]*56+offset.x
				coin4.position.y = coins.y[3]*56+offset.y
				coin5.position.x = coins.x[4]*56+offset.x
				coin5.position.y = coins.y[4]*56+offset.y

				coinCollect1 = false
				coinCollect2 = false
				coinCollect3 = false
				coinCollect4 = false
				coinCollect5 = false

				background.position.x = offset.x

				movables = [background, ...boundaries, coin1, coin2, coin3, coin4, coin5]
			}

			
		}

	} if (e.key === '`'){
		new JavascriptDataDownloader(positionArray).download();
		console.log('esc')
	}
});

window.addEventListener('keyup', (e)=>{
	if(e.key === 'w'){
		keys.w.pressed = false
	}if(e.key === 'a'){
		keys.a.pressed = false
	}if(e.key === 'd'){
		keys.d.pressed = false
	}if(e.key === '0'){
		easy = 10
	}if(e.key === '8'){
		age = '18'
		txtz1 = 'happy '+age+'th bebe. thank u for being the plot twist that u r in my life.'; 
		txtz2 = 'i love u, i love everything about u. sorry that ive made u disappointed :( i miss u bebe'; 
	}
});
