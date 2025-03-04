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
    /// Interaction logic for ViewWindow.xaml
    /// </summary>
    public partial class ViewWindow : Window
    {
        private BookDbContext _db = new BookDbContext();
        public ViewWindow()
        {
            InitializeComponent();

            LoadData();
        }
        private void LoadData()
        {
            bookGrid.ItemsSource = _db.books.ToList();
        }

        private void Back(object sender, RoutedEventArgs e)
        {
            DashboardWindow DeleteWindow = new DashboardWindow();
            DeleteWindow.Show();
            this.Close();

        }
    }
}
