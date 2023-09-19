
//$(function () {

//    if (window.location.href != null && (window.location.href.endsWith("GetElection") || window.location.href.endsWith("GetElection#"))) {
       
//        LoadElections()
//    }
//    //if (window.location.href != null && (window.location.href.endsWith("EditElectionGet") || window.location.href.endsWith("EditElectionGet#"))) {

//    //    ViewElectionDetails(election_id);
//    //}
//}) 




//    $(document).ready(function () {
//        var count = 1;
//    dynamic_field(count);

//    function dynamic_field(number) {
//        html = '<tr>';
//       html += '<td><input type="hidden" name="flag_electionName" id="flag_electionName" min="0" class="form-control " /><br /> <span asp-validation-for="flagBearer.flag_image" class="text-danger"></span></td>';
//    html += '<td><input type="hidden" name="flag_electionDate" class="form-control" /><br /> <span asp-validation-for="flagBearer.party_id" class="text-danger"></span></td>';

//    html += '<td><input type="text" name="flagBearer.flag_name" id="flag_name" id="flag_name_' + count + '" onclick="myFunction(' + count + ')" class="form-control " /><br /> <span asp-validation-for="flagBearer.flag_name" class="text-danger"></span></td>';
//    html += '<td><input type="file" id="flag_image" name="flagBearer.flag_image" min="0" class="form-control " /><br /> <span asp-validation-for="flagBearer.flag_image" class="text-danger"></span></td>';
//    html += '<td><input type="number" id="party_id" name="flagBearer.party_id" class="form-control" /><br /> <span asp-validation-for="flagBearer.party_id" class="text-danger"></span></td>';
            
//            if (number > 1) {
//        html += '<td><button type="button" name="remove" id="" class="btn btn-danger remove">Remove</button></td></tr>';
//    $('.data-add-product').append(html);
//    myFunction(count);
//            }
//    else {
//        html += '<td><button type="button" name="add" id="add" class="btn btn-success">Add</button></td></tr>';
//    $('.data-add-product').html(html);
//            }
//        }

//    $(document).on('click', '#add', function () {
//        count++;
//    dynamic_field(count);
//        });

//    $(document).on('click', '.remove', function () {
//        count--;
//    $(this).closest("tr").remove();
//        });

//});

//function LoadImage(input) {
//    if (input.files && input.files[0]) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            $("#targetImage").attr("src", e.target.result);
//        };
//        reader.readAsDataURL(input.files[0]);
//        $("#targetImage").show();
//        $("#btnDeleteImage").show();
//    }
//}
//function ResetImage() {
//    $("#flag_image").val('');
//    $("#targetImage").hide();
//    $("#btnDeleteImage").hide();
//}

//    function createFlag() {

//            var name = $("#flag_name").val();
          
//            var party = $("#party_id").val();
//      //  var img = $("#flag_image").val();
//        var eName = $("#election_id").val();

//        if (name == "") {
//            alert("Flag Bearer name cannot be empty!");
//            return;
//        }
//        if (eName == "") {
//            alert("Image cannot be empty!");
//            return;
//        }
//        if (party == "") {
//            alert("Party cannot be empty!");
//            return;
//        }
//        var files = $("#flag_image").prop("files");
//        var formData = new FormData();
//        for (var i = 0; i < files.length; i++) {
//            formData.append("flagImg", files[i]);
//        }


//        var flagBearer = new Object();
//            flagBearer.flag_name = name;
//         //   flagBearer.flag_image = eName;
//            flagBearer.party_id = party;
//            flagBearer.election_id = eName

//        formData.append("FlagBearer", JSON.stringify(flagBearer));

//           // var dsent = '{flagBearer: ' + JSON.stringify(flagBearer) + '}';
//           // var url = '@Url.Action("CreateFlagBearer")';
//        var url = "/Election/CreateFlagBearer";
//            $.ajax({
//                type: 'POST',
//                url: url,
//                //  data: JSON.stringify(flagBearer),
//                data: formData,
//                processData:false,
//                contentType: false,
//                success: function (data) {
//                    console.log(data);
//                    if (data.code === "Success") {
//                        $('#flag_name').val("");
//                        $('#party_id').val("0");
//                        $('#flag_image').val("");
//                        $("#targetImage").hide();
//                        $("#btnDeleteImage").hide();
//                      //  $('#flag_image').attr("src", "");
//                         showLoader();
//                        alert("Data has been added successfully.");
//                        LoadFlagBearer();
//                    } else {

