   M S B A M L   `   `   `  ����S  OBook_Desktop_Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullC&clr-namespace:Book_Desktop_ApplicationBook_Desktop_Application  5   	   *    $Book_Desktop_Application.LoginWindow   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   8local&clr-namespace:Book_Desktop_Application     5   	     � Title$  LoginWindow��5   	    � WindowState$ 	Maximized=�6   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��1.5* �6   �� 5      $��2* �6   �� 5      $��* �6   ��5   
   �� 5       �� ImageSource$J DC:\Users\DELL\Documents\GitHub\GUI\frontend\public\images\blog04.jpg��6    �� Opacity$	 0.8Q�6l   .+�5   
   ��  �� Padding$ 15q�6   $��43(�5      $��0��5      $��Center=�5      $��Center=�5      $
��Bold"�5      
�������$��	Underline{�5      $��Admin Panel��5      � 5   
   $��1��6   $��20q�6    � ColumnDefinitions 5      �� 5      $
��1.5* �6#   �� 5      $��3* �6#   .+�5!      �� $��Center=�6   .+�5"      �� $��27(�6   $��10,10,10,10q�5#      $��Right=�6   $
��Bold"�5$   	   $��Email:��6   �� 5%      $��27(�6   $��Right=�6*   $��10,10,10,10q�6F   $
��Bold"�6[   $��	Password:��6m   5&      �� 5(      $��1��6   $��Center=�6)   .+�5)      �� -   5        $��EmailTextbox��5)      $��22(�6.   $��10,10,10,10q�6<   $	��500��6Q   $��10q�6]   ���#E3F2FD$��1q�6   G� 5*      -   5        $��PasswordTextbox��5*      $��22(�65   $��10,10,10,10q�6C   $	��500��6X   $��10q�6d   ���#E3F2FD$��1q�6�   5+      5,      �� 5.   
   $��2��6    �� Orientation$ 
Horizontal=�6"   $��Center=�6;   .+�5/      �� -   5        $
��Bold"�50   	   $��18(�51   	   $��	20,0,20,0q�52   	   $��Center=�53   	   $��Center=�54   	   $	��150��55   	   $��66��56   	    � Cursor$
 Hand��6   .��6$   Login��59      �� 5:      	 �� 
TargetType"	 ��6&   .R�5;      �� ���#4CAF50
 �� CornerRadius$
 20��66    �� Padding$ 10q�6H   ._�5<      �� $��Center=�6/   $��Center=�6L   5=      5>      ��5A      �� 5B       �� 
TargetType" ��6   .�5D      ��  �� Property � �� �� Value
 �   �67   �� 5E       � ��
 �����67    �� Triggers 5G      P� 5I       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �5K   "   ��  � ��
 �   �6?   5L      5N      5Q      �� 5R      -   5        $
��Bold"�5S      $��18(�5T      $��	20,0,20,0q�5U      $��Center=�5V      $��Center=�5W      $	��150��5X      $��66��5Y      $
 Hand��6   .��6   Back��5\      �� 5]      "	 ��6&   .R�5^      �� ���#D32F2F$
 20��66   $ 10q�6H   ._�5_      �� $��Center=�6/   $��Center=�6L   5`      5a      ��5d      �� 5e      " ��6   .�5g      ��  � ��
 �   �67   �� 5h       � ��
 �����67    5j      P� 5l       �@J�IsMouseOver$
 True��6=   . �5n   "   ��  � ��
 �   �6?   5o      5q      5t      5u      5v      5w      