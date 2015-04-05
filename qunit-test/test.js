/* -- COPY-ABLE TEST CASE --------------------------

test("CFL.text()", function () {
    expect(1);
    strictEqual( 1, 1, 'foo');
});

---------------------------------------------- */



/* -- SHORTCUTS FOR COPY-PASTE ------------------

id('qunit-fixture')
id('test-p')

---------------------------------------------- */



test("CFL init", function () {
    expect(6);

    equal( CFL().length, 0, 'CFL() length equal to zero' );
    equal( CFL(undefined).length, 0, 'CFL(undefined) === CFL([])' );
    equal( CFL(null).length, 0, 'CFL(null) === CFL([])' );
    equal( CFL('').length, 0, 'CFL(\'\') === CFL([])' );
    equal( CFL('#').length, 0, 'CFL(\'#\') === CFL([])' );
    equal( CFL(window).length, 1, 'Correct number of elements generated for CFL(window)' );
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL context", function () {
    expect(3);

    strictEqual( CFL('div p', '#qunit-fixture')[0], id('test-p'), 'Selector with string as context' );
    strictEqual( CFL('div p', id('qunit-fixture'))[0], id('test-p'), 'Selector with element as context' );
    strictEqual( CFL('div p', CFL('#qunit-fixture'))[0], id('test-p'), 'Selector with CFL object as context' );
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL.loop(maxIterations, fn)", function () {
    var JslLoopIter = 0; // unique var name to reduce problems (instead of using i)

    expect(1);

    CFL.loop(5, function () {
        JslLoopIter += 1;
    });

    equal( JslLoopIter, 5, 'Correct loop amount' );
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL.random(maxInteger, minInteger)", function () {
    var o1 = {},
        o2 = {},
        iters = 1000,
        isRangeValid, tmp,
        JslRandomIter; // unique var name to reduce problems (instead of using i)

    expect(3);

    for (JslRandomIter = 0, isRangeValid = true; JslRandomIter < iters; JslRandomIter += 1) {
        tmp = CFL.random(50);
        if (tmp < 0 || tmp > 50) {
            isRangeValid = false;
        }
    }
    ok( isRangeValid, 'Correct range for CFL.random(50)' );

    for (JslRandomIter = 0, isRangeValid = true; JslRandomIter < iters; JslRandomIter += 1) {
        tmp = CFL.random(50, 20);
        if (tmp < 20 || tmp > 50) {
            isRangeValid = false;
        }
    }
    ok( isRangeValid, 'Correct range for CFL.random(50, 20)' );

    for (JslRandomIter = 0, isRangeValid = true; JslRandomIter < iters; JslRandomIter += 1) {
        tmp = CFL.random(50, 0);
        if (tmp < 0 || tmp > 50) {
            isRangeValid = false;
        }
    }
    ok( isRangeValid, 'Correct range for CFL.random(50, 0)' );
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL.toString(item)", function () {
    expect(9);

    equal( CFL.toString(1), '1', 'Correct value for a number' );
    equal( CFL.toString(5 / 0), 'NaN', 'Correct value for NaN' );
    equal( CFL.toString('foo'), '"foo"', 'Correct value for a string' );
    equal( CFL.toString(true), 'true', 'Correct value for a boolean' );
    equal( CFL.toString(/foo/), '/foo/', 'Correct value for a RegExp' );
    equal( CFL.toString( id('NonExistingID') ), 'null', 'Correct value for null' );
    equal( CFL.toString( (function (a) { return a; })() ), 'undefined', 'Correct value for undefined' );
    equal( CFL.toString( [1, 2, 3] ), '[\n    1,\n    2,\n    3\n]', 'Correct value for an array' );
    equal( CFL.toString( {'a' : 1, 'b' : 2, 'c' : 3} ), '{\n    "a" : 1,\n    "b" : 2,\n    "c" : 3\n}', 'Correct value for an object' );
});

// ----------------------------------------------------------------------------------------------------------------------

test("length", function () {
    expect(1);

    equal( CFL('#qunit-fixture div').length, 3, 'Returning the correct # of elements found');
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL(...).has()", function () {
    expect(1);

    equal( CFL('#test-p-container').has('p').length, 1, 'Returning the correct number of elements');
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL(...).is()", function () {
    expect(1);

    equal( CFL('#test-p-container').is('div'), true, 'Returning the correct value');
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL(...).prop()", function () {
    expect(1);

    equal( CFL('#some-checkbox').prop('checked'), false, 'Getting checked property');
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL(...).text()", function () {
    var testp = id('test-p');

    expect(2);

    CFL('#test-p').text('foobar');
    strictEqual( testp.textContent, 'foobar', 'Setting element text');

    testp.textContent = 'foo';
    CFL('#test-p').text('bar', true);
    strictEqual( testp.textContent, 'foobar', 'Appending element text');
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL(...).value()", function () {
    expect(2);

    equal( CFL('#select').value(), 'two', 'Getting correct select dropdown value');
    equal( CFL('#textbox').value(), 'foo', 'Getting correct text field value');
});

// ----------------------------------------------------------------------------------------------------------------------

test("CFL(...).width + CFL(...).height", function () {
    expect(2);

    strictEqual( CFL('#w400px').width, id('w400px').offsetWidth, 'CFL(...).width proper value & type (number)');
    strictEqual( CFL('#h400px').height, id('h400px').offsetHeight, 'CFL(...).height proper value & type (number)');
});