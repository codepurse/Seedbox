var step = 0; // variable that will handle what form is the user is.

function moreLess(initiallyVisibleCharacters) {
  var visibleCharacters = initiallyVisibleCharacters;
  var paragraph = $(".text");

  paragraph.each(function () {
    var text = $(this).text();
    var wholeText =
      text.slice(0, visibleCharacters) +
      "<span class='ellipsis'>... </span><a href='#' class='more'>MORE<i class='fa fa-arrow-circle-o-down' aria-hidden='true'></i></a>" +
      "<span style='display:none'>" +
      text.slice(visibleCharacters, text.length) +
      "<a href='#' class='less'> LESS<i class='fa fa-arrow-circle-o-up' aria-hidden='true'></i></a></span>";

    if (text.length < visibleCharacters) {
      return;
    } else {
      $(this).html(wholeText);
    }
  });
  $(".more").click(function (e) {
    e.preventDefault();
    $(this).hide().prev().hide();
    $(this).next().show();
  });
  $(".less").click(function (e) {
    e.preventDefault();
    $(this).parent().hide().prev().show().prev().show();
  });
}

moreLess(70);

$("input:checkbox").prop("checked", false); // All checkbox in fatca will be uncheck so the default value will be no.
$(".checkNo").prop("checked", true); // All checkbox that are in no section will be check.
$(".checkNo:checked").attr("style", "--b: gray;"); // All checkbox that are in no section will be grayed.

// Function that will copy the current address to permanent address
$("#cbx").change(function (event) {
  if (this.checked) {
    $(".txtPermaAdd1").val($(".txtCurrentAdd1").val());
    $(".txtPermaAdd2").val($(".txtCurrentAdd2").val());
    $(".txtPermaCity").val($(".txtCurrentCity").val());
    $(".txtPermaProvince").val($(".txtCurrentProvince").val());
  } else {
    $(".txtPermaAdd1").val("");
    $(".txtPermaAdd2").val("");
    $(".txtPermaCity").val("");
    $(".txtPermaProvince").val("");
  }
});

// Function that will prevent the no checkbox uncheck rather it will change the color into green.
$(".checkNo").on("click", function (e) {
  var checkbox = $(this);
  if (checkbox.is(":checked")) {
  } else {
    $(this, "input:checked").attr("style", "--b: #13C95C;");
    e.preventDefault();
    return false;
  }
});

// Function that can know if the email is invalid format or not.
$(function () {
  // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
  var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

  $(".txtEmail").on("keyup", function () {
    $(".pErrorEmail").hide();
    regExp.test($(this).val())
      ? $(".pErrorEmail.success").hide()
      : $(".pErrorEmail.error").show();
  });
});

// click function for personal in bar.
function functionPersonal() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("Personal Information");
  $(".divAdrress").css("display", "none");
  $(".divForm").css("display", "none");
  $(".divAdrress").removeClass("animate__fadeOut");
  $(".divAdrress").addClass("animate__animated  animate__fadeOut");
  $(".divAdrress").addClass("animate__animated  animate__fadeOut");
  $(".divInfo").css("display", "block");
  $(".divInfo").removeClass("animate__fadeOut");
  $(".divInfo").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "58px");
  step = 0;
}
// click function for address in bar.
function functionAdrress() {
  $(".conContent").attr(
    "style",
    "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
  );
  $(".colForm").css("padding-top", "20px");
  $(".colForm").css("padding-bottom", "20px");
  $(".pMore").text("Address Information");
  $(".divForm").css("display", "none");
  $(".divForm").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divAdrress").css("display", "block");
  $(".divAdrress").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "125px");
  if ($("#cbx").is(":checked")) {
    $(".txtPermaAdd1").val($(".txtCurrentAdd1").val());
    $(".txtPermaAdd2").val($(".txtCurrentAdd2").val());
    $(".txtPermaCity").val($(".txtCurrentCity").val());
    $(".txtPermaProvince").val($(".txtCurrentProvince").val());
  } else if ($(this).is(":not(:checked)")) {
    $(".txtPermaAdd1").val("");
    $(".txtPermaAdd2").val("");
    $(".txtPermaCity").val("");
    $(".txtPermaProvince").val("");
  }
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  step = 1;
}

