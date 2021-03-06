JsOsaDAS1.001.00bplist00�Vscripto
N f u n c t i o n   r e a s s i g n P r i o r i t i e s ( ) { 
 
         v a r   a p p   =   A p p l i c a t i o n ( " O m n i F o c u s " ) 
         a p p . i n c l u d e S t a n d a r d A d d i t i o n s   =   t r u e 
 
         v a r   d o c   =   a p p . d e f a u l t D o c u m e n t ; 
 
         v a r   p 1 T h r e s h o l d   =   2 ; 
         v a r   p 2 T h r e s h o l d   =   4 ; 
         v a r   p 3 T h r e s h o l d   =   6 ; 
 
         v a r   p     =   " P r i o r i t y " ; 
         v a r   p 1   =   " P 1      M u s t   d o " ; 
         v a r   p 2   =   " P 2      S h o u l d   d o " ; 
         v a r   p 3   =   " P 3      C o u l d   d o " ; 
         / / v a r   p 4   =   " P 4      W o n ' t   d o " ; 
 	 v a r   r o u t i n e s   =   " R o u t i n e s " ; 
 	 
 	 v a r   p T a g     =   d o c . f l a t t e n e d T a g s . b y N a m e ( p ) ; 
 	 v a r   p 1 T a g   =   d o c . f l a t t e n e d T a g s . b y N a m e ( p 1 ) ; 
 	 v a r   p 2 T a g   =   p T a g . f l a t t e n e d T a g s . b y N a m e ( p 2 ) ; 
 	 v a r   p 3 T a g   =   p T a g . f l a t t e n e d T a g s . b y N a m e ( p 3 ) ; 
 
         v a r   p T a g s   =   [ p 1 T a g ,   p 2 T a g ,   p 3 T a g ] ; 
 	 
         / / v a r   t 0   =   n e w   D a t e ( ) . g e t T i m e ( ) 
 	 
 	 v a r   p r o j e c t S p e c i f i e r   =   O b j e c t S p e c i f i e r ( ) . c o n t a i n i n g P r o j e c t ; 
 	 v a r   t a g s S p e c i f i e r   =   O b j e c t S p e c i f i e r ( ) . t a g s [ 0 ] . n a m e ; 
 	 	 
 	 v a r   a l l T a s k s   =   d o c . f l a t t e n e d T a s k s ; 
         	 q u a l i f i e d T a s k s   =   a l l T a s k s . w h o s e ( { 
 	 	 _ a n d   :   [ 
 	 	 	 {   e f f e c t i v e l y C o m p l e t e d :   f a l s e   } ,   
 	 	 	 {   e f f e c t i v e l y D r o p p e d :   f a l s e   } , 
 	 	 	 {   e f f e c t i v e D u e D a t e :   {   " > " :   n e w   D a t e ( 0 )   }   } , 
 	 	 	 {   _ o r   :   [ 
 	 	 	 	 {   e f f e c t i v e D e f e r D a t e :   {   " < " :   n e w   D a t e ( )   }   } , 
 	 	 	 	 {   e f f e c t i v e D e f e r D a t e :   n u l l   } 
 	 	 	 ] } , 
 	 	 	 {   i n I n b o x :   f a l s e   } , 
 	 	 	 {   _ n o t   :   [   
 	 	 	 	 {   _ m a t c h   :   [   t a g s S p e c i f i e r ,   r o u t i n e s   ]   } 
 	 	 	 ] } 
 	 	 ] 	         
 	 } ) ( ) ; 
 	 
 	 c o n s o l e . l o g ( q u a l i f i e d T a s k s . l e n g t h ) ; 
 	 
 	 v a r   i   =   0 ; 
 	 P r o g r e s s . d e s c r i p t i o n   =   ' R u n n i n g   P r i o r i t y   r e a s s i g n m e n t ' ; 
 	 P r o g r e s s . t o t a l U n i t C o u n t   =   q u a l i f i e d T a s k s . l e n g t h ; 
 	 P r o g r e s s . c o m p l e t e d U n i t C o u n t   =   i ; 
 	 
         / / v a r   t 1   =   n e w   D a t e ( ) . g e t T i m e ( ) 
         / / c o n s o l e . l o g ( " C a l l   t o   d o S o m e t h i n g   t o o k   "   +   ( t 1   -   t 0 )   +   "   m i l l i s e c o n d s . " ) 
 
         v a r   t 0   =   n e w   D a t e ( ) . g e t T i m e ( ) 
 
         v a r   t o d a y   =   n e w   D a t e ( ) ; 
                 t o d a y . s e t H o u r s ( 1 8 , 0 , 0 ) ; 
 	 	 
 	 d o c . w i l l A u t o s a v e   =   f a l s e ; 
 
         q u a l i f i e d T a s k s . f o r E a c h ( t a s k   = >   { 
 	 	 
 	 	 i   + =   1 ; 
 	 	 
 	 	 P r o g r e s s . a d d i t i o n a l D e s c r i p t i o n   =   " P r o c e s s i n g   t a s k   "   +   i   +   "   o f   "   +   q u a l i f i e d T a s k s . l e n g t h ; 
 
         	 v a r   d a t e D e l t a   =   ( t a s k . e f f e c t i v e D u e D a t e ( )   -   t o d a y )   /   8 . 6 4 e 7 ; 
                 
                 i f   ( d a t e D e l t a   < =   p 3 T h r e s h o l d )   { 
 
                         a p p . r e m o v e ( p T a g s ,   {   f r o m :   t a s k . t a g s } ) ;                           
 
                         i f   ( d a t e D e l t a   < =   p 1 T h r e s h o l d )   { 
                                 a p p . a d d ( p 1 T a g ,   {   t o :   t a s k . t a g s   } ) ; 
                         } 
                         e l s e   i f   ( d a t e D e l t a   < =   p 2 T h r e s h o l d )   { 
                                 a p p . a d d ( p 2 T a g ,   {   t o :   t a s k . t a g s   } ) ; 
                         } 
                         e l s e   { 
                                 a p p . a d d ( p 3 T a g ,   {   t o :   t a s k . t a g s   } ) ; 
                         }       
                 } 
 	 	 
 	 	 P r o g r e s s . c o m p l e t e d U n i t C o u n t   =   i ; 
                 
         } ) ; 
 
         v a r   t 1   =   n e w   D a t e ( ) . g e t T i m e ( ) 
         c o n s o l e . l o g ( " C a l l   t o   d o S o m e t h i n g   t o o k   "   +   ( t 1   -   t 0 )   +   "   m i l l i s e c o n d s . " ) 
 	 
 	 d o c . w i l l A u t o s a v e   =   t r u e ; 
 
 } 
 
 f u n c t i o n   h a z e l P r o c e s s F i l e ( t h e F i l e ,   i n p u t A t t r i b u t e s ) { 
         
 	 t r y   { 
 	 
         	 r e a s s i g n P r i o r i t i e s ( ) ; 
 	 	 r e t u r n   t r u e ; 
 	 } 
 	 c a t c h ( e r r ) { 
 	 
 	 	 c o n s o l e . l o g ( e r r . m e s s a g e ) ; 
 	 	 r e t u r n   f a l s e ; 
 	 } 
 }                              �jscr  ��ޭ