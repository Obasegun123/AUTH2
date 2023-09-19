
using IdentityDemo.Helper.EmailHelpers;
using IdentityDemo.Helpers;

public class Notification
    {
        private readonly IConfiguration _configuration;

        public Notification(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public void Mail(string email, string Firstname)//properties to be added or we can use getter and setter method
        {
            string body;

            using (var sr = new StreamReader(_configuration["EmailSettings:EmailTemplates"] + "\\Identity.html"))
            {

                body = sr.ReadToEnd();
            }
            try
            {
                string sender = _configuration["EmailSettings:EmailFromAddress"];
                string emailSubject = @"Milestone Expiration Notice";
                string messageBody = string.Empty;
                //string rurl = _configuration["EmailSettings:appurl"] + "Account/ResetPassword?code=" + code + "&email=" + forgotPasswordViewModel.Email;

                messageBody = string.Format(body, email, Firstname);

                var emailHelper = new EmailHelper(_configuration)
                {
                    Sender = sender,
                    Recipient = email,
                    RecipientCC = null,
                    Subject = emailSubject,
                    Body = messageBody
                };
                emailHelper.Send();
            }
            catch (Exception ex)
            {
                ServiceUtils.WriteToFile("Exception sending Milestone Notice: " + ex.Message);
            }
        }
    }