//                        alert("Error while inserting data");
//                    }

//                },

//            });
        
//}


//function updateFlag() {

//    var name = $("#flag_name").val();
//    var flag = $("#flag_id").val();
//    var party = $("#party_id").val();
//    //  var img = $("#flag_image").val();
//    var eName = $("#election_id").val();

//    if (name == "") {
//        alert("Flag Bearer name cannot be empty!");
//        return;
//    }
//    if (eName == "") {
//        alert("Image cannot be empty!");
//        return;
//    }
//    if (party == "") {
//        alert("Party cannot be empty!");
//        return;
//    }
//    var files = $("#flag_image").prop("files");
//    var formData = new FormData();
//    for (var i = 0; i < files.length; i++) {
//        formData.append("flagImg", files[i]);
//    }


//    var flagBearer = new Object();
//    flagBearer.flag_name = name;
//      flagBearer.flag_id = flag;
//    flagBearer.party_id = party;
//    flagBearer.election_id = eName

//    formData.append("FlagBearer", JSON.stringify(flagBearer));

//    // var dsent = '{flagBearer: ' + JSON.stringify(flagBearer) + '}';
//    // var url = '@Url.Action("CreateFlagBearer")';
//    var url = "/Election/UpdateFlagBearer";
//    $.ajax({
//        type: 'POST',
//        url: url,
//        //  data: JSON.stringify(flagBearer),
//        data: formData,
//        processData: false,
//        contentType: false,
//        success: function (data) {
//            console.log(data);
//            if (data.code === "Success") {
//                $('#flag_name').val("");
//                $('#party_id').val("0");
//                $('#flag_image').val("");
//                $('#flag_id').val("");
//                $("#targetImage").hide();
//                $("#btnDeleteImage").hide();
//                //  $('#flag_image').attr("src", "");
//                    showLoader();


//                alert("Data has been updated successfully.");
//                LoadFlagBearer();
//                $("#btnCreate").show();
//                $('#party_id').removeAttr('disabled');
//                $("#btnUpload").hide();

//            } else {

//                alert("Error while updating data");
//            }

//        },

//    });

//}

//function LoadFlagBearer() {
//    // var election_id = $("#election_id").val();
//    var url = "/Election/GetFlagBearer";

//    $.ajax({
//        type: 'POST',
//        url: url,
//        dataType: 'json',
//        // contentType: 'json',
//        data: { election_id: $("#election_id").val() },
//        success: function (data) {
//            $('#flagDetails').empty();
//            showLoader();

//            if (data.length > 0) {
//                var ui = 1;
//                for (var i in data) {

//                    $('<tr><td>' + ui + '</td>\n\
//                    <td>' + data[i].party_name + '</td>\n\
//                    <td> ' + data[i].flag_name + '</td >\n\
//                    <td> \n\  <img src=" data:image/jpeg;base64,'+ data[i].flag_image +'" width="70px" height="70px" asp-append-version="true" /> </td >\n\
//                         <td>\n\
//                    <button type="button" name="editflag" id="editflag" class="btn btn-success" href="#" onclick="ViewFlagBearerDetails(\''+ data[i].flag_id + '\')">Edit</button>\n\
//                   </td>\n\                                        </tr>').appendTo("#flagDetails");

//                    ui++;
//                }
//                if (!$.fn.DataTable.isDataTable('#datatable-tabletools')) {
//                    $().DataTable({
//                        dom: 'frtip',
//                        pageLength: 10
//                    });
//                }

//            }


//        },
//        error: function (jqXHR) {
//            alert("cannot load flag");
//        }

//    });
//};
//var ViewFlagBearerDetails = function (flag_id) {
//    var url = "/Election/EditFlagBearer";

//    $.ajax({
//        type: 'GET',
//        url: url,
//        data: { flag_id: flag_id },
//        dataType: 'json',
//        contentType: 'json',
//        success: function (data) {
//            showLoader();

