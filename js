window.addEventListener("load",addListener);
var FirstName = "", LastName = "", osis = "", course = "", grade = "";

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",Submit);
	document.getElementById("btnAddCourse").addEventListener("click",AddCourse);
}

function Submit()
{
	GetInfo();
	document.getElementById("lbldisplay").textContent = FirstName + " " + LastName ;
}

function AddCourse()
{
	GetInfo();
	document.getElementById("txtfirstname").disabled = true;
	document.getElementById("txtlastname").disabled = true;
	document.getElementById("txtID").disabled = true;
}

function GetInfo()
{
	FirstName = document.getElementById("txtfirstname").value;
	LastName = document.getElementById("txtlastname").value;
	osis = document.getElementById("txtID").value;
	course = document.getElementById("txtCourse").value;
	grade = document.getElementById("txtGrade").value;
	CheckInfo();
}

function CheckInfo()
{
	msg = "";
	if(grade == "")
	{
		msg = "G";
		document.getElementById("txtGrade").focus();
	}
	if(course == "")
	{
		msg = "C";
		document.getElementById("txtCourse").focus();
	}
	if(osis == "")
	{
		msg = "O";
		document.getElementById("txtID").focus();
	}
	if(LastName == "")
	{
		msg = "L";
		document.getElementById("txtlastname").focus();
	}
	if(FirstName == "")
	{
		msg = "F";
		document.getElementById("txtfirstname").focus();
	}
	
	if(msg == "")
	{
		alert("GOOOOODD");
	}
	else
	{
		alert("Missing Information");
	}
}
