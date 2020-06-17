	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}



	var money = 10000;
	document.getElementById('money').innerHTML = money.toFixed();


	var veg = 0;
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
	document.getElementById('villager-num-r').innerHTML = villagerCount.toFixed();



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



	function vegCountCent() {
  		setInterval(() => {
  			var vegCount = document.getElementById('vegCount').value;   	
			var vegCountCent = ((Math.floor(vegCount/20)) * 2);

			document.getElementById('vegCountCent').innerHTML = vegCountCent.toFixed();
		}, 500);
	}

	function fruitCountCent() {
  		setInterval(() => {
  			var fruitCount = document.getElementById('fruitCount').value;   	
			var fruitCountCent = ((Math.floor(fruitCount/20)) * 2);

			document.getElementById('fruitCountCent').innerHTML = fruitCountCent.toFixed();
		}, 500);
	}

	function berrCountCent() {
  		setInterval(() => {
  			var berrCount = document.getElementById('berrCount').value;   	
			var berrCountCent = ((Math.floor(berrCount/50)) * 2);

			document.getElementById('berrCountCent').innerHTML = berrCountCent.toFixed();
		}, 500);
	}


	vegCountCent();
	fruitCountCent();
	berrCountCent();

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
		var vegCount = document.getElementById('vegCount').value;
		if(veg >= vegCount) {
			if(vegCount < 20) {
				alert('Минимальное количество овощей для продажи - 20 штук!');
			}
			else if(vegCount > 999) {
				alert('Максимальное количество овощей для продажи - 999 штук!');
			}
			else {
				veg = veg - vegCount;
				money = money + ((Math.floor(vegCount/20)) * 2);
				document.getElementById('money').innerHTML = money.toFixed();
				document.getElementById('veg-num-r').innerHTML = veg.toFixed();
				document.getElementById('veg-num').innerHTML = veg.toFixed();
			}
		}
		else {
			alert("У вас недостаточно овощей...");
		}
	}

	function sellFruit() {
		var fruitCount = document.getElementById('fruitCount').value;
		if(fruit >= fruitCount) {
			if(fruitCount < 20) {
				alert('Минимальное количество фруктов для продажи - 20 штук!');
			}
			else if(fruitCount > 999) {
				alert('Максимальное количество фруктов для продажи - 999 штук!');
			}
			else {
				fruit = fruit - fruitCount;
				money = money + ((Math.floor(fruitCount/20)) * 2);
				document.getElementById('money').innerHTML = money.toFixed();
				document.getElementById('fruit-num-r').innerHTML = fruit.toFixed();
				document.getElementById('fruit-num').innerHTML = fruit.toFixed();
			}
		}
		else {
			alert("У вас недостаточно фруктов...");
		}
	}

	function sellBerr() {
		var berrCount = document.getElementById('berrCount').value;
		if(berr >= berrCount) {
			if(berrCount < 50) {
				alert('Минимальное количество ягод для продажи - 50 штук!');
			}
			else if(berrCount > 999) {
				alert('Максимальное количество ягод для продажи - 999 штук!');
			}
			else {
				berr = berr - berrCount;
				money = money + ((Math.floor(berrCount/50)) * 2);
				document.getElementById('money').innerHTML = money.toFixed();
				document.getElementById('berr-num-r').innerHTML = berr.toFixed();
				document.getElementById('berr-num').innerHTML = berr.toFixed();
			}
		}
		else {
			alert("У вас недостаточно ягод...");
		}
	}


	function buyVillager() {
  		if(money >= villagerCent) {
  			clearInterval(timerVillager);
    		villagerCount = villagerCount + 1;
    		document.getElementById('villager-num-r').innerHTML = villagerCount.toFixed();
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