const tax = .055;

function calcBill(total, rate){
	total = parseFloat(total);
	rate = parseFloat(rate);
	if (!isNaN(total) && !isNaN(rate)) {
		let cTax = total * tax;
		let cTip = total * (rate / 100);
		document.querySelector("#tax").innerHTML  = "Tax: " + cTax;
		document.querySelector("#tip").innerHTML  = "Tip: " + cTip;
		document.querySelector("#gtotal").innerHTML  = "Grand total: " + (cTax + cTip + total);
	}
	
}

document.querySelector("#calc").addEventListener("click", () => {
	calcBill(document.querySelector("#total").value, document.querySelector("#rate").value);
});

document.querySelector("#total").addEventListener("change", () => {
	calcBill(document.querySelector("#total").value, document.querySelector("#rate").value);
});

document.querySelector("#rate").addEventListener("change", () => {
	calcBill(document.querySelector("#total").value, document.querySelector("#rate").value);
});