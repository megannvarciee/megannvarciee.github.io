function myFunction(Year, Month, Date1, insertedStation) {
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

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    let temp = [];
    let time = [];
    let dewp = [];
    let wnd = [];
    let gst = [];
    let vsby = [];
    let wx = [];

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
    	}
    	}
    

    var header = [
      "Time (ET)",
      "Temp (ºF)",
      "Dewpoint (ºF)",
      "Wind (kts)",
      "Wind Gusts (kts)", 
      "Visibility (mi)",
      "Observed Weather"
    ];
    var myTable = "<table><caption>Station ID: " + insertedStation.toString() + " | Date: " + Year.toString() + "-" + Month.toString() + "-" + Date1.toString() + "</caption><tr>";

    for (let i = 0; i < header.length; i++) {
      myTable += "<th>" + header[i] + "</th>";
    }

    for (let i = 0; i < temp.length; i++) {
      myTable += "</tr><tr><td>" + time[i] + "</td>";
      myTable += "<td>" + temp[i] + "</td>";
      myTable += "<td>" + dewp[i] + "</td>";
      myTable += "<td>" + wnd[i] + "</td>";
      myTable += "<td>" + gst[i] + "</td>";
      myTable += "<td>" + vsby[i] + "</td>";
      myTable += "<td>" + wx[i] + "</td>";
    }

    myTable += "</tr></table>";
    document.getElementById("myDiv").innerHTML = myTable;
    document.getElementById("download-button").disabled = false
    
  }

  getapi(api_url);
}