function functionProfessional() {
  $(".conContent").attr(
    "style",
    "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
  );
  $(".colForm").css("padding-top", "20px");
  $(".colForm").css("padding-bottom", "20px");
  $(".pMore").text("Professional Details");
  $(".divForm").css("display", "none");
  $(".divForm").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divAdrress1").css("display", "block");
  $(".divAdrress1").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "195px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  step = 2;
}

function functionFatca() {
  $(".conContent").attr(
    "style",
    "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: 0 !important;"
  );
  $(".conContent").attr(
    "style",
    "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
  );
  $(".colForm").css("padding-top", "20px");
  $(".colForm").css("padding-bottom", "20px");
  $(".pMore").text("FATCA");
  $(".divForm").css("display", "none");
  $(".divFatca").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divFatca").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divFinancial").css("display", "none");
  $(".divFinancial").addClass("animate__animated  animate__fadeOut");
  $(".divFatca").css("display", "block");
  $(".divFatca").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "400px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });

  step = 5;
}

function functionCsa() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });

  $(".pMore").text("CSA");
  $(".divCsa").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divCsa").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divForm").css("display", "none");
  $(".divFinancial").css("display", "none");
  $(".divFinancial").addClass("animate__animated  animate__fadeOut");
  $(".divCsa").css("display", "block");
  $(".divCsa").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "265px");
  step = 3;
}

function functionPep() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("PEP Declaration");
  $(".divForm").css("display", "none");
  $(".divCsa").css("display", "none");
  $(".divCsa").removeClass("animate__fadeOut");
  $(".divCsa").addClass("animate__animated  animate__fadeOut");
  $(".divPep").css("display", "block");
  $(".divPep").removeClass("animate__fadeOut");
  $(".divPep").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "330px");
  step = 4;
}

function functionSettlement() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("Upload Documents");
  $(".divForm").css("display", "none");
  $(".divPep").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divPep").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divPep").css("display", "none");
  $(".divPe   p").addClass("animate__animated  animate__fadeOut");
  $(".divSettlement").css("display", "block");
  $(".divSettlement").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "540px");
  $("#txtAccountname").val($("#txtfullname").val());

  step = 7;
}

function functionUpload() {
  $(".conContent").css("height", "82vh");
  $(".colForm").css("padding-top", "0px");
  $(".colForm").css("padding-bottom", "0px");
  $(".colmid").css({ height: $(".conContent").height() + "px" });
  $(".pMore").text("Upload Documents");
  $(".divForm").css("display", "none");
  $(".divSettlement").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divSettlement").removeClass(
    "animate__animated  animate__fadeOut animate__fadeIn"
  );
  $(".divSettlement").css("display", "none");
  $(".divUpload").css("display", "block");
  $(".divUpload").addClass("animate__animated  animate__fadeIn");
  $(".divWhite").css("top", "470px");
  step = 7;
}

// Automatic text format based on what id type the user choose
$(document).ready(function () {
  $("#txtIdNumber").keyup(function (event) {
    if ($("#IdType").val() === "GSIS ID") {
      $("#txtIdNumber").attr("maxlength", "11");
    }
    if ($("#IdType").val() === "TIN ID") {
      $("#txtIdNumber").attr("maxlength", "15");
      addHyphen(this);
    }
    if ($("#IdType").val() === "Pag-Ibig ID") {
      $("#txtIdNumber").attr("maxlength", "14");
      addHyphenPagibig(this);
    }
    if ($("#IdType").val() === "PRC ID") {
      $("#txtIdNumber").attr("maxlength", "7");
    }
    if ($("#IdType").val() === "OFW e-Card") {
      $("#txtIdNumber").attr("maxlength", "13");
    }
    if ($("#IdType").val() === "Philhealth") {
      $("#txtIdNumber").attr("maxlength", "14");
      $text = $("#txtIdNumber");
      if ($text.val().length === 2) {
        $text.val($text.val() + "-");
      } else if ($text.val().length === 12) {
        $text.val($text.val() + "-");
      }
    }
    if ($("#IdType").val() === "Driver license") {
      $("#txtIdNumber").attr("maxlength", "13");
      $text = $("#txtIdNumber");
      if ($text.val().length === 3) {
        $text.val($text.val() + "-");
      } else if ($text.val().length === 5) {
        $text.val($text.val() + "-");
      }
    }
    if ($("#IdType").val() === "Passport") {
      $("#txtIdNumber").attr("maxlength", "12");
    }
    if ($("#IdType").val() === "SSS ID") {
      $("#txtIdNumber").attr("maxlength", "13");
      $text = $("#txtIdNumber");
      if ($text.val().length === 2) {
        $text.val($text.val() + "-");
      } else if ($text.val().length === 10) {
        $text.val($text.val() + "-");
      }
    }
  });
});

