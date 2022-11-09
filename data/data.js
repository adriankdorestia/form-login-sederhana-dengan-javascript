function masuk() {
	var nama = document.getElementById("username").value;
	var sandi = document.getElementById("password").value;
		if (nama == "admin" && sandi == "minda") {
			location =  ("dashboard.html");
		}
		else {
			alert ("Periksa kembali username dan password anda");
		}
}

function keluar() {
	location = ("../login dengan js/index.html");
}