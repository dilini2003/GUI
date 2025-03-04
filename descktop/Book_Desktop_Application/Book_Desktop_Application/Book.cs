using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book_Desktop_Application
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public double Price { get; set; }
        public double OriginalPrice { get; set; }
        public string Image_Url { get; set; }
        public string Category { get; set; }
        public int Quantity { get; set; }
    }
}
