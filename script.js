function calBill(){
	var unit = document.getElementById("units").value;
	var r1=7.85;
	var r2=7.85;
	var r3 = 10;
	var r4 = 27.75;
	var r5 = 32;
	
	var amount=0;
	
	if(unit<=30){
		amount =r1*unit;
	}
	else if(unit>30 && unit<=60)
	{
		amount =(30*r1)+((unit-30)*r2);
	}
	else if(unit>60 && unit<=90)
	{
		amount =(30*r1)+(30*r2)+((unit-60)*r3);
	}
	else if(unit>90 && unit<=120)
	{
		amount =(30*r1)+(30*r2)+(30*r3)+((unit-90)*r4);
	}
	else{
		amount =(30*r1)+(30*r2)+(30*r3)+(30*r4)+((unit-120)*r5);
	}
	
	var txtResult = document.getElementById("cal");
	txtResult.innerHTML =" Your Bill amount is: &nbsp &nbsp &nbsp &nbsp &nbsp "+amount+"Rs";
}