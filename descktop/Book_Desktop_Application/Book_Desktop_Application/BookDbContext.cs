using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Book_Desktop_Application
{
    public class BookDbContext:DbContext
    {
        public DbSet<Book> books { get; set; } 

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:/Users/DELL/Documents/GitHub/GUI/backend/database.sqlite");
        }

    }
}
