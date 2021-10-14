function Validation() {

    var res=document.getElementById("fname").value

    if(res.length==0)
    {
        document.getElementById("msg").innerHTML="*This field is required"

        return false;
    }
    else if(res.length<3)
    {
        document.getElementById("msg").innerHTML="*First name field should have minimum 3 character"

        return false;
    }

    else if(res.length>=15)

    {
         document.getElementById("msg").innerHTML="*First name field should have maximum 15 character"

         return false;
    }

     var res= document.getElementById("ph").value;
     if(res.length==0)
     {
         document.getElementById("ms").innerHTML="*Phone number field is empty"
         return false
     }
     else if(isNaN(res))
     {
         document.getElementById("ms").innerHTML="*Number text box should contain only integer"
         return false
     }

     else if(res.length<10)
     {
         document.getElementById("ms").innerHTML="Number field is less than 10 digits"
         return false
     }
     else if(res.length>10)
     {
         document.getElementById("ms").innerHTML="Number field is more than 10 digits"
         return false
     }
     else if(res.charAt(0)<6)
     {
         document.getElementById("ms").innerHTML="Indian Standard number should start from 7 or 8 or 9"
         return false
     }
   
     var res= document.getElementById("email").value;
     if(res.length==0)
       {
           document.getElementById("em").innerHTML="*email field is empty"
           return false
       }

       var res= document.getElementById("password").value;
       if(res.length==0)
         {
             document.getElementById("pa").innerHTML="*password field is empty"
             return false
         }
         else if(res.length<8)
         {
           document.getElementById("pa").innerHTML="*Password length should be greater than 8"
            return false  
         }
         var res= document.getElementById("da").value;
         if(res.length==0)
           {
               document.getElementById("DB").innerHTML="*Date of birth field is empty"
               return false
           } 

           var res= document.getElementById("ta").value;  
          if(res.length==0)
          {
              document.getElementById("tx").innerHTML="*Address field is empty";
              return false
          } 

}