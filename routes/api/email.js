const express = require('express');
const router = express.Router();
var helper = require('sendgrid').mail;
const async = require('async');

router.post('/', (req, res) => {
  async.parallel(
    [
      function(callback) {
        sendEmail(
          callback,
          'ytarefson@gmail.com',
          ['ytarefson@gmail.com'],
          'Subject Line',
          'Text Content',
          '<p style="font-size: 32px;">HTML Content</p>'
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
  const sg = require('sendgrid')(
    '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'
  );
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
            // console.log('SendGrid');
            if (error) {
              // console.log('Error response received');
            }
            // console.log(response.statusCode);
            // console.log(response.body);
            // console.log(response.headers);
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
