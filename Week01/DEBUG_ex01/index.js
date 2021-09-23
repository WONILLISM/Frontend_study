function hello(s) {
    let tmp = `Hello, ${s}!`;

    debugger

    out(tmp);
}

function out(s) {
    alert(`** ${s} **`);
}