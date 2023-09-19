using IdentityDemo.Data;
using Microsoft.AspNetCore.Mvc;

namespace IdentityDemo.Controllers
{
	public class UserController : Controller
	{
		private readonly IdentityDemoContext _demoContext;
		public UserController(IdentityDemoContext demoContext) 
		{ 
			_demoContext = demoContext;
		}
		public IActionResult UserActivity()
		{
			var userActivity = _demoContext.UserActivities.FirstOrDefault();
			return View(userActivity);
		}
	}
}