// Evertime the user change the id type the id number will be null
$(document).ready(function () {
  $("#IdType").change(function (event) {
    $("#txtIdNumber").val("");
  });
});

// Ambot
$(".pClamp").click(function () {
  $(this).attr(
    "style",
    "text-overflow: clip !important;display: block !important;-webkit-line-clamp: 4 !important;"
  );
});

// The border color of the textbox will turn to green everytime the user type
$(document).ready(function () {
  $(".txtusername").keyup(function (event) {
    $(this).css("border-color", "green");
  });
});

// Add hpyhen in tin numver
$(document).ready(function () {
  $("#txtTin").keyup(function (event) {
    addHyphen(this);
  });
});

function addHyphenPagibig(element) {
  let val = $(element).val().split("-").join(""); // Remove dash (-) if mistakenly entered.

  let finalVal = val.match(/.{1,4}/g).join("-"); // Add (-) after 3rd every char.
  $(element).val(finalVal); // Update the input box.
}
function addHyphen(element) {
  let val = $(element).val().split("-").join(""); // Remove dash (-) if mistakenly entered.

  let finalVal = val.match(/.{1,3}/g).join("-"); // Add (-) after 3rd every char.
  $(element).val(finalVal); // Update the input box.
}

// If the user click the checkbox the other one will be uncheck.
$('input[type="checkbox"]').click(function () {
  $(this)
    .parents()
    .eq(2)
    .find('input[type="checkbox"]')
    .not(this)
    .prop("checked", false);
});

// Remove the search bar in selectbox
$(".select2").select2({
  width: "element",
  minimumResultsForSearch: -1,
});

