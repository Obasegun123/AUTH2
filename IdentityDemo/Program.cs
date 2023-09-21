using IdentityDemo.Areas.Identity.Data;
using IdentityDemo.Data;
using IdentityDemo.Helper.UserActivities;
using IdentityDemo.Helpers.ExceptionHandler;
using IdentityDemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<IdentityDemoContext>(options =>
    options.UseSqlServer(connectionString, options =>
    {
        options.EnableRetryOnFailure(
            maxRetryCount: 5,
            maxRetryDelay: TimeSpan.FromSeconds(5),
            errorNumbersToAdd: new List<int>() { }
            );
    }));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();


builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<IdentityDemoContext>()
    .AddDefaultTokenProviders();
builder.Services.Configure<DataProtectionTokenProviderOptions>(opts => opts.TokenLifespan = TimeSpan.FromHours(10));

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequiredLength = 8;
    options.Password.RequireLowercase = true;
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromSeconds(20);
    options.Lockout.MaxFailedAccessAttempts = 5;
    //options.SignIn.RequireConfirmedAccount = true;
    //options.User.RequireUniqueEmail = true;
});
builder.Services.AddControllersWithViews(opt => opt.Filters.Add(typeof(UserActivityFilter)));

//builder.Services.AddAuthentication()
//    .AddMicrosoftAccount(microsoftOptions =>
//    {
//        microsoftOptions.ClientId = builder.Configuration.GetConnectionString("Authentication:Microsoft:ClientId");
//        microsoftOptions.ClientSecret = builder.Configuration.GetConnectionString("Authentication:Microsoft:ClientSecret");
//    })
//    .AddTwitter(twitter =>
//    {
//        twitter.ConsumerKey = builder.Configuration.GetConnectionString("Authentication:Twitter:ConsumerKey");
//        twitter.ConsumerSecret = builder.Configuration.GetConnectionString("Authentication:Twitter:ConsumerSecret");
//    })
//    .AddFacebook(facebook =>
//    {
//        facebook.AppId = builder.Configuration.GetConnectionString("Authentication:Facebook:AppId");
//        facebook.AppSecret = builder.Configuration.GetConnectionString("Authentication:Facebook:AppSecret");
//    });




var app = builder.Build();

var host = app.Services.GetRequiredService<IServiceScopeFactory>();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{


    using (var scope = host.CreateScope())
    {
        var services = scope.ServiceProvider;
        var loggerFactory = services.GetRequiredService<ILoggerFactory>();
        try
        {
            var context = services.GetRequiredService<IdentityDemoContext>();
            var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
            await ContextSeed.SeedRolesAsync(userManager, roleManager);
            await ContextSeed.SeedSuperAdminAsync(userManager, roleManager);
        }
        catch (Exception ex)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(ex, "An error occurred seeding the DB.");
        }
    }
    app.UseMigrationsEndPoint();
}
else
{
    using (var scope = host.CreateScope())
    {
        var services = scope.ServiceProvider;
        var loggerFactory = services.GetRequiredService<ILoggerFactory>();
        try
        {
            var context = services.GetRequiredService<IdentityDemoContext>();
            var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
            await ContextSeed.SeedRolesAsync(userManager, roleManager);
            await ContextSeed.SeedSuperAdminAsync(userManager, roleManager);
        }
        catch (Exception ex)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(ex, "An error occurred seeding the DB.");
        }
    }

    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();


app.UseMiddleware<ErrorHandlerMiddleware>();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();


app.Run();