function changeCss(fileList, showIndex) {
    if(showIndex == -1) {
        showIndex = fileList.length - 1;
        $('#prevItem').css({'background-image' : 'url("' +  fileList[showIndex - 1] +'")'});
        $('#contentsItem').css({'background-image' : 'url("' +  fileList[showIndex] +'")'});
        $('#nextItem').css({'background-image' : 'url("' +  fileList[0] +'")'});
    }
    else if(showIndex == 0) {
        $('#prevItem').css({'background-image' : 'url("' +  fileList[fileList.length - 1] +'")'});
        $('#contentsItem').css({'background-image' : 'url("' +  fileList[showIndex] +'")'});
        $('#nextItem').css({'background-image' : 'url("' +  fileList[showIndex + 1] +'")'});
    }
    else if(showIndex == fileList.length) {
        showIndex = 0;
        $('#prevItem').css({'background-image' : 'url("' +  fileList[fileList.length - 1] +'")'});
        $('#contentsItem').css({'background-image' : 'url("' +  fileList[showIndex] +'")'});
        $('#nextItem').css({'background-image' : 'url("' +  fileList[showIndex + 1] +'")'});
    }
    else if(showIndex == fileList.length - 1) {
        $('#prevItem').css({'background-image' : 'url("' +  fileList[showIndex - 1] +'")'});
        $('#contentsItem').css({'background-image' : 'url("' +  fileList[showIndex] +'")'});
        $('#nextItem').css({'background-image' : 'url("' +  fileList[0] +'")'});
    }
    else {
        $('#prevItem').css({'background-image' : 'url("' +  fileList[showIndex - 1] +'")'});
        $('#contentsItem').css({'background-image' : 'url("' +  fileList[showIndex] +'")'});
        $('#nextItem').css({'background-image' : 'url("' +  fileList[showIndex + 1] +'")'});
    }
	$('#nameSpace').text(getFileName(fileList[showIndex]));
    return showIndex;
};

function getFileName(str) {
	return str.split("/")[str.split("/").length - 1];
}

function appendFileList(fileList, dirList) {
	var fileListDiv = $("<div id='fileList'></div>");
	fileListDiv.append($("<div class='dirLink'>..</div>"));

	for(var i = 0; i < dirList.length; i++ ){
		fileListDiv.append($("<div class='dirLink'>" + getFileName(dirList[i]) + "</div>"));
	}

	for(var i = 0; i < fileList.length; i++ ){
		fileListDiv.append($("<div class='fileLink'>" + getFileName(fileList[i]) + "</div>"));
	}
	$('#listDiv').append(fileListDiv);
}
