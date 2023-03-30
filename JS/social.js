window.onload = function() {
    let myiFrame = document.getElementById("instagram-embed-0");
    let doc = myiFrame.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style>.Header, .EmbeddedMedia{display: none !important;}</style>';
}