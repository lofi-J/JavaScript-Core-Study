/*
자바스크립트는 렉시컬 스코프를 따른다.
함수를 어디서 호출했는지가 아니라 어디서 정의했는지에 따라 상위
스코프가 결정된다.
 */

var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo(); // 1
bar(); // 1