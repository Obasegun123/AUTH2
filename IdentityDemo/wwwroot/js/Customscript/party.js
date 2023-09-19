function LoadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#targetImage").attr("src", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
        $("#targetImage").show();
        $("#btnDeleteImage").show();
        $("#target").hide();
    }
}
function ResetImage() {
    $("#partyLog").val('');
    $("#targetImage").hide();
    $("#btnDeleteImage").hide();
}

function LoadFlagBearer() {
    // var election_id = $("#election_id").val();
    var url = "/Party/GetParty";

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
            $('#partyDetails').empty();
            if (data.length > 0) {
                var ui = 1;
                for (var i in data) {

                    $('<tr><td>' + ui + '</td>\n\
                    <td>' + data[i].party_name + '</td>\n\
                    <td> ' + data[i].flag_name + '</td >\n\
                    <td> \n\  <img src=" data:image/jpeg;base64,'+ data[i].flag_image + '" width="70px" height="70px" asp-append-version="true" /> </td >\n\
                         <td>\n\
                    <button type="button" name="editflag" id="editflag" class="btn btn-success" href="#" onclick="ViewFlagBearerDetails(\''+ data[i].flag_id + '\')">Edit</button>\n\
                   </td>\n\                                        </tr>').appendTo("#partyDetails");

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
            alert("cannot load flag");
        }

    });
};