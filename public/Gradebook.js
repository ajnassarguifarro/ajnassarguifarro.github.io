function fetchGradeData() {
    console.log("Fetching Grade Data...");
    let xhr = new XHLHttpRequest();
    let apiRout = "/api/grades";
    xhr.onreadystatechange = function(){
        let rusults;
        if(xhr.readyState === xhr.DONE){
            if (xhr.status !== 200){
                console.error('Could not get grades.');
                    Status: {xhr.status}
            }
            populationGradebook(JSON.parse(xhr.responseText));
            }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

function populateGradebook(data){
    console.log("Populating Gradbook With Data:", data);
    let tableElm = document.getElementById("gradebook");
        data.forEach(function(assignment){
            let row = document.createElement("tr");
            let columns = [];
            columns.name = document.createElement('td');
            columns.name.appendChild(document.createTextNode(assignment.last_name + " , " + assignment.first_name)
    );
    row.appendChild(columns.name);
    row.appendChild(columns.grade);
    tableElm.appendChild(row); 
    });
}

const gradeData = fetchGradeData();
populateGradebook(gradeData);