//            $("#party_id").val(data.party_id);
//            $("#party_id").attr('disabled', 'disabled');
//            // $("#flag_image").val(data.flag_image);
//            $("#flag_name").empty();
//           // $("#party_up").text("#party_id");
//            /* $("#party_id").val().change(); */
//            $("#flag_id").val(data.flag_id);
//            $("#election_id").val(data.election_id);
//            //$("#party_id").val(data.party_id).change();
//            //obj.flag_image = $("#flag_image").val();
//            //obj.party_id = $("#party_id").val();
//            $("#flag_name").val(data.flag_name);
//            // $('#flag_image').val(localStorage.getItem(data.flag_image));
//            $("#targetImage").attr("src", "data:image/jpeg;base64," + data.flag_image + "");
//            $("#targetImage").show();
//            //var filename = $('#flag_image').val();
//            //if (filename.substring(3, 11) == 'fakepath') {
//            //    filename = filename.substring(12);
//            //} // Remove c:\fake at beginning from localhost chrome
//            //$('#flag_image').html(filename); 


//            //$('#party_id').val(localStorage.getItem(data.party_id));


//            //alert("Loaded successfully");
//            $("#btnCreate").hide();
//            $("#btnUpload").show();
//            $(window).scrollTop(0);
           

//        },
//        error: function (jqXHR) {
//            alert("Cannot load the flag bearer");
//            alert("Error");
//        }

//    });
//}





//function createElection() {
   
//        var q = $("#election_name").val();
//        var a = $("#election_desc").val();
//        var b = $("#etype_id").val();
//        var c = $("#election_date").val();
//    var d = $("#ct_id").val();
//    var r = $("#estate_st_id").val();
//    var lga = $("#elga_lga_id").val();
//    var p = $("#eward_ward_id").val();
//    var z = $("#epunit_punit_id").val();
//    var stat = $("#election_status").val();
//    if (q.length === 0 || q === "") {
//        $('#message').html(
//            showErrorAlert("Name cannot be empty!")
//        );
//        window.scrollTo(0, 0);
//            return;
//        }
//    if (a.length === 0 || a === " ") {
//        $('#message').html(
//            showErrorAlert("Description cannot be empty!")
//        );
//        window.scrollTo(0, 0);
//            return;
//        }
//    if (b.length === 0 || b === "") {
//        $('#message').html(
//            showErrorAlert("Election Type cannot be empty!")
//        );
//        window.scrollTo(0, 0);
//            return;
//        }
//    if (c.length === 0 || c === "") {
//        $('#message').html(
//            showErrorAlert("Please set a valid date!")
//        );
//        window.scrollTo(0, 0);

//            return;
//        }
//    if (d.length === 0 || d === "") {
//        $('#message').html(
//            showErrorAlert("Country cannot be empty!")
//        );
//        window.scrollTo(0, 0);
//            return;
//    }
//   // var election = {};
//   //election.election_name = q;
//   //election.election_desc = a;
//   // election.etype_id = b;
//   // election.election_date = c;
//   //          election.ct_id=d

//   // var electionStates = [];
//    var electionLgas = [];
//  //  $("#estate_st_id").each(function () {
//    var estate_st_id = r;
//    var elga_lga_id = lga;
//   // alert(elga_lga_id);

//    //    var ElectionObj = {};
//    //ElectionObj.electionStates = $("#estate_st_id").val();
//        //electionStates.push(ElectionObj);
//  //  });
    

//    var param = new Object();
//    param.electionName = q;
//    param.electionDesc = a;
//    param.electionDate = c;
//    param.status = stat;
//    param.electionType = b;
//    param.electionCountry = d;
//    param.electionStates = r;
//    param.electionLgas = lga;
//    param.electionWards = p;
//    param.electionPus = z;

//    //var dsent = JSON.stringify(reqobj);

//       // estate_st_id: [r]
    
//    //var res = "";
//    //for (var i in electionState.estate_st_id) {
//    //    res += electionState.estate_st_id[i] + ",";
//    //}

//    //var partyFlag = {};
//    //partyFlag.election = election;
//    //   partyFlag.electionState=electionState
    
//    //var election = new Object();
//    //    election.election_name= q;
//    //election.election_desc = a;
//    //election.etype_id = b;
//    //election.election_date = c;
//    //election.ct_id = d

//    //var electionState = new Object();
//    //    electionState.estate_st_id= r

//    //var partyFlag = new Object();
//    //partyFlag.election = election;
//    //     partyFlag.electionState=electionState
    
