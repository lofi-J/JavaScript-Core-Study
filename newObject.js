// Object 생성자 함수

// 빈 객체 생성 
const person = new Object();

// 프로퍼티 추가 
person.name = "lofi-J";
person.say = function() {
    console.log('hello world!');
}

/**
 * 이 처럼 객체를 생성하는데에는 생성자 함수를 이용하는 것 보다 객체 리터럴을 사용하는 편이 편리해보인다
 * 
 * 하지만 객체 리터럴에 의한 객체 생성은 한계점이 존재한다.
 * 동일한 프로퍼티를 가지는 객체를 여러개 생성해야할 경우 매번 같은 프로퍼티를 다시 정의해야하므로 비 효율적이다.
 */


// [객체 리터럴 방식]
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle2.getDiameter());

// [생성자 함수에 의한 객체 생성 방식]
function Circle(radius) {
    // 생성자 함수의 내부 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
const circleInstance1 = new Circle(5);
const circleInstance2 = new Circle(10);
console.log(circleInstance1.getDiameter());
console.log(circleInstance2.getDiameter());


// 내부 메서드 [[Call]], [[Construct]]
/**
 * 함수 선언문 또는 함수 표현식으로 정의한 함수는 일반적인 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 
 * 호출할 수 있다.
 * 
 * 함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과
 * 내부 메서드를 모두 가지고 있기 때문.
 */

// 함수가 객체이다.
function foo() {}

// 프로퍼티 소유 가능
foo.prop = 1000;

// 함수 == 객체 이므로 메서드를 소유할 수 있음
foo.method = function () {
    console.log(this.prop);
}

foo.method(); // 1000

new foo();

// [new.target]
/**
 * 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서부터 new.target을 지원한다.
 * 함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.
 * 
 * new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
 * new 연산자 없이 일반 함수로서 호출되면 new.target은 undefined이다.
 */

// 생성자 함수 
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 undefined
    if(!new.target) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 생성해도 new.target을 이용해 생성자 함수로서 호출되어짐
const inst = Circle(5);
console.log(inst.getDiameter()); // 10