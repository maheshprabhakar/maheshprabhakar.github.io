'use strict';

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

var horizontalBarChartData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'value',
		backgroundColor: [window.chartColors.blue, window.chartColors.red, window.chartColors.green, window.chartColors.yellow, window.chartColors.purple, window.chartColors.grey,window.chartColors.orange], 
		//borderColor: window.chartColors.red,
		//borderWidth: 1,
		data: [22,32,35,43,21,12,22]
	}]
};
var horizontalBarChartData_combined = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{      
      label: 'Comments',
      backgroundColor: window.chartColors.blue,      
      data: [5, 3, 4, 10, 8, 9, 2]
    }, {
      label: 'Shares',
      backgroundColor: window.chartColors.red,
      data: [2, 4, 1, 3, 7, 3, 6],
     
    }, {
      label: 'Likes',
      backgroundColor: window.chartColors.green,
      data: [7, 2, 4, 5, 6, 4, 2]
    }]
  };

window.onload = function() 
{
	loadCommunicationInsight('canvasComm1','Blogs Created');
	loadCommunicationInsight('canvasComm2','viewers');

	loadCommunicationInsight('canvasComm3','comments');
	loadCommunicationInsight('canvasComm4','shares');
	loadCommunicationInsight('canvasComm5','likes');
	loadCommunicationInsight_grouped('canvasComm3_1','User sentiments(click on legends to filter)');

	loadCommunicationInsight('canvasComm6','Avg Views');
};


function loadCommunicationInsight(elementname,title)
{
	var ctx = document.getElementById(elementname).getContext('2d');
	window.myHorizontalBar = new Chart(ctx, {
		type: 'horizontalBar',
		data: horizontalBarChartData,
		options: {
			// Elements options apply to all of the options unless overridden in a dataset
			// In this case, we are setting the border of each horizontal bar to be 2px wide
			elements: {
				rectangle: {
					borderWidth: 1,
				}
			},
			responsive: false,
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			title: {
				display: true,
				text: title
			}
		}
	});
}

function loadCommunicationInsight_grouped(elementname,title)
{
	var ctx = document.getElementById(elementname).getContext('2d');
	ctx.height = 500;
	window.myHorizontalBar = new Chart(ctx, {
		type: 'horizontalBar',
		data: horizontalBarChartData_combined,
		options: {
			// Elements options apply to all of the options unless overridden in a dataset
			// In this case, we are setting the border of each horizontal bar to be 2px wide
			elements: {
				rectangle: {
					borderWidth: 2,
				}
			},
			responsive: true,
			maintainAspectRatio: true,
			legend: {
				display: true,
				position: 'top',
			},
			title: {
				display: true,
				text: title
			}
		},
		tooltips: {
      mode: 'index',
      intersect: true
    }
	});
}