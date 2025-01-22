function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addBorders() {
    let stack = [document.body];

    while (stack.length > 0) {
        let element = stack.pop();
        element.style.border = `2px solid ${getRandomColor()}`;

        for (let i = 0; i < element.children.length; i++) {
            stack.push(element.children[i]);
        }
    }
}

function addBordersRecursive(element) {
    element.style.border = `2px solid ${getRandomColor()}`;
    for (let i = 0; i < element.children.length; i++) {
        addBordersRecursive(element.children[i]);
    }
}

document.getElementById("addBordersIterativeButton").addEventListener("click", addBorders);

document.getElementById("addBordersRecursiveButton").addEventListener("click", function() {
    addBordersRecursive(document.body);
});