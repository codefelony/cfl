# 1.3.1 (3/28/2014)
```
    - switched to the LGPL license
    - fixed a RegExp bug with identifying XPath selectors in CFL()
    - fixed bug in .text() where you send it a number, and it would break - now it switches the text to that number
    - made CFL only replace itself with a newer, backward-compatible version, if CFL is already on the page/scope
    - added .focus()
```

---

# 1.3.0 (12/9/2013)
```
    - switched to the GPLv3 license
    - added CFL.toString()
    - added CFL.waitFor()
    - added a second [minInteger] parameter to CFL.random()
    - fixed CFL.random() - it would not return 0 (the default inclusive minimum)
```

---

# 1.2.1 (12/2/2013)
```
    - added a "versions" folder for different versions of CFL
        latest version will always be "cfl.user.js" in the root folder
    - fixed bug in CFL.typeOf() where you pass it an <embed> element, and it says its a function
```

---

# 1.2.0 (11/29/2013)
```
    - added CFL.alias()
    - added .has()
    - added .isnt()
    - added .removeAttribute()
    - added .value()
    - added the ability to pass .add() a second argument (context node)
    - added a qunit test (to the GitHub repo) so people can test the code
    - adopted Semantic Versioning ==> http://semver.org/spec/v2.0.0.html
    - moved the changelog into a separate file to reduce file size
    - you can now return 'stop' in a CFL.each() or .each() function to stop the iteration
    - fixed a bug with not being able to pass .show() an empty string to
        signify setting its display to default
    - fixed a bug with .prop() not always returning the correct type of value
    - you can now pass CFL
        - a window object as the first argument
        - a string or a CFL object as the second argument
    - the kidsArray argument in CFL.create() can now accept strings as well as elements
        - no more need to nest CFL.create() calls inside the array
    - the following methods will now accept ANY valid arguments that CFL.create() will accept
        ( no more nesting CFL.create() calls inside .append() )
            .after()
            .append()
            .before()
            .prepend()
            .replace()
```

---

# 1.1.7 (11/3/2013)
```
    - added .center()
    - added .clone()
    - added .not()
    - added .prop()
    - added .height
    - added .width
    - added .visible
    - fixed a minor bug of passing CFL an element which its typeof === 'function'
        (YouTube's #movie_player embed element reports as this, as of this current date)
        it now uses Object.prototype.toString on it and checks for an HTML(...)Element
    - changed .attribute() so you can now pass any non-null/undefined type as the set value.
        .setAttribute() on the actual element will handle any type conversion
```

---

# 1.1.6 (10/7/2013)
```
    - changed .height() and .width() to .height and .width getters
        e.g., CFL('#foo').height
    - changed .exists to .exists
        e.g., CFL('#foo').exists
    - fixed .attribute()
        it now returns a blank string if you pass it one argument and it
        doesn't find that attribute on any of the elements within
        or the attributes are null
```

---

# 1.1.5 (10/4/2013)
```
    - added CFL.removeEvent() and .removeEvent()
```

---

# 1.1.4 (10/2/2013)
```
    - made CFL compatible for browsers without ECMAScript-5 (requires ECMAScript-3 at least)
    - added CFL.each()
    - changed .first() to .prepend()
    - added .first(), .height(), .last(), .prev(), .next(), .width()
        check the wiki for explanations
    - modified .get()
        will take an integer (positive or negative) and return a new CFL object with that single element
    - simplified several methods to shorten code and improve readability
    - changed the init so that if you pass an array of elements as the context,
        it will do a deep search of their children, but not the elements themselves
        e.g., CFL( '#foo', [bar, baz] ) is the same as CFL( [bar, baz] ).find('#foo')
        it will not match bar or baz, but it can match any of their children
```

---

