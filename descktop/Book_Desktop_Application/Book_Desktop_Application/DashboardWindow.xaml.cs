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
    /// Interaction logic for DashboardWindow.xaml
    /// </summary>
    public partial class DashboardWindow : Window
    {
        private BookDbContext _db = new BookDbContext();
        public DashboardWindow()
        {
            InitializeComponent();
            
        }
        
        private void DeletePage(object sender, RoutedEventArgs e)
        {
            DeleteWindow DeleteWindow = new DeleteWindow();
            DeleteWindow.Show();
            this.Close();
        }

        private void Addbook(object sender, RoutedEventArgs e)
        {
            Book book = new Book();
            AddWindow pWindow = new AddWindow(book);
            

            if (pWindow.ShowDialog() == true)
            {
                _db.books.Add(book);
                _db.SaveChanges();
                
                
            }
            DashboardWindow ViewWindow = new DashboardWindow();
            ViewWindow.Show();
            this.Close();

        }

        private void ViewBook(object sender, RoutedEventArgs e)
        {
            _db.SaveChanges();
            ViewWindow ViewWindow = new ViewWindow();
            ViewWindow.Show();
            this.Close();
        }

        private void Update(object sender, RoutedEventArgs e)
        {
            UpdateWindow UpdateWindow = new UpdateWindow();
            UpdateWindow.Show();
            this.Close();
        }

        private void Back(object sender, RoutedEventArgs e)
        {
            LoginWindow LoginWindow = new LoginWindow();
            LoginWindow.Show();
            this.Close();
        }
    }
}
