var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

function createDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cards.length; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
    
    /*htmlElement.addEventListener('dragend', function(event){
    if(event.dataTransfer.dropEffect !== 'none'){
        $(this).remove();*/
        
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    debugger;
    var targetclassname = ev.target.className.substring(7);
    var sourceclassname = document.getElementById(data).className.substring(5);
    
    if(targetclassname == sourceclassname){
        /*alert("same");*/
        ev.target.appendChild(document.getElementById(data));
        $("#" + data).remove();
    }
    else{
        alert("Not Same");
        
    }
    var dates = document.querySelectorAll('*[id^="cardid"]');
     debugger;
    /*alert(dates.length);*/
    
    if(dates.length==0)
        {
            document.getElementById("bt1").style.visibility="visible";
            document.getElementById("bt1").onclick = function() {
                load();
                document.getElementById("bt1").style.visibility="hidden";
                
            };
            /*document.getElementById("bt1").style.visibility="hidden";*/
        }
}





function displayDeck()
{
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card " + deck[i].Suit;
        card.id = "cardid" + i;
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
        card.draggable = "true";
        //card.ondragstart = "drag(event)";
        card.addEventListener('dragstart', function(ev) {drag(ev)}, false);

        //card.bind("dragstart", function(ev){drag(ev);});

        
        
		document.getElementById("deck").appendChild(card);
	}
}

/*function save()
{
    var fs = require("fs");
    fs.writeFile("./object.json", JSON.stringify(deck), (err) => {
    if (err) {
        console.error(err);
        
    }});
    
}*/


/*function writeToFile(d1, d2){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("data.txt", 8, false, 0);
    fh.WriteLine(d1 + ',' + d2);
    fh.Close();
}*/



function load()
{
	deck = createDeck();
	shuffle();
    /*save();*/
   
	displayDeck();
}

window.onload = load;

var email_id = new Array();
var passowrd = new Array();

localStorage.setItem("email_id", JSON.stringify(email_id));
var storedNames = JSON.parse(localStorage.getItem("email_id"));
