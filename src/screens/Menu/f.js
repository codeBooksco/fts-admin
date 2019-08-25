import $ from 'jquery';

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//City Start
var modalConfirm = function (callback) {

    $(".btn-confirm").on("click", function () {
        $("#mi-modal").modal('show');
    });

    $("#modal-btn-si").on("click", function () {
        callback(true);
        $("#mi-modal").modal('hide');
    });

    $("#modal-btn-no").on("click", function () {
        callback(false);
        $("#mi-modal").modal('hide');
    });
};

modalConfirm(function (confirm) {
    if (confirm) {
        //Acciones si el usuario confirma

        alert("Confirmed");
    } else {
        //Acciones si el usuario no confirma
        alert("Not Confirmed");
    }
});
//City End 

//Category Start
var modalConfirm_category = function (callback) {

    $(".btn-confirm-category").on("click", function () {
        $("#mi-modal-category").modal('show');
    });

    $("#modal-btn-yes-category").on("click", function () {
        callback(true);
        $("#mi-modal-category").modal('hide');
    });

    $("#modal-btn-no-category").on("click", function () {
        callback(false);
        $("#mi-modal-category").modal('hide');
    });
};

modalConfirm_category(function (confirm) {
    if (confirm) {
        //Acciones si el usuario confirma

        alert("Confirmed");
    } else {
        //Acciones si el usuario no confirma
        alert("Not Confirmed");
    }
});
//Category End 


//Sport Start
var modalConfirm_Sport = function (callback) {

    $(".btn-confirm-sport").on("click", function () {
        $("#mi-modal-sport").modal('show');
    });

    $("#modal-btn-si-sport").on("click", function () {
        callback(true);
        $("#mi-modal-sport").modal('hide');
    });

    $("#modal-btn-no-sport").on("click", function () {
        callback(false);
        $("#mi-modal-sport").modal('hide');
    });
};

modalConfirm_Sport(function (confirm) {
    if (confirm) {
        //Acciones si el usuario confirma

        alert("Confirmed");
    } else {
        //Acciones si el usuario no confirma
        alert("Not Confirmed");
    }
});
//Sport End 


//Add Sport Popup Start



var modalConfirm_AddSport = function (callback) {

    $(".addsportpopup").on("click", function () {
        $("#modalsportsadd").modal('show');
    });


    $("#modal-btn-close").on("click", function () {
        callback(false);
        $("#modalsportsadd").modal('hide');
    });
};
modalConfirm_AddSport(function (confirm) {
    if (confirm) {
        //Acciones si el usuario confirma

        //alert("Confirmed");
    } else {
        //Acciones si el usuario no confirma
        //alert("Not Confirmed"); 
    }
});
         //Add Sport End
