
    
    var x = setInterval(tempo,2000);
	    
    function tempo() {
			document.getElementById("splash").style.display = "none";
	}


    function he(){
        document.getElementById("adduser").style.display = "unset";
    }

    function cl(){
        document.getElementById("adduser").style.display = "none";
    }


    function tems(params) {
        document.getElementById("chat").style.width = "0";
        document.getElementById("ativo").style.color = "";
        document.getElementById("callvideo").style.marginRight="20px";
        document.getElementById("header").style.marginRight="0";
        document.getElementById("video").style.gridTemplateColumns = "repeat(3, 1fr)";
        document.getElementById("video").style.transform = "translate(-15px)";
        document.getElementById("video").style.transition = ".1s";
    }
