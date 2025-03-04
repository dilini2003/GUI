using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Book_Desktop_Application
{
    /// <summary>
    /// Interaction logic for UpdateWindow.xaml
    /// </summary>
    public partial class UpdateWindow : Window
    {
        private BookDbContext _db = new BookDbContext();
        public UpdateWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            bookGrid.ItemsSource = _db.books.ToList();
        }

        private void back(object sender, RoutedEventArgs e)
        {
            DashboardWindow DashboardWindow = new DashboardWindow();
            DashboardWindow.Show();
            this.Close();
        }

        private void Update(object sender, RoutedEventArgs e)
        {
            if (bookGrid.SelectedItem is Book p)
            {
                Book book = new Book();
                book.Id = p.Id;
                book.Title = p.Title;
                book.Author = p.Author;
                book.Price = p.Price;
                book.OriginalPrice = p.OriginalPrice;
                book.Image_Url = p.Image_Url;
                book.Category = p.Category;
                book.Quantity = p.Quantity;

                Update pWindow = new Update(book);
                if (pWindow.ShowDialog() == true)
                {

                    p.Title = book.Title;
                    p.Author = book.Author;
                    p.Price = book.Price;
                    p.OriginalPrice = book.OriginalPrice;
                    p.Image_Url = book.Image_Url;
                    p.Category = book.Category;
                    p.Quantity = book.Quantity;
                    _db.books.Update(p);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }
    }
}
