
using System.Net.Mail;
using System.Net;
using IdentityDemo.Helpers;

namespace IdentityDemo.Helper.EmailHelpers
{
    public class EmailHelper
    {
        private const int Timeout = 180000;
        private readonly string _host;
        private readonly int _port;
        private readonly string _user;
        private readonly string _pass;
        private readonly bool _ssl;

        public string Sender { get; set; }
        public string Recipient { get; set; }
        public string RecipientCC { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public string AttachmentFile { get; set; }
        private readonly IConfiguration _configuration;

        public EmailHelper(IConfiguration configuration)
        {
            _configuration = configuration;
            //MailServer - Represents the SMTP Server
            _host = _configuration["EmailSettings:MailServer"];
            //Port- Represents the port number
            _port = int.Parse(_configuration["EmailSettings:Port"]);
            //MailAuthUser and MailAuthPass - Used for Authentication for sending email
            _user = _configuration["EmailSettings:MailAuthUser"];
            _pass = _configuration["EmailSettings:MailAuthPass"];
            _ssl = Convert.ToBoolean(_configuration["EmailSettings:EnableSSL"]);
        }

        public void Send()
        {
            try
            {
                //ServiceUtil.WriteToFile("Email notification Started>>>>");
                // We do not catch the error here... let it pass direct to the caller
                Attachment att = null;
                var message = new MailMessage(Sender, Recipient, Subject, Body) { IsBodyHtml = true };
                if (RecipientCC != null)
                {
                    message.Bcc.Add(RecipientCC);
                }
                var smtp = new SmtpClient(_host, _port);

                if (!string.IsNullOrEmpty(AttachmentFile))
                {
                    if (File.Exists(AttachmentFile))
                    {
                        att = new Attachment(AttachmentFile);
                        message.Attachments.Add(att);
                    }
                }

                if (_user.Length > 0 && _pass.Length > 0)
                {
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential(_user, _pass);
                    smtp.EnableSsl = _ssl;
                }

                smtp.Send(message);
                //ServiceUtil.WriteToFile("Email notification Completed>>>>");
                if (att != null)
                    att.Dispose();
                message.Dispose();
                smtp.Dispose();
            }

            catch (Exception ex)
            {
                //throw;
                ServiceUtils.WriteToFile("Exception running Sending email: " + ex.Message);
            }
        }
    }





}
