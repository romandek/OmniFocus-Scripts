FasdUAS 1.101.10   ��   ��    l      ����  i         I      �� ���� $0 hazelprocessfile hazelProcessFile   ��  o      ���� 0 thefile theFile��  ��    k    � 	 	  
  
 l     ��  ��      File output options     �   (   F i l e   o u t p u t   o p t i o n s      l         r         m     ��
�� boovtrue  o      ���� 0 outputtofile outputToFile  , & Do you want to output to a text file?     �   L   D o   y o u   w a n t   t o   o u t p u t   t o   a   t e x t   f i l e ?      l        r        m       �   8 / U s e r s / r o m a n d e k / T a s k R e p o r t s /  o      ���� 0 filepath filePath  N H Where to save the resulting text file (Be sure to add the trailing "/")     �     �   W h e r e   t o   s a v e   t h e   r e s u l t i n g   t e x t   f i l e   ( B e   s u r e   t o   a d d   t h e   t r a i l i n g   " / " )   ! " ! l   ��������  ��  ��   "  # $ # l   �� % &��   %   Evernote output options    & � ' ' 0   E v e r n o t e   o u t p u t   o p t i o n s $  ( ) ( l   �� * +��   * J D set outputToEvernote to false -- Do you want to output to Evernote?    + � , , �   s e t   o u t p u t T o E v e r n o t e   t o   f a l s e   - -   D o   y o u   w a n t   t o   o u t p u t   t o   E v e r n o t e ? )  - . - l   �� / 0��   / � � set evernoteNotebook to "Stream of consciousness" -- Where to file the resulting Evernote note (Be sure the Notebook already exists)    0 � 1 1
   s e t   e v e r n o t e N o t e b o o k   t o   " S t r e a m   o f   c o n s c i o u s n e s s "   - -   W h e r e   t o   f i l e   t h e   r e s u l t i n g   E v e r n o t e   n o t e   ( B e   s u r e   t h e   N o t e b o o k   a l r e a d y   e x i s t s ) .  2 3 2 l   ��������  ��  ��   3  4 5 4 l   �� 6 7��   6 . ( Create the new filename as YYYYMMDD.txt    7 � 8 8 P   C r e a t e   t h e   n e w   f i l e n a m e   a s   Y Y Y Y M M D D . t x t 5  9 : 9 r     ; < ; I   ������
�� .misccurdldt    ��� null��  ��   < o      ���� 0 	todaydate 	todayDate :  = > = r     ? @ ? \     A B A o    ���� 0 	todaydate 	todayDate B ]     C D C m    ����  D 1    ��
�� 
days @ o      ���� 0 yestdate yestDate >  E F E r    , G H G o    ���� 0 yestdate yestDate H K       I I �� J K
�� 
year J o      ���� 0 y   K �� L M
�� 
mnth L o      ���� 0 m   M �� N��
�� 
day  N o      ���� 0 d  ��   F  O P O r   - 2 Q R Q ]   - 0 S T S o   - .���� 0 y   T m   . /����' R o      ���� 0 filename fileName P  U V U r   3 : W X W [   3 8 Y Z Y o   3 4���� 0 filename fileName Z l  4 7 [���� [ ]   4 7 \ ] \ o   4 5���� 0 m   ] m   5 6���� d��  ��   X o      ���� 0 filename fileName V  ^ _ ^ r   ; @ ` a ` [   ; > b c b o   ; <���� 0 filename fileName c o   < =���� 0 d   a o      ���� 0 filename fileName _  d e d l  A A��������  ��  ��   e  f g f l  A A�� h i��   h * $ Set the starting date of the report    i � j j H   S e t   t h e   s t a r t i n g   d a t e   o f   t h e   r e p o r t g  k l k r   A H m n m \   A F o p o o   A B���� 0 	todaydate 	todayDate p ]   B E q r q m   B C����  r 1   C D��
�� 
days n o      ���� 0 	startdate 	startDate l  s t s r   I N u v u m   I J����   v n      w x w 1   K M��
�� 
hour x o   J K���� 0 	startdate 	startDate t  y z y r   O T { | { m   O P����   | n      } ~ } 1   Q S��
�� 
min  ~ o   P Q���� 0 	startdate 	startDate z   �  r   U Z � � � m   U V����   � n      � � � m   W Y��
�� 
scnd � o   V W���� 0 	startdate 	startDate �  � � � l  [ [��������  ��  ��   �  � � � l  [ [�� � ���   � ( " Set the ending date of the report    � � � � D   S e t   t h e   e n d i n g   d a t e   o f   t h e   r e p o r t �  � � � r   [ b � � � \   [ ` � � � o   [ \���� 0 	todaydate 	todayDate � ]   \ _ � � � m   \ ]����  � 1   ] ^��
�� 
days � o      ���� 0 enddate endDate �  � � � r   c h � � � m   c d����  � n      � � � 1   e g��
�� 
hour � o   d e���� 0 enddate endDate �  � � � r   i n � � � m   i j���� ; � n      � � � 1   k m��
�� 
min  � o   j k���� 0 enddate endDate �  � � � r   o t � � � m   o p���� ; � n      � � � m   q s��
�� 
scnd � o   p q���� 0 enddate endDate �  � � � l  u u��������  ��  ��   �  � � � l  u u�� � ���   � , & Create the blank report to build from    � � � � L   C r e a t e   t h e   b l a n k   r e p o r t   t o   b u i l d   f r o m �  � � � r   u x � � � m   u v � � � � �   � o      ���� 0 
reporttext 
reportText �  � � � l  y y��������  ��  ��   �  ��� � l  y� � � � � O   y� � � � l  }� � � � � O   }� � � � k   �� � �  � � � l  � ��� � ���   � G A Get the list of projects that were modified within the date span    � � � � �   G e t   t h e   l i s t   o f   p r o j e c t s   t h a t   w e r e   m o d i f i e d   w i t h i n   t h e   d a t e   s p a n �  � � � l  � � � � � � r   � � � � � 6 � � � � � 2   � ���
�� 
FCfx � ?  � � � � � n  � � � � � 1   � ���
�� 
FCDm �  g   � � � o   � ����� 0 	startdate 	startDate � o      ���� 0 theprojects theProjects � 1 + and modification date is less than endDate    � � � � V   a n d   m o d i f i c a t i o n   d a t e   i s   l e s s   t h a n   e n d D a t e �  � � � l  � ��� � ���   � - ' Loop through the matching project list    � � � � N   L o o p   t h r o u g h   t h e   m a t c h i n g   p r o j e c t   l i s t �  � � � Y   �^ ��� � ��� � k   �Y � �  � � � l  � ��� � ���   � + % Get the current project to work with    � � � � J   G e t   t h e   c u r r e n t   p r o j e c t   t o   w o r k   w i t h �  � � � r   � � � � � n   � � � � � 4   � ��� �
�� 
cobj � 1   � ���
�� 
OSav � o   � ����� 0 theprojects theProjects � o      ���� 0 currentproj currentProj �  � � � l  � ��� � ���   � = 7 Get the tasks that were completed within the date span    � � � � n   G e t   t h e   t a s k s   t h a t   w e r e   c o m p l e t e d   w i t h i n   t h e   d a t e   s p a n �  � � � r   � � � � � l  � � ����� � 6 � � � � � n   � � � � � 2   � ���
�� 
FCft � o   � ����� 0 currentproj currentProj � F   � � � � � F   � � � � � =   � � � � � n  � � �  � 1   � ���
�� 
FCcd   g   � � � m   � ���
�� boovtrue � ?  � � 1   � ���
�� 
FCdc o   � ����� 0 	startdate 	startDate � A  � � 1   � ���
�� 
FCdc o   � ����� 0 enddate endDate��  ��   � o      ���� 0 thetasks theTasks �  l  � �����   0 * If there are tasks that meet the criteria    �		 T   I f   t h e r e   a r e   t a s k s   t h a t   m e e t   t h e   c r i t e r i a 
��
 Z   �Y���� >  � � o   � ����� 0 thetasks theTasks J   � �����   k   �U  l  � �����   : 4 Add a dividing line and then enter the project name    � h   A d d   a   d i v i d i n g   l i n e   a n d   t h e n   e n t e r   t h e   p r o j e c t   n a m e  r   � b   � b   � � b   � � b   � �  b   � �!"! b   � �#$# o   � ����� 0 
reporttext 
reportText$ o   � ���
�� 
ret " o   � ���
�� 
ret   m   � �%% �&& < - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - o   � ���
�� 
ret  n   � �'(' 1   � ��
� 
pnam( o   � ��~�~ 0 currentproj currentProj o   � �}
�} 
ret  o      �|�| 0 
reporttext 
reportText )*) l �{+,�{  +   Loop through the tasks   , �-- .   L o o p   t h r o u g h   t h e   t a s k s* .�z. Y  U/�y01�x/ k  P22 343 l �w56�w  5 ( " Get the current task to work with   6 �77 D   G e t   t h e   c u r r e n t   t a s k   t o   w o r k   w i t h4 898 r   :;: n  <=< 4  �v>
�v 
cobj> 1  �u
�u 
OSbv= o  �t�t 0 thetasks theTasks; o      �s�s 0 currenttask currentTask9 ?@? l !!�rAB�r  A , & Save the completed date to a variable   B �CC L   S a v e   t h e   c o m p l e t e d   d a t e   t o   a   v a r i a b l e@ DED r  !,FGF n  !(HIH 1  $(�q
�q 
FCdcI o  !$�p�p 0 currenttask currentTaskG o      �o�o 0 completeddate completedDateE JKJ l --�nLM�n  L ) # Get the time of the completed date   M �NN F   G e t   t h e   t i m e   o f   t h e   c o m p l e t e d   d a t eK OPO r  -8QRQ n  -4STS 1  04�m
�m 
tstrT o  -0�l�l 0 completeddate completedDateR o      �k�k 0 completedtime completedTimeP UVU l 99�jWX�j  W > 8 Add the task to the report text with the completed time   X �YY p   A d d   t h e   t a s k   t o   t h e   r e p o r t   t e x t   w i t h   t h e   c o m p l e t e d   t i m eV Z�iZ r  9P[\[ b  9N]^] b  9J_`_ b  9Faba b  9>cdc o  9:�h�h 0 
reporttext 
reportTextd o  :=�g
�g 
ret b n  >Eefe 1  AE�f
�f 
pnamf o  >A�e�e 0 currenttask currentTask` m  FIgg �hh    - - - - -  ^ o  JM�d�d 0 completedtime completedTime\ o      �c�c 0 
reporttext 
reportText�i  
�y 
OSbv0 m  �b�b 1 n  iji 1  	�a
�a 
lengj o  	�`�` 0 thetasks theTasks�x  �z  ��  ��  ��  
�� 
OSav � m   � ��_�_  � n   � �klk 1   � ��^
�^ 
lengl o   � ��]�] 0 theprojects theProjects��   � mnm l __�\op�\  o 4 . If there were no tasks to write to the report   p �qq \   I f   t h e r e   w e r e   n o   t a s k s   t o   w r i t e   t o   t h e   r e p o r tn rsr Z  _ptu�[�Zt = _dvwv o  _`�Y�Y 0 
reporttext 
reportTextw m  `cxx �yy  u r  glz{z m  gj|| �}} > N o t h i n g   c o m p l e t e d   f o r   t h i s   d a y .{ o      �X�X 0 
reporttext 
reportText�[  �Z  s ~~ l qq�W�V�U�W  �V  �U   ��� l qq�T���T  � 9 3 Get the yesterday's date for the top of the report   � ��� f   G e t   t h e   y e s t e r d a y ' s   d a t e   f o r   t h e   t o p   o f   t h e   r e p o r t� ��� r  q~��� n  qz��� 1  vz�S
�S 
dstr� l qv��R�Q� \  qv��� o  qr�P�P 0 	todaydate 	todayDate� ]  ru��� m  rs�O�O � 1  st�N
�N 
days�R  �Q  � o      �M�M 0 runtime runTime� ��� l �L���L  � ` Z Add the date to the top of the report, enter down a couple lines, and add the report text   � ��� �   A d d   t h e   d a t e   t o   t h e   t o p   o f   t h e   r e p o r t ,   e n t e r   d o w n   a   c o u p l e   l i n e s ,   a n d   a d d   t h e   r e p o r t   t e x t� ��� r  ���� b  ���� b  ���� b  ���� o  ��K�K 0 runtime runTime� o  ���J
�J 
ret � o  ���I
�I 
ret � o  ���H�H 0 
reporttext 
reportText� o      �G�G 0 
reporttext 
reportText� ��� l ���F�E�D�F  �E  �D  � ��� Z  �����C�B� o  ���A�A 0 outputtofile outputToFile� k  ���� ��� l ���@���@  � !  Create the new report file   � ��� 6   C r e a t e   t h e   n e w   r e p o r t   f i l e� ��� r  ����� I ���?��
�? .rdwropenshor       file� b  ����� b  ����� o  ���>�> 0 filepath filePath� o  ���=�= 0 filename fileName� m  ���� ���  . t x t� �<��;
�< 
perm� m  ���:
�: boovtrue�;  � o      �9�9 0 newfile newFile� ��� l ���8���8  � * $ Add the report text to the new file   � ��� H   A d d   t h e   r e p o r t   t e x t   t o   t h e   n e w   f i l e� ��� I ���7��
�7 .rdwrwritnull���     ****� o  ���6�6 0 
reporttext 
reportText� �5��
�5 
refn� o  ���4�4 0 newfile newFile� �3��2
�3 
as  � m  ���1
�1 
utf8�2  � ��� l ���0���0  �   Close the report file   � ��� ,   C l o s e   t h e   r e p o r t   f i l e� ��/� I ���.��-
�. .rdwrclosnull���     ****� o  ���,�, 0 newfile newFile�-  �/  �C  �B  � ��� l ���+�*�)�+  �*  �)  � ��� l ���(���(  �  if outputToEvernote then   � ��� 0 i f   o u t p u t T o E v e r n o t e   t h e n� ��� l ���'���'  � * $	set noteTitle to fileName as string   � ��� H 	 s e t   n o t e T i t l e   t o   f i l e N a m e   a s   s t r i n g� ��� l ���&���&  � &  	tell application "Evernote.app"   � ��� @ 	 t e l l   a p p l i c a t i o n   " E v e r n o t e . a p p "� ��� l ���%���%  � m g		�event EVRNcrnt� given �class Entt�:noteTitle, �class Enxt�:reportText, �class Ennb�:evernoteNotebook   � ��� � 	 	 � e v e n t   E V R N c r n t �   g i v e n   � c l a s s   E n t t � : n o t e T i t l e ,   � c l a s s   E n x t � : r e p o r t T e x t ,   � c l a s s   E n n b � : e v e r n o t e N o t e b o o k� ��� l ���$���$  �  		end tell   � ���  	 e n d   t e l l� ��� l ���#���#  �  end if   � ���  e n d   i f� ��"� l ���!� ��!  �   �  �"   � 4  } ���
� 
docu� m    ���  �   end tell front document    � ��� 0   e n d   t e l l   f r o n t   d o c u m e n t � m   y z���                                                                                  OFOC  alis    .  Macintosh HD                   BD ����OmniFocus.app                                                  ����            ����  
 cu             Applications  /:Applications:OmniFocus.app/     O m n i F o c u s . a p p    M a c i n t o s h   H D  Applications/OmniFocus.app  / ��   � ' ! end tell application "OmniFocus"    � ��� B   e n d   t e l l   a p p l i c a t i o n   " O m n i F o c u s "��  ��  ��       ����  � �� $0 hazelprocessfile hazelProcessFile� � ������ $0 hazelprocessfile hazelProcessFile� ��� �  �� 0 thefile theFile�  � �����������
�	��������� ��� 0 thefile theFile� 0 outputtofile outputToFile� 0 filepath filePath� 0 	todaydate 	todayDate� 0 yestdate yestDate� 0 y  � 0 m  � 0 d  � 0 filename fileName� 0 	startdate 	startDate�
 0 enddate endDate�	 0 
reporttext 
reportText� 0 theprojects theProjects
� 
OSav� 0 currentproj currentProj� 0 thetasks theTasks
� 
OSbv� 0 currenttask currentTask� 0 completeddate completedDate� 0 completedtime completedTime�  0 runtime runTime�� 0 newfile newFile� ) ������������������������ ���������������������%����gx|�������������������
�� .misccurdldt    ��� null
�� 
days
�� 
year
�� 
mnth
�� 
day ��'�� d
�� 
hour
�� 
min 
�� 
scnd�� �� ;
�� 
docu
�� 
FCfx�  
�� 
FCDm
�� 
leng
�� 
cobj
�� 
FCft
�� 
FCcd
�� 
FCdc
�� 
ret 
�� 
pnam
�� 
tstr
�� 
dstr
�� 
perm
�� .rdwropenshor       file
�� 
refn
�� 
as  
�� 
utf8�� 
�� .rdwrwritnull���     ****
�� .rdwrclosnull���     ****��eE�O�E�O*j E�O�k� E�O�E[�,E�Z[�,E�Z[�,E�ZO�� E�O��� E�O��E�O�k� E�Oj��,FOj��,FOj��,FO�k� E�O��,FO��,FO��,FO�E�O�N*�k/F*a -a [a ,\Z�:1E�O �k�a ,Ekh �a �E/E�O�a -a [[[a ,\Ze8\[a ,\Z�:A\[a ,\Z�<A1E�O�jv t�_ %_ %a %_ %�a ,%_ %E�O Pk�a ,Ekh �a ] E/E^ O] a ,E^ O] a ,E^ O�_ %] a ,%a %] %E�[OY��Y h[OY�IO�a   
a E�Y hO�k� a ,E^ O] _ %_ %�%E�O� 4��%a  %a !el "E^ O�a #] a $a %a & 'O] j (Y hOPUU ascr  ��ޭ