JsOsaDAS1.001.00bplist00�Vscripto� f u n c t i o n   s e t D u r a t i o n T i t l e s ( l a s t M o d i f i e d ) { 
 	 v a r   a p p   =   A p p l i c a t i o n ( ' O m n i F o c u s ' ) ; 
 
         v a r   d o c   =   a p p . d e f a u l t D o c u m e n t ; 
 	 
 	 d o c . w i l l A u t o s a v e   =   f a l s e ; 
 
         v a r   t o d a y   =   n e w   D a t e ( ) ; 
         v a r   d u e D a t e   =   n e w   D a t e ( t o d a y . s e t D a t e ( t o d a y . g e t D a t e ( ) + 7 ) ) ; 
         v a r   t a s k L i s t   =   [ ] ; 
 	 / / c o n s o l e . l o g ( l a s t M o d i f i e d ) 
         v a r   f l a t t e n e d T a s k s   =   d o c . f l a t t e n e d T a s k s . w h o s e ( { 
 	 	 e f f e c t i v e l y C o m p l e t e d :   f a l s e ,   
 	 	 e f f e c t i v e l y D r o p p e d :   f a l s e , 
 	 	 m o d i f i c a t i o n D a t e :   { " _ g r e a t e r T h a n "   :   l a s t M o d i f i e d } 
 	 } ) ; 
 	 
 	 / / c o n s o l e . l o g ( f l a t t e n e d T a s k s . l e n g t h ) 
 
         f l a t t e n e d T a s k s ( ) . f o r E a c h ( f u n c t i o n ( t a s k ) { 
             v a r   s p l i t S t r i n g   =   t a s k . n a m e ( ) . s p l i t ( "   �   " ) ; 
             v a r   u n i t   =   " " ; 
             i f   ( t a s k . e s t i m a t e d M i n u t e s ( )   ! = =   n u l l )   { 
                 i f   ( t a s k . e s t i m a t e d M i n u t e s ( )   >   1 ) { 
                     u n i t   =   "   �   "   +   t a s k . e s t i m a t e d M i n u t e s ( )   +   "   m i n s " ; 
                 }   e l s e   { 
                     u n i t   =   "   �   1   m i n " ; 
                 } 
             } 
             v a r   n e w T i t l e   =   s p l i t S t r i n g [ 0 ]   +   u n i t ; 
             t a s k . n a m e   =   n e w T i t l e ; 
         } ) ; 
 	 
 	 d o c . w i l l A u t o s a v e   =   t r u e ; 
 
         a p p . s y n c h r o n i z e ( ) ; 
 } 
 
 f u n c t i o n   h a z e l P r o c e s s F i l e ( t h e F i l e ,   i n p u t A t t r i b u t e s ) { 
         
 	 t r y   { 
 	 
         	 s e t D u r a t i o n T i t l e s ( i n p u t A t t r i b u t e s [ 0 ] ) ; 
 	 	 r e t u r n   t r u e ; 
 	 } 
 	 c a t c h ( e r r ) { 
 	 
 	 	 c o n s o l e . l o g ( e r r . m e s s a g e ) ; 
 	 	 r e t u r n   f a l s e ; 
 	 } 
 }                              	jscr  ��ޭ