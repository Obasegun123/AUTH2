/* Add here all your JS customizations */



$(document).ready(function () {
    var count = 1;
    dynamic_field(count);

    function dynamic_field(number) {
        html = '<tr>';
        html += '<td>' + count + ' </td>';
        html += '<td><input type="text" name="Name" id="m_Name" "onclick="myFunction(' + count + ')" class="form-control " /><br /> <span asp-validation-for="Name" class="text-danger"></span></td>';
        html += '<td><input type="date" name="CreatedDate" id="CreatedDate" class="form-control" /><br /> <span asp-validation-for="Date" class="text-danger"></span></td>';
        html += '<td><input type="date" name="ExpiryDate" id="ExpiryDate"  class="form-control " /><br /> <span asp-validation-for="Date" class="text-danger"></span></td>';
        html += '<td style="display:none"><input type="text" id="status" name="Status" value="Incomplete" class="form-control " /><br /> <span asp-validation-for="Status" class="text-danger"></span></td>';
        html += '<td><input type="date" name="notifydate" id="notifydate" id="notifydate" class="form-control " /><br /> <span asp-validation-for="notifydate" class="text-danger"></span></td>';


        if (number > 1) {
            html += '<td><button type="button" name="remove" id="" class="btn btn-danger remove">Remove</button></td></tr>';
            $('#data-add-produc').append(html);
            myFunction(count);
        }
        else {
            html += '<td><button type="button" name="add" id="add" class="btn btn-success">Add</button></td></tr>';
            $('#data-add-produc').html(html);
        }
    }

    $(document).on('click', '#add', function () {
        count++;
        dynamic_field(count);
    });

    $(document).on('click', '.remove', function () {
        count--;
        $(this).closest("tr").remove();
    });

});



