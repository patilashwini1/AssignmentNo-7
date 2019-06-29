
function Calculator()
{
   
    var kiwi=2

	function multiplication(num1 , num2)
	{
		return num1 * num2;
	}
	function add(num1, num2)
	{
		return num1 + num2;
	}
	function minus(num1, num2)
	{
		return num1 - num2;
	}
	function division(num1, num2)
	{
		return num1 / num2;
	}


	this.evaluate = function(string, int)
	{
		var str=string
		var array=str.split(" ")
		if(array[1]== '*')
		{
		 var arr1 = parseInt(array[0]);
         var arr2 = parseInt(array[2]);
         var multi=multiplication(arr1,arr2);
         console.log("multiplication",multi)
		}
		if(array[1]== '+')
		{
			var arr1 = kiwi;
			
        	var arr2 = parseInt(array[2]);
            var addition=add(arr1,arr2);
            console.log(addition)
		}
		if(array[1]== '-')
		{
			var arr1 = parseInt(array[0]);
        	var arr2 = parseInt(array[2]);
            var sub=minus(arr1,arr2);
            console.log(sub)
		}
		if(array[1]== '/')
		{
			var arr1 = parseInt(array[0]);
        	var arr2 = parseInt(array[2]);
            var div=division(arr1,arr2);
            console.log(div)
		}
		
	}

}
var calculator = new Calculator()
calculator.evaluate('10 + 2')
calculator.evaluate('10 * 2')
calculator.evaluate('10 - 2')
calculator.evaluate('10 / 2')
calculator.evaluate('kiwi + 1', kiwi: 2)
calculator.store(peaches: 15)
calculator.evaluate('peaches' - 5)