const achievments = [
	{
		id: 1,
		img: "./assets/gallery/8.jpg",
		heading: "2018 SAE International",
		description: `In 2018 SAE Aero design event, we bagged the overall 7th 
        rank globally and 3rd rank globally in Design Report
        submission for regular class. Adding more to our achievement
        we were ranked the 1st among the Indian teams. Amidst the
        heavy crosswinds, our plane flew with all its might, like a
        beast.`,
	},
	{
		id: 2,
		img: "./assets/gallery/6.jpg",
		heading: "2017 SAE International",
		description: `In 2017 SAE Aero ​design event, we ranked 15th among all
        global teams and 3rd among all the Indian teams.`,
	},
	{
		id: 3,
		img: "./assets/gallery/7.jpg",
		heading: "2016 SAE International",
		description: `In 2016 SAE Aero design event, we ranked 14th among all
        global teams and 1st among all the Indian teams`,
	},
];

const row = document.querySelector("#outer-row");

achievments.forEach((achievment) => {
	const newRow = row.cloneNode(true);
	const image = newRow.querySelector(".image-side");
	const text = newRow.querySelector(".row");
	image.querySelector("img")["src"] = achievment.img;
	text.querySelector("h3").textContent = achievment.heading;
	text.querySelector("p").textContent = achievment.description;
	row.after(newRow);
});
