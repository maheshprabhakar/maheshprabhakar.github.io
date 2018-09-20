var color = Chart.helpers.color;
var horizontalBarChartData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'value',
		backgroundColor: ["violet", "indigo", "blue", "green", "yellow", "orange","red"], 
		//backgroundColor: dynamicColors(),//color(window.chartColors.red).alpha(0.5).rgbString(),
		//borderColor: window.chartColors.red,
		borderWidth: 1,
		data: [22,32,35,43,21,12,22]
	}]
};
horizontalBarChartData.datasets.each = function()
{
	this.backgroundColor = dynamicColors();
};

window.onload = function() 
{
	loadCommunicationInsight('canvasComm1','Blogs Created');
	loadCommunicationInsight('canvasComm2','viewers');
	loadCommunicationInsight('canvasComm3','comments');
	loadCommunicationInsight('canvasComm4','shares');
	loadCommunicationInsight('canvasComm5','likes');
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

function dynamicColors()
{
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
 }
