 
var Reverse_Number = (N) => 
{
  let rev_num = 0;
        while(N > 0)
        {
            rev_num = rev_num * 10 + N % 10;
            N = Math.floor(N / 10);
        }
        return rev_num;
    };


 
