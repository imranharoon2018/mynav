<iframe id="responseFrame" style="display:none;"></iframe>

$.ajax({
  url: "your_url_here",
  type: "GET",
  dataType: "json",
  success: function(response) {
    var iframe = document.getElementById("responseFrame");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(JSON.stringify(response));
    iframeDocument.close();
  }
});
function printIframe() {
  var iframe = document.getElementById("responseFrame");
  var iframeWindow = iframe.contentWindow || iframe.contentDocument.defaultView;
  iframeWindow.print();
}
function removeIframe() {
  var iframe = document.getElementById("responseFrame");
  iframe.parentNode.removeChild(iframe);
}
