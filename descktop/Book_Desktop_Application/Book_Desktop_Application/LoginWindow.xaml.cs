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
    /// Interaction logic for LoginWindow.xaml
    /// </summary>
    public partial class LoginWindow : Window
    {
        public LoginWindow()
        {
            InitializeComponent();
        }

        private void Login_Click(object sender, RoutedEventArgs e)
        {
            string email = EmailTextbox.Text;
            string password = PasswordTextbox.Password;


            if (email == "admin@gmail.com" && password == "1234")
            {
                DashboardWindow dashboardWindow = new DashboardWindow();
                MessageBox.Show("Login Successful");
                dashboardWindow.Show();
                this.Close();
            }
            else
            {
                MessageBox.Show("Invalid login credentials.");
            }
        }

        private void BackToMain(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow();
            mainWindow.Show();
            this.Close();
        }
    }
}
