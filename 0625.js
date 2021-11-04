function myFunction(insertedDate, insertedStation) {

const api_url = 
      "https://mesonet.agron.iastate.edu/api/1/obhistory.json?network=MI_ASOS&station=" + insertedStation.toString() + "&date=" + insertedDate.toString() + "&full=false";
  
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
			if (data['data'][i]['local_valid'].toString().substring(14,17) == 53) {
  				temp.push(data['data'][i]['tmpf']);
  				time.push(data['data'][i]['local_valid']);
  				dewp.push(data['data'][i]['dwpf']);
  				}
  			else {
  				continue
  			}
  		}
  		
	}
	
	console.log(temp[0])
	
	// Get all of the local time data 

	document.getElementById("Time0").innerHTML = time[0].substring(11,18) + ' ET';
	document.getElementById("Temp0").innerHTML = parseInt(temp[0]) + 'ºF'; 
	document.getElementById("Dewp0").innerHTML = parseInt(dewp[0]) + 'ºF'; 
	
	
	document.getElementById("Time1").innerHTML = time[1].substring(11,18) + ' ET';
	document.getElementById("Temp1").innerHTML = parseInt(temp[1]) + 'ºF'; 
	document.getElementById("Dewp1").innerHTML = parseInt(dewp[1]) + 'ºF'; 
	
	document.getElementById("Time2").innerHTML = time[2].substring(11,18) + ' ET';
	document.getElementById("Temp2").innerHTML = parseInt(temp[2]) + 'ºF'; 
	document.getElementById("Dewp2").innerHTML = parseInt(dewp[2]) + 'ºF'; 
	
	document.getElementById("Time3").innerHTML = time[3].substring(11,18) + ' ET';
	document.getElementById("Temp3").innerHTML = parseInt(temp[3]) + 'ºF'; 
	document.getElementById("Dewp3").innerHTML = parseInt(dewp[3]) + 'ºF'; 
	
	document.getElementById("Time4").innerHTML = time[4].substring(11,18) + ' ET';
	document.getElementById("Temp4").innerHTML = parseInt(temp[4]) + 'ºF'; 
	document.getElementById("Dewp4").innerHTML = parseInt(dewp[4]) + 'ºF'; 
	
	document.getElementById("Time5").innerHTML = time[5].substring(11,18) + ' ET';
	document.getElementById("Temp5").innerHTML = parseInt(temp[5]) + 'ºF'; 
	document.getElementById("Dewp5").innerHTML = parseInt(dewp[5]) + 'ºF'; 	
	
	document.getElementById("Time6").innerHTML = time[6].substring(11,18) + ' ET';
	document.getElementById("Temp6").innerHTML = parseInt(temp[6]) + 'ºF'; 
	document.getElementById("Dewp6").innerHTML = parseInt(dewp[6]) + 'ºF'; 	
	
	document.getElementById("Time7").innerHTML = time[7].substring(11,18) + ' ET';
	document.getElementById("Temp7").innerHTML = parseInt(temp[7]) + 'ºF'; 
	document.getElementById("Dewp7").innerHTML = parseInt(dewp[7]) + 'ºF';	
	
	document.getElementById("Time8").innerHTML = time[8].substring(11,18) + ' ET';
	document.getElementById("Temp8").innerHTML = parseInt(temp[8]) + 'ºF'; 
	document.getElementById("Dewp8").innerHTML = parseInt(dewp[8]) + 'ºF';		
	
	document.getElementById("Time9").innerHTML = time[9].substring(11,18) + ' ET';
	document.getElementById("Temp9").innerHTML = parseInt(temp[9]) + 'ºF';
	document.getElementById("Dewp9").innerHTML = parseInt(dewp[9]) + 'ºF'; 		
	
	document.getElementById("Time10").innerHTML = time[10].substring(11,18) + ' ET';
	document.getElementById("Temp10").innerHTML = parseInt(temp[10]) + 'ºF'; 
	document.getElementById("Dewp10").innerHTML = parseInt(dewp[10]) + 'ºF';		
	
	document.getElementById("Time11").innerHTML = time[11].substring(11,18) + ' ET';
	document.getElementById("Temp11").innerHTML = parseInt(temp[11]) + 'ºF'; 
	document.getElementById("Dewp11").innerHTML = parseInt(dewp[11]) + 'ºF';			
	
	document.getElementById("Time12").innerHTML = time[12].substring(11,18) + ' ET';
	document.getElementById("Temp12").innerHTML = parseInt(temp[12]) + 'ºF'; 	
	document.getElementById("Dewp12").innerHTML = parseInt(dewp[12]) + 'ºF';	
	
	document.getElementById("Time13").innerHTML = time[13].substring(11,18) + ' ET';
	document.getElementById("Temp13").innerHTML = parseInt(temp[13]) + 'ºF'; 
	document.getElementById("Dewp13").innerHTML = parseInt(dewp[13]) + 'ºF';		
	
	document.getElementById("Time14").innerHTML = time[14].substring(11,18) + ' ET';
	document.getElementById("Temp14").innerHTML = parseInt(temp[14]) + 'ºF'; 
	document.getElementById("Dewp14").innerHTML = parseInt(dewp[14]) + 'ºF';		
	
	document.getElementById("Time15").innerHTML = time[15].substring(11,18) + ' ET';
	document.getElementById("Temp15").innerHTML = parseInt(temp[15]) + 'ºF'; 	
	document.getElementById("Dewp15").innerHTML = parseInt(dewp[16]) + 'ºF'; 		
	
	document.getElementById("Time16").innerHTML = time[16].substring(11,18) + ' ET';
	document.getElementById("Temp16").innerHTML = parseInt(temp[16]) + 'ºF';
	document.getElementById("Dewp16").innerHTML = parseInt(dewp[16]) + 'ºF'; 		
	
	document.getElementById("Time17").innerHTML = time[17].substring(11,18) + ' ET';
	document.getElementById("Temp17").innerHTML = parseInt(temp[17]) + 'ºF';
	document.getElementById("Dewp17").innerHTML = parseInt(dewp[17]) + 'ºF'; 		
	
	document.getElementById("Time18").innerHTML = time[18].substring(11,18) + ' ET';
	document.getElementById("Temp18").innerHTML = parseInt(temp[18]) + 'ºF'; 
	document.getElementById("Dewp18").innerHTML = parseInt(dewp[18]) + 'ºF';		
	
	document.getElementById("Time19").innerHTML = time[19].substring(11,18) + ' ET';
	document.getElementById("Temp19").innerHTML = parseInt(temp[19]) + 'ºF'; 	
	document.getElementById("Dewp19").innerHTML = parseInt(dewp[19]) + 'ºF';	
	
	document.getElementById("Time20").innerHTML = time[20].substring(11,18) + ' ET';
	document.getElementById("Temp20").innerHTML = parseInt(temp[20]) + 'ºF'; 	
	document.getElementById("Dewp20").innerHTML = parseInt(dewp[20]) + 'ºF';	
	
	document.getElementById("Time21").innerHTML = time[21].substring(11,18) + ' ET';
	document.getElementById("Temp21").innerHTML = parseInt(temp[21]) + 'ºF'; 	
	document.getElementById("Dewp21").innerHTML = parseInt(dewp[21]) + 'ºF';	
	
	document.getElementById("Time22").innerHTML = time[22].substring(11,18) + ' ET';
	document.getElementById("Temp22").innerHTML = parseInt(temp[22]) + 'ºF';
	document.getElementById("Dewp22").innerHTML = parseInt(dewp[22]) + 'ºF'; 		
	
	document.getElementById("Time23").innerHTML = time[23].substring(11,18) + ' ET';
	document.getElementById("Temp23").innerHTML = parseInt(temp[23]) + 'ºF'; 	
	document.getElementById("Dewp23").innerHTML = parseInt(dewp[23]) + 'ºF';
	
    if (document.getElementById("tableAsos").style.display === "none")
        document.getElementById("tableAsos").style.display="table";
	}

getapi(api_url)

}



