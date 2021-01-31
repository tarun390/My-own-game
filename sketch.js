const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var killedEnemy1 = 0,killedEnemy2 = 0,killedEnemy3 = 0,killedEnemy4 = 0,killedEnemy5 = 0,killedEnemy6 = 0,killedEnemy7 = 0,killedEnemy8 = 0,killedEnemy9 = 0,killedEnemyBoss = 0;

var police,policeImg,bullet,bg
var npc1 ,npcImage,bossImg,bullet1,bullet2
var npc2 ,npc3,npc4,npc5,npc6,npc7,npc8,npc9,npcBoss;

var destroy = 1;

function preload(){
	policeImg = loadImage("jpg/imagePolice.png");
	npcImg = loadImage("jpg/enemy.png");
	bullet1 = loadImage("jpg/bullet.png");
	bullet2 = loadImage("jpg/bullet2.png");
	bossImg = loadImage("jpg/boss.png");
    bg = loadImage("jpg/bg.jpg")
}

function setup() {
	createCanvas(800, 1500);
	bulletGroup1 = new Group()
	bulletGroup2 = new Group()
	bulletGroup3 = new Group()
	bulletGroup4 = new Group()
	bulletGroup5 = new Group()
	bulletGroup6 = new Group()
	bulletGroup7 = new Group()
	bulletGroup8 = new Group()
	bulletGroup9 = new Group()

	police = createSprite(400,1000,10,20);
	police.addImage(policeImg);
	police.scale=0.4

	npc1 = createSprite(random(50,750),500,10,20);
	npc1.addImage(npcImg);
	npc1.scale=0.4;

	

	npc2 = createSprite(random(50,750),-1000,10,20);
	npc2.addImage(npcImg);
	npc2.scale=0.4


	npc4 = createSprite(random(50,750),-2000,10,20);
	npc4.addImage(npcImg);
	npc4.scale=0.4

	npc5 = createSprite(random(50,750),-3000,10,20);
	npc5.addImage(npcImg);
	npc5.scale=0.4

	npc6 = createSprite(random(50,750),-4000,10,20);
	npc6.addImage(npcImg);
	npc6.scale=0.4

	npc7 = createSprite(random(50,750),-5000,10,20);
	npc7.addImage(npcImg);
	npc7.scale=0.4

	npc8 = createSprite(random(50,750),-6000,10,20);
	npc8.addImage(npcImg);
	npc8.scale=0.4
	
	npc9 = createSprite(random(50,750),-8000,10,20);
	npc9.addImage(npcImg);
	npc9.scale=0.4

	npcBoss = createSprite(random(50,750),-10000,10,20);
	npcBoss.addImage(bossImg);
	npcBoss.scale=1


	
}

function draw() {
	background(bg);
	
	if(keyDown("w")){
		police.y-=10;
	}
	 else if(keyDown("s")){
	 	police.y+=5;
	}
	else if(keyDown("a")){
		police.x-=10;
	}
	else if(keyDown("d")){
		police.x+=10;
	}
	//callEnemyBullet(npc1.x, npc1.y, 1);
	

	if(bulletGroup1.isTouching(npc2)){
		if(killedEnemy2 === 3){
			npc2.destroy();
			
		}
		bulletGroup1.destroyEach();
        bulletGroup2.destroyEach();
		bulletGroup3.destroyEach();
		console.log(killedEnemy2)
		killedEnemy2 +=1
	}
	if(killedEnemy2 < 3){
		for(var i = 0; i < 1; i+i+0.1){
			bullet = createSprite(npc2.x,npc2.y,20,35);
			bullet.addImage(bullet2);
			bullet.scale=0.2;
			bullet.velocityY = 60;
			bullet.lifetime = 200;
			bulletGroup2.add(bullet);
			console.log("loop1");
		}
}	

	// if(bulletGroup1.isTouching(npc2)){
	// 	if(killedEnemy2 === 3){
	// 		npc2.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	bulletGroup2.destroyEach();
	// 	bulletGroup3.destroyEach();
	// 	killedEnemy2 +=1
	// }

	// if(bulletGroup1.isTouching(npc3)){
	// 	if(killedEnemy3 === 2){    
	// 		npc3.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy3 +=1
	// }

	// if(bulletGroup1.isTouching(npc4)){
	// 	if(killedEnemy4 === 2){
	// 		npc4.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy4 +=1
	// }

	// if(bulletGroup1.isTouching(npc5)){
	// 	if(killedEnemy5 === 2){
	// 		npc5.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy5 +=1
	// }

	// if(bulletGroup1.isTouching(npc6)){
	// 	if(killedEnemy6 === 2){
	// 		npc6.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy6 +=1
	// }

	// if(bulletGroup1.isTouching(npc7)){
	// 	if(killedEnemy7 === 2){
	// 		npc7.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy7 +=1
	// }

	// if(bulletGroup1.isTouching(npc8)){
	// 	if(killedEnemy8 === 3){
	// 		npc8.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy8 +=1
	// }

	// if(bulletGroup1.isTouching(npc9)){
	// 	if(killedEnemy9 === 3){
	// 		npc9.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemy9 +=1
	// }

	// if(bulletGroup1.isTouching(npcBoss)){
	// 	if(killedEnemyBoss === 9){
	// 		npcBoss.destroy();
	// 	}
	// 	bulletGroup1.destroyEach();
	// 	killedEnemyBoss +=1;
	// }


	
	camera.position.x = displayWidth/2;
	camera.position.y = police.y;
	

	drawSprites();
}

function mouseClicked() {
	callPoliceBullet();
}

function callPoliceBullet() {
	var bullet = createSprite(police.x, police.y,20,35);
	bullet.addImage(bullet1);
	bullet.scale=0.2;
	bullet.velocityY = -60;
	bullet.lifetime = 200;
	

	bulletGroup1.add(bullet);
}

function callEnemyBullet(x, y, npcNumber) {
if (frameCount % 60 === 0) {	
		bullet = createSprite(x,y,20,35);
		bullet.addImage(bullet2);
		bullet.scale=0.2;
		bullet.velocityY = 60;
		bullet.lifetime = 200;

		switch(npcNumber){
			case 1: bulletGroup2.add(bullet);
			break;
			case 2: bulletGroup3.add(bullet);
			break;
			case 3: bulletGroup4.add(bullet);
			break;
			case 4: bulletGroup5.add(bullet);
			break;
			case 5: bulletGroup6.add(bullet);
			break;
			case 6: bulletGroup7.add(bullet);
			break;
			case 7: bulletGroup8.add(bullet);
			break;
			case 8: bulletGroup9.add(bullet);
			break;

		}
		
	}
}