# 1.1.3 (10/1/2013)
```
    - drastic change. made CFL more similar to jQuery
        the main methods (CFL.runAt, CFL.addScript, etc) are the same but the
        DOM methods are different. the elements are in a wrapper now, like CFL('#foo').show()
        because of the wrapper, CFL.id, CFL.query, & CFL.queryAll are gone
        read the wiki.
    - added add()
    - added an alias to CFL
        CFL can now also be used (by default) by using _J()
        (underscore and upper-case J)
        e.g., _J('#foo').show()
    - added CFL.addEvent
        e.g., CFL.addEvent(elem, 'click', fn);
    - added CFL.loop() ==> will take a function and call it a specified number of times
        e.g., CFL.loop(50, fn);
    - added ability to pass CFL.create a string of HTML and have it return a tree of nodes
    - CFL.xpath now returns an array instead of an XPath snapshot
        except in the case that you want a type like singleNodeValue, stringValue, etc
```

---

# 1.1.2 (9/17/2013)
```
    - updated CFL.create a little
    - updated CFL.runAt to be shorter and faster
        plus it can now take a custom 'this' value and extra arguments
        to be passed to the callback function
```

# 1.1.1 (9/3/2013)
```
    - added CFL.runAt for running functions at specified dom ready states
```

---

# 1.1.0 (8/30/2013)
```
    - updated CFL.toArray to work with xpath snapshots as well
```

---

# 1.0.9
```
    - added CFL.toArray (using Array's slice method works but it's not compatible with all browers)
        it will take whatever you throw at it and convert it to an array
        if it has a '.length' property
            e.g., HTML Collections, Node Lists, the 'arguments' parameter used in functions, etc
    - updated CFL.typeOf to include HTML Collections, Node Lists, and the 'arguments' parameter
```

---

# 1.0.8
```
    - added CFL.typeOf
        it will return 'array' on arrays, 'null' on null, 'element' on an element
        and the other regular types
    - modified CFL.[after/before/hide/show/remove/replace] to use CFL.elem()
        it will take a string argument and find out if the user wanted
        an xpath expression, a query selector, or an id.
        if the argument isn't a string, it returns itself.
        in the case that the user supplied an element, it will work as usual
            e.g., you can now do CFL.show('root') and it will show the ID 'root'
            you won't need to do CFL.show( CFL.id('root') )    (same for hide, show, remove, etc)
                backwards compatibility supports that older method, though
    - added the ability to rename this library's reference ('CFL')
        it's now dynamic and doesn't rely on the variable name you declare it with.
        you can either includ the source in your code and rename the variable that way,
        or you can simply just do
            var CFLib = CFL;
            'CFLib' in this case can be named whatever you wish
```

---

# 1.0.7
```
    - fixed CFL.id, CFL.query, and CFL.queryAll.
        there was an unthrown bug before where if the second argument
        was null (falsy), it would run the query from 'document' instead
        of returning null like it should, since the context node was null
```

---

# 1.0.6
```
    - removed HTMLElement method .before() and .after() because they weren't getting set early enough.
        to fix this, the user would've had to set '@run-at' to 'document-start' on every script.
        I, instead, replaced them with CFL.before() and CFL.after()
        syntax examples are below (as usual), where I define the methods
```

---

# 1.0.5
```
    - fixed CFL.setInterval
        it now has drift accommodation and works uniformly on all browsers (unlike DOM's setInterval)
```

---

# 1.0.4
```
    - fixed some problems with adding style attributes in Chrome with create()
```

---

# 1.0.3
```
    - added short syntax examples for each method
    - added optional context nodes for query(), queryAll(), and id()
```

---

# 1.0.2
```
    - changed create() back so you have to pass 'text' as the first argument, then your text as the second argument.
            It -will- stay this way
    - added addStyle()
    - added a third argument to addScript(code_string, id, head_node)
            head_node is optional
```

---

# 1.0.1
```
    - changed create() so if you pass it one argument, a string, it will create that as text
```

---

# 1.0.0
```
    - created
```