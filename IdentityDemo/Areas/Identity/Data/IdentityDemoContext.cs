using IdentityDemo.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityDemo.Data;

public class IdentityDemoContext : IdentityDbContext<ApplicationUser>
{
    public IdentityDemoContext(DbContextOptions<IdentityDemoContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {


        base.OnModelCreating(builder);
    }
}
