const express = require('express');
const router = express.Router();
var helper = require('sendgrid').mail;
const async = require('async');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const validateFormInput = require('../../validation/ask-form-validation');

router.use(bodyParser.json());

// POST /formValidation gets urlencoded bodies
router.post('/', urlencodedParser, function(req, res) {
  console.log(req.body);
  if (!req.body) {
    return res.sendStatus(400);
  } else {
    // Validation
    const { errors, isValid } = validateFormInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      // Данные в форме заполнены верно, отправляем письмо
      console.log('all if very good');

      async.parallel(
        [
          function(callback) {
            sendEmail(
              callback,
              'no-reply@gmenergo.ru', // From
              ['info@intersell.su'], // To, 'market@gmenergo.ru'
              'Заявка с сайта',
              'Text Content',
              '<h1 style="font-size: 26px;">Опросный лист (' +
                req.body.organizationname +
                ') </h1><p style="font-size: 18px;">С сайта gmenergo.ru поступила заявка. <br>Пользоваталель итересовался заполнил опросный лист. И оставил контакты для связи:<ul style="font-size: 18px;"><li>Почта - ' +
                req.body.personemail +
                '</li></ul></p>'
            );
          }
        ],
        function(err, results) {
          res.send({
            success: true,
            message: 'Emails sent',
            successfulEmails: results[0].successfulEmails,
            errorEmails: results[0].errorEmails
          });
        }
      );
    }
  }
});

function sendEmail(
  parentCallback,
  fromEmail,
  toEmails,
  subject,
  textContent,
  htmlContent
) {
  const errorEmails = [];
  const successfulEmails = [];
  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  async.parallel(
    [
      function(callback) {
        // Add to emails
        for (let i = 0; i < toEmails.length; i += 1) {
          // Add from emails
          const senderEmail = new helper.Email(fromEmail);
          // Add to email
          const toEmail = new helper.Email(toEmails[i]);
          // HTML Content
          const content = new helper.Content('text/html', htmlContent);
          const mail = new helper.Mail(senderEmail, subject, toEmail, content);
          var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
          });
          sg.API(request, function(error, response) {
            // console.log(request);
            // console.log(request.body.personalizations);
            // console.log(request.body.content);
            // console.log('SendGrid');
            if (error) {
              console.log('Error response received');
            }
            // console.log(response.statusCode);
            // console.log(response.body);
            // console.log(response.headers);
            // console.log(response);
          });
        }
        // return
        callback(null, true);
      }
    ],
    function(err, results) {
      // console.log('Done');
    }
  );
  parentCallback(null, {
    successfulEmails: successfulEmails,
    errorEmails: errorEmails
  });
}

module.exports = router;
