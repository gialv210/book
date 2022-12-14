using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DashboardDemo.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class DashboardDemoMigrationsDbContextFactory : IDesignTimeDbContextFactory<DashboardDemoMigrationsDbContext>
    {
        public DashboardDemoMigrationsDbContext CreateDbContext(string[] args)
        {
            DashboardDemoEfCoreEntityExtensionMappings.Configure();
            
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<DashboardDemoMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Default"));

            return new DashboardDemoMigrationsDbContext(builder.Options);
        }

        private static IConfiguration BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../DashboardDemo.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
