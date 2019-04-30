function changeCss(fileList, showIndex) {
    if(showIndex == -1) {
        showIndex = fileList.length - 1;
        $('#prevItem').css({'background-image' : 'url(' +  fileList[showIndex - 1] +')'});
        $('#contentsItem').css({'background-image' : 'url(' +  fileList[showIndex] +')'});
        $('#nextItem').css({'background-image' : 'url(' +  fileList[0] +')'});
    }
    else if(showIndex == 0) {
        $('#prevItem').css({'background-image' : 'url(' +  fileList[fileList.length - 1] +')'});
        $('#contentsItem').css({'background-image' : 'url(' +  fileList[showIndex] +')'});
        $('#nextItem').css({'background-image' : 'url(' +  fileList[showIndex + 1] +')'});
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
    return showIndex;
};
