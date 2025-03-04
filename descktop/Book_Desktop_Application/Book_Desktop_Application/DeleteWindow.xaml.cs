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
    /// Interaction logic for DeleteWindow.xaml
    /// </summary>
    public partial class DeleteWindow : Window
    {
        private BookDbContext _db = new BookDbContext();
        public DeleteWindow()
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
            DashboardWindow DashboardWindow = new DashboardWindow();
            DashboardWindow.Show();
            this.Close();
        }

        private void Delete_Click(object sender, RoutedEventArgs e)
        {
            if (bookGrid.SelectedItem is Book p)
            {
                _db.books.Remove(p);
                _db.SaveChanges();
                LoadData();
            }
        }
    }
}
