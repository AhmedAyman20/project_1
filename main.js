let myCourse = [];
view();
function search(){
    fetch("https://mocki.io/v1/8b5615b6-7748-4e40-8190-4f6d37b3f3d9").then(res => res.json()) .then(data =>
    {
        myCourse = data['courses'];
        let searchBar = document.getElementById("search-bar");
        let searchBtn = document.getElementById("search-btn");
        let wantedStr = document.querySelector("[type = 'text']");
        // console.log(searchBar.innerHTML);
        // console.log(myCourse);
        searchBtn.onclick = function(x){
            x.preventDefault();
            // console.log("found");
            // console.log(wantedStr.value);
            // console.log(myCourse[0]["title"].includes(wantedStr.value));
            // console.log(wantedStr);
            for (var i = 0; i < myCourse.length; i++){
                if (myCourse[i]["title"].toLowerCase().includes(wantedStr.value.toLowerCase())) {
                    console.log(i);
                  }
            }
        }
    });
}
search();

function view(){
    fetch("https://mocki.io/v1/8b5615b6-7748-4e40-8190-4f6d37b3f3d9").then(res => res.json()) .then(data =>
    {
        myCourses = data['courses'];
        let myCourseslist = document.getElementById("courses");
        // myCourseslist.setAttribute("id", "courses");
        // myCourseslist.classList.add("pythonCourses");
        for (var i = 0; i < myCourses.length; ++i){
            //console.log("hi There");
            let myCourse = document.createElement("li");
            myCourse.setAttribute("id" , `course${i}`);

            let link = document.createElement("a");
            link.setAttribute("href", "./index.html");

            let mainFigure = document.createElement("figure");
            mainFigure.setAttribute("class", "fig");
            mainFigure.setAttribute("style", "display:table");

            let mainImg = document.createElement("img");
            mainImg.setAttribute("class", "imgconf");
            var url = myCourses[i]["image"];
            //console.log(url);
            mainImg.setAttribute("src", url);

            let coureseTitle = document.createElement("figurecaption");
            coureseTitle.setAttribute("class", "figcap coursename");
            coureseTitle.innerHTML = myCourses[i]["title"];

            let coureseAuthor = document.createElement("figurecaption");
            coureseAuthor.setAttribute("class", "figcap coureseauthor");
            coureseAuthor.innerHTML = myCourses[i]["instructors"][0]["name"];

            let courseRating = document.createElement("figurecaption");
            courseRating.setAttribute("class", "figcap rating");
            courseRating.innerHTML = "Rating : " + parseFloat(myCourses[i]["rating"]).toFixed(2);
            //courseRating.style.cssText = "margin-left:10px;";

            let courseview = document.createElement("figurecaption");
            courseview.innerHTML = "(2,914)"
            courseview.style.cssText = "margin-left:10px;";

            let coursePrice = document.createElement("figurecaption");
            coursePrice.setAttribute("class", "figcap price");
            coursePrice.innerHTML = "E£" + myCourses[i]["price"];


            myCourse.appendChild(link);
            link.appendChild(mainFigure);
            mainFigure.appendChild(mainImg);
            mainFigure.appendChild(coureseTitle);
            mainFigure.appendChild(coureseAuthor);
            mainFigure.appendChild(courseRating);
            mainFigure.appendChild(courseview);
            mainFigure.appendChild(coursePrice);
            myCourseslist.appendChild(myCourse);
        }
    });
}


/* let courseRatingspan1 = document.createElement("span");
            coursePrice.innerHTML = "Rating" + myCourses[i]["instructors"][0]["name"];

            let views = document.createElement("span");
            coursePrice.innerHTML = "(2,982)";
            views.style.cssText = "margin-left:10px" */