let myCourse = [];

function search(){  
    fetch("https://mocki.io/v1/8b5615b6-7748-4e40-8190-4f6d37b3f3d9").then(res => res.json()) .then(data =>
    {
        myCourse = data['courses'];
        let searchBar = document.getElementById("search-bar");
        let searchBtn = document.getElementById("search-btn");
        let wantedStr = document.querySelector("[type = 'text']").value;
        console.log(searchBar.innerHTML);
        console.log(myCourse);
        searchBtn.onclick = function(x){
            x.preventDefault();
            console.log("found");
            console.log(wantedStr.value);
            console.log("Learn Python: The Complete Python Programming Course".includes("Python"));
            console.log(myCourse[0]["title"]);
            for (var i = 0; i < myCourse.length; i++){
                if (myCourse[i]["title"].toLowerCase().includes(wantedStr.toLowerCase())) {
                    console.log(i);
                  }
            }
        }
    });
}
search();

function view(){
    
    let myCourseslist = document.createElement("ul");
    myCourseslist.setAttribute("id", "courses");
    myCourseslist.classList.add("pythonCourses");
    for (var i = 0; i < myCourse.length; ++i){

        let myCourse = document.createElement("li");
        myCourse.setAttribute("id" , `course${i}`);

        let link = document.createElement("a");
        link.setAttribute("href", "./index.html");

        let mainFigure = document.createElement("figure");
        link.setAttribute("class", "fig");
        link.setAttribute("style", "display:table");

        let mainImg = document.createElement("img");
        mainImg.setAttribute("class", "imgconf");
        mainImg.setAttribute("src", myCourse[i]["images"]);
        
        let coureseTitle = document.createElement("figurecaption");
        coureseAuthor.setAttribute("class", "figcap coursename");
        coureseAuthor.innerHTML = myCourse[i]["instructors"]["title"];

        let coureseAuthor = document.createElement("figurecaption");
        coureseAuthor.setAttribute("class", "figcap coureseauthor");
        coureseAuthor.innerHTML = myCourse[i]["instructors"]["name"];

        let courseRating = document.createElement("figurecaption");
        mainImg.setAttribute("class", "figcap rating");
        mainImg.innerHTML = myCourse[i]["rating"];


        let coursePrice = document.createElement("figurecaption");
        mainImg.setAttribute("class", "figcap price");
        mainImg.innerHTML = myCourse[i]["price"];


        link.appendChild(courseTilte);
        myCourseDiv.appendChild(courseImage);
        myCourseDiv.appendChild(link);
        myCourseDiv.appendChild(coureseAuthor);
        myCourseDiv.appendChild(courseRating);
        myCourseDiv.appendChild(coursePrice);
        myCourseslist.appendChild(myCourse);
    }
}
view();