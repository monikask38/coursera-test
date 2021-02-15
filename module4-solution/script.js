var names= new Array();
names[0]="Monika";
names[1]="Neha";
names[2]="John";
names[3]="janvi";
names[4]="Raj";
names[5]="Pooja";
names[6]="Divya";
names[7]="Sonal";
names[8]="Jyoti";
names[9]="jayesh";

for( var i=0; i< names.length; i++){
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
	console.log("Goodbye " +  names[i]);
}
else{
	console.log("Hello "  +  names[i]);
}
}