function createContract() {

    var name = $("#Vendor_Name").val();
    var title = $("#Contract_Title").val();
    var Amount = $("#Amount").val();
    var Mail = $("#Email").val();
    var Created_Date = $("#Created_Date").val();
    var Expiry_Date = $("#Expiry_Date").val();
    var Attachement = $("#Attachement").val();
    var m_Name = $("#m_Name").val();
    var FundingSource = $("#FundingSource").val();
    var Notify = $("#Notify_date").val();
    var Category = $("#Category").val();


    var mssd = $("#CreatedDate").val();
    var msed = $("#ExpiryDate").val();
    var msnd = $("#notifydate").val();

    var now = new Date();
    var datemssd = new Date(mssd).getDate();
    var datemsed = new Date(msed).getDate();
    var datemsnd = new Date(msnd).getDate();
    var dateCreated_Date = new Date(Created_Date).getTime();
    var dateExpiry_Date = new Date(Expiry_Date).getTime();
   // alert(now);  alert(datemssd); alert(dateCreated_Date);
    if (mssd < Created_Date || mssd > Expiry_Date) {
        $('#message').html(
            app.showErrorAlert('Milestone Start Date Must be Within the Contract Start and End Date!')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (msed < Created_Date || msed > Expiry_Date) {
        $('#message').html(
            app.showErrorAlert('Milestone End Date Must be Within the Contract Start and End Date!')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (msnd < Created_Date || msnd > Expiry_Date) {
        $('#message').html(
            app.showErrorAlert('Milestone Notify Me Date Must be Within the Contract Start and End Date!')
        );
        window.scrollTo(0, 0);
        return;
    }


    if (name == "") {
        $('#message').html(
            app.showErrorAlert('Vendor Name cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (title == "") {
        $('#message').html(
            app.showErrorAlert('Contract Title cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Mail == "") {
        $('#message').html(
            app.showErrorAlert('Email cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Category == "") {
        $('#message').html(
            app.showErrorAlert('Category cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Created_Date == "") {
        $('#message').html(
            app.showErrorAlert('Issuer Date cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Expiry_Date == "") {
        $('#message').html(
            app.showErrorAlert('Expiry Date cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Attachement == "") {
        $('#message').html(
            app.showErrorAlert('Please choose a file in pdf format')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (m_Name == "") {
        $('#message').html(
            app.showErrorAlert('Name is required')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Amount == "") {
        $('#message').html(
            app.showErrorAlert('Amount is required')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (FundingSource == "") {
        $('#message').html(
            app.showErrorAlert('Funding Source is required')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Notify == "") {
        $('#message').html(
            app.showErrorAlert('Notify Date cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    var files = $("#Attachement").prop("files");
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
        formData.append("FilePDF", files[i]);
    }


    var econt = new Array();
    $("#datatablesss TBODY TR").each(function () {
   /* $("#datatable-tabletools TBODY TR").each(function () {*/
        var row = $(this);
        var m_Name; var ExpiryDate; var CreatedDate; var status;
        var Milestone = {}; var Notifydate
        // part = JSON.parse($.trim(row.find("TD").eq(3).html()));
        m_Name = $.trim(row.find("td:eq(1) input[type='text']").val());
        CreatedDate = row.find("td:eq(2) input[type='date']").val();
        ExpiryDate = row.find("td:eq(3) input[type='date']").val();
        status = row.find("td:eq(4) input[type='text']").val();
        Notifydate = row.find("td:eq(5) input[type='date']").val();
        Milestone.m_Name = m_Name;
        Milestone.CreatedDate = CreatedDate;
        Milestone.ExpiryDate = ExpiryDate;
        Milestone.status = status;
        Milestone.Notify_date = Notifydate;
        econt.push(Milestone);
    });
  //  formData.append("milestones", JSON.stringify(econt));

    //Contract
    var contract = new Object();
    contract.Vendor_Name = name;
    contract.ContractTemplateId = title;
    contract.Email = Mail;
    contract.Created_Date = Created_Date;
    contract.Expiry_Date = Expiry_Date;
    contract.FundingSource = FundingSource;
    contract.Amount = Amount;
    contract.Notify_date = Notify;
    contract.Category = Category;
   contract.Milestones = econt;

    formData.append("Contracts", JSON.stringify(contract));



    var url = "/Contract/CreateContracts";
    $.ajax({
        type: 'POST',
        url: url,
        //  data: JSON.stringify(flagBearer),
        data: formData,
        processData: false,
        contentType: false,
        //dataType: "json",
        //contentType: "application/json",
        //data: JSON.stringify(contract),
        success: function (data) {
            console.log(data);
            if (data.status === "Success") {

                alert(data.message);
                $('#message').html(
                    app.showErrorAlert(data.message)
                );
                window.location = "//localhost:7051/Contract/Index/"
            } else {

                alert(data.message);
            }

        },

    });

}



function LoadMilestone() {
    // var election_id = $("#election_id").val();
    var url = "/Contract/milestoneLists";

    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        // contentType: 'json',
        data: { Contract_Id: $("#Contract_Id").val() },
        success: function (data) {
            $('#milestoneDetails').empty();
            if (data.length > 0) {
                var ui = 1;
                for (var i in data) {
                    var formattedDate = new Date(data[i].createdDate);
                    var d = formattedDate.getDate();
                    var m = formattedDate.getMonth();
                    var y = formattedDate.getFullYear();
                    var startDate = y + "/" + m + "/" + d;

                    var endDate = new Date(data[i].expiryDate);
                    var d = endDate.getDate();
                    var m = endDate.getMonth();
                    var y = endDate.getFullYear();
                    var expDate = y + "/" + m + "/" + d;

                    var notifyDate = new Date(data[i].notify_date);
                    var d = notifyDate.getDate();
                    var m = notifyDate.getMonth();
                    var y = notifyDate.getFullYear();
                    var notiDate = y + "/" + m + "/" + d;

                    $('<tr><td>' + ui + '</td>\n\
                    <td>' + data[i].m_Name + '</td>\n\
                    <td> ' + data[i].status + '</td >\n\
                    <td> ' + startDate + '</td >\n\
                         <td> ' + expDate + '</td >\n\
                        <td> ' + notiDate + '</td >\n\
                             <td>\n\
                    <button type="button" name="edit" id="editmilestone" class="btn btn-primary" href="#" onclick="ViewMilestoneDetails(\''+ data[i].milestone_Id + '\')">Update</button>\n\
                   </td>\n\                                        </tr>').appendTo("#milestoneDetails");

                    ui++;
                }
                if (!$.fn.DataTable.isDataTable('#datatable-tabletools')) {
                    $().DataTable({
                        dom: 'frtip',
                        pageLength: 10
                    });
                }

            }


        },
        error: function (jqXHR) {
            alert("cannot load data");
        }

    });
};


var ViewMilestoneDetails = function (milestone_Id) {
   // Milestone_Id = $("#Milestone_Id").val();

    var url = "/Contract/GetMilestoneIndividualById";

    $.ajax({
        type: 'GET',
        url: url,
        data: { Milestone_Id: milestone_Id },
        dataType: 'json',
        contentType: 'json',
        success: function (data) {
            $("#m_Name").val(data.m_Name);
            
            $("#comment").val(data.comment);
            $("#notifydate").val(data.notify_date);
            $("#startDate").val(data.createdDate);
           // $("#startDate").val($.datepicker.formatDate('dd M yy', data.createdDate));
            $("#endDate").val(data.expiryDate);
            $("#Contract_Id").val(data.contract_Id);
            $("#Milestone_Id").val(data.milestone_Id);
           
            $("#btnUpload").show();
            $("#formato").show();
            $(window).scrollTop(0);


        },
        error: function (jqXHR) {
            alert("Cannot load the Milestone");
        }
    });
}







function updateMilestone() {


    var Contract_Id = $("#Contract_Id").val();

    var comment = $("#comment").val();
    var status = $("#status").val();
    var CreatedDate = $("#startDate").val();
    var Notify_date = $("#notifydate").val();
    var ExpiryDate = $("#endDate").val();
    var Milestone_Id = $("#Milestone_Id").val();
    var m_Name = $("#m_Name").val();

    if (comment == "") {
        $('#message').html(
            app.showErrorAlert('Comment cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (CreatedDate == "") {
        $('#message').html(
            app.showErrorAlert('Issuer Date caannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (ExpiryDate == "") {
        $('#message').html(
            app.showErrorAlert('Expiry Date cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Notify_date == "") {
        $('#message').html(
            app.showErrorAlert('Notification Date cannot be empty')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (m_Name == "") {
        $('#message').html(
            app.showErrorAlert('Name is required')
        );
        window.scrollTo(0, 0);
        return;
    }
 

    var milestone = new Object();
    milestone.m_Name = m_Name;
    milestone.contract_Id = Contract_Id;
    milestone.milestone_Id = Milestone_Id;
    milestone.createdDate = CreatedDate;
    milestone.notify_date = Notify_date;
    milestone.expiryDate = ExpiryDate;
    milestone.comment= comment;
    milestone.status= status;

    // var dsent = '{flagBearer: ' + JSON.stringify(flagBearer) + '}';
    // var url = '@Url.Action("CreateFlagBearer")';
    var url = "/Contract/UpdateMilestone";
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(milestone),
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            if (data.code === "Success") {
                $('#m_Name').val("");
                $("#formato").hide();
                LoadMilestone();
                alert("Data has been updated successfully.");
           

            } else {

                alert("Error while updating data");
            }

        },

    });

}


var AllContractTitle = function () {
    $.ajax({
        type: 'GET',
        url: "/Contract/GetAllContractTitle",

        dataType: 'json',

        success: function (data) {

            $.each(data, function (i, title) {
                $("#Contract_Title").append('<option value="' + title.value + '">' +
                    title.text + '</option>');

            });
        },
        error: function (ex) {
            alert('Failed to retrieve Contract Title' + ex);
        }
    });
    return false;
} 




//$("#Contract_Title").change(function () {
var ContractTitleList = function (id) {
   // var id = $("#Contract_Title").val();
    $("#Vendor_Name").empty();
   $("#Amount").empty();
    $("#Vendor_Name").attr('disabled', 'disabled');
    $("#Amount").attr('disabled', 'disabled');
    var url = "/Contract/GetContractTitleByIdForList/" +id;

    $.ajax({
        async: false,
        type: 'GET',
        url: url,
      //  data: { id: id },
        dataType: 'json',
        contentType: 'json',
        success: function (data) {
            $("#Vendor_Name").val(data.vendorName);
            $("#Amount").val(data.payment2);
       
        },
        error: function (jqXHR) {
            $("#Vendor_Name").val("");
            $("#Amount").val("");
            alert("Cannot load the Vendor Name & Amount");
        }
    });
    return false;
}

var GetAllFundingSourceForContract = function () {
    $.ajax({
        type: 'GET',
        url: "/FundingSource/GetAllFundingSourceForContract",

        dataType: 'json',

        success: function (data) {

            $.each(data, function (i, title) {
                $("#FundingSource").append('<option value="' + title.value + '">' +
                    title.text + '</option>');

            });
        },
        error: function (ex) {
            alert('Failed to retrieve Funding Source' + ex);
        }
    });
    return false;
} 


var GetAllCategoryForContract = function () {
    $.ajax({
        type: 'GET',
        url: "/Category/GetAllCategoryForContract",

        dataType: 'json',

        success: function (data) {

            $.each(data, function (i, title) {
                $("#Category").append('<option value="' + title.value + '">' +
                    title.text + '</option>');

            });
        },
        error: function (ex) {
            alert('Failed to retrieve Category' + ex);
        }
    });
    return false;
} 



var GetAllVendorListForTemplate = function () {
    $.ajax({
        type: 'GET',
        url: "/Vendor/GetAllVendorListForTemplate",

        dataType: 'json',

        success: function (data) {

            $.each(data, function (i, title) {
                $("#ContractVendor").append('<option value="' + title.value + '">' +
                    title.text + '</option>');

            });
        },
        error: function (ex) {
            alert('Failed to retrieve Vendor Name' + ex);
        }
    });
    return false;
} 




var ContractVendorList = function (id) {
    // var id = $("#Contract_Title").val();
    $("#VendorRCNo").empty();
    $("#VendorAddress").empty();
    var url = "/ContractTemplate2/GetVendorByIdForList/" + id;

    $.ajax({
        async: false,
        type: 'GET',
        url: url,
        //  data: { id: id },
        dataType: 'json',
        contentType: 'json', 
        success: function (data) {
            $("#VendorRCNo").val(data.rc);
            $("#VendorAddress").val(data.address);

        },
        error: function (jqXHR) {
            $("#VendorRCNo").val("");
            $("#VendorAddress").val("");
            alert("Cannot Load Vendor Address & CAC NO.");
        }
    });
    return false;
}





function LoadReport() {

    var Category = $("#Category").val();
    var Type = $("#Type").val();
    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();

    if (Category == "") {
        $('#message').html(
            app.showErrorAlert('Please Select a Category')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (Type == "") {
        $('#message').html(
            app.showErrorAlert('Please Select a Type')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (FromDate == "") {
        $('#message').html(
            app.showErrorAlert('From Date is Required')
        );
        window.scrollTo(0, 0);
        return;
    }
    if (ToDate == "") {
        $('#message').html(
            app.showErrorAlert('To Date is Required')
        );
        window.scrollTo(0, 0);
        return;
    }
    var req = new Object();
    req.Category = Category;
    req.Type = Type;
    req.FromDate =FromDate;
    req.ToDate = ToDate;

    // var election_id = $("#election_id").val();
    var url = "/Report/ReportLists";

    $.ajax({
        type: 'POST',
        url: url,
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(req),
        success: function (data) {
            $('#ReportList').empty();
            $('#amountTotal').empty();
            if (data.report.length > 0) {
                var ui = 1;
                for (var i in data.report) {

                    $('<tr><td>' + ui + '</td>\n\
                    <td>' + data.report[i].vendorName + '</td>\n\
                    <td> ' + data.report[i].contractTitle + '</td >\n\
                    <td> ' + data.report[i].contractRef + '</td >\n\
                    <td> '+ Intl.NumberFormat('en-US').format(data.report[i].amount )+ '</td >\n\
                    <td> ' + data.report[i].category + '</td >\n\
                         <td> ' + data.report[i].fundingSource + '</td >\n\
                         <td> ' + data.report[i].createdDate + '</td >\n\
                         <td> ' + data.report[i].expiryDate + '</td >\n\
                                                               </tr>').appendTo("#ReportList");

                    ui++;
                }
                if (!$.fn.DataTable.isDataTable('#datatable-tabletools')) {
                    $().DataTable({
                        dom: 'frtip',
                        pageLength: 10
                    });
                  
                }
                $('<tr><td></td >\n\
                    <td></td >\n\
                    <td></td >\n\
                    <td>Total Amount</td >\n\
                    <td> ' + Intl.NumberFormat('en-US').format(data.totalAmount) + '</td >\n\
                                                               </tr>').appendTo("#amountTotal");
            }

         //   alert(data.totalAmount);
        },
        error: function (jqXHR) {
            alert("cannot load data");
        }

    });
};


const app = {
    showSuccessAlert: (message) => {
        return `
        <div class="alert alert-imaged alert-success alert-dismissible fade show mb-2" role="alert">
            <div class="icon-wrap">
                <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <div>
                ${message}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    },

    showErrorAlert: (message) => {
        return `
        <div class="alert alert-imaged alert-danger alert-dismissible fade show mb-2" role="alert">
            <div class="icon-wrap">
                <ion-icon name="warning-outline"></ion-icon>
            </div>
            <div>
                ${message}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    },
}


function createRemark() {

    var Remarkname = $("#remark").val();
    var user = $("#username").val();
    var Contract_Id = $("#Contract_Id").val();
    
    if (Remarkname == "") {
        alert("Remark cannot be empty!");
        return;
    }
    

    var remark = new Object();
    remark.RemarkName = Remarkname;
    //   flagBearer.flag_image = eName;
    remark.userName = user;
    remark.contract_Id = Contract_Id;


    //formData.append("Remark", JSON.stringify(remark));

    var url = "/Contract/CreateRemark";
    $.ajax({
        type: 'POST',
        url: url,
        data:  JSON.stringify(remark) ,
        dataType: "json",
        contentType: "application/json",
        //beforeSend: function () {
        //    showLoader();
        //},
        success: function (data, status, xhr) {
            console.log(data);
            //JSON.stringify(data);
            //alert(data);
            alert("Remark has been added successfully.");
            /*LoadRemark();*/
            window.location.href = "/Contract/Index/"
        },
        error: function (jqXHR) { alert("Error while updating data"); }



    });
}

function LoadRemark() {
    // var election_id = $("#election_id").val();
    var url = "/Contract/GetRemarkById";

    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        // contentType: 'json',
        data: { Contract_Id: $("#Contract_Id").val() },
        success: function (data) {
            $('#RemarkDetails').empty();
            if (data.length > 0) {
                var ui = 1;
                for (var i in data) {

                    $('<tr><td>' + ui + '</td>\n\
                    <td>' + data[i].remarkName + '</td>\n\
                    <td> ' + data[i].userName + '</td >\n\
                    <td> ' + data[i].createdDate + '</td >\n\    </tr>').appendTo("#RemarkDetails");

                    ui++;
                }
                if (!$.fn.DataTable.isDataTable('#datatable-tabletools')) {
                    $().DataTable({
                        dom: 'frtip',
                        pageLength: 10
                    });
                }

            }


        },
        error: function (jqXHR) {
            alert("cannot load data");
        }

    });
};

function Addnewss() {
    $("#formatoo").show();
    window.scrollTo(0, 0);
}