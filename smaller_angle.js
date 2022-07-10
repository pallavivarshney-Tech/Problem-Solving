
var Minimal_Angle = (h, m) => 
{
   if((m <0)||( h<0)||(m>60)||(h>12)) return;

if(h==12) return 0;
if(m==60) return 0;
    if((h>=0)&&(m>=0)){
        let hangle = 0.5 *(h*60 + m);
        let mangle = 6* m;
        let angle = Math.abs(hangle-mangle);
        angle = Math.abs(Math.min(angle, 360-angle));
        return angle;
    }
    
};
 
