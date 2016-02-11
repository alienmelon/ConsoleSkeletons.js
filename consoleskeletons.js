function consoleskeleton(type){
	//bone vars
	var counter = 0;//to count
	//what to flood the console with?
	if(type == undefined || type == null){
		//skeletor by default because skeletor loves consoles
		type = "skeletor";
	}
	console.log("INITIATING "+type.toUpperCase()+"!");
	//arrays for animating
	//skeletons love arrays!
	//"skeletor"
	function skeletor(){
		if(counter == 1){
			console.log("░░░░░░░░░░░░░░░░░░░"); 
			console.log("░░░░░░░░░░░░▄▐░░░░░"); 
			console.log("░░░░░░▄▄▄░░▄██▄░░░░"); 
			console.log("░░░░░▐▀█▀▌░░░░▀█▄░░"); 
			console.log("░░░░░▐█▄█▌░░░░░░▀█▄"); 
			console.log("░░░░░░▀▄▀░░░▄▄▄▄▄▀▀"); 
			console.log("░░░░▄▄▄██▀▀▀▀░░░░░░"); 
			console.log("░░░█▀▄▄▄█░▀▀░░░░░░░"); 
			console.log("░░░▌░▄▄▄▐▌▀▀▀░░░░░░"); 
			console.log("▄░▐░░░▄▄░█░▀▀░░░░░░"); 
			console.log("▀█▌░░░▄░▀█▀░▀░░░░░░"); 
			console.log("░░░░░░░▄▄▐▌▄▄░░░░░░"); 
			console.log("░░░░░░░▀███▀█░▄░░░░"); 
			console.log("░░░░░░▐▌▀▄▀▄▀▐▄░░░░"); 
			console.log("░░░░░░▐▀░░░░░░▐▌░░░"); 
			console.log("░░░░░░█░░░░░░░░█░░░"); 
			console.log("░░░░░▐▌░░░░░░░░░█░░"); 
			console.log("░░░░░█░░░░░░░░░░▐▌░");
			console.log("░░░░░░░░░░░░░░░░░░░"); 
		};
		if(counter == 2){
			console.log("░░░░░▐▄░░░░░░░░░░░░"); 
			console.log("░░░░▄██▄░░▄▄▄░░░░░░"); 
			console.log("░░▄█▀░░░░▐▀█▀▌░░░░░"); 
			console.log("▄█▀░░░░░░▐█▄█▌░░░░░"); 
			console.log("▀▀▄▄▄▄▄░░░▀▄▀░░░░░░"); 
			console.log("░░░░░░▀▀▀▀██▄▄▄░░░░"); 
			console.log("░░░░░░░▀▀░█▄▄▄▀█░░░"); 
			console.log("░░░░░░▀▀▀▐▌▄▄▄░▌░░░"); 
			console.log("░░░░░░▀▀░█░▄▄░░░▐░▄"); 
			console.log("░░░░░░▀░▀█▀░▄░░░▌█▀"); 
			console.log("░░░░░░▄▄▐▌▄▄░░░░░░░"); 
			console.log("░░░░▄░█▀███▀░░░░░░░"); 
			console.log("░░░░▄▐▀▄▀▄▀▐▌░░░░░░"); 
			console.log("░░░▐▌░░░░░░▀▐░░░░░░"); 
			console.log("░░░█░░░░░░░░█░░░░░░"); 
			console.log("░░█░░░░░░░░░▐▌░░░░░"); 
			console.log("░▐▌░░░░░░░░░░█░░░░░");
		}
		if(counter >= 2){
			counter = 0;
		}
	};
	//"lolskull"
	function lolskull(){
		//lols for the lolskull
		var arr_lolskull = ["AH", "YA", "HA", "UH", "OH", "EY", "YO"];
		var str_lol = arr_lolskull[Math.ceil(Math.random()*arr_lolskull.length)-1];
		//
		if(counter == 1){
			console.log("░░░░░░░░░░░░");
			console.log("░░.-^--^-.░░");
			console.log("░/        \░");
			console.log("░:(_)  (_);░");
			console.log("░`   ''   '░");
			console.log("░░░`++++'░░░");
			console.log("░░░░`--'░░░░");
			console.log("░░░░░░░░░░░░");
		}
		if(counter == 2){
			console.log("░░░░░░░░░░░░");
			console.log("░░.-^--^-.░░");
			console.log("░/        \░");
			console.log("░:(_)  (_);░");
			console.log("░`   ''   '░");
			console.log("░░░`++++'░░░");
			console.log("░░░░|"+str_lol+"|░░░░");
			console.log("░░░░++++░░░░");
			console.log("░░░░`--'░░░░");
			console.log("░░░░░░░░░░░░");
		}
		if(counter >= 2){
			counter = 0;
		}
	}
	//"barrelroll"
	function barrelroll(){
		var arr_barrel = ["i rock", "yes", "ohyes", "xtreme", "uh!", "hellyes", "yo"];
		var str_barrel = arr_barrel[Math.ceil(Math.random()*arr_barrel.length)-1];
		if(counter == 1){
			console.log("░░░░░░░░░░░░░░");
			console.log("░BARREL ROLL!░");
			console.log("░░░░░░░░░░░░░░");
		}
		if(counter == 2){
			console.log("._.");
		}
		if(counter == 3){
			console.log("|:");
		}
		if(counter == 4){
			console.log(".-.");
		}
		if(counter == 5){
			console.log(":|");
		}
		if(counter == 6){
			console.log("._.");
		}
		if(counter == 7){
			console.log("・o・ <"+str_barrel+")");
		}
		if(counter >= 7){
			counter = 0;
		};
	}
	//"YMCA"
	function ymca(){
		if(counter == 1){
			console.log("░░░");
			console.log("░Y░");
			console.log("░░░");
			console.log("    ＼o／");
		}
		if(counter == 2){
			console.log("░░░");
		 	console.log("░M░");
		 	console.log("░░░");
		    console.log("    |o|");
		};
		if(counter == 3){
			console.log("░░░");
			console.log("░C░");
			console.log("░░░");
			console.log("    ／o_");
		};
		if(counter == 4){
		 	console.log("░░░");
		 	console.log("░A░");
		 	console.log("░░░");
		 	console.log("    ／o＼ ");
		};
		if(counter >= 4){
			counter = 0;
		}
	}
	//"orly"
	function orly(){
		if(counter == 1){
			console.log("___");
			console.log("(o,o)");
			console.log("|)__)");
			console.log("-”-”-");
			console.log("O RLY?");
		};
		if(counter == 2){
			console.log(" ____");
			console.log("(◎▽ ◎)");
			console.log("(---(|");
			console.log("-“-“-");
			console.log("YA SRSLY!");
		};
		if(counter == 3){
			console.log("___");
			console.log("(o,o)");
			console.log("|)__)");
			console.log("-”-”-");
			console.log("NO WAI?");
		};
		if(counter == 4){
			console.log(" ____");
			console.log("(◎▽ ◎)");
			console.log("(---(|");
			console.log("-“-“-");
			console.log("YAS WAI!");
		};
		if(counter == 5){
			console.log("___");
			console.log("(o,o)");
			console.log("|)__)");
			console.log("-”-”-");
			console.log("NO RLY!?!?");
		};
		if(counter == 6){
			console.log(" ____");
			console.log("(◎▽ ◎)");
			console.log("(---(|");
			console.log("-“-“-");
			console.log("RLY!!!");
		};
		if(counter >= 6){
			counter = 0;
		}
	}
	//"moocow"
	function moocow(){
		if(counter == 1){
			console.log("¬_¬");
		};
		if(counter == 2){
			console.log("¬—¬");
		};
		if(counter == 3){
			console.log("„o");
		};
		if(counter == 4){
			console.log("MOOOO!");
		};
		if(counter >= 4){
			counter = 0;
		};
	}
	//"Timothy"
	//Timothy's dance moves are random
	//Timothy is unpredictable on the dance floor
	function Timothy(){
		var arr_timothies = [":D-<",":D|-<",":D／-<",":D＼-<"];
		console.log(arr_timothies[Math.ceil(Math.random()*arr_timothies.length)-1]);
	}
	//
	function assaultconsole(){
		//check what type then assault the console
		if(type == "skeletor"){
			skeletor();
		}
		if(type == "lolskull"){
			lolskull();
		}
		if(type == "barrelroll"){
			barrelroll();
		}
		if(type == "YMCA"){
			ymca();
		}
		if(type == "orly"){
			orly();	
		}
		if(type == "moocow"){
			moocow();
		}
		if(type == "Timothy"){
			Timothy();
		}
		//count up
		counter +=1;
	}
	//now begin assault
	//asault is interval based because skeletons love intervals
	var skeletonInt = setInterval(assaultconsole, 800);
	//
}