   M S B A M L   `   `   `  ����S  OBook_Desktop_Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullC&clr-namespace:Book_Desktop_ApplicationBook_Desktop_Application  5   	   )    #Book_Desktop_Application.MainWindow   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35^ ZWindowsFormsIntegration, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35H 9http://schemas.microsoft.com/winfx/2006/xaml/presentation      5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   8local&clr-namespace:Book_Desktop_Application     5   	     � Title$  
MainWindow��5   	    � WindowState$ 	Maximized=�6   .��5	      �  � RowDefinitions 5
   
   �� 5      $
��1.5* �6   �� 5      $��2* �6   �� 5      $��1* �6   ��5   
   �� 5       �� ImageSource$L FC:\Users\DELL\Documents\GitHub\GUI\frontend\public\images\bannerbg.jpg��6   .+�5   
   �� $��0��6   
���   � �� Padding$ 15q�5      $��50(�5      $
��Bold"�5      $��Center=�5      $��Center=�5      $��Bookly��5      �� 5   
   $��1��6   $��Center=�5      $��Center=�5      $	��700��5      .+�5       �� $��26(�6   ���#333$
��Bold"�5"       �� TextAlignment$ Center=�5#      $*��$Welcome to Bookly Management System!��5$      �� 5%      $��18(�6   ���#666$ Center=�5'      $��10,10,10,20q�5(      $P��JManage your bookstore with ease. Add, edit, and organize books seamlessly.��5)      5*      �� 5,   
   $��2��6    �� Orientation$ 
Horizontal=�5-      $��Center=�5.      .+�5/      �� -   5        $
��Bold"�5/      $��18(�50      $��20q�51      $��Center=�52      $��Center=�53      $	��190��54      $��66��55       � Cursor$
 Hand��57      .��6#   Login��5:      �� 5;       �� 
TargetType" ��6&   .R�5<      �� ���#388E3C	 �� CornerRadius$	 25��66   
 �� Padding$
 10q�6H   ._�5=      �� $��Center=�6/   $��Center=�6L   5>      5?      ��5B      �� 5C       �� 
TargetType" ��6   .�5D      ��  �� Property � �� �� Value
 �����67    �� Triggers 5E      P� 5F       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �5G   "   ��  � ��
 �   �6?   5H      5J      5L      �� 5N      -   5        $
��Bold"�5N      $��18(�5O      $��20q�5P      $��Center=�5Q      $��Center=�5R      $	��190��5S      $��66��5U      $
 Hand��5V      .��6#   Exit��5Y      �� 5Z      " ��6&   .R�5[      �� ���#D32F2F$	 25��66   $
 10, 0 ,10 ,0q�6H   ._�5\      �� $��Center=�6/   $��Center=�6L   5]      5^      ��5a      �� 5b      " ��6   .�5c      ��  � ��
 �����67    5d      P� 5e       �@J�IsMouseOver$
 True��6=   . �5f   "   ��  � ��
 �   �6?   5g      5i      5k      5l      5n      5o      