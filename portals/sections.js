

let sections = document.getElementById("sections").children;

let minimap = [];

for (let i = 0; i < sections.length; i++) {
    let title = sections[i].children[0];
    let title_element = sections[i].removeChild(title);
    let location = "location" + i;

    minimap.push([title_element.innerHTML, location])

    let body = sections[i].innerHTML;
    let new_title = document.createElement("a");
    new_title.classList.add("location")
    new_title.id = location;
    new_title.appendChild(title_element)
    sections[i].innerHTML = "";
    sections[i].appendChild(new_title);
    sections[i].innerHTML += body;
}

console.log(minimap)

let minimap_elm = document.getElementById("minimap");

for (let i = 0; i < minimap.length; i++) {
    let section = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.href = "#" + minimap[i][1];
    anchor.innerText = minimap[i][0];
    section.appendChild(anchor);
    minimap_elm.appendChild(section);
}
