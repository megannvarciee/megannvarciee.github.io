var chart;
function myFunction(Year, Month, Date1, Specials, insertedStation) {
  const api_url =
    "https://mesonet.agron.iastate.edu/api/1/obhistory.json?network=MI_ASOS&station=" +
    insertedStation.toString() +
    "&date=" +
    Year.toString() +
    "-" + 
    Month.toString() + 
    "-" + 
    Date1.toString() + 
    "&full=true";

  console.log(api_url);

  var SpecialsString = Specials.toString()

  // Defining async function
  async function getapi(url, SpecialsString) {
    // Storing response

    const response = await fetch(url);

    console.log(chart)
     if(chart != null){
      console.log('destroy')
      chart.destroy();
     }

    // Storing data in form of JSON
    var data = await response.json();

    let temp = [];
    let time = [];
    let dewp = [];
    let wnd = [];
    let gst = [];
    let vsby = [];
    let wx = [];
    let hrP = []; 
    let relh = []; 
    let windD = []; 
    let dir = []; 
    let metar = [];
    let alt = [];
    let mslp = []; 

    if (SpecialsString == "No") {
    for (let i = 0; i < data["data"].length; i++) {
      if (data["data"][i]["mslp"] != null) {
      if (data["data"][i]["tmpf"] != null) {
        temp.push(parseInt(data["data"][i]["tmpf"]));
        time.push(data["data"][i]["local_valid"]);
        dewp.push(parseInt(data["data"][i]["dwpf"]));
        wnd.push(parseInt(data["data"][i]["sknt"]));
        if (data["data"][i]["gust"] != null) {
          gst.push(parseInt(data["data"][i]["gust"]));
        } else {
          gst.push(" ");
        }
        vsby.push(parseInt(data["data"][i]["vsby"]));
    	if (data["data"][i]["wxcodes"] != null) {
          wx.push(data["data"][i]["wxcodes"]);
        	} 
        else {
          wx.push(" ");
        	}
    	if (data["data"][i]["p01i"] == null) {
    		hrP.push(" ");
        	} 
        else if (data["data"][i]["p01i"] == 0.0001) {
          	hrP.push("T")
        }
        else {
            hrP.push(data["data"][i]["p01i"]);
        	}
        relh.push(parseInt(data["data"][i]["relh"]));
        windD.push(parseInt(data["data"][i]["drct"]));
        metar.push(data["data"][i]["raw"]);
	alt.push(data["data"][i]["alti"]);
    	if (data["data"][i]["mslp"] != null) {
          mslp.push(parseInt(data["data"][i]["mslp"]));
        	} 
        else {
          mslp.push(" ");
        	}
        
        var deg = data["data"][i]["drct"];
        
        if (deg>11.25 && deg<33.75){
			dir.push("NNE");
		  }else if (deg>33.75 && deg<56.25){
			dir.push("ENE");
		  }else if (deg>56.25 && deg<78.75){
			dir.push("E");
		  }else if (deg>78.75 && deg<101.25){
			dir.push("ESE");
		  }else if (deg>101.25 && deg<123.75){
			dir.push("ESE");
		  }else if (deg>123.75 && deg<146.25){
			dir.push("SE");
		  }else if (deg>146.25 && deg<168.75){
			dir.push("SSE");
		  }else if (deg>168.75 && deg<191.25){
			dir.push("S");
		  }else if (deg>191.25 && deg<213.75){
			dir.push("SSW");
		  }else if (deg>213.75 && deg<236.25){
			dir.push("SW");
		  }else if (deg>236.25 && deg<258.75){
			dir.push("WSW");
		  }else if (deg>258.75 && deg<281.25){
			dir.push("W");
		  }else if (deg>281.25 && deg<303.75){
			dir.push("WNW");
		  }else if (deg>303.75 && deg<326.25){
			dir.push("NW");
		  }else if (deg>326.25 && deg<348.75){
			dir.push("NNW");
		  }else if (deg == null){
			dir.push(" ");
		  }else if (deg==0 && data["data"][i]["sknt"] == 0){
		    dir.push(" ");
		  }else{
			dir.push("N"); 
		  }
        
    	}
    }
  }
  }

    else if (SpecialsString == "Yes") {
    for (let i = 0; i < data["data"].length; i++) {
      if (data["data"][i]["tmpf"] != null) {
        temp.push(parseInt(data["data"][i]["tmpf"]));
        time.push(data["data"][i]["local_valid"]);
        dewp.push(parseInt(data["data"][i]["dwpf"]));
        wnd.push(parseInt(data["data"][i]["sknt"]));
        if (data["data"][i]["gust"] != null) {
          gst.push(parseInt(data["data"][i]["gust"]));
        } else {
          gst.push(" ");
        }
        vsby.push(parseInt(data["data"][i]["vsby"]));
      if (data["data"][i]["wxcodes"] != null) {
          wx.push(data["data"][i]["wxcodes"]);
          } 
        else {
          wx.push(" ");
          }
      if (data["data"][i]["p01i"] == null) {
        hrP.push(" ");
          } 
        else if (data["data"][i]["p01i"] == 0.0001) {
            hrP.push("T")
        }
        else {
            hrP.push(data["data"][i]["p01i"]);
          }
        relh.push(parseInt(data["data"][i]["relh"]));
        windD.push(parseInt(data["data"][i]["drct"]));
        metar.push(data["data"][i]["raw"]);
  alt.push(data["data"][i]["alti"]);
      if (data["data"][i]["mslp"] != null) {
          mslp.push(parseInt(data["data"][i]["mslp"]));
          } 
        else {
          mslp.push(" ");
          }
        
        var deg = data["data"][i]["drct"];
        
        if (deg>11.25 && deg<33.75){
      dir.push("NNE");
      }else if (deg>33.75 && deg<56.25){
      dir.push("ENE");
      }else if (deg>56.25 && deg<78.75){
      dir.push("E");
      }else if (deg>78.75 && deg<101.25){
      dir.push("ESE");
      }else if (deg>101.25 && deg<123.75){
      dir.push("ESE");
      }else if (deg>123.75 && deg<146.25){
      dir.push("SE");
      }else if (deg>146.25 && deg<168.75){
      dir.push("SSE");
      }else if (deg>168.75 && deg<191.25){
      dir.push("S");
      }else if (deg>191.25 && deg<213.75){
      dir.push("SSW");
      }else if (deg>213.75 && deg<236.25){
      dir.push("SW");
      }else if (deg>236.25 && deg<258.75){
      dir.push("WSW");
      }else if (deg>258.75 && deg<281.25){
      dir.push("W");
      }else if (deg>281.25 && deg<303.75){
      dir.push("WNW");
      }else if (deg>303.75 && deg<326.25){
      dir.push("NW");
      }else if (deg>326.25 && deg<348.75){
      dir.push("NNW");
      }else if (deg == null){
      dir.push(" ");
      }else if (deg==0 && data["data"][i]["sknt"] == 0){
        dir.push(" ");
      }else{
      dir.push("N"); 
      }
        
      }
    }
  }

    // Round to lowest 5 // 

    function roundFloor5(num) {
      return Math.floor(num / 5) * 5;
      } 

    function roundCig5(num) {
      return Math.ceil(num / 5) * 5;
      } 

    var tempMax = roundCig5(Math.max(...temp))
    var tempMin = roundFloor5(Math.min(...dewp))

    console.log(tempMax)

    // Create x-axis values (an index) for plotting. Eventually will need to make this "time", but for now will just 
    // do the length of the temp file 
    let index = [] 
    for (let i = 0; i < temp.length; i++) {
      index.push(i+1)
    }

    var indexMax = Math.max(...index)

    var header = [
      "Time (ET)",
      "Temp (ºF)",
      "Dewpoint (ºF)",
      "Relative Humidity (%)",
      "Wind (kts)",
      "Wind Dir (deg)", 
      "Wind Dir", 
      "Wind Gusts (kts)", 
      "Visibility (mi)",
      "Observed Weather", 
      "Past Hour Precip (in)",
      "Altimeter (in)",
      "MSLP (mb)"
    ];
    var myTable = "<table><caption>Station ID: " + insertedStation.toString() + " | Date: " + Year.toString() + "-" + Month.toString() + "-" + Date1.toString() + "</caption><tr>";

    for (let i = 0; i < header.length; i++) {
      myTable += "<th>" + header[i] + "</th>";
    }

    for (let i = 0; i < temp.length; i++) {
      myTable += "</tr><tr><td>" + time[i] + "</td>";
      myTable += "<td>" + temp[i] + "</td>";
      myTable += "<td>" + dewp[i] + "</td>";
      myTable += "<td>" + relh[i] + "</td>";
      myTable += "<td>" + wnd[i] + "</td>";
      myTable += "<td>" + windD[i] + "</td>";
      myTable += "<td>" + dir[i] + "</td>";
      myTable += "<td>" + gst[i] + "</td>";
      myTable += "<td>" + vsby[i] + "</td>";
      myTable += "<td>" + wx[i] + "</td>";
      myTable += "<td>" + hrP[i] + "</td>";
      myTable += "<td>" + alt[i] + "</td>";
      myTable += "<td>" + mslp[i] + "</td>";
    }

    myTable += "</tr></table>";
    document.getElementById("myDiv").innerHTML = myTable;
    
    var headerRAW = [
      "METARs"
    ];
    var myTableRAW = "<table><caption>Station ID: " + insertedStation.toString() + " | Date: " + Year.toString() + "-" + Month.toString() + "-" + Date1.toString() + "</caption><tr>";

    for (let i = 0; i < headerRAW.length; i++) {
      myTableRAW += "<th>" + headerRAW[i] + "</th>";
    }

    for (let i = 0; i < metar.length; i++) {
      myTableRAW += "</tr><tr><td>" + metar[i] + "</td>";
    }

    myTableRAW += "</tr></table>";
    document.getElementById("myDivRAW").innerHTML = myTableRAW;
    
    document.getElementById("download-button").disabled = false
    document.getElementById("download-button2").disabled = false

    // Deal with the graph stuff // 

    // Temperature // 

    chart = new Chart("myChart", {
      type: "line",
      data: {
        labels: index,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,1)",
          pointRadius: 2,
          pointBackgroundColor: "rgba(0,0,255,.1)",
          pointBorderColor: "rgba(0,0,255,.1)",
          data: temp
        }, 
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,255,0,1.0)",
          borderColor: "rgba(0,255,0,1)",
          pointRadius: 2,
          pointBackgroundColor: "rgba(0,255,0,.1)",
          pointBorderColor: "rgba(0,255,0,.1)",
          data: dewp
        }
        ]
      },
      options: {
        legend: {display: false},
        scales: {
          xAxes: [{ticks: {min: 0, max: indexMax, stepSize: 10}}],
          yAxes: [{ticks: {min: tempMin, max: tempMax, stepSize: 5}}]
        },
      }
    });
  
    var inputSubmit = document.getElementById("Date1");
	
  // This part of the code is so that I can press enter and submit the code // 

  inputSubmit.addEventListener("keyup", function(event) {
 	if (event.keyCode === 13) {
  		event.preventDefault();
   		document.getElementById("clickButton").click();
  		}
	});
	
	var tabs = document.getElementById("tabs");
    tabs.style.display = "block";
    
  }

  getapi(api_url, SpecialsString);
}
