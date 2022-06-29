$(function() {
	
    var canClose = true;
    
    $('#dialog').dialog({
        modal: true,
        draggable: false,
        autoOpen: false,
        resizable: false,
        beforeClose: function() {
            return canClose;
        },
        
    })
    
    $('#send').button().click(function(e) {
        $('#dialog').dialog("open")
    });
    
    $(document).mouseup(function (e) {
        var container = $(".ui-dialog");
        if (container.has(e.target).length === 0){
            $('#dialog').dialog("close")
        }
    });
});
$(function() {
	
    var canClose = true;
    
    $('#dialog').dialog({
        modal: true,
        draggable: false,
        autoOpen: false,
        resizable: false,
        beforeClose: function() {
            return canClose;
        },
        
    })
    
    $('#openmodal').button().click(function(e) {
        $('#dialog').dialog("open")
    });
    
    $(document).mouseup(function (e) {
        var container = $(".ui-dialog");
        if (container.has(e.target).length === 0){
            $('#dialog').dialog("close")
        }
    });
});