//    //var dsent = JSON.stringify({ election: election }) ;
//    // var url = '@Url.Action("CreateElection")';
//    //var electionState = { estate_st_id: r };
//    //$.each([electionState], function (val) {
//    //    return val;
//    //});

//    //var election = new Object();
//    //    partyFlag.election.election_name= q;
//    //partyFlag.election.election_desc = a;
//    //partyFlag.election.etype_id = b;
//    //partyFlag.election.election_date = c;
//    //partyFlag.election.ct_id=d
//    var url = "/Election/CreateElection";
//    $.ajax({
//        type: 'POST',
//        url: url,
//        dataType: "json",
//        contentType: "application/json",
//        data: JSON.stringify(param),
       
//            success: function (data, status, xhr) {
//                console.log(data);
//                //JSON.stringify(data);
//                alert(data);
//                //alert(data.message);
//                //var x = data.message;
//                //console.log(x);
//                //alert(xhr.responseText);
//                //$("#question").val(data.message);
//                //$("#dem").html(data.message);
//                //$("#election_id").val(data.message);
//                alert("Data has been added successfully.");
//                window.location = "//localhost:5152/Election/GetElectionNew/"
//                //$("#btnCreate").hide();
//                //$("#btnUpd").show();
//                //$("#btnFlag").show();
//            },
//            error: function () { alert("Error while inserting data"); }
                

            
//        });
//    }

//function updateElection() {
   
//    //var q = $("#election_name").val();
//    //var a = $("#election_desc").val();
//    //var b = $("#etype_id").val();
//    //var c = $("#election_date").val();
//    var stat = $("#election_status").val();
//    var elec = $("#election_id").val();
  
    
//    var election = new Object();
//    election.election_status = stat;
//    election.election_id = elec;
   
//    var url = "/Election/EditPost";
//    $.ajax({
//        type: 'POST',
//        url: url,
//        dataType: "json",
//        data: JSON.stringify(election),
//        contentType: "application/json",
//        beforeSend: function () {
//            showLoader();
//        },
//        success: function (data, status, xhr) {
//            if (data.code === "Success") {
//                console.log(data);
//                alert("Data has been updated successfully.");
                
//            } else {
//                alert("Error");
//            }
//        },
//        error: function () { alert("Error while updating data"); }



//    });
//}








//function LoadElections() {
//    // var election_id = $("#election_id").val();
//    var url = "/Election/GetElections";

//    $.ajax({
//        type: 'GET',
//        url: url,
//        dataType: 'json',
//        // contentType: 'json',
//       // data: { election_id: $("#election_id").val() },
//        success: function (data) {
//            $('#electionDetails').empty();
//            if (data.length > 0) {
//                var ui = 1;
//                for (var i in data) {

//                    $('<tr><td>' + ui + '</td>\n\
//                    <td>' + data[i].election_name + '</td>\n\
//                    <td> ' + data[i].election_desc + '</td >\n\
//                         <td> ' + data[i].election_date + '</td >\n\
//                         <td> ' + data[i].etype_id + '</td >\n\
//                         <td> ' + data[i].ct_id + '</td >\n\
//                         <td> ' + data[i].flag_name + '</td >\n\
//                         <td> ' + data[i].flag_image + '</td >\n\
//                         <td> ' + data[i].party_id + '</td >\n\
//                         <td> ' + data[i].election_id + '</td >\n\
//                    <td><div class="btn-group flex-wrap">\n\
//                    <button type="button" class= "btn btn-default dropdown-toggle" data-toggle="dropdown" > Actions <span class="caret"></span> </button>\n\
//                    <div class="dropdown-menu" role="menu">\n\
//                    <a class="dropdown-item text-1" href="/Election/EditElectionGet" onclick="ViewElectionDetails(\''+ data[i].election_id + '\')" ><i class="fa fa-eye"></i> View</a>\n\
//                    <a class="dropdown-item text-1" href="#" onclick="DeleteFlag(\'' + data[i].election_id + '\')"><i class="fas fa-trash-alt"></i> Delete</a>\n\
//                    </div></div ></td>\n\
//                    </tr>').appendTo("#electionDetails");

//                    ui++;
//                }
//                if (!$.fn.DataTable.isDataTable('#datatable-tabletools')) {
//                    $().DataTable({
//                        dom: 'frtip',
//                        pageLength: 10
//                    });
//                }

