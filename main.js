const tab = {
    "Python" : "https://mocki.io/v1/8b5615b6-7748-4e40-8190-4f6d37b3f3d9" ,
    "Excel" : "https://ammardab3an-json-server.herokuapp.com/c_excel",
    "Web Development" : "https://ammardab3an-json-server.herokuapp.com/c_web",
    "Javascript" : "https://ammardab3an-json-server.herokuapp.com/c_js",
    "Data Science" : "https://ammardab3an-json-server.herokuapp.com/c_data",
    "AWS certification" : "https://ammardab3an-json-server.herokuapp.com/c_aws",
    "Drawing" :  "https://ammardab3an-json-server.herokuapp.com/c_draw"
};

let myCourse = [];
view();
viewCat();
function search(){
    let arr = [];
    let searchBar = document.getElementById("search-bar");
    let searchBtn = document.getElementById("search-btn");
    let wantedStr = document.querySelector("[type = 'text']");
    searchBtn.onclick = function(x){
        x.preventDefault();
        for(var key in tab){
            fetch(tab[key]).then(res => res.json()) .then(data =>
                {
                    myCourse = data['courses'];
                    for (var i = 0; i < myCourse.length; i++){
                        if (myCourse[i]["title"].toLowerCase().includes(wantedStr.value.toLowerCase())) {
                            arr.push(myCourse[i]);
                        }
                    }
                    view(arr);
                });
                arr = [];
            }   
        }
}
search();

function view(myCourses = [], cat = "Python"){
    fetch(tab[cat]).then(res => res.json()) .then(data =>
    {
        let mySection = document.getElementById("textCont3");
        mySection.innerHTML="";
        let myh2 = document.createElement("h2");
        myh2.innerHTML = data["header"];

        let con3P = document.createElement("p");
        con3P.innerHTML = data["description"];
        con3P.setAttribute("class" , "con3P");

        let myfa = document.createElement("a");
        myfa.innerHTML ="Explore " + cat;
        myfa.setAttribute("class" , "explorePython")
        
        
        if (myCourses.length == 0){
            myCourses = data['courses'];
            mySection.appendChild(myh2);
            mySection.appendChild(con3P);
            mySection.appendChild(myfa);
    
        }
        else{
            let myCourseslist = document.getElementById("carousel");
            myCourseslist.innerHTML = "";
            myh2.innerHTML = "Search Result";
            mySection.appendChild(myh2);
        }
        let myCourseslist = document.getElementById("carousel");
        myCourseslist.innerHTML = "";

        let divnew;
        let myUl;
        for (var i = 0; i < myCourses.length; ++i){
  ;
            if (i % 5 == 0){
                
                divnew = document.createElement("div");
                divnew.style.cssText = "";
                if (i == 0) divnew.setAttribute("class" , "item active");
                else divnew.setAttribute("class" , "item");

                myUl = document.createElement("ul");
                myUl.style.cssText =  "display: flex; flex-wrap: wrap; column-gap: 40px;row-gap: 40px;"

    
         
                
                divnew.appendChild(myUl);   
                
                myCourseslist.appendChild(divnew);
            }
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
            myUl.appendChild(myCourse);
        }
    });
}
let pythonTab = document.getElementById("Python");
pythonTab.onclick = function () {view("","Python");} 

let excelTab = document.getElementById("Excel");
excelTab.onclick = function () {view("","Excel");} 

let webTab = document.getElementById("Web Development");
webTab.onclick = function () {view("","Web Development");} 

let JavaScriptTab = document.getElementById("JavaScript");
JavaScriptTab.onclick = function () {view("","Javascript");} 

let DataScienceTab = document.getElementById("Data Science");
DataScienceTab.onclick = function () {view("","Data Science");} 

let AWScertificationTab = document.getElementById("AWS Certificate");
AWScertificationTab.onclick = function () {view("","AWS certification");} 

let drawingTab = document.getElementById("Drawing");
drawingTab.onclick = function () {view("","Drawing");}


function viewCat(){
    fetch("https://mocki.io/v1/49f79b94-5b60-44db-babd-3261911b4395").then(res => res.json()) .then(data =>
    {
        let myCategoriesList = document.getElementById("categories");
        let myCategories = data['categories'];
        for (var i = 0; i < myCategories.length; ++i){
            
            let myA = document.createElement("a");
            myA.classList.add("col-lg-3", "col-md-4" , "col-sm-6" , "col-xs-12");
            myA.setAttribute("href", "./index.html");
            myA.style.cssText = "padding: 0px; padding-bottom: 16px; padding-right: 16px; "

            let catImg = document.createElement("img");
            var url = myCategories[i]["image"];
            catImg.setAttribute("src", url);
            catImg.style.cssText = "width: 100%"

            let catP = document.createElement("p");
            catP.innerHTML = myCategories[i]["title"];
            catP.setAttribute("class", "catp");

            myA.append(catImg);
            myA.append(catP);
            myCategoriesList.append(myA);
        }



    });
}