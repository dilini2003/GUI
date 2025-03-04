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
    /// Interaction logic for AddWindow.xaml
    /// </summary>
    public partial class AddWindow : Window
    {
        public Book books { get; private set; }
        public AddWindow(Book book)
        {
            InitializeComponent();
            
            books = book;


            TitleTextbox.Text = book.Title;
            AuthorTextbox.Text = book.Author;
            PriceTextbox.Text = book.Price.ToString();
            OriginalPriceTextbox.Text = book.OriginalPrice.ToString();
            ImageUrlTextbox.Text = book.Image_Url;
            CategoryComboBox.SelectedItem = book.Category;
            QuantityTextbox.Text = book.Quantity.ToString();
        }
        
        private void AddBook(object sender, RoutedEventArgs e)
        {
            try
            {
                books.Title = TitleTextbox.Text;
                books.Author = AuthorTextbox.Text;
                books.Price = Convert.ToDouble(PriceTextbox.Text);
                books.OriginalPrice = Convert.ToDouble(OriginalPriceTextbox.Text);
                books.Image_Url = ImageUrlTextbox.Text;
                if (CategoryComboBox.SelectedItem is ComboBoxItem selectedItem)
                {
                    books.Category = selectedItem.Content.ToString();
                }
                books.Quantity = Convert.ToInt32(QuantityTextbox.Text);
                DialogResult = true;
            }
            catch
            {
                MessageBox.Show("invalid input");
                DialogResult = false;
            }
        }

        private void Back(object sender, RoutedEventArgs e)
        {
            DashboardWindow DashboardWindow = new DashboardWindow();
            DashboardWindow.Show();
            this.Close();
        }
    }
}
