// ======================================Email sender Ajax request====================================== //
$("#mailContact").submit(function (e) {
	e.preventDefault();
});
if (document.getElementById("mailSend")) {
	document.getElementById("mailSend").addEventListener("click", function () {
		if (
			document.forms["mailContact"]["name"].value == "" ||
			document.forms["mailContact"]["email"].value == "" ||
			document.forms["mailContact"]["subject"].value == "" ||
			document.forms["mailContact"]["message"].value == ""
		) {
			console.log("Please fill the details completely");
		} else {
			console.log("Everything is filled");
			document.getElementById("loading1").style.display = "block";
			$.ajax({
				type: "post",
				url: "home/sendEmail",
				data: $("#mailContact").serialize(),
				success: function () {
					document.getElementById("mailContact").reset();
					$("#loading1").css("display", "none");
					$("#sentMessage1").css("display", "block");
					setTimeout(function () {
						$("#sentMessage1").css("display", "none");
					}, 3000);
				},
				error: function (data) {
					document.getElementById("mailContact").reset();
					document.getElementById("loading1").style.display = "none";
					$("#errorMessage1").css("display", "block");
					setTimeout(function () {
						$("#errorMessage1").css("display", "none");
					}, 3000);
				},
			});
		}
	});
}
