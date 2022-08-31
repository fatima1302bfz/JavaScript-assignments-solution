let request = new XMLHttpRequest(); //Call AJAX module to read data
request.open("get", "article.json"); //get method used for retrieve data from file
request.send(); //send data to server

request.onreadystatechange = () => {
    //test if server receive data and prepare response 
    if (request.readyState === 4 && request.status === 200) {
        // ==== TASK 2 ====
        console.log(" %c============== TASK 2 ================", "color: blue; font-size: 20px");
        console.log("JSON Object Content Here");
        console.log(request.response);
        console.log("Data Loaded");

        // ==== TASK 3 ====
        console.log(" %c============== TASK 3 ================", "color: blue; font-size: 20px");

        const mainData = JSON.parse(request.response); // convert json object to js object
        mainData.forEach(art => {
            art.category = "All"
        });
        console.log("this data is from maindata after updating category", mainData);

        const updatedData = JSON.stringify(mainData) // convert js object to json object
        console.log("this data is from updatedData (json object)", updatedData);

        // ====TASK 4====
        console.log(" %c============== TASK 4 ================", "color: blue; font-size: 20px");
        // display data in page
        const displayData = JSON.parse(request.response); //get data
        let dataDiv = document.getElementById("data");
        displayData.forEach(article => {
            dataDiv.innerHTML += `
                                    <div>
                                        <h2>${article.title}</h2>
                                        <p>${article.content}</p>
                                        <div class="author">
                                          <p>Author: ${article.author}</p>
                                          <p>Category: ${article.category}</p>
                                        </div>
                                    </div>`
        });
    }
}