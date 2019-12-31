const timer = document.querySelector(".countdown");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const start = document.querySelector(".start");
const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");

let second = Number(sec.textContent);
let minut = Number(min.textContent);

(function(a){
	time = a + "0"
	sec.textContent = time;
	min.textContent = time;
})(0)

duble_number = function(time, elem){
	if (time < 10) {
		let duble = "0" + String(time)
		elem.textContent = duble
		return elem.textContent
	}
	elem.textContent = time
	return elem.textContent
}
pluser_min = function(){
	minut++
	if (minut < 59){
		duble_number(minut, min)
	}
	else{
		alert("Максимальное время таймер = 59:59")
	}
}
pluser = function(){
	if (second < 59){
		second ++
		duble_number(second, sec)
	}
	else{
	second = "00"
	sec.textContent = second
	pluser_min()
	}
}
minuser = function(){
	if (second != "00"){
		second = Number(second) - 1
		duble_number(second, sec)
	}
	else {
		if (minut != "00"){
			minut = Number(minut) - 1
			duble_number(minut, min)
			second = "59"
			duble_number(second, sec)
		}
	}
}
counter = function(second = sec.textContent, minut = min.textContent){
	if (second != 0 or minut != 0){
	let end = (Number(min.textContent)*60 + Number(sec.textContent))*1000
	setTimeout(alert("Время вышло"), end)
	}
}

plus.addEventListener("click", pluser)
minus.addEventListener("click", minuser)
start.addEventListener("click", setTimeout(counter, 1000))


