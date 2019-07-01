

function Calculator()
{
   
     var store=function(){
     	peaches:15
     }
     
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
	function precise_round(num1, num2)
	{
		if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
			return false;

		var num_sign=num1 >= 0 ? 1 : -1;

		return (Math.round((num1*Math.pow(10,num2))+(num_sign*0.0001))/Math.pow(10,num2)).toFixed(num2);

	}
	
	this.evaluate = function(string,store)
	{
		var str=string;
		var array=str.split(" ");
		if(array[1]== '*')
		{
		 var arr1 = parseInt(array[0]);
         var arr2 = parseInt(array[2]);
         var multi=multiplication(arr1,arr2);
         console.log("multiplication",multi);
		}
		else if(array[1]== '+')
		{
			// if arr1[0]='peaches'
			// {
			// 	var arr1= store[key]
			// }

			var arr1 = parseInt(array[0]);
        	var arr2 = parseInt(array[2]);
            var addition=add(arr1,arr2);
            console.log(addition);

		}
		else if(array[1]== '-')

		{
			if(array[0]== 'peaches')
			{
				var arr2=parseInt(array[2])
				var sub=minus(arr1,arr2);
				console.log(sub);
			}
			var arr1 = parseInt(array[0]);
        	var arr2 = parseInt(array[2]);
            var sub=minus(arr1,arr2);
            console.log(sub);
		}
		else if(array[1]== '/')
		{
			var arr1 = parseInt(array[0]);
        	var arr2 = parseInt(array[2]);
            var div=division(arr1,arr2);
            console.log(div);
		}
		else if (array[0]=='maximum')
		{   
			var arr1=Math.max(parseInt(array[2]),parseInt(array[4]));
			console.log(arr1);

		}
		else if (array[0]=='round')
		{
			var round =precise_round(parseInt(array[3]),parseInt(array[5]));
			console.log(round);
		}
		
	}

}
var calculator = new Calculator();
calculator.evaluate('10 + 2');
calculator.evaluate('10 * 2');
calculator.evaluate('10 - 2');
calculator.evaluate('10 / 2');
calculator.store({peaches: 15});
calculator.evaluate('peaches - 5');
calculator.evaluate('kiwi + 5', {kiwi:2});
calculator = Calculator.new(case_sensitive: true)
calculator.evaluate('Kiwi + 5', Kiwi: -2, kiwi: 2)
calculator.evaluate('5 + 3 * 2')
calculator.evaluate('(5 + 3) * 2')
calculator.evaluate('maximum ( 8 , 2 )')
calculator.evaluate('round(8.2759, 2)')