//            }


//        },
//        error: function (jqXHR) {
//            alert(jqXHR.responseText);
//            alert("cannot load data");
//        }

//    });
//};


//var ViewElectionDetails = function (election_id) {
//    var url = "/Election/EditElection";
   
//    $.ajax({
//        type: 'GET',
//        url: url,
//        data: { election_id: election_id },
//        dataType: 'json',
//       // contentType: 'json',
//        success: function (data) {

//            $('#election_name').empty();
//            $('#election_desc').empty();
//            $('#election_date').empty();
//            $('#etype_id').empty();
//            $('#ct_id').empty();
           
//            $('#election_name').val(data.election_name);
//            $('#election_desc').val(data.election_desc);
//            $('#election_date').val(data.election_date);
//            $('#etype_id').val(data.etype_id);
//            $('#ct_id').val(data.ct_id);
          
//            //$("#btnReg").hide();
//            //$("#btnUpd").show();
          
//        },
//        error: function (jqXHR) {
//            alert(jqXHR.responseText);
//            alert("Error");
//        }

//    });
//}




//var AllPartyFlag = function () {
//    $.ajax({
//        type: 'GET',
//        url: "/Election/GetAllPartyForFlag",

//        dataType: 'json',

//        success: function (data) {


//            $.each(data, function (i, party) {
//                $("#party_id").append('<option value="' + party.value + '">' +
//                    party.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            alert('Failed to retrieve Parties' + ex);
//        }
//    });
//    return false;
//} 



//var AllCountries = function () {
//    $.ajax({
//        type: 'GET',
//        url: "/Election/GetAllCountriesList",

//        dataType: 'json',

//        success: function (data) {
//            showLoader();
//            $.each(data, function (i, state) {
//                $("#ct_id").append('<option value="' + state.value + '">' +
//                    state.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            alert('Failed to retrieve Countries' + ex);
//        }
//    });
//    return false;
//} 


//$("#ct_id").change(function () {
//    $("#estate_st_id").empty();
//    $.ajax({
//        async: false,
//        type: 'GET',
//        url: "/Election/GetstateList",
//        //url: '@Url.Action("GetstateList")',

//        contentType:'json',
//        dataType: 'json',

//        data: { ctd: $("#ct_id").val() },


//        success: function (states) {
//            showLoader();
//            $.each(states, function (i, state) {
//                $("#estate_st_id").append('<option value="' + state.value + '">' +
//                    state.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            alert('Failed to retrieve country states.' + ex);
//        }
//    });
//    return false;
//})  


//function loadLgas() {
//    $("#elga_lga_id").empty();
//    var std = $("#estate_st_id").val();
//  //  alert(std);
//    $.ajax({
//        async: false,
//        type: 'GET',
//        url: "/Election/GetLgaList/" + std,
//        //url: '@Url.Action("GetstateList")',
//        contentType: 'json',
//        dataType: 'json',


//        success: function (lgas) {

//            showLoader();
//            $.each(lgas, function (i, lga) {
//                $("#elga_lga_id").append('<option value="' + lga.value + '">' +
//                    lga.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            console.log(ex);
//            alert('Failed to retrieve state Lga.' + JSON.stringify(ex));
//        }
//    });
//}
////  $("#estate_st_issd").change(function () {
////    alert("i dey like dey");
   
////    $("#elga_lga_id").empty();
////    var stateId = $("#estate_st_id").val();
////    alert(stateId);
////    console.log(stateId);
////    $.ajax({
////        async:false,
////        type: 'GET',
////        url: "/Election/GetLgaList/"+stateId,
////        //url: '@Url.Action("GetstateList")',
////        contentType: 'json',
////        dataType: 'json',
      

////        success: function (lgas) {


////            $.each(lgas, function (i, lga) {
////                $("#elga_lga_id").append('<option value="' + lga.value + '">' +
////                    lga.text + '</option>');

////            });
////        },
////        error: function (ex) {
////            alert('Failed to retrieve state Lga.' + ex);
////        }
////    });
////    return false;
////})  


//$("#elga_lga_id").change(function () {
//    var ltd = $("#elga_lga_id").val();
//    $("#eward_ward_id").empty();
//    $.ajax({
//        async: false,
//        type: 'GET',
//        url: "/Election/GetWardList/" + ltd,
//        //url: '@Url.Action("GetstateList")',

