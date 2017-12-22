var i=0;
var msg="";

function timedCount() {
	i++;
	postMessage(msg + i);
	setTimeout(timedCount,0);
}

timedCount();

self.addEventListener("message",function(e){
	msg = e.data + ": ";
});