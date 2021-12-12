// copy  website address to clipboard
function copyAddress() {
    navigator.clipboard.writeText('https://flaviaouyang.github.io/etch-a-sketch/');
    alert("Website URL copied to clipboard");
}

const share = document.getElementById("share");
share.addEventListener("click", function(){
    if (!navigator.clipboard) {
        alert("You browser does not support this feature");
        return false;
    }
    copyAddress();
});