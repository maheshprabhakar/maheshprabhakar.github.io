var color = Chart.helpers.color;
var horizontalBarChartData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'value',
		backgroundColor: ["violet", "indigo", "blue", "green", "yellow", "orange","red"], 
		//borderColor: window.chartColors.red,
		borderWidth: 1,
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
	ctx.height = 500;
	window.myHorizontalBar = new Chart(ctx, {
		type: 'horizontalBar',
		data: horizontalBarChartData,
		options: {
			// Elements options apply to all of the options unless overridden in a dataset
			// In this case, we are setting the border of each horizontal bar to be 2px wide
			elements: {
				rectangle: {
					borderWidth: 2,
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false,
				position: 'right',
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
				position: 'right',
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

