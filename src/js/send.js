"use strict";

function sendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("emailId").value,
    tel: document.getElementById("fullTel").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_u7pgv2p", "template_6gswemw", params).then(
    function (res) {
      alert("Лист успішно надіслано!");
    },
    function (error) {
      alert("Помилка при відправці" + JSON.stringify(error));
    }
  );
}