// Click function for back button
$(".btnBack").click(function () {
  if (step === 7) {
    $(".conContent").css("height", "82vh");
    $(".colForm").css("padding-top", "0px");
    $(".colForm").css("padding-bottom", "0px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    $(".pMore").text("Upload Documents");
    $(".divSettlement").css("display", "none");
    $(".divSettlement").removeClass("animate__fadeOut");
    $(".divSettlement").addClass("animate__animated  animate__fadeOut");
    $(".divUpload").css("display", "block");
    $(".divUpload").removeClass("animate__fadeOut");
    $(".divUpload").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "470px");
    step = 6;
  } else if (step === 6) {
    $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("FATCA");
    $(".divUpload").css("display", "none");
    $(".divUpload").removeClass("animate__fadeOut");
    $(".divUpload").addClass("animate__animated  animate__fadeOut");
    $(".divUpload").addClass("animate__animated  animate__fadeOut");
    $(".divFatca").css("display", "block");
    $(".divFatca").removeClass("animate__fadeOut");
    $(".divFatca").addClass("animate__animated  animate__fadeIn");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    $(".divWhite").css("top", "400px");
    step = 5;
  } else if (step === 5) {
    $(".conContent").css("height", "82vh");
    $(".colForm").css("padding-top", "0px");
    $(".colForm").css("padding-bottom", "0px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    $(".pMore").text("PEP Declaration");
    $(".divFatca").css("display", "none");
    $(".divFatca").removeClass("animate__fadeOut");
    $(".divFatca").addClass("animate__animated  animate__fadeOut");
    $(".divPep").css("display", "block");
    $(".divPep").removeClass("animate__fadeOut");
    $(".divPep").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "330px");
    step = 4;
  } else if (step === 4) {
    $(".conContent").css("height", "82vh");
    $(".colForm").css("padding-top", "0px");
    $(".colForm").css("padding-bottom", "0px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    $(".pMore").text("CSA");
    $(".divPep").css("display", "none");
    $(".divPep").removeClass("animate__fadeOut");
    $(".divPep").addClass("animate__animated  animate__fadeOut");
    $(".divCsa").css("display", "block");
    $(".divCsa").removeClass("animate__fadeOut");
    $(".divCsa").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "260px");
    step = 3;
  } else if (step === 3) {
    $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("Professional Details");
    $(".divCsa").css("display", "none");
    $(".divCsa").removeClass("animate__fadeOut");
    $(".divCsa").addClass("animate__animated  animate__fadeOut");
    $(".divCsa").addClass("animate__animated  animate__fadeOut");
    $(".divAdrress1").css("display", "block");
    $(".divAdrress1").removeClass("animate__fadeOut");
    $(".divAdrress1").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "190px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    step = 2;
  } else if (step === 2) {
    $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("Personal Information");
    $(".divAdrress1").css("display", "none");
    $(".divAdrress1").removeClass("animate__fadeOut");
    $(".divAdrress1").addClass("animate__animated  animate__fadeOut");
    $(".divAdrress1").addClass("animate__animated  animate__fadeOut");
    $(".divAdrress").css("display", "block");
    $(".divAdrress").removeClass("animate__fadeOut");
    $(".divAdrress").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "125px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    step = 1;
  } else if (step === 1) {
    $(".conContent").css("height", "82vh");
    $(".colForm").css("padding-top", "0px");
    $(".colForm").css("padding-bottom", "0px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    $(".divAdrress").css("display", "none");
    $(".divAdrress").removeClass("animate__fadeOut");
    $(".divAdrress").addClass("animate__animated  animate__fadeOut");
    $(".divAdrress").addClass("animate__animated  animate__fadeOut");
    $(".divInfo").css("display", "block");
    $(".divInfo").removeClass("animate__fadeOut");
    $(".divInfo").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "58px");
    step = 0;
  }
});

