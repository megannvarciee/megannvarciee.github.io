function myFunction(insertedDate, insertedStation) {

const api_url = 
      "https://mesonet.agron.iastate.edu/api/1/obhistory.json?network=MI_ASOS&station=" + insertedStation.toString() + "&date=" + insertedDate.toString() + "&full=true";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    
    let temp = [];
    let time = []; 
    let dewp = []; 

	for (let i = 0; i < data['data'].length; i++) {
		if (data['data'][i]['tmpf'] != null) {
  				temp.push(parseInt(data['data'][i]['tmpf']) + 'ºF');
  				time.push(data['data'][i]['local_valid']);
  				dewp.push(parseInt(data['data'][i]['dwpf']) + 'ºF');
    }
  }

var data = [{
  type: 'table',
  
  header: {
    values: [["<b>TIME (ET)</b>"], ["<b>TEMP</b>"],
				 ["<b>DEWP</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: [[time][0], [temp][0], [dewp][0]],
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 18, color: ["black"]}, 
    width: 100, 
    height: 32, 
    fill: {color: "none"}
  }
}]

var layout = {
  autosize: false,
  width: 800,
  height: 800};

Plotly.newPlot('myDiv', data, layout);

  
    	}
    	getapi(api_url)

}

