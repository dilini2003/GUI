   M S B A M L   `   `   `  ����S  OBook_Desktop_Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullC&clr-namespace:Book_Desktop_ApplicationBook_Desktop_Application  5   	   .    (Book_Desktop_Application.DashboardWindow   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   8local&clr-namespace:Book_Desktop_Application     5   	     � Title$  DashboardWindow��5   	    � WindowState$ 	Maximized=�6!   .��5	      �  � RowDefinitions 5
   
   �� 5      $��* �6   �� 5      $��6* �6   ��5   
   �� 5       �� ImageSource$I CC:\Users\DELL\Documents\GitHub\GUI\frontend\public\images\back2.jpg��6    �� Opacity$	 0.7Q�6k   .+�5   
   �� $��0��6   
���   � �� Padding$ 5q�5      $��50(�5      $
��Bold"�5      $��Center=�5      $��	Underline{�6   $��Center=�5      $��Welcome Bookly!��5      �� 5   
   $��1��6   $��1��6"    �� Orientation$ Vertical=�62   $��Center=�6I   .+�5      �� -   5        $
��Bold"�5   	   $��30(�5   	   $��
20,15,20,0q�5   	   $��Center=�5   	   $��Center=�5   	   $	��200��5    	   $��80��5!   	    � Cursor$
 Hand��6   .��6$   	View Book��5$      �� 5%       �� 
TargetType" ��6&   .R�5&      �� ���#4CAF50	 �� CornerRadius$	 20��66   
 �� Padding$
 10q�6H   ._�5'      �� $��Center=�6/   $��Center=�6L   5(      5)      ��5,      �� 5-       �� 
TargetType" ��6   .�5/      ��  �� Property � �� �� Value
 �   �67   �� 50       � ��
 �����67    �� Triggers 52      P� 54       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �56   "   ��  � ��
 �   �6?   57      59      5<      �� 5=      -   5        $
��Bold"�5>      $��25(�5?      $��
20,15,20,0q�5@      $��Center=�5A      $��Center=�5B      $	��200��5C      $��80��5D      $
 Hand��6   .��6   
Add Book��5G      �� 5H      " ��6&   .R�5I      �� ���#4CAF50$	 20��66   $
 10q�6H   ._�5J      �� $��Center=�6/   $��Center=�6L   5K      5L      ��5O      �� 5P      " ��6   .�5R      ��  � ��
 �   �67   �� 5S       � ��
 �����67    5U      P� 5W       �@J�IsMouseOver$
 True��6=   . �5Y   "   ��  � ��
 �   �6?   5Z      5\      5_      �� 5`      -   5        $
��Bold"�5a      $��25(�5b      $��
20,15,20,0q�5c      $��Center=�5d      $��Center=�5e      $	��200��5f      $��80��5g      $
 Hand��6   .��6   Update Book��5j      �� 5k      " ��6&   .R�5l      �� ���#4CAF50$	 20��66   $
 10q�6H   ._�5m      �� $��Center=�6/   $��Center=�6L   5n      5o      ��5r      �� 5s      " ��6   .�5u      ��  � ��
 �   �67   �� 5v       � ��
 �����67    5x      P� 5z       �@J�IsMouseOver$
 True��6=   . �5|   "   ��  � ��
 �   �6?   5}      5      5�      �� 5�      -   5        $
��Bold"�5�      $��25(�5�      $��
20,15,20,0q�5�      $��Center=�5�      $��Center=�5�      $	��200��5�      $��80��5�      $
 Hand��6   .��6   Delete Book��5�      �� 5�      " ��6&   .R�5�      �� ���#4CAF50$	 20��66   $
 10q�6H   ._�5�      �� $��Center=�6/   $��Center=�6L   5�      5�      ��5�      �� 5�      " ��6   .�5�      ��  � ��
 �   �67   �� 5�       � ��
 �����67    5�      P� 5�       �@J�IsMouseOver$
 True��6=   . �5�   "   ��  � ��
 �   �6?   5�      5�      5�      �� 5�      -   5        $
��Bold"�5�      $��25(�5�      $��
20,15,20,5q�5�      $��Center=�5�      $��Center=�5�      $	��200��5�      $��70��5�      $
 Hand��6   .��6   Back��5�      �� 5�      " ��6&   .R�5�      �� ���#D32F2F$	 20��66   $
 10q�6H   ._�5�      �� $��Center=�6/   $��Center=�6L   5�      5�      ��5�      �� 5�      " ��6   .�5�      ��  � ��
 �   �67   �� 5�       � ��
 �����67    5�      P� 5�       �@J�IsMouseOver$
 True��6=   . �5�   "   ��  � ��
 �   �6?   5�      5�      5�      5�      5�      5�      