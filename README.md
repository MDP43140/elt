# CreateElement GPLHelper
Helper function that Makes Creating Element Easier while keeping the code very short,

lightweight, independent, and looks as 'vanilla' as default javascript.

# Features:
+ Extremely fast and lightweight.
+ Code is very small, promising below 1kb, currently the code is 392bytes in size, and 243bytes when minified.
+ Simple and Secure, with "use strict" & w/o vulnerability.
+ Flexible, you can chain the element creation.
+ Creating elements will be easier than ever before.
+ Behave just like document.createElement().
+ Can replace document.createElement. Or extend document.createElement to also include properties, and child elements (or just a text).
+ Compatible with most modern browser (excl. ie).
+ Independent (did not require any 3rd-party script).
+ Chainlink the element creation (see examples below).

# Usage:
``` javascript
elt(tag,attr,childs)
```

|Argument|Type|Description|
|---|---|---|
|tag|String|tag name. Required, typical document.createElement(tag) argument|
|attr|Object (Optional)|HTML Attributes on a JSON object|
|childs|Argument (Optional)|Child elements, can also be text|

If you want to use it, you can copy the content of [this minified script](https://github.com/mdp43140/elt/main/elt.sec.min.js) to your project:
``` html
<script>[put the copied code here]</script>
```
or use a link (recommended):
``` html
<script src="https://github.com/mdp43140/elt/main/elt.sec.min.js"></script>
```


# Example:
Before (without elt):
``` javascript
var article = document.body; // just for example
var container = document.createElement("DIV");
var article_title = document.createElement("H1");
var article_desc = document.createElement("P");
container.className = "container";
container.onclick = "alert('Hello World!')"
article_title.innerHTML = "There's better version of document.createElement()...";
article_title.className = "coolFont";
article_title.style = "margin:0";
article_desc.innerHTML = "is it actually better?";
article_desc.className = "coolFont";
article_desc.style = "margin:0";
article.append(container);
container.append(article_title);
```
super messy and have to create some non used variables

After (with elt):
``` javascript
var article = document.body; // just for example
article.append(
	elt("DIV",{class:"container",onclick:"alert('Hello World!')"},
		elt("H1",{class:"coolFont",style:"margin:0"},"There's better version of document.createElement()..."),
		elt("P",{class:"coolFont",style:"margin:0"},"is it actually better?")
	)
)
```
cleaner and only uses 1 variable

Result In HTML:
``` html
<div class="container" onclick="alert('Hello World!')">
	<h1 class="coolFont" style="margin:0">There's better version of document.createElement()...</p>
	<p class="coolFont" style="margin:0">is it actually better?</p>
</div>
```

Without attributes:
``` javascript
elt("P",{},"Hi World!")
```

You can treat 'elt' as 'document.createElement' like so:
``` javascript
let element = elt("P")  same as document.createElement("P")
```


# Changelog:
+ Removed unnecesary code: hasOwnProperty, not useful (really you want to compare the same object?? lol).
+ Fixed "...argument" error when using "use strict", by replacing it with arguments variable (but making it so big and also must change arrow function to default bigger function, wont add on minified version)


# Little Note about Slim minified version:
- does'nt have Code Sanitation.
- Leaking variables to global scope.

so if you want to (display html code/write secure code),
i would recommend using *non-slim* minified version or *secure* minfied version instead.
because the slim version is just for some world record lol.



