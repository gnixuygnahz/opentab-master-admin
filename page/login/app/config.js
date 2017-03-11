/**
 * Created by anytime on 2017/3/9.
 */

$(function(){
    showLoading()
    var appId = localStorage.getItem('appId');
    if (appId==null){
        hideLoading()
    }else {
        const path = nodeRequire('path')
        const {BrowserWindow} = nodeRequire('electron').remote
        let win = new BrowserWindow({width: 1000, height: 700,frame:false})
        win.loadURL(path.join('file://', __dirname, '../main/index.html'))
        win.webContents.openDevTools()
        win.show()
        window.close()
    }
});

function configOp() {
    var appId=$("#appId").val()
    var masterKey=$("#masterKey").val()
    var host=$("#host").val()
    showLoading()
    $.ajax({
        url: host+'/v1/master/test',
        type: 'GET',
        headers:{
            "X-IC-Id":appId,
            "X-IC-Key":masterKey+",master"
        },
        success: function(result) {

            if($("#rem").get(0).checked){
                localStorage.setItem('appId', appId);
                localStorage.setItem('masterKey', masterKey);
                localStorage.setItem('host', host);
            }

            const {BrowserWindow} = nodeRequire('electron').remote
            const path = nodeRequire('path')
            let win = new BrowserWindow({width: 1000, height: 700,frame:false})
            win.loadURL(path.join('file://', __dirname, './main.html'))
            win.show()
            window.close()
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $('.bs-example-modal-sm').modal('show')
            hideLoading()
        },
    });
}

function showLoading() {
    $("#loading").removeClass("hidden")
    $("#loading").addClass("show")
    $("#config").removeClass("show")
    $("#config").addClass("hidden")
}

function hideLoading() {
    $("#loading").removeClass("show")
    $("#loading").addClass("hidden")
    $("#config").removeClass("hidden")
    $("#config").addClass("show")
}