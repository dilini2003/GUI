   M S B A M L   `   `   `  ����S  OBook_Desktop_Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullC&clr-namespace:Book_Desktop_ApplicationBook_Desktop_Application  5   	   )    #Book_Desktop_Application.ViewWindow   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   8local&clr-namespace:Book_Desktop_Application     5   	     � Title$  
ViewWindow��5   	    � WindowState$ 	Maximized=�6   .��5	      �  � RowDefinitions 5
   
   �� 5      $��* �6   �� 5      $��6* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��1* �6   �� 5      $	��10* �6   �� 5      $��1* �6   ��5   
   �� 5       �� ImageSource$I CC:\Users\DELL\Documents\GitHub\GUI\frontend\public\images\back5.jpg��6    �� Opacity$	 0.7Q�6k   .+�5   
   �� $��0��6   
���   � �� Padding$ 5q�5      $��	Underline{�6   $��50(�5      $
��Bold"�5      $��0��6   $��3��6#   $��Center=�5      $��Center=�5      $��	View Book��5      �� 5   
   $��2��6   $��0��6"   $��3��62    �� Orientation$ 
Horizontal=�6F   $��Center=�6_   .+�5!      �� -   5        $
��Bold"�5"      $��18(�5#      $��
20,10,20,5q�5$      $��Center=�5%      $��Center=�5&      $	��150��5'      $��66��5(       � Cursor$
 Hand��6   .��6   Back��5+      �� 5,      	 �� 
TargetType"	 ��6&   .R�5-      �� ���#D32F2F
 �� CornerRadius$
 30��66    �� Padding$ 10q�6H   ._�5.      �� $��Center=�6/   $��Center=�6L   5/      50      ��53      �� 54       �� 
TargetType" ��6   .�56      ��  �� Property � �� �� Value
 �   �67   �� 57       � ��
 �����67    �� Triggers 59      P� 5;       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �5=   "   ��  � ��
 �   �6?   5>      5@      5C      5D      &   System.Windows.Controls.DataGrid  5E   
   -   5          Name$ bookGrid��5E      $��1��5F      $��1��6      AutoGenerateColumns$
 True��5G      $��Stretch=�5H      $��Stretch=�5I      5J      5K      