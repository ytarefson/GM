const express = require('express');
const router = express.Router();
var helper = require('sendgrid').mail;
const async = require('async');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.use(bodyParser.json());

// POST /login gets urlencoded bodies
router.post('/', urlencodedParser, function(req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  } else {
    // res.send('welcome, ' + req.body.username);

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
  }
});

// router.post('/', (req, res) => {
//   console.log(req);
//   async.parallel(
//     [
//       function(callback) {
//         sendEmail(
//           callback,
//           'ytarefson@gmail.com',
//           ['ytarefson@gmail.com'],
//           'Subject Line',
//           'Text Content',
//           '<p style="font-size: 32px;">HTML Content</p>'
//         );
//       }
//     ],
//     function(err, results) {
//       res.send({
//         success: true,
//         message: 'Emails sent',
//         successfulEmails: results[0].successfulEmails,
//         errorEmails: results[0].errorEmails
//       });
//     }
//   );
// });
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
