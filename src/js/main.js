var html = {
  template: '<!doctype html>\n' +
  '<html lang="en">\n' +
  '<head>\n' +
  '  <meta charset="UTF-8">\n' +
  '  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
  '  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
  '  <title>Title</title>\n' +
  '  <link rel="stylesheet" href="css/style.css">\n' +
  '  <script src="js/script.js"></script> \n'+
  '</head>\n' +
  '<body>\n' +
  '  Content\n' +
  '<script src="js/main.js"></script>\n' +
  '</body>\n' +
  '</html>',
  link: '<link rel="stylesheet" href="css/style.css">',
  script: '<script src="js/main.js"></script>\n',
  div: '<div>elementen komen hier</div>',
  class: '<div class="divclass">In css kan men divclass oproepen</div>',
  id: '<div id="ourID">In css en js kan men deze div selecteren, Maximaal 1 element met een id</div>',
  span: '<p>Ik ben een <span>stuk</span> van een text</p>',
  heading: '<h1>Belangerijkste hoofding</h1>\n' +
  '<h2>Tweede belangerijkste hoofding</h2>\n' +
  '<h3>Derde belangerijkste hoofding</h3>\n' +
  '<h4>Vierde belangerijkste hoofding</h4>\n' +
  '<h5>Vijfde belangerijkste hoofding</h5>' +
  '<h6>Zesde belangerijkste hoofding</h6>',
  paragraph: '<p>Lorem ipsum dolor sit amet, consectetur.</p>',
  anchor: '<a href="pagina2.html" target="_self">Ga naar pagina 2 in dit venster</a>\n' +
  '<a href="pagina2.html" target="_blank">Ga naar pagina 2 in een nieuw venster</a>',
  ul: '<ul>\n' +
  '  <li>Optie</li>\n' +
  '  <li>Optie</li>\n' +
  '  <li>Optie</li>\n' +
  '</ul>',
  ol: '<ol>\n' +
  '  <li>Optie 1</li>\n' +
  '  <li>Optie 2</li>\n' +
  '  <li>Optie 3</li>\n' +
  '</ol>',
  img: '<img src="img/foto.png" alt="beschrijving" />',
  header: '<header>Hoofd sectie van de pagina</header>',
  main: '<main>Hoofd sectie van de pagina</main>',
  footer: '<footer>Hoofd sectie van de pagina</footer>',
  nav: '<nav>Zet hierin een ul -> li -> a structuur</nav>',
  b: '<b>Ik ben vet</b>',
  i: '<i>Ik ben cursief</i>',
  hr: '<hr />',
  input: '<input type="text">',
  form: ' /* Action is used to activate a script on the server that proscesses the form*/ \n'+
  '/* Value is used to give the input a default value like a textbox filled with mickey*/ \n'+
  '<form action="/action_page.php"> \n' +
  '  First name:<br>\n' +
  '  <input type="text" name="firstname"><br> /* Text field*/\n' +
  '  Last name:<br>\n' +
  '  <input type="text" name="lastname"> <br> <br>\n' +
  ' \n'+
  '  <input type="radio" name="gender" value="male" checked> Male<br> /* radio button aka checked or not checked*/\n' +
  '  <input type="radio" name="gender" value="female"> Female<br> /* maximum one selectod in one form */\n' +
  '  <input type="radio" name="gender" value="other"> Other\n\n' +
  '/* Define a button that when clicked calls a function in javascript*/\n'+
  '/* Usefull when the user needs to make something happen without the server needing to know*/\n'+
  '<button type="button" value="controle" onclick="jsFunc()">Custom Button</button> \n'+
  '/* Used to submit the form (via get or post)*/\n'+
  '  <input type="submit" value="Submit"> \n'+
  '</form>',
  table:' /* In css*/ \n'+
  'table { \n'+
  'font-family: arial, sans-serif; \n'+
  'border-collapse: collapse; \n'+
  'width: 100%; \n'+
  '} \n\n'+
  'td, th { \n'+
  'border: 1px solid #dddddd; \n'+
  'text-align: left; \n'+
  'padding: 8px; \n'+
  '}\n\n'+
  'tr:nth-child(even) { \n'+
  'background-color: #dddddd; \n'+
  '} \n'+
  '/* IN HTML */'+
  '\n\n'+
  '<table>\n' +
  '	<tr>\n' +
  '  <th>Company</th> /* table header */\n' +
  '  <th>Contact</th>\n' +
  '  <th>Country</th>\n' +
  '	</tr>\n' +
  '	<tr>\n' +
  '  <td>Alfreds Futterkiste</td> /* table header */\n' +
  '  <td>Maria Anders</td>\n' +
  '  <td>Germany</td>\n' +
  '	</tr>\n' +
  '	<tr>\n' +
  '  <td>Centro comercial Moctezuma</td> /* table header */\n' +
  '  <td>Francisco Chang</td>\n' +
  '  <td>Mexico</td>\n' +
  '	</tr>\n' +
  '	<tr>\n' +
  '  <td>Ernst Handel</td> /* table header */\n' +
  '  <td>Roland Mendel</td>\n' +
  '  <td>Austria</td> \n' +
  '	</tr>\n' +
  '</table>',
};
var scss = [
  {
    name: 'Animations',
    info: 'Animaties maken in css',
    content: '@keyframes example {\n' +
    '    0% {background-color: red;}\n' +
    '    100% {background-color: yellow;}\n' +
    '}\n' +
    '\n' +
    '/* The element to apply the animation to */\n' +
    'div {\n' +
    '    width: 100px;\n' +
    '    height: 100px;\n' +
    '    background-color: red;\n' +
    '    animation-name: example;\n' +
	'    animation-name: example,example2; //multiple keyframes\n' +
    '    animation-duration: 4s;\n' +
    '    animation-iteration-count: 2;\n' +
	'    animation-delay: 2s;\n' +
	'    animation-timing-function: cubic-bezier(.9,1.65,0,-1.15);\n' +
    '    animation-direction: alternate-reverse;\n' +
	'    animation-play-state:paused;//pause the play state of the animation\n' +
	'    animation-play-state:running;//resume the play state of the animation\n' +
    '}'
  },
   {
    name: 'Transition',
    info: 'i.p.v direct over te schakelen tussen 2 waarden kunnen we dit rustig laten verlopen.',
    content: '.content a:hover {\n' +
    '  border 1px solid black; \n' + 
    '  color:#000;\n' +
    '  transition:all 1s ease 0s; /* fade from the defaul color to the hover color */\n' +
	' /*possible transformations*/\n'+
	'transform: scale(); //change the scale of the element \n'+
	'transform: translate(); //move the element  \n'+
	'transform: rotate(); //rotates the element  \n'+
	'transform: skew(); "misform a element" \n'+
	'transform: matrix();//move scale and rotate a element by using a matrix \n'+
    '}'
  },
  {
    name: 'Draw a Sphere',
    info: 'Hoe een circle maken zonder een foto',
    content: '.wrap {\n' +
    '  width: 100px; height:100px; /* this creates a cube */ \n' + 
    '  border-radius: 50%;\n' +
    '  background: #555; /* The color */\n' +
    '}'
  },
  {
    name: 'CSS Grid',
    info: 'If there are more elements that there are grid lines the css grid will add new grid lines',
    content: '.grid-container {\n' +
    '  display: grid;\n' +
    '  grid-gap: 50px; //around each element there is a margin of 50px\n' +
    '  grid-template-columns: auto auto auto auto;\n' +
    '  grid-template-rows: 1fr 2fr;//creates 2 rows the 2nd is 2*the size of the first\n' +
    '  justify-content: unset;  // multiple properties\n' +
    '  align-content: unset; // multiple properties\n' +
    '}\n' +
    '\n' +
    '.item1 {\n' +
    '  grid-column-start: 1;\n' +
    '  grid-column-end: 3;\n' +
    '  grid-row-start: 1;\n' +
    '  grid-row-end: 3;\n' +
    '  grid-column: 1 / 5;\n' +
    '  grid-row: 1 / 5;\n' +
    '}\n' +
    '\n' +
    '.item2 {\n' +
    '  grid-area: 1 / 2 / 5 / 6;\n' +
    '}'
  },
  {
    name: 'Flexbox',
    info: 'zoals css grid maar linear (op 1 as)',
    content: '.flex-container {\n' +
    '  display: flex;\n' +
    '  flex-direction: column;\n' +
    '  flex-direction: row;\n' +
	'  flex-wrap: wrap; /* this will change the position of your items based on the width of a child and the screen size */\n' +
	'  justify-content: center; /* This will center the content if it is smaller than the total flexbox*/\n' +
	'  justify-content: space-between; /* This will add space between the content*/\n' +
	'}\n'+
	'/* NOW COMES THE FLEX ITEMS*/\n'+
	'.flex-item {\n' +
	'  order:1; //defaul is 0 this is used to realign flexitems 1 means more in the back of the flexbox -1 is more in front\n'+
	'  flex-grow:2; // default =1 this says howmuch the item can streatch relative to the other flexitems (if there is enough space) \n'+
	'  flex-shrink:2; //like flex-grow but instead it gets smaller\n'+
	'  flex-basis:50%; //this set the element to 50% (like width)\n'+
	'  align-self:flex-end; //this set the idividual element to the end of the flexbox\n'+
    '}'
  },
  {
    name: 'Selectors',
    info: 'meerdere elementen aanroepen met 1 body',
    content: '.class{} /* select the html element with this class */\n' +
    '#id{} /* Selects the element with id id */\n' +
    '  *{} /* selects all elements */ \n' +
    '  p {} /* selects all <p> tags */ \n' +
	'  div, p {} /* selects all <div> and <p> tags */ \n' +
	'  div p {} /* selects all <p> tags inside div tags */ \n' +
	'  div > p {} /* selects all <p> tags where the parent is a div tag */ \n' +
	'  div + p {} /* selects all <p> tags directly after a div tag */\n' +
	'  p ~ ul {} /* selects all <ul> tags that are preceded by a <p> tag */ \n' +
	'  p {} /* selects all <p> tags */ \n' +
	'  p::after {content: "this will apear after a p tag"} /* insert something after a p tag */ \n' +
	'  p {} /* selects all <p> tags */ \n' +
	'  p:first-child {} /* selects all the first child of the <p> tag */ \n' +
	'  p:nth-child(n) {} /* selects the n-th child of a element */ \n' +
	'  p {} /* selects all <p> tags */ \n' +
	' /* in most cases you can replace p with a class or id */  \n' +
    '}'
  },
  {
    name: 'Media queries',
    info: 'Een soort if statement in css',
    content: '@media only screen and (min-width: 768px) {\n' +
    '  /* this code only gets run when the screen is bigger than 768px */\n' +
    '  /* Make a mobile site firt then enable css grid/ flexbox if you want desktop */\n' +
    '  /* or alter the locations of each element in the grid / flexbox*/;\n' +
    '}' +
	'@media (min-width: 768px) {\n' +
    '  /* this code only gets run when the screen is bigger than 768px */\n' +
    '  /* Make a mobile site firt then enable css grid/ flexbox if you want desktop */\n' +
    '  /* or alter the locations of each element in the grid / flexbox*/;\n' +
    '}' 
  },
  {
    name: 'positioning',
    info: 'Manier om de locatie van een element te bepalen',
    content: '/* This is the normal flow of a element*/\n' +
	'position: static;\n\n' +
	'/* Using top,right,bottom,left will move to element from its normal position*/\n' +
	'position: relative;\n\n' +
	'/* This is the normal flow of a element*/\n' +
	'position: static;\n\n' +
	'/* This is the position relative to the viewport (always visible) and the location can be set by top,bottom,left or right*/\n' +
	'position: fixed;\n\n' +
	'/* This is the relative to the nearest positioned ancestor (ancestor)*/\n' +
	'position: absolute;\n\n' +
	'/* This is element behaves normal until it leaves the screen in which case it becomes fixed*/\n' +
	'position: sticky;\n\n' +
	'/* If you place 2 elements on top of eachother us z-index to deside who stays on top*/\n' +
	'z-index:10; /* default is 0 */\n\n' +
    '}'
  }
];
var js = [
  {
    name: 'Write to document',
    info: 'Schrijf info weg naar jou html document (kleine d)',
    content: 'document.write(\'text\')'
  },
  {
    name: 'Log to console',
    info: 'Schrijf info weg naar de developers console (F12 in chrome)',
    content: 'console.log(\'text\')'
  },
  {
    name: 'Variables',
    info: 'Gebruik van variable in js. JS heeft geen static typing zoals C#, er is enkel het type \'var\'',
    content: 'var eenVariable;\n' +
    'var eenAndereVariable = 2;\n' +
    'var nogEenAndereVariable = \'aardappel\';\n' +
    '\n' +
    'eenVariable = \'google\'; // google\n' +
    'eenVariable = eenAndereVariable + 2; // 2\n' +
    'eenVariable = nogEenAndereVariable + \' is cool\'; // aardappel is cool'
  },
  {
    name: 'Arrays',
    info: 'Arrays zijn datatypes die meerder instances kunnen bewaren van ditzelfde type \n maar in js kunnen dit verschillende types zijn',
    content: 'var array = ["Saab", "Volvo", 10];\n' +
	' //the index of an array always starts at 0 \n'+
    'document.getElementById("demo").innerHTML = cars[0]; // this will return Saab\n' +
	'document.getElementById("demo").innerHTML = cars[1]; // this will return Volvo\n' +
	'document.getElementById("demo").innerHTML = cars[2]; // this will return 10\n' 
    
  },
  {
    name: 'Alert',
    info: 'Geeft een popup met informatie',
    content: 'alert(\'text\');'
  },
  {
    name: 'Prompt',
    info: 'Geeft een popup waar de user informatie kan aan geven',
    content: 'var antwoord = prompt(\'Stel hier een vraag\');'
  },
  {
    name: 'Get the date',
    info: 'Geeft de datum terug',
    content: 'getDate() /* geeft de dag van de maand terug*/ \n' +
	'getDay() /* geeft de weekdag terug */\n'+
	'getFullYear()() /* geeft de het jaar terug bv: 2018*/\n'+
	'getHours()() /* geeft het uur terug van de dag*/\n'+
	'getMinutes()() /* geeft de minuten terug */\n'+
	'getMonth()() /* geeft de maand terug (0-11) */\n'+
	'getSeconds()() /* geeft de seconden terug */\n'
  },
  {
    name: 'Math',
    info: 'Ingebouwde math functies',
    content: 'var x = Math.PI; // 3.1415...\n' +
    'var y = Math.sqrt(16); // 4\n' +
    'var p = Math.pow(4, 2); // 16\n' +
    'var z = Math.random(); // random getal tussen 0 en 1\n' +
    'var q = Math.round(123.45) // 123 (0.5 wordt omhoog afgerond)'
  },
  {
    name: 'Functies',
    info: '',
    content: 'function naam (voornaam, achternaam) {\n' +
    '  return voornaam + achternaam;\n' +
    '}'
  },
  {
    name: 'Append element',
    info: 'Voeg informatie toe aan een bestaant element',
    content: 'function AppendOutput(input){\n' +
	' /* We gebruiken += om toe te voegen anders zouden we de volledige inhoud aanpassen */\n'+
    ' document.getElementById("IDName").innerHTML += input + "<br>"; \n' +
    '}'
  },
  {
    name: 'getElementById',
    info: 'Steek een element in een variable',
    content: 'var element = document.getElementById("IDOfElement");\n' +
	' element.style.color = "yellow" // set the color of the element to yellow\n'+
    ' element.innerHTML = "hello";//set the html value to hello \n' +
    ''
  },
  {
    name: 'this',
    info: 'laat een html element een functie aanroepen en geeft impliciet zichzelf mee',
    content: 'function SetElement(obj){\n' +
	'var id = obj.id; //get the id of the object\n' +
	' var element = document.getElementById(id) ; // get the element of the object\n'+
    ' element.innerHTML = "hello";//set the html value to hello \n' +
    '}\n'+
	'<form onsubmit="SetElement(this)"></form> // in html wordt this gebruik om het object form mee te geven'
  },
  {
    name: 'events',
    info: 'via events kan men js functies oproepen in html',
    content: '//Example html code\n' +
	'<form onsubmit="SetElement(this)"></form> //on submit is the event\n' +
	'//to call a function de <insert_event_here>=<insert_jsFunction_here> \n'+
	' onmouseover // mouse is on the element \n' +
	' onmouseout // mouse moved out of the element \n' +
	' mousedown // mouse clicked on the element \n' +
	' mouseup // mouse released the click on the element \n' +
	' dblclick // mouse double clicked on the element \n' +
	' mousemove // mouse moved over the element \n' +
	' click // mouse clicked on the element \n' +
	' keydown // a keypress happend \n' +
	' keyup // a key got released \n' +
	' submit // submit a form \n' +
	' reset // reset a form to its default value \n' +
	' focus // an element gets the focus \n' +
	' blur // an element loses its focus\n' +
	' load // an element is loaded \n' +
	' unload // an element is no longer loaded \n' +
	' resize // the dimensions of an element have changed \n' +
    '}'
  },
  {
    name: 'Logic Operators',
    info: 'kijken of een conditie waar of niet waar is',
    content: '<  //smaller than\n' +
	'>  //greater than\n' +
	'<=  //smaller than or equal to\n' +
	'>=  //greater than or equal to\n' +
	'!=  //not equal to\n' +
	'===  //same value and same type\n' +
	'==  //same value\n' +
	'!--  //not the same value or same type\n' +
	'isNaN(x)  //is not a number aka string array ...\n' +
	'x && y  //and gate between X and Y\n' +
	'x && y  //and gate between X and Y\n' +
	'x & y  //and gate between X and Y (bitwise)\n' +
	'x | y  //and gate between X and Y (bitwise)\n' +
    ''
  },
  {
    name: 'If statement',
    info: 'Maakt conditionele logica',
    content: 'if (condition1) {\n' +
	' /* runs if condition1 is true*/\n'+
	' } else if (condition2) {\n'+
	' /* runs if condition2 is true but condition1 is false*/\n'+
    ' } else {\n' +
	' /* runs if no other condition was true*/\n'+
    '}'
  },
  {
    name: 'Switch',
    info: 'Een verkorterde notatie van een if statement (alleen === logical operator is toegestaan)',
    content: 'switch (new Date().getDay()) {\n' +
    '    case 0:\n' +
    '        day = "Sunday";\n' +
    '        break;\n' +
    '    case 1:\n' +
    '        day = "Monday";\n' +
    '        break;\n' +
    '    case 2:\n' +
    '        day = "Tuesday";\n' +
    '        break;\n' +
    '    case 3:\n' +
    '        day = "Wednesday";\n' +
    '        break;\n' +
    '    case 4:\n' +
    '        day = "Thursday";\n' +
    '        break;\n' +
    '    case 5:\n' +
    '        day = "Friday";\n' +
    '        break;\n' +
    '    case 6:\n' +
    '        day = "Saturday";\n' +
    '}'
  },
  {
    name: 'For loop',
    info: 'een loop die x keer loopt (men kent waarde x)',
    content: 'for (i = 0; i < 5; i++) { \n' +
    '    // Dit wordt 5 keer doorlopen;\n' +
    '}'
  },
  {
    name: 'While loop',
    info: 'een loop die blijft loopen tot een conditie is voldaan',
    content: 'while (condition) { \n' +
    '    // blijft loopen tot condition true is;\n' +
    '}'+
	'while (i < 10) { \n' +
    '    text += "The number is " + i;\n' +
	'    i++;\n' +
    '}'+
	'/* While only runs if the condition is true */ \n' +
	'/* Do while runs at least one time even if the condition is false */ \n' +
	'do { \n'+
    '    // blijft loopen tot condition true is;\n' +
    '} while (condition)'
  },
  {
    name: 'String methods',
    info: 'manipulatie van strings',
    content: 'var str = "Hello world, welcome to the universe.";\n' +
    'str.length; // this returns the size of a string \n'+
	'var n = str.replace("Hello", "Goodnight"); // string becomes Goodnight world, welcome to the universe.\n' + 
	'var text2 = str.toUpperCase(); // every letter is now uppercase  \n'+
	'var text2 = str.toLowerCase(); // every letter is now lowercase  \n'+
	'var text3 = text2.concat(" ", str); // used to add 2 string together (like the + operator) \n'+
	'var array = str.split(" "); //this will convert the string to an array that is split with spaces (each word is an array element) \n'+
	'str.split(); //this makes an array of size 1 containing the whole string \n' +
	'str.split(""); //this splits the string every char aka the array.length() == str.length()\n' 
  },
  {
    name: 'indexOf',
    info: 'de index van een substring zoeken',
    content: 'var str = "Hello world, welcome to the universe.";\n' +
    'var n = str.indexOf("welcome"); // 13'
  },
  {
    name: 'Slice',
    info: 'een string in stukjes hakken',
    content: 'var str = "Hello world!";\n' +
    'var res = str.slice(1, 5); // ello'
  }
];
var US = [
  {
    name: 'W3Schools',
    info: 'Een website die uitlegt hoe je een website maakt aan de had van html,css,js,php,ts,json etc',
    content: 'https://www.w3schools.com/'
  },
  {
    name: 'UE4 forums',
    info: 'Een forum website waar men uitleg kan vragen over UE4',
    content: 'https://forums.unrealengine.com'
  },
  {
    name: 'Stackoverflow',
    info: 'Een forum website waar men uitleg kan vragen over programeren algemeen',
    content: 'https://stackoverflow.com/'
  },
  {
    name: 'cppreference',
    info: 'Een website met algemene uitleg over c++',
    content: 'http://en.cppreference.com/w/'
  },
  {
    name: 'docs.microsoft',
    info: 'Een website met algemene uitleg de microsoft api\'s dotnet etc',
    content: 'https://docs.microsoft.com/en-us/'
  },
  {
    name: 'github',
    info: 'Repository ebsite gebouwed rond git',
    content: 'https://github.com/'
  },
  {
    name: 'udemy',
    info: 'Website waar men dingen kan bijleren over ontzettend veel dingen',
    content: 'https://www.udemy.com'
  },
  {
    name: 'docs.gl',
    info: 'Documentatie over opengl specifieke functies',
    content: 'http://docs.gl/'
  },
  {
    name: 'GLFW',
    info: 'OpenGL wrapper dat extra gpu functionaliteit biedt',
    content: 'http://www.glfw.org/'
  },
  {
    name: 'Python docs',
    info: 'Documentatie over python',
    content: 'https://www.python.org/doc/'
  },
  {
    name: 'openCV',
    info: 'Documentatie over OpenCV (open coputer vision)',
    content: 'https://docs.opencv.org/3.3.1/'
  },
  {
    name: 'Tenserflow',
    info: 'Documentatie over Tenserflow (google\'s AI library)',
    content: 'https://www.tensorflow.org/api_docs/'
  },
  {
    name: 'EASTL',
    info: 'githubs page voor de EA STL (electronic arts Standard Template Library)',
    content: 'https://github.com/electronicarts/EASTL'
  },
  {
    name: 'UE4 source',
    info: 'githubs page voor de UE4 source (private members only)',
    content: 'https://github.com/EpicGames/UnrealEngine'
  },
  {
    name: 'Unity API',
    info: 'Unity api documentation',
    content: 'https://docs.unity3d.com/ScriptReference/'
  },
  {
    name: 'Design patterns (Gang of Four)',
    info: 'Het originele boek van design patterns',
    content: 'http://www.uml.org.cn/c++/pdf/DesignPatterns.pdf'
  },
  {
    name: 'Git documentation',
    info: 'De documentatie over git',
    content: 'https://git-scm.com/documentation'
  }
 ];

