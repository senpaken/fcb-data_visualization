console.log("Hello World!")

const dateElement = document.getElementById('date');
console.log(dateElement);

// Retrieve the Current Date
let currentDate = new Date();
dateElement.innerHTML = currentDate

// Format Current Date Into Standard Date without time, timezone, timestamp etc.
let dataOptions = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);

// 
const url = "https://fakestoreapi.com/products";
const options = {
};

// Requests to get data from the URL, submitting also the values from options
fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

	/*
		let products = [
			{
				title: "AMD 5",
				price: 5000,
				description: "Gaming CPU",
				category: "Computer CPU",
				image: null,
				rating: {
					rate: 5,
					count: 60
				}
			},
			{
				title: "Intel i3",
				price: 3500,
				description: "Work CPU",
				category: "Computer CPU",
				image: null,
				rating: {
					rate: 4,
					count: 70
				}
			}
		];

		console.log(products);
		console.log(products[0].title);
		console.log(products[0].price);
		console.log(products[0].rating.rate);
	*/

	// Compile all the title per object and store it to "titles"
	// Adds the title per object to the "titles" storage
	let titles = data.map(object => {
		// console.log(object);
		// console.log(object.title);
		return object.title
	});

	console.log(titles);

	// Compile all the rate per object and store it to "ratings"
	// Adds the rate inside the rating property per object to the "ratings" storage
	let ratings = data.map(object => {
		return object.rating.rate
	});

	console.log(ratings);

	// CHARTJS Configuration
	const myChart = document.getElementById('myChart');

	let barChart = new Chart(myChart, {
		type: 'bar',
		data: {
			labels: titles,
			datasets: [{
				label: 'Ratings of Tweets',
				// The Basis of our bar levels will be based on compiled ratings from per object of the retrieved data from our fetch request.
				data: ratings,
				borderWidth: 1,
				backgroundColor: [
					'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				],
				hoverBackgroundColor: [
					'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				]
			}]
		},
		options: {
			indexAxis: 'y',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})
})
