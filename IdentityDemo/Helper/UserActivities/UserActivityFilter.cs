using IdentityDemo.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using System.Net;

namespace IdentityDemo.Helper.UserActivities
{
	public class UserActivityFilter : IActionFilter
	{
		private readonly IdentityDemoContext dbContext;

		public UserActivityFilter(IdentityDemoContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public void OnActionExecuted(ActionExecutedContext context)
		{
			//throw new NotImplementedException();
		}

		public void OnActionExecuting(ActionExecutingContext context)
		{
			var data = "";
			var controllerName = context.RouteData.Values["controller"];
			var actionName = context.RouteData.Values["action"];

			var url = $"{controllerName}/{actionName}";

			if (!string.IsNullOrEmpty(context.HttpContext.Request.QueryString.Value))
			{
				data = context.HttpContext.Request.QueryString.Value;
			}
			else
			{
				var userData = context.ActionArguments.FirstOrDefault();
				var stringUserData = JsonConvert.SerializeObject(userData);

				data = stringUserData;
			}
			var userName = context.HttpContext.User.Identity.Name;

			var ipAddress = context.HttpContext.Connection.RemoteIpAddress.ToString();

			var machineName = Dns.GetHostName();

			StoredUserActivity(data, url, userName, ipAddress, machineName);
		}
		public void StoredUserActivity(string data, string url, string userName, string ipAddress, string machineName)
		{
			var userActivity = new UserActivity
			{
				Data = data,
				Url = url,
				UserName = userName,
				IpAddress = ipAddress,
				HostMachine = machineName,
			};
			dbContext.UserActivities.Add(userActivity);
			dbContext.SaveChanges();
		}
	}

}