// Click function for next button
$(".btnProceed").click(function () {
  if (step === 0) {
    /*
var bday = $("#selectYY").val() + - + $("#selectMM").val() + - + $("#selectDD").val();
        var dob = bday;
        if (dob != '') {
            var str = dob.split('-');
            var firstdate = new Date(str[0], str[1], str[2]);
            var today = new Date();
            var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
            var age = parseInt(dayDiff);

            if (age < 18) {
                $(".pErrorAge").css("display", "block");
            }
            else {
                $(".pErrorAge").css("display", "none");
                $(".divAdrress").removeClass("animate__animated  animate__fadeOut animate__fadeIn");
                $(".divAdrress").removeClass("animate__animated  animate__fadeOut animate__fadeIn");
                $(".divInfo").css("display", "none");
                $(".divInfo").addClass("animate__animated  animate__fadeOut")
                $(".divAdrress").css("display", "block");
                $(".divAdrress").addClass("animate__animated  animate__fadeIn");
                step = 1;
                $(".divWhite").css("top", "125px");
                $("#txtAccountname").val($("#txtfullname").val());
            }
        }
        */
    $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pErrorAge").css("display", "none");
    $(".divAdrress").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divAdrress").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divInfo").css("display", "none");
    $(".divInfo").addClass("animate__animated  animate__fadeOut");
    $(".divAdrress").css("display", "block");
    $(".divAdrress").addClass("animate__animated  animate__fadeIn");
    step = 1;
    $(".divWhite").css("top", "125px");
    $("#txtAccountname").val($("#txtfullname").val());
    $(".colmid").css({ height: $(".conContent").height() + "px" });
  } else if (step === 1) {
    $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("Address Information");
    $(".divAdrress1").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divAdrress1").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divAdrress").css("display", "none");
    $(".divAdrress").addClass("animate__animated  animate__fadeOut");
    $(".divAdrress1").css("display", "block");
    $(".divAdrress1").addClass("animate__animated  animate__fadeIn");
    if ($("#cbx").is(":checked")) {
      $(".txtPermaAdd1").val($(".txtCurrentAdd1").val());
      $(".txtPermaAdd2").val($(".txtCurrentAdd2").val());
      $(".txtPermaCity").val($(".txtCurrentCity").val());
      $(".txtPermaProvince").val($(".txtCurrentProvince").val());
    } else if ($(this).is(":not(:checked)")) {
      $(".txtPermaAdd1").val("");
      $(".txtPermaAdd2").val("");
      $(".txtPermaCity").val("");
      $(".txtPermaProvince").val("");
    }
    $(".divWhite").css("top", "195px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    step = 2;
  } else if (step === 2) {
    $(".conContent").css("height", "82vh");
    $(".colForm").css("padding-top", "0px");
    $(".colForm").css("padding-bottom", "0px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });

    $(".pMore").text("CSA");
    $(".divCsa").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divCsa").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divAdrress1").css("display", "none");
    $(".divAdrress1").addClass("animate__animated  animate__fadeOut");
    $(".divCsa").css("display", "block");
    $(".divCsa").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "265px");

    step = 3;
  } else if (step === 3) {
    $(".pMore").text("PEP Declaration");
    $(".divPep").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divCsa").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divCsa").css("display", "none");
    $(".divCsa").addClass("animate__animated  animate__fadeOut");
    $(".divPep").css("display", "block");
    $(".divPep").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "335px");
    step = 4;
  } else if (step === 4) {
    $(".conContent").attr(
      "style",
      "background-color: white; width: 100%;border-radius: 25px;box-shadow: 5px 10px 15px #00000029;-webkit-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);-moz-box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.19);height: auto !important;"
    );
    $(".colForm").css("padding-top", "20px");
    $(".colForm").css("padding-bottom", "20px");
    $(".pMore").text("FATCA");
    $(".divFatca").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divFatca").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divPep").css("display", "none");
    $(".divPep").addClass("animate__animated  animate__fadeOut");
    $(".divFatca").css("display", "block");
    $(".divFatca").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "400px");
    $(".colmid").css({ height: $(".conContent").height() + "px" });
    step = 5;
  } else if (step === 5) {
    $(".pMore").text("Upload Documents");
    $(".divUpload").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divUpload").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divFatca").css("display", "none");
    $(".divFatca").addClass("animate__animated  animate__fadeOut");
    $(".divUpload").css("display", "block");
    $(".divUpload").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "470px");
    step = 6;
  } else if (step === 6) {

    $(".pMore").text("Settlement Information");
    $(".divSettlement").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divSettlement").removeClass(
      "animate__animated  animate__fadeOut animate__fadeIn"
    );
    $(".divUpload").css("display", "none");
    $(".divUpload").addClass("animate__animated  animate__fadeOut");
    $(".divSettlement").css("display", "block");
    $(".divSettlement").addClass("animate__animated  animate__fadeIn");
    $(".divWhite").css("top", "540px");
    step = 7;
  }
});

// Added function for resize windows
$(document).ready(function () {
  $(window)
    .resize(function () {
      if ($(window).width() < 500) {
        $(".pMore").text("Personal Information");
        $(".colStep").removeClass("colmid");
        $(".rowStep").addClass("colmid");
      } else {
        $(".pMore").text("More Information");
        $(".colStep").addClass("colmid");
        $(".rowStep").removeClass("colmid");
      }
    })
    .resize();
});

// Added blur effect when the navbar is opened
function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  $(".container").css("filter", "blur(5px)");
  $(".container-fluid").css("filter", "blur(5px)");
}

// Close function of navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $(".container").css("filter", "blur(0px)");
  $(".container-fluid").css("filter", "blur(0px)");
}

$(":input").cSelect();
