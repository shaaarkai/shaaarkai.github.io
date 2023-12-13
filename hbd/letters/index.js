const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const iMap = new Image()
iMap.src = './iMap1.png'

canvas.width = 1024
canvas.height = 576

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

class Drawing {
	static width = 4
	static height = 4

	constructor({position}) {
		this.position = position
		this.width = 4
		this.height = 4
	}

	draw() {
		c.fillStyle = '#2096cd'
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
}

const i = new Sprite({
	position:{
		x:0, y:0
	},
	image: iMap
})

var x = [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,203,206,209,212,215,218,221,224,227,230,233,236,239,242,245,248,251,254,257,260,263,266,269,272,275,278,281,283.8,286.40000000000003,288.8,291,293,294.8,296.40000000000003,297.8,299,300,300.8,301.40000000000003,301.8,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,302,305,308,311,314,317,320,323,326,329,332,335,338,341,344,347,350,353,356,359,362,365,368,371,374,377,380,383,386,389,392,395,398,401,404,407,410,413,416,419,422,425,428,431,434,437,440,443,446,449,452,455,457.8,460.40000000000003,462.8,465,467,468.8,470.40000000000003,473.40000000000003,476.40000000000003,479.40000000000003,482.40000000000003,485.40000000000003,488.40000000000003,491.40000000000003,494.40000000000003,497.40000000000003,500.40000000000003,503.40000000000003,506.40000000000003,509.40000000000003,512.4000000000001,515.4000000000001,518.4000000000001,521.4000000000001,524.4000000000001,527.4000000000001,530.4000000000001,533.4000000000001,536.4000000000001,539.4000000000001,542.4000000000001,545.4000000000001,548.4000000000001,551.4000000000001,554.4000000000001,557.4000000000001,560.4000000000001,563.4000000000001,566.4000000000001,569.4000000000001,572.4000000000001,575.4000000000001,578.4000000000001,581.4000000000001,584.4000000000001,587.4000000000001,590.4000000000001,593.4000000000001,596.4000000000001,599.4000000000001,602.4000000000001,605.4000000000001,608.4000000000001,611.4000000000001,614.4000000000001,617.4000000000001,620.4000000000001,623.4000000000001,626.4000000000001,629.4000000000001,632.4000000000001,635.4000000000001,638.4000000000001,641.4000000000001,644.4000000000001,647.4000000000001,650.4000000000001,653.4000000000001,656.4000000000001,659.4000000000001,662.4000000000001,665.4000000000001,668.4000000000001,671.4000000000001,674.4000000000001,677.4000000000001,680.4000000000001,683.4000000000001,686.4000000000001,689.4000000000001,692.4000000000001,695.4000000000001,698.4000000000001,701.4000000000001,704.4000000000001,707.4000000000001,710.4000000000001,713.4000000000001,716.4000000000001,719.4000000000001,722.4000000000001,725.4000000000001,728.4000000000001,731.4000000000001,734.4000000000001,737.4000000000001,740.4000000000001,743.4000000000001,746.4000000000001,749.4000000000001,752.4000000000001,755.4000000000001,758.4000000000001,761.4000000000001,764.4000000000001,767.4000000000001,770.4000000000001,773.4000000000001,776.4000000000001,779.4000000000001,782.4000000000001,785.4000000000001,788.4000000000001,791.4000000000001,794.4000000000001,797.4000000000001,800.4000000000001,803.4000000000001,806.4000000000001,809.4000000000001,812.4000000000001,815.4000000000001,818.4000000000001,821.4000000000001,824.4000000000001,827.4000000000001,830.4000000000001,833.4000000000001,836.4000000000001,839.4000000000001,842.4000000000001,845.4000000000001,848.4000000000001,851.4000000000001,854.4000000000001,857.4000000000001,860.4000000000001,863.4000000000001,866.4000000000001,869.4000000000001,872.4000000000001,875.4000000000001,878.4000000000001,881.4000000000001,884.4000000000001,887.4000000000001,890.4000000000001,893.4000000000001,896.4000000000001,899.4000000000001,902.4000000000001,905.4000000000001,908.4000000000001,911.4000000000001,914.4000000000001,917.4000000000001,920.4000000000001,923.4000000000001,926.4000000000001,929.4000000000001,932.4000000000001,935.4000000000001,938.4000000000001,941.4000000000001,944.4000000000001,947.4000000000001,950.4000000000001,953.4000000000001,956.4000000000001,959.4000000000001,962.4000000000001,965.4000000000001,968.4000000000001,971.4000000000001,974.4000000000001,977.4000000000001,980.4000000000001,983.4000000000001,986.4000000000001,989.4000000000001,992.4000000000001,995.4000000000001,998.4000000000001,1001.4000000000001,1004.4000000000001,1007.4000000000001,1010.4000000000001,1013.4000000000001,1016.4000000000001,1019.4000000000001,1022.4000000000001,1025.4,1028.4,1031.4,1034.4,1037.4,1040.4,1043.4,1046.4,1049.4,1052.4,1055.4,1058.4,1061.4,1064.4,1067.4,1070.4,1073.4,1076.4,1079.4,1082.4,1085.4,1088.4,1091.4,1094.4,1097.4,1100.4,1103.4,1106.4,1109.4,1112.4,1115.4,1118.4,1121.4,1124.4,1127.4,1130.4,1133.4,1136.4,1139.4,1142.4,1145.4,1148.4,1151.4,1154.4,1157.4,1160.4,1163.4,1166.4,1169.4,1172.4,1175.4,1178.4,1181.4,1184.4,1187.4,1190.4,1193.4,1196.4,1199.4,1202.4,1205.4,1208.4,1211.4,1214.4,1217.4,1220.4,1223.4,1226.4,1229.4,1232.4,1235.4,1238.4,1241.4,1244.4,1247.4,1250.4,1253.4,1256.4,1259.4,1262.4,1265.4,1268.4,1271.4,1274.4,1277.4,1280.4,1283.4,1286.4,1289.4,1292.4,1295.4,1298.4,1301.4,1304.4,1307.4,1310.2,1312.8,1315.2,1317.4,1319.4,1321.2,1322.8,1324.2,1325.4,1326.4,1327.2,1327.8,1328.2,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1328.4,1325.4,1322.4,1319.4,1316.4,1313.4,1310.4,1307.4,1304.4,1301.4,1298.4,1295.4,1292.6000000000001,1290.0000000000002,1287.6000000000001,1285.4,1283.4,1281.6000000000001,1280.0000000000002,1278.6000000000001,1277.4,1276.4,1275.6000000000001,1275.0000000000002,1274.6000000000001,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1274.4,1271.4,1268.4,1265.4,1262.4,1259.4,1256.4,1253.4,1250.4,1247.4,1244.4,1241.4,1238.4,1235.4,1232.4,1229.4,1226.4,1223.4,1220.4,1217.4,1214.4,1211.4,1208.4,1205.4,1202.4,1199.4,1196.4,1193.4,1190.4,1187.4,1184.4,1181.4,1178.4,1175.4,1172.4,1169.4,1166.4,1163.4,1160.4,1157.4,1154.4,1151.4,1148.4,1145.4,1142.4,1139.4,1136.4,1133.4,1130.4,1127.4,1124.4,1121.4,1118.4,1115.4,1112.4,1109.4,1106.4,1103.4,1100.4,1097.4,1094.4,1091.4,1088.4,1085.4,1082.4,1079.4,1076.4,1073.4,1070.4,1067.4,1064.4,1061.4,1058.4,1055.4,1052.4,1049.4,1046.4,1043.4,1040.4,1037.4,1034.4,1031.4,1028.4,1025.4,1022.4000000000001,1019.4000000000001,1016.4000000000001,1013.4000000000001,1010.4000000000001,1007.4000000000001,1004.4000000000001,1001.4000000000001,998.4000000000001,995.4000000000001,992.4000000000001,989.4000000000001,986.4000000000001,983.4000000000001,980.4000000000001,977.4000000000001,974.4000000000001,971.4000000000001,968.4000000000001,965.4000000000001,962.4000000000001,959.4000000000001,956.4000000000001,953.4000000000001,950.4000000000001,947.4000000000001,944.4000000000001,941.4000000000001,938.4000000000001,935.4000000000001,932.4000000000001,929.4000000000001,926.4000000000001,923.4000000000001,920.4000000000001,917.4000000000001,914.4000000000001,911.4000000000001,908.4000000000001,905.4000000000001,902.4000000000001,899.4000000000001,896.4000000000001,893.4000000000001,890.4000000000001,887.4000000000001,884.4000000000001,881.4000000000001,878.4000000000001,875.4000000000001,872.4000000000001,869.4000000000001,866.4000000000001,863.4000000000001,860.4000000000001,857.4000000000001,854.4000000000001,851.4000000000001,848.4000000000001,845.4000000000001,842.4000000000001,839.4000000000001,836.4000000000001,833.4000000000001,830.4000000000001,827.4000000000001,824.4000000000001,821.4000000000001,818.4000000000001,815.4000000000001,812.4000000000001,809.4000000000001,806.4000000000001,803.4000000000001,800.4000000000001,797.4000000000001,794.4000000000001,791.4000000000001,788.4000000000001,785.4000000000001,782.4000000000001,779.4000000000001,776.4000000000001,773.4000000000001,770.4000000000001,767.4000000000001,764.4000000000001,761.4000000000001,758.4000000000001,755.4000000000001,752.4000000000001,749.4000000000001,746.4000000000001,743.4000000000001,740.4000000000001,737.4000000000001,734.4000000000001,731.4000000000001,728.4000000000001,725.4000000000001,722.4000000000001,719.4000000000001,716.4000000000001,713.4000000000001,710.4000000000001,707.4000000000001,704.4000000000001,701.4000000000001,698.4000000000001,695.4000000000001,692.4000000000001,689.4000000000001,686.4000000000001,683.4000000000001,680.4000000000001,677.4000000000001,674.4000000000001,671.4000000000001,668.4000000000001,665.4000000000001,662.4000000000001,659.4000000000001,656.4000000000001,653.4000000000001,650.4000000000001,647.4000000000001,644.4000000000001,641.4000000000001,638.4000000000001,635.4000000000001,632.4000000000001,629.4000000000001,626.4000000000001,623.4000000000001,620.4000000000001,617.4000000000001,614.4000000000001,611.4000000000001,608.4000000000001,605.4000000000001,602.4000000000001,599.4000000000001,596.4000000000001,593.4000000000001,590.4000000000001,587.4000000000001,584.4000000000001,581.4000000000001,578.4000000000001,575.4000000000001,572.4000000000001,569.4000000000001,566.4000000000001,563.4000000000001,560.4000000000001,557.4000000000001,554.4000000000001,551.4000000000001,548.4000000000001,545.4000000000001,542.4000000000001,539.4000000000001,536.4000000000001,533.4000000000001,530.4000000000001,527.4000000000001,524.4000000000001,521.4000000000001,518.4000000000001,515.4000000000001,512.4000000000001,509.4000000000001,506.4000000000001,503.4000000000001,500.4000000000001,497.4000000000001,494.4000000000001,491.4000000000001,488.4000000000001,485.4000000000001,482.4000000000001,479.4000000000001,476.4000000000001,473.4000000000001,470.4000000000001,467.4000000000001,464.4000000000001,461.4000000000001,458.4000000000001,455.4000000000001,452.4000000000001,449.4000000000001,446.4000000000001,443.4000000000001,440.4000000000001,437.4000000000001,434.4000000000001,431.4000000000001,428.4000000000001,425.4000000000001,422.4000000000001,419.4000000000001,416.4000000000001,413.4000000000001,410.4000000000001,407.4000000000001,404.4000000000001,401.4000000000001,398.4000000000001,395.4000000000001,392.4000000000001,389.4000000000001,386.4000000000001,383.4000000000001,380.4000000000001,377.4000000000001,374.4000000000001,371.4000000000001,368.4000000000001,365.4000000000001,362.4000000000001,359.4000000000001,356.4000000000001,353.4000000000001,350.4000000000001,347.4000000000001,344.4000000000001,341.4000000000001,338.4000000000001,335.4000000000001,332.4000000000001,329.4000000000001,326.4000000000001,323.4000000000001,320.4000000000001,317.4000000000001,314.4000000000001,311.4000000000001,308.4000000000001,305.4000000000001,302.4000000000001,299.4000000000001,296.4000000000001,293.4000000000001,290.4000000000001,287.4000000000001,284.4000000000001,281.4000000000001,278.4000000000001,275.4000000000001,272.4000000000001,269.4000000000001,266.4000000000001,263.4000000000001,260.4000000000001,257.4000000000001,254.4000000000001,251.4000000000001,248.4000000000001,245.4000000000001,242.4000000000001,239.4000000000001,236.4000000000001,233.4000000000001,230.4000000000001,227.4000000000001,224.4000000000001,221.4000000000001,218.4000000000001,215.4000000000001,212.4000000000001,209.4000000000001,206.4000000000001,203.4000000000001,200.4000000000001,197.4000000000001,194.4000000000001,191.4000000000001,188.4000000000001,185.4000000000001,182.4000000000001,179.4000000000001,176.4000000000001,173.4000000000001,170.4000000000001,167.4000000000001,164.4000000000001,161.4000000000001,158.4000000000001,155.4000000000001,152.4000000000001,149.4000000000001,146.4000000000001,143.4000000000001,140.4000000000001,137.4000000000001,134.4000000000001,131.4000000000001,128.4000000000001,125.40000000000009,122.40000000000009,119.40000000000009,116.40000000000009,113.40000000000009,110.40000000000009,107.40000000000009,104.40000000000009,101.40000000000009,98.40000000000009,95.40000000000009,92.40000000000009,89.40000000000009,86.40000000000009,83.6000000000001,81.0000000000001,78.6000000000001,76.40000000000009,74.40000000000009,72.6000000000001,71.0000000000001,69.6000000000001,68.40000000000009,67.40000000000009,66.6000000000001,66.0000000000001,65.6000000000001,65.40000000000009,65.40000000000009,65.40000000000009,65.40000000000009]
var y = [-100,-100.50001,-101.5000400002,-103.000100001,-105.00020000300003,-107.5003500070001,-110.50056001400023,-114.0008400252005,-118.001200042001,-122.0015600588015,-126.001920075602,-130.00228009240251,-134.002640109203,-138.0030001260035,-142.003360142804,-146.0037201596045,-150.004080176405,-154.0044401932055,-158.004800210006,-162.0051602268065,-166.005520243607,-170.0058802604075,-174.006240277208,-178.0066002940085,-182.006960310809,-186.0073203276095,-190.00768034441,-194.0080403612105,-198.008400378011,-202.0087603948115,-206.009120411612,-210.0094804284125,-214.009840445213,-218.0102004620135,-222.010560478814,-226.0109204956145,-230.011280512415,-234.0116405292155,-238.012000546016,-242.0123605628165,-246.012720579617,-250.0130805964175,-254.013440613218,-258.0138006300185,-262.01416064681905,-266.0145206636196,-270.0148806804201,-274.01524069722063,-278.01560071402116,-282.0159607308217,-286.0163207476222,-290.01668076442274,-294.0170407812233,-298.0174007980238,-302.0177608148243,-306.01812083162486,-310.0184808484254,-314.0188408652259,-318.01920088202644,-322.01956089882697,-326.0199209156275,-330.020280932428,-334.02064094922855,-338.0210009660291,-342.0213609828296,-346.02172099963013,-350.02208101643066,-354.0224410332312,-358.0228010500317,-362.02316106683224,-366.0235210836328,-370.0238811004333,-374.0242411172338,-378.02460113403436,-382.0249611508349,-386.0253211676354,-390.02568118443594,-394.02604120123647,-398.026401218037,-402.0267612348375,-406.02712125163805,-410.0274812684386,-414.0278412852391,-418.02820130203963,-422.02856131884016,-426.0289213356407,-430.0292813524412,-434.02964136924174,-438.0300013860423,-442.0303614028428,-446.0307214196433,-450.03108143644386,-454.0314414532444,-458.0318014700449,-462.03216148684544,-466.03252150364597,-470.0328815204465,-474.033241537247,-478.03360155404755,-482.0339615708481,-486.0343215876486,-490.03468160444913,-494.03504162124966,-498.0354016380502,-502.0357616548507,-506.03612167165124,-510.0364816884518,-514.0368417052523,-518.0372017220528,-522.0375617388534,-525.5379117556539,-528.5382417722544,-531.038541788255,-533.0388018030554,-534.5390118158559,-535.5391618256563,-536.0392418312565,-536.0392418312565,-535.5391518240561,-534.5389618078553,-533.0386617806539,-531.0382417402516,-528.5376916842481,-525.5370016100431,-522.0361615148364,-518.0351613956274,-514.0341612764183,-510.0331611572093,-506.03216103800025,-502.0311609187912,-498.0301607995822,-494.5292506875735,-491.5284405845653,-489.02774049255777,-487.0271604137511,-485.5267103505456,-484.52640030554153,-484.0262402815393,-484.0262402815393,-484.526410308742,-485.526760366548,-487.0273004585579,-489.0280405885723,-491.528990760592,-494.53016097881795,-498.0315612476509,-502.033201571692,-506.0348418957331,-510.0364822197742,-514.0381225438152,-518.0397628678563,-522.0414031918974,-526.0430435159385,-530.0446838399796,-534.0463241640207,-538.0479644880618,-542.0496048121029,-546.051245136144,-550.052885460185,-554.0545257842261,-558.0561661082672,-562.0578064323083,-566.0594467563494,-570.0610870803905,-574.0627274044316,-578.0643677284727,-582.0660080525138,-586.0676483765549,-590.069288700596,-594.070929024637,-598.0725693486781,-602.0742096727192,-606.0758499967603,-610.0774903208014,-614.0791306448425,-618.0807709688836,-622.0824112929247,-625.583881589763,-628.585171855998,-631.0862720880293,-633.087172282056,-634.5878624340774,-635.5883325398926,-636.0885725951007,-636.0885725951007,-635.5883225350915,-634.5878124100719,-633.0870322148406,-631.0859719439962,-629.585161733161,-628.5846115873362,-628.0843315117231,-628.0843315117231,-628.5846215929378,-629.5852117611686,-631.0861120224174,-633.0873323828861,-635.5888828489766,-637.5901432338525,-639.0911035317121,-640.0917537365538,-640.5920838421756,-640.5920838421756,-640.0917437299516,-639.0910534987015,-637.5900031414228,-635.588582650913,-633.0867820197695,-630.0845912403895,-626.5820003049699,-622.5789992055077,-618.5759981060454,-614.5729970065831,-610.5699959071209,-606.5669948076586,-602.5639937081963,-598.5609926087341,-594.5579915092718,-590.5549904098095,-586.5519893103473,-582.548988210885,-578.5459871114227,-574.5429860119605,-570.5399849124982,-567.0373239252599,-564.0350130570478,-561.5330623148642,-559.5314817059117,-558.0302812375929,-557.0294709175107,-556.5290607534681,-556.5290607534681,-557.0294809257141,-558.0303312786094,-559.5316218207577,-561.5333625609627,-564.0355635082285,-567.0382346717591,-570.541386060959,-574.5450276854325,-578.548669309906,-582.5523109343795,-586.0555323866072,-589.0583236581855,-591.5606747405108,-593.5625756247792,-595.0640163019871,-596.06498676293,-596.5654769982036,-596.5654769982036,-596.0649767531252,-595.0639662529634,-593.5624354875132,-591.5603744463693,-589.0577731189262,-586.0546214943781,-582.5509095617191,-578.546627309743,-574.542345057767,-570.5380628057909,-566.5337805538148,-562.5294983018388,-558.5252160498627,-554.5209337978866,-550.5166515459106,-546.5123692939345,-542.5080870419584,-538.5038047899824,-534.4995225380063,-530.4952402860303,-526.9914582791326,-523.9881865273184,-521.4854350407925,-519.4832138299603,-517.9815329054273,-516.9804022779994,-516.4798319586823,-516.4798319586823,-516.9804122894058,-517.9815829624592,-519.4833539896497,-521.4857353829841,-523.9887371546698,-526.9923693171145,-530.4966418829258,-534.501564864912,-538.5064878468982,-542.5114108288843,-546.5163338108705,-550.5212567928567,-554.5261797748428,-558.531102756829,-562.0354454080916,-565.0391977170242,-567.5423496718199,-569.5448912604716,-571.0468124707719,-572.0481032903134,-572.5487537064881,-572.5487537064881,-572.048093277305,-571.0467624057303,-569.544751078355,-567.5420492815701,-565.0386470015661,-562.0345342243335,-558.5297009356622,-554.524137121142,-550.5185733066218,-546.5130094921016,-542.5074456775814,-538.5018818630612,-534.496318048541,-530.4907542340208,-526.4851904195006,-522.4796266049804,-518.4740627904602,-514.46849897594,-510.46293516141975,-506.45737134689955,-502.45180753237935,-498.44624371785915,-494.44067990333895,-490.43511608881875,-486.42955227429854,-482.42398845977834,-478.41842464525814,-474.9135212599211,-471.9092883169757,-469.4057358298308,-467.40287381209555,-465.9007122775794,-464.8992612402919,-464.398530714443,-464.398530714443,-464.8992712549024,-465.90076235063196,-467.4030140166428,-469.4060362681464,-471.9098391205544,-474.91443258947885,-478.41982669073207,-481.4244802515259,-483.9283832570495,-485.9315256922918,-487.43389754204145,-488.43548879088667,-488.93628942321544,-488.93628942321544,-488.435478774874,-487.43384746197825,-485.9313854681148,-483.92808277667007,-481.4239293708301,-478.41891523358055,-474.91303034770687,-470.90626469579405,-466.89949904388124,-462.8927333919684,-459.38677838839703,-456.38164404938004,-453.87734039133073,-451.8738774308627,-450.3712651847899,-449.3695136701266,-448.86863290408746,-448.86863290408746,-448.36774212043304,-447.36595053530846,-445.86324813069774,-443.8596248883845,-441.3550707899519,-438.34957581678293,-434.8431299500601,-430.8357231707654,-427.3292071751252,-424.3235919809551,-421.8188876062711,-419.8151040692897,-418.31225138842757,-417.3103395823019,-416.8093786697301,-415.8074468253683,-414.3045340297978,-412.3006302633996,-409.79572550635436,-406.78980973864213,-403.2828729400428,-399.2749050901357,-395.2669372402286,-391.25896939032145,-387.25100154041434,-383.2430336905072,-379.2350658406001,-375.227097990693,-371.21913014078586,-367.21116229087875,-363.20319444097163,-359.1952265910645,-355.1872587411574,-351.1792908912503,-347.17132304134316,-343.16335519143604,-339.1553873415289,-335.1474194916218,-331.1394516417147,-327.13148379180757,-323.12351594190045,-319.11554809199333,-315.1075802420862,-311.0996123921791,-307.091644542272,-303.08367669236486,-299.07570884245774,-295.0677409925506,-291.0597731426435,-287.0518052927364,-283.5447983554011,-280.5387623498558,-278.0337072955192,-276.0296432120103,-274.5265801191485,-273.5245280369536,-273.02349698564586,-273.02349698564586,-273.52453805757466,-273.52453805757466,-273.02348696482443,-272.02137475830216,-270.5181914167855,-268.51392691885184,-266.00857124287796,-263.00211436704035,-259.49454626931504,-255.48585692747753,-251.47716758564002,-247.4684782438025,-243.459788901965,-239.4510995601275,-235.44241021828998,-231.43372087645247,-227.42503153461496,-223.41634219277745,-219.40765285093994,-215.39896350910243,-211.39027416726492,-207.3815848254274,-203.3728954835899,-199.3642061417524,-195.35551679991488,-191.34682745807737,-187.33813811623986,-183.32944877440235,-179.32075943256484,-175.31207009072733,-171.30338074888982,-167.2946914070523,-163.2860020652148,-159.2773127233773,-155.26862338153978,-151.25993403970227,-147.25124469786476,-143.24255535602725,-139.23386601418974,-135.22517667235223,-131.71753842326495,-128.71096128794974,-126.20545528762888,-124.20103044372506,-122.69769677786141,-121.6954643118615,-121.19434306774933,-121.19434306774933,-121.69547433428639,-122.69774688998582,-124.20117075767342,-126.20575596037544,-128.71151252131855,-131.71845046392994,-135.22657981183724,-139.23591058886856,-143.2452413658999,-147.2545721429312,-151.26390291996253,-155.27323369699386,-159.28256447402518,-163.2918952510565,-167.30122602808783,-171.31055680511915,-175.31988758215047,-179.3292183591818,-183.33854913621312,-187.34787991324444,-191.35721069027576,-195.3665414673071,-199.3758722443384,-203.38520302136973,-207.39453379840106,-211.40386457543238,-215.4131953524637,-219.42252612949503,-223.43185690652635,-227.44118768355767,-231.450518460589,-235.45984923762032,-239.46918001465164,-243.47851079168296,-247.4878415687143,-251.4971723457456,-255.50650312277693,-259.51583389980823,-263.52516467683955,-267.5344954538709,-271.5438262309022,-275.5531570079335,-279.56248778496484,-283.57181856199617,-287.5811493390275,-291.5904801160588,-295.59981089309014,-299.60914167012146,-303.6184724471528,-307.6278032241841,-311.63713400121543,-315.64646477824675,-319.6557955552781,-323.6651263323094,-327.6744571093407,-331.68378788637204,-335.69311866340337,-339.7024494404347,-343.711780217466,-347.72111099449734,-351.73044177152866,-355.73977254856,-359.7491033255913,-363.75843410262263,-367.76776487965395,-371.7770956566853,-375.7864264337166,-379.7957572107479,-383.80508798777925,-387.81441876481057,-391.8237495418419,-395.8330803188732,-399.84241109590454,-403.85174187293586,-407.8610726499672,-411.8704034269985,-415.87973420402983,-419.88906498106115,-423.8983957580925,-427.9077265351238,-431.9170573121551,-435.92638808918645,-439.93571886621777,-443.9450496432491,-447.9543804202804,-451.96371119731174,-455.97304197434306,-459.9823727513744,-463.9917035284057,-468.00103430543703,-472.01036508246835,-476.0196958594997,-480.029026636531,-484.0383574135623,-488.04768819059365,-492.05701896762497,-496.0663497446563,-500.0756805216876,-504.08501129871894,-508.09434207575026,-512.1036728527815,-516.1130036298129,-520.1223344068442,-524.1316651838755,-528.1409959609068,-532.1503267379381,-536.1596575149695,-540.1689882920008,-544.1783190690321,-548.1876498460634,-552.1969806230948,-556.2063114001261,-560.2156421771574,-564.2249729541887,-568.23430373122,-572.2436345082514,-576.2529652852827,-580.262296062314,-584.2716268393453,-588.2809576163767,-592.290288393408,-596.2996191704393,-600.3089499474706,-604.318280724502,-608.3276115015333,-612.3369422785646,-616.3462730555959,-620.3556038326273,-624.3649346096586,-628.3742653866899,-632.3835961637212,-636.3929269407525,-640.4022577177839,-644.4115884948152,-648.4209192718465,-652.4302500488778,-656.4395808259092,-660.4489116029405,-664.4582423799718,-668.4675731570031,-672.4769039340345,-676.4862347110658,-680.4955654880971,-684.5048962651284,-688.5142270421597,-692.5235578191911,-696.5328885962224,-700.5422193732537,-704.551550150285,-708.5608809273164,-712.5702117043477,-716.579542481379,-720.5888732584103,-724.5982040354417,-728.607534812473,-732.6168655895043,-736.6261963665356,-740.635527143567,-744.6448579205983,-748.6541886976296,-752.6635194746609,-756.6728502516922,-760.6821810287236,-764.6915118057549,-768.7008425827862,-772.7101733598175,-776.7195041368489,-780.7288349138802,-784.7381656909115,-788.7474964679428,-792.7568272449741,-796.7661580220055,-800.7754887990368,-804.7848195760681,-808.7941503530994,-812.8034811301308,-816.8128119071621,-820.8221426841934,-824.8314734612247,-828.840804238256,-832.8501350152874,-836.8594657923187,-840.86879656935,-844.8781273463813,-848.8874581234127,-852.896788900444,-856.9061196774753,-860.9154504545066,-864.924781231538,-868.9341120085693,-872.9434427856006,-876.9527735626319,-880.9621043396633,-884.9714351166946,-888.9807658937259,-892.9900966707572,-896.9994274477885,-901.0087582248199,-905.0180890018512,-909.0274197788825,-913.0367505559138,-917.0460813329452,-921.0554121099765,-925.0647428870078,-929.0740736640391,-933.0834044410705,-937.0927352181018,-941.1020659951331,-945.1113967721644,-949.1207275491957,-953.1300583262271,-957.1393891032584,-961.1487198802897,-965.158050657321,-969.1673814343524,-973.1767122113837,-977.186042988415,-981.1953737654463,-985.2047045424777,-989.214035319509,-993.2233660965403,-997.2326968735716,-1001.242027650603,-1005.2513584276343,-1009.2606892046656,-1013.2700199816969,-1017.2793507587282,-1021.2886815357596,-1025.298012312791,-1029.307343089822,-1033.3166738668533,-1037.3260046438845,-1041.3353354209157,-1045.344666197947,-1049.3539969749781,-1053.3633277520094,-1057.3726585290406,-1061.3819893060718,-1065.391320083103,-1069.4006508601342,-1073.4099816371654,-1077.4193124141966,-1081.4286431912278,-1085.437973968259,-1089.4473047452902,-1093.4566355223214,-1097.4659662993527,-1101.4752970763839,-1105.484627853415,-1109.4939586304463,-1113.5032894074775,-1117.5126201845087,-1121.52195096154,-1125.5312817385711,-1129.5406125156023,-1133.5499432926335,-1137.5592740696648,-1141.568604846696,-1145.5779356237272,-1149.5872664007584,-1153.5965971777896,-1157.6059279548208,-1161.615258731852,-1165.6245895088832,-1169.6339202859144,-1173.6432510629456,-1177.6525818399768,-1181.661912617008,-1185.6712433940393,-1189.6805741710705,-1193.6899049481017,-1197.699235725133,-1201.708566502164,-1205.7178972791953,-1209.7272280562265,-1213.7365588332577,-1217.745889610289,-1221.7552203873202,-1225.7645511643514,-1229.7738819413826,-1233.7832127184138,-1237.792543495445,-1241.8018742724762,-1245.8112050495074,-1249.8205358265386,-1253.8298666035698,-1257.839197380601,-1261.8485281576322,-1265.8578589346635,-1269.8671897116947,-1273.8765204887259,-1277.885851265757,-1281.8951820427883,-1285.9045128198195,-1289.9138435968507,-1293.923174373882,-1297.9325051509131,-1301.9418359279443,-1305.9511667049755,-1309.9604974820068,-1313.969828259038,-1317.9791590360692,-1321.9884898131004,-1325.9978205901316,-1330.0071513671628,-1334.016482144194,-1338.0258129212252,-1342.0351436982564,-1346.0444744752876,-1350.0538052523189,-1354.06313602935,-1357.5713355398443,-1360.5783937611761,-1363.0843006705197,-1365.089046244849,-1366.5926204609373,-1367.5950132953571,-1368.0962147244811,-1368.0962147244811,-1367.5950032713286,-1366.5925703407943,-1365.0889059084489,-1363.0839999496623,-1360.5778424396037,-1357.5704233532424,-1354.0617326653469,-1350.051760350485,-1346.041788035623,-1342.0318157207612,-1338.5230548590519,-1335.5155154747242,-1333.0092075922078,-1331.0041412361325,-1329.500326431329,-1328.4977732028285,-1327.9964915758621,-1327.9964915758621,-1328.497783228461,-1329.5003765594918,-1331.004281594988,-1333.0095083611839,-1335.516066884514,-1338.5239671916136,-1342.0332193093182,-1346.043833264664,-1350.05444722001,-1354.0650611753558,-1358.0756751307017,-1362.0862890860476,-1366.0969030413935,-1370.1075169967394,-1374.1181309520853,-1378.1287449074312,-1382.139358862777,-1386.149972818123,-1390.1605867734688,-1394.1712007288147,-1398.1818146841606,-1402.1924286395065,-1406.2030425948524,-1410.2136565501983,-1414.2242705055442,-1417.7335928082912,-1420.741613432606,-1423.2483223524555,-1425.2537095416053,-1426.7577649736209,-1427.7604786218672,-1428.2618404595084,-1428.2618404595084,-1427.7604685946305,-1426.7577148374373,-1426.256332945122,-1426.256332945122,-1426.7577248650753,-1427.76051873282,-1429.264724576395,-1431.2703524240403,-1433.7774123041956,-1436.7859142455018,-1440.2958682767999,-1444.3072844271317,-1448.3187005774635,-1452.3301167277953,-1456.341532878127,-1460.3529490284589,-1464.3643651787906,-1468.3757813291224,-1472.3871974794542,-1476.398613629786,-1480.4100297801178,-1484.4214459304496,-1488.4328620807814,-1492.4442782311132,-1496.455694381445,-1500.4671105317768,-1504.4785266821086,-1508.4899428324404,-1512.5013589827722,-1516.512775133104,-1520.5241912834358,-1524.0342155138144,-1527.0428377964015,-1529.5500481031581,-1531.5558364058447,-1533.0601926760212,-1534.0631068850469,-1535.5674932423487,-1537.5733617773697,-1540.0807225197534,-1543.089585499344,-1546.5999607461858,-1550.6118582905249,-1554.623755834864,-1558.635653379203,-1562.647550923542,-1566.659448467881,-1570.67134601222,-1574.683243556559,-1578.6951411008981,-1582.7070386452372,-1586.7189361895762,-1590.2293816439233,-1593.2383649792364,-1595.7458761662735,-1597.7519051755914,-1599.2564419775467,-1600.2594765422953,-1600.7609988397921,-1600.7609988397921,-1600.2594665118493,-1599.256391825317,-1597.7517647493482,-1595.745575252895,-1593.2378133047089,-1590.228468873341,-1586.7175319271416,-1582.7049924342605,-1578.6924529413793,-1574.6799134484982,-1570.667373955617,-1566.6548344627358,-1562.6422949698547,-1559.1312878049164,-1556.1218229985675,-1553.6139105816553,-1551.6075605852275,-1550.1027830405324,-1549.0995879790191,-1548.5979854323373,-1548.5979854323373,-1549.09959801107,-1550.102833200787,-1551.6077010339404,-1553.6142115431833,-1556.122374761369,-1559.1322007215517,-1562.6436994569865,-1566.6568810011286,-1570.6700625452706,-1574.6832440894127,-1578.6964256335548,-1582.2079945989642,-1585.2179409533894,-1587.726254664378,-1589.7329256992773,-1591.2379440252337,-1592.241299609193,-1592.7429824179005,-1592.7429824179005,-1592.241289575537,-1591.237893856953,-1589.732785228091,-1587.7259536546928,-1585.2173891022996,-1582.2070815362517,-1578.6950209216889,-1574.6811972235503,-1570.6673735254117,-1566.653549827273,-1562.6397261291345,-1558.625902430996,-1554.6120787328573,-1550.5982550347187,-1546.58443133658,-1542.5706076384415,-1538.556783940303,-1534.5429602421643,-1530.5291365440257,-1526.5153128458871,-1522.5014891477485,-1518.48766544961,-1514.4738417514714,-1510.4600180533328,-1506.4461943551942,-1502.4323706570556,-1498.9202398012806,-1495.909811821726,-1493.4010967524493,-1491.3941046277089,-1489.8888454819635,-1488.8853293498726,-1488.3835662662966,-1488.3835662662966,-1488.885339385134,-1489.8888956582716,-1491.394245121372,-1493.4013978102994,-1495.910363761118,-1498.9211530100933,-1502.433775593691,-1505.4446250584513,-1507.9536913689114,-1509.9609644894088,-1511.466434384079,-1512.4700910168583,-1512.9719243514808,-1512.9719243514808,-1512.4700809801916,-1511.4663842007458,-1509.960823976075,-1507.9533902689107,-1505.4440730417828,-1502.4328622570213,-1498.9197478767549,-1494.9047198629116,-1490.8896918490684,-1486.8746638352252,-1482.859635821382,-1478.8446078075388,-1474.8295797936955,-1470.8145517798523,-1466.799523766009,-1462.7844957521659,-1458.7694677383226,-1454.7544397244794,-1450.7394117106362,-1446.724383696793,-1442.7093556829498,-1438.6943276691065,-1434.6792996552633,-1430.66427164142,-1426.6492436275769,-1422.6342156137337,-1418.6191875998904,-1414.6041595860472,-1410.589131572204,-1406.5741035583608,-1403.0609189158067,-1400.0495876814093,-1397.5401198922366,-1395.5325255855578,-1394.0268147988422,-1393.0229975697605,-1392.5210839361837,-1392.5210839361837,-1393.0230076080331,-1394.0268649902057,-1395.5326661213753,-1397.540421040417,-1400.0501397864066,-1403.0618323986207,-1406.5755089165366,-1409.5872617626028,-1412.0970808983461,-1414.1049562850924,-1415.6108778839664,-1416.6148356558926,-1417.1168195615944,-1417.1168195615944,-1416.6148256162146,-1415.610827685576,-1414.1048157295988,-1412.0967797080027,-1409.5867095803064,-1406.5745953058276,-1403.0604268436834,-1399.0441941527902,-1395.027961461897,-1391.0117287710036,-1386.9954960801103,-1382.979263389217,-1378.9630306983238,-1374.9467980074305,-1370.9305653165372,-1366.914332625644,-1362.8980999347507,-1358.8818672438574,-1354.8656345529641,-1350.8494018620709,-1346.8331691711776,-1342.8169364802843,-1338.800703789391,-1334.7844710984978,-1330.7682384076045,-1326.7520057167112,-1322.735773025818,-1318.7195403349247,-1314.7033076440314,-1310.687074953138,-1306.6708422622448,-1302.6546095713516,-1298.6383768804583,-1294.622144189565,-1290.6059114986717,-1286.5896788077785,-1282.5734461168852,-1278.557213425992,-1274.5409807350986,-1270.5247480442054,-1266.508515353312,-1262.4922826624188,-1258.4760499715255,-1254.4598172806323,-1250.443584589739,-1246.4273518988457,-1242.4111192079524,-1238.3948865170591,-1234.3786538261659,-1230.3624211352726,-1226.3461884443793,-1222.329955753486,-1218.8157170079726,-1215.803482247718,-1213.2932615128018,-1211.2850648435046,-1209.7789022803079,-1208.7747838638934,-1208.2727196351443,-1208.2727196351443,-1208.774793905178,-1209.7789524867308,-1211.2852054214889,-1213.2935627513393,-1215.8040345183701,-1218.8166307648698,-1222.3313615333282,-1226.3482368664356,-1230.365112199543,-1234.3819875326506,-1238.398862865758,-1242.4157381988655,-1246.432613531973,-1250.4494888650804,-1254.4663641981879,-1258.4832395312953,-1262.5001148644028,-1266.5169901975103,-1266.5169901975103,-1266.5169901975103]


var drawings = []

for (var ii = 0; ii < x.length - 1; ii++) {
	drawings.push(new Drawing({position:{
		x:(x[ii] +500)/8, y:(y[ii] *-1 + 280)/8
	}}))
	}

iii = 0

function animate(){
	window.requestAnimationFrame(animate)
	i.draw()

		console.log(drawings)
	
	// if (iii> drawings.length-1){
	// 	drawings.forEach((drawing)=>{
	// 		drawing.draw()
	// 	})
	// } else {
	// 	drawings[iii].draw()

	// iii+=1
	// }

	for (var g = 0; g <= iii; g++) {
		drawings[g].draw()
	}


	iii+=2
	
}


animate()