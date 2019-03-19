const url = "http://localhost:5000/solve";

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "#solve-button" ).click( function( event ) {
	event.preventDefault();
	loadSolution();
	//jsonToTable($("#tabs-3").text());
	//alert("xyz");
    } );
  } );


function loadSolution(){
    console.log($("#scenario_form").serializeArray());
    console.log("k");
    $.ajax({
	method: "POST",
	url: url,
	dataType: "json",
	data: $("#scenario_form").serializeArray(),
	success: function( msg ) {
	    console.log( "response: " + msg );
	    //console.log( "response: " + JSON.parse(msg) );
	    setRawResults("#tabs-3",msg);
	    //$("#tabs-3").html(msg);
	    //$("#tabs-2").html(jsonToTable(msg));
	    jsonToTable("#tabs-2",msg);
	    drawChart("chart1",msg);
	}
    });
    //$("#tabs-3").load(url,$("#scenario_form").serializeArray());
    //$("#tabs-2").text(jsonToTable( $("#tabs-3").text()));
}

function setRawResults(node,result){
    let newPre = "<textarea id='rawdata'>";
    newPre += result;
    newPre += "</textarea>";
    $(node).append(newPre);
}

function jsonToTable(node,jsonIn){
    /*
    //let table = "<table border='1'>";
    let table = '<table  id="table1" class="display" style="width:100%">';
    //alert(jsonIn[0][0]);
    table += "<tr><th>Year</th><th>Required</th><th>Savings</th><th>FIRE?</th></tr>";
    $.each(jsonIn, function(i, obj) {
	//use obj.id and obj.name here, for example:
	//alert(obj[0]);
	table += "<tr><td>";
	table += obj[0];
	table += "</td><td>";
	table += obj[1];
	table += "</td><td>";
	table += obj[2];
	table += "</td><td>";
	table += obj[3];
	table += "</td></tr>";
    });   
    table+="</table>";
    $("#tabs-2").html(table);
    */
    $("#table1").DataTable(
	{
            data: jsonIn,
            columns: [
		{ title: "Year" },
		{ title: "Required",
		  render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
		{ title: "Savings",
		  render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
		{ title: "FIRE" }
            ]
	});
}

function drawChart(node,data){
    
    let chartLabels = [];
    let array1 = [];
    let array2 = [];
    data.forEach(function(item,index){
	chartLabels[index] = item[0];
	array1[index] = item[1];
	array2[index] = item[2];
    })
    var ctx = node;
    new Chart(document.getElementById(node), {
	type: 'line',
	data: {
	    labels:chartLabels,
	    datasets: [{
		label:"array1",
		data:array1
	    },{
		label:"array2",
		data:array2
	    }]
	},
	options: {
            bezierCurve: false,
            animation: false,
            responsive: false,
            maintainAspectRatio: false
	}
    });
    /*
    var ctx = $(node).get(0).getContext("2d");
    var chart = new Chart(ctx);
    /*var data = {
        labels: [0, 1, 2, 3],
        datasets: [{
            label: "Slope",
            data: [1, 1, 0, 0]
        }]
    }* /
    var data = {
	labels:chartLabels,
	datasets: [{
	    label:"array1",
	    data:array1
	},{
	    label:"array2",
	    data:array2
	}]
    }
    
    var options = {
        bezierCurve: false,
        animation: false,
        responsive: false,
        maintainAspectRatio: false
    }
    chart.Line(data, options);
*/
}