//        contentType: 'json',
//        dataType: 'json',

//        data: { ltd: $("#elga_lga_id").val() },


//        success: function (wards) {
//            showLoader();
//            $.each(wards, function (i, ward) {
//                $("#eward_ward_id").append('<option value="' + ward.value + '">' +
//                    ward.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            alert('Failed to retrieve Lga Ward.' + ex);
//        }
//    });
//    return false;
//})

//$("#eward_ward_id").change(function () {
//    var ward_id = $("#eward_ward_id").val();
//    $("#epunit_punit_id").empty();
//    $.ajax({
//        async:false,
//        type: 'GET',
//        url: "/Election/GetPollingUnitList/" + ward_id,
//        //url: '@Url.Action("GetstateList")',

//        contentType: 'json',
//        dataType: 'json',

//        data: { ward_id: $("#eward_ward_id").val() },
//        beforeSend: function () {
//            showLoader();
//        },
//        success: function (pollingunits) {

//            $.each(pollingunits, function (i, punit) {
//                $("#epunit_punit_id").append('<option value="' + punit.value + '">' +
//                    punit.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            alert('Failed to retrieve Ward Polling Unit.' + ex);
//        }
//    });
//    return false;
//})

//var AllElectionType = function () {
//    $.ajax({
//        type: 'GET',
//        url: "/Election/GetAllElectionTypeList",

//       dataType: 'json',
//        contentType: 'json',
//        success: function (data) {


//            $.each(data, function (i, etype) {
//                $("#etype_id").append('<option value="' + etype.value + '">' +
//                    etype.text + '</option>');

//            });
//        },
//        error: function (ex) {
//            alert('Failed to retrieve Election Type' + ex);
//        }
//    });
//    return false;
//} 

//$("#etype_id").change(function () {
//    var et = $("#etype_id").val();
//    if (et == 3) {
//        showLoader();
//        $("#stateLL").hide();
//        $("#lgaLL").hide();
//        $("#wardLL").hide();
//        $("#punitLL").hide();
//        $("#estate_st_id").val(" ");
//        $("#elga_lga_id").val(" ");
//        $("#eward_ward_id").val(" ");
//        $("#epunit_punit_id").val(" ");
//    }
//    else if (et == 4) {
//        showLoader();
//        $("#stateLL").show();
//        $("#lgaLL").hide();
//        $("#wardLL").hide();
//        $("#punitLL").hide();
//        $("#elga_lga_id").val("");
//        $("#eward_ward_id").val("");
//        $("#epunit_punit_id").val("");
//    }
//    else if (et == 5 || et == 6 || et == 7 || et == 8) {
//        showLoader();
//        $("#stateLL").show();
//        $("#lgaLL").show();
//        $("#wardLL").hide();
//        $("#punitLL").hide();
//        $("#eward_ward_id").val("");
//        $("#epunit_punit_id").val("");
//    } else if (et == 9) {
//        showLoader();
//        $("#stateLL").show();
//        $("#lgaLL").show();
//        $("#wardLL").show();
//        $("#punitLL").hide();
//        $("#eward_ward_id").val("");
//        $("#epunit_punit_id").val("");
//    }
//    else {
//        showLoader();
//        $("#stateLL").hide();
//        $("#lgaLL").hide();
//        $("#wardLL").hide();
//        $("#punitLL").hide();
//    }
//})

//var ShowInPopUp = function (url, title) {
//    $.ajax({
//        type: "Get",
//        url: url,
//        success: function (res) {
//            showLoader();
//            $("#form-modal .modal-body").html(res);
//            $("#form-modal .modal-title").html(title);
//            $("#form-modal").modal('show');

//        }

//    })

//}
//function showLoader() {
//    $.LoadingOverlay("show");
//    setTimeout(function () {
//        $.LoadingOverlay("hide");
//    }, 800);
//}

////showErrorAlert: (message) => {
//    function showErrorAlert(message) { 
//    return `
//        <div class="alert alert-imaged alert-danger alert-dismissible fade show mb-2" role="alert">
//            <div class="icon-wrap">
//                <ion-icon name="warning-outline"></ion-icon>
//            </div>
//            <div>
//                ${message}
//            </div>
//            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//        </div>`;
//}