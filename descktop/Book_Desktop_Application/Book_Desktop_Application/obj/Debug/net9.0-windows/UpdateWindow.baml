   M S B A M L   `   `   `  ����S  OBook_Desktop_Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullC&clr-namespace:Book_Desktop_ApplicationBook_Desktop_Application  5   	   +    %Book_Desktop_Application.UpdateWindow   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   8local&clr-namespace:Book_Desktop_Application     5   	     � Title$  UpdateWindow��5   	    � WindowState$ 	Maximized=�6   .��5	      �  � RowDefinitions 5
   
   �� 5      $��* �6   �� 5      $��6* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��1* �6   �� 5      $	��10* �6   �� 5      $��1* �6   ��5   
   �� 5       �� ImageSource$I CC:\Users\DELL\Documents\GitHub\GUI\frontend\public\images\back5.jpg��6    �� Opacity$	 0.7Q�6k   .+�5   
   �� $��0��6   
���   �$��0��5      $��3��6$    �� Padding$ 5q�5      $��50(�5      $��	Underline{�6   $
��Bold"�5      $��Center=�5      $��Center=�5      $��Update Book��5      �� 5   
   $��2��6   $��0��6"   $��3��62    �� Orientation$ 
Horizontal=�6F   $��Center=�6_   .+�5       �� -   5        $
��Bold"�5!      $��18(�5"      $��
20,10,20,0q�5#      $��Center=�5$      $��Center=�5%      $	��150��5&      $��66��5'       � Cursor$
 Hand��6   .��6   Update Book��5*      �� 5+      	 �� 
TargetType"	 ��6&   .R�5,      �� ���#4CAF50
 �� CornerRadius$
 30��66    �� Padding$ 10q�6H   ._�5-      �� $��Center=�6/   $��Center=�6L   5.      5/      ��52      �� 53       �� 
TargetType" ��6   .�55      ��  �� Property � �� �� Value
 �   �67   �� 56       � ��
 �����67    �� Triggers 58      P� 5:       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �5<   "   ��  � ��
 �   �6?   5=      5?      5B      �� 5C      -   5        $
��Bold"�5D      $��18(�5E      $��
20,10,20,5q�5F      $��Center=�5G      $��Center=�5H      $	��150��5I      $��66��5J      $
 Hand��6   .��6   Back��5M      �� 5N      "	 ��6&   .R�5O      �� ���#D32F2F$
 30��66   $ 10q�6H   ._�5P      �� $��Center=�6/   $��Center=�6L   5Q      5R      ��5U      �� 5V      " ��6   .�5X      ��  � ��
 �   �67   �� 5Y       � ��
 �����67    5[      P� 5]       �@J�IsMouseOver$
 True��6=   . �5_   "   ��  � ��
 �   �6?   5`      5b      5e      5f      &   System.Windows.Controls.DataGrid  5g   
   -   5          Name$ bookGrid��5g      $��1��5h      $��1��6      AutoGenerateColumns$
 True��5i      $��Stretch=�5j      $��Stretch=�5k      5l      5m      