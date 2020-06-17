	window.onload = function() {}


	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}



	var money = 10000;
	document.getElementById('money').innerHTML = money.toFixed();


	var veg = 10;
	document.getElementById('veg-num').innerHTML = veg.toFixed();
	document.getElementById('veg-num-r').innerHTML = veg.toFixed();

	var fruit = 0;
	document.getElementById('fruit-num').innerHTML = fruit.toFixed();
	document.getElementById('fruit-num-r').innerHTML = fruit.toFixed();

	var berr = 0;
	document.getElementById('berr-num').innerHTML = berr.toFixed();
	document.getElementById('berr-num-r').innerHTML = berr.toFixed();


	var villagerCount = 0;
	var timerVillager;
	var villagerCent = 20;
	document.getElementById('VillagerCent').innerHTML = villagerCent.toFixed();



	function Villager(count) {
  		return setInterval(() => {   	
			veg = veg + (count * 0.02);
			fruit = fruit + (count * 0.02);
			berr = berr + (count * 0.05);

			document.getElementById('veg-num').innerHTML = veg.toFixed();
			document.getElementById('veg-num-r').innerHTML = veg.toFixed();
			document.getElementById('fruit-num').innerHTML = fruit.toFixed();
			document.getElementById('fruit-num-r').innerHTML = fruit.toFixed();
			document.getElementById('berr-num').innerHTML = berr.toFixed();
			document.getElementById('berr-num-r').innerHTML = berr.toFixed();
		}, 1000);
	}


	

	function get_veg() {
		veg = veg + getRandomInt(1, 3);
		document.getElementById('veg-num').innerHTML = veg.toFixed();
		document.getElementById('veg-num-r').innerHTML = veg.toFixed();
	}

	function get_fruit() {
		fruit = fruit + getRandomInt(1, 3);
		document.getElementById('fruit-num').innerHTML = fruit.toFixed();
		document.getElementById('fruit-num-r').innerHTML = fruit.toFixed();
	}

	function get_berr() {
		berr = berr + getRandomInt(2, 6);
		document.getElementById('berr-num').innerHTML = berr.toFixed();
		document.getElementById('berr-num-r').innerHTML = berr.toFixed();
	}


	function sellVeg() {
		if(veg >= 20) {
			veg = veg - 20;
			money = money + 2;
			document.getElementById('money').innerHTML = money.toFixed();
			document.getElementById('veg-num-r').innerHTML = veg.toFixed();
			document.getElementById('veg-num').innerHTML = veg.toFixed();
		}
		else {
			alert("У вас недостаточно овощей...");
		}
	}

	function sellFruit() {
		if(fruit >= 20) {
			fruit = fruit - 20;
			money = money + 2;
			document.getElementById('money').innerHTML = money.toFixed();
			document.getElementById('fruit-num-r').innerHTML = fruit.toFixed();
			document.getElementById('fruit-num').innerHTML = fruit.toFixed();
		}
		else {
			alert("У вас недостаточно фруктов...");
		}
	}

	function sellBerr() {
		if(berr >= 50) {
			berr = berr - 50;
			money = money + 2;
			document.getElementById('money').innerHTML = money.toFixed();
			document.getElementById('berr-num-r').innerHTML = berr.toFixed();
			document.getElementById('berr-num').innerHTML = berr.toFixed();
		}
		else {
			alert("У вас недостаточно ягод...");
		}
	}


	function buyVillager() {
  		if(money >= villagerCent) {
  			clearInterval(timerVillager);
    		villagerCount = villagerCount + 1;
    		timerVillager = Villager(villagerCount);
    		money = money - villagerCent;
    		document.getElementById('money').innerHTML = money.toFixed();
    		villagerCent = villagerCent * 1.1;
    		document.getElementById('VillagerCent').innerHTML = villagerCent.toFixed();
		}
		else {
			alert("У вас недостаточно монет...");
		}
	}