var app = new Vue({
  el: '#app',
  data: {
    author: 'Meyers Tom',
    page: 'html',
    elements: {
      html: [
        {
          name: 'Template',
          info: 'Use this template',
          content: html.template
        },
		{
          name: 'link',
          info: 'Het linken van een css bestand (doen tussen <head> en </head>)',
          content: html.link
        },
		{
          name: 'script',
          info: 'Het linken van een javascript bestand (doen juist voor de </body> tag',
          content: html.script
        },
        {
          name: 'Div',
          info: 'Een container voor andere elementen',
          content: html.div
        },
		{
          name: 'Class',
          info: 'Link het element met css',
          content: html.class
        },
		{
          name: 'ID',
          info: 'Link maximaal 1 element met js/css',
          content: html.id
        },
        {
          name: 'Span',
          info: 'Een div-like element om 1 of meerdere woorden in een tekst een andere stijl te geven. Display is default inline',
          content: html.span
        },
        {
          name: 'Hoofding',
          info: 'Gebruik voor titels, ondertitels enz...',
          content: html.heading
        },
        {
          name: 'Paragraaf',
          info: 'Dit is een tag die bedoelt is voor informatieve langere teksten',
          content: html.paragraph
        },
        {
          name: 'Anchor',
          info: 'Dit is een link naar een andere pagina',
          content: html.anchor
        },
        {
          name: 'Ongeorderede lijst',
          info: 'Dit is een lijst met elementen. Gebruik dit om een menu te maken.',
          content: html.ul
        },
        {
          name: 'Georderede lijst',
          info: 'Dit is een lijst met elementen die automatisch genummerd is.',
          content: html.ol
        },
        {
          name: 'Foto',
          info: 'Een foto inladen.',
          content: html.img
        },
        {
          name: 'Header',
          info: 'Top sectie van de pagina',
          content: html.header
        },
        {
          name: 'Main',
          info: 'Voornaamste content-gebied van een pagina',
          content: html.main
        },
        {
          name: 'Footer',
          info: 'Voet sectie van de pagina',
          content: html.footer
        },
        {
          name: 'Navigatie',
          info: 'Duid aan dat dit element de navigatie bevat',
          content: html.nav
        },
        {
          name: 'Vet',
          info: 'Dient om tekst vet te drukken',
          content: html.b
        },
        {
          name: 'Cursief',
          info: 'Dient om tekst cursief te drukken',
          content: html.i
        },
        {
          name: 'Scheider',
          info: 'Dit is een verticale lijn over heel de breedte van het parent element',
          content: html.hr
        },
        {
          name: 'Input',
          info: 'Een textinput voor de gerbruiker',
          content: html.input
        },
		{
          name: 'Form',
          info: 'Een form wordt gebruik zodat de gebruiker data aan een server kan geven',
          content: html.form
        },
		{
          name: 'Table',
          info: 'Een table wordt gebruik om data in een aangename manier te displayen',
          content: html.table
        }
      ],
      scss: scss,
      js: js,
	  US: US
    }
  }
});