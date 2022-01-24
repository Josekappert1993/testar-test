function startup() {
    let c = document.body;
    let newDiv = document.createElement("div");
    newDiv.className = "wrapper";
    let h = c.getElementsByTagName("h2").length;
    let element = c.getElementsByTagName("h2");
    document.querySelector("h1").classList.add("header");
    document.getElementById("demo").innerHTML = h;
    var list = document.getElementsByTagName('ul')
    for (var i = 0; i < list.length; i++) {
        list[i].parentNode.insertBefore(document.createElement('hr'), list[i].nextSibling);
    }
}