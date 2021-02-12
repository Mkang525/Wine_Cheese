// use csv to pull in cheese data
// create filter to pull out specific cheeses
// create tbody variable of where to put the data
var tbody = d3.select("tbody")

// create a filepath to data.csv using d3.csv use a then function
// function cheeseD(variety) {
//     d3.csv("data/cheese_pract.csv").then(function(data, err) {
//         console.log(data);
//         // create a loop to go through the cheese data
//         data.forEach(function(cheesedata) {
//         console.log(cheesedata);
//         // print in the table in the html
//         var row = tbody.append("tr");
//         // pick out the key and the value for the array
//         Object.entries(cheesedata).forEach(function([key, value]) {
//         // print the key and the value
//         console.log(key, value);
//         // print in the table in the html
//         var cell = row.append("td")
//         // printing the values of the object on the html
//         cell.text(value);
//         // creating dropdown
//         // created never ending loop. How to fix?
//         // var dropdown = d3.select("#selDataset");
//         //     var cheeseVariety = [...new Set(data.map(function(p){ return p.variety}))]; 
//         //     cheeseVariety.forEach(function(cheeseName) {
//         //         dropdown.append("option").text(cheeseName).property("value")
//         //     });
//         //     cheeseD(data[0].variety);
//         // })
//     });
// });

// cheeseD();

// print in the html table
function table() {
    d3.csv("data/cheese_pract.csv").then(function(data) {
        console.log(data);
        // create a loop to go through the cheese data
        data.forEach(function(cheesedata) {
        console.log(cheesedata);
        // print in the table in the html
        var row = tbody.append("tr");
        // pick out the key and the value for the array
        // to print into the table need object entries
        Object.entries(cheesedata).forEach(function([key, value]) {
        // print the key and the value
        console.log(value);
        // print in the table in the html
        var cell = row.append("td")
        // printing the values of the object on the html
        cell.text(value);
        // printing in the dropdown
        // value is what is pulling into the dropdown.
        // var options = [cheesedata];
    })
    })
});
}

table();


// this one populates all the cheeses in a row instead of a column
function init() {
    d3.csv("data/cheese_pract.csv").then(function(data) {
        initDropList(data)
        })

};

// initDropListTeam function
function initDropList(data) {
    var cheese_name = [];
    for (var i = 0; i < data.length; i++) {
        cheese_name.push(data[i]['Cheese']);
    }
    // call function to populate the form dropdown menu options for each filter criteria in alphabetical order
    createDropList(cheese_name, "selDataset", "Select Cheese", 2);
}//initDropList() function

function createDropList(menu, selectname, idname, sType) {

    // check if option type passed is date or string as defined by its numerical value
    if (sType == 1) {
        // assigned only unique data values of the array list without any duplicates, but unsorted for date options 
        var sort_values = menu.filter((e, i, a) => a.indexOf(e) === i);
    }
    else {
        // assigned only unique data values of the array list without any duplicates, 
        // and sorted alphabetically for string options 
        var sort_values = menu.filter((e, i, a) => a.indexOf(e) === i).sort();
    }

    // define a constant statement to append a string at the beginning of an array list
    // do not modify this value during scripts execution
    // used for adding placeholder value on top of the menu options as default value
    // assign result to list array of data values 
    const addElementToBeginningOfArray = (a, e) => [e, ...a]
    values = addElementToBeginningOfArray(sort_values, idname);

    // createElement() method creates an Element Node with the specified name.
    // create html select tag assigning name and id to the select parameters passed
    //var select = document.createElement("select");
    var select = document.getElementById(selectname)
    //select.name = selectname;
    //select.id = idname;

    // loop through contents of data values to format how its displayed and set its placeholder values as selected
    for (const val of values) {

        // create html option tag that will be appended within the select tag
        var option = document.createElement("option");
        // assign option value to each data value iteratively
        option.value = val;

        // check if option type is date, displayed as is and 
        // option selected is set to true for placeholder text string
        if (sType == 1) {
            option.text = val;
            if (val == selectname) {
                option.selected = true;
            }
        }

        // check if option type is full text string, display initial character in upper case and 
        // option selected is set to true for placeholder text string
        if (sType == 2) {
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            if (val == selectname) {
                option.selected = true;
            }
        }

        // check if option type is partial text string abbreviation, display all characters in upper case and
        // option selected is set to true for placeholder text string
        if (sType == 3) {
            if (val == selectname) {
                option.selected = true;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
            }
            else {
                option.text = val.charAt(0).toUpperCase() + val.charAt(1).toUpperCase();
            }
        }

        // append the html option tag within the html select tag using appendChild() method
        // method to append a node as the last child of a node passing in text value assigned above
        // appendChild() moves from its current position to the new position
        select.appendChild(option);
    }
}//end createDropList() function

init();

