// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는
// 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// + 프로퍼티의 상태: 값, 갱신 가능 여부, 열거 가능 여부, 재 정의 가능 여부

// + 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯이다.
// 따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor
// 메서드를 사용해 간접적으로 확인이 가능하다.

// Object.getOwnPropertyDescriptor 메서드를 사용할 때 첫 매개변수에 객체의 참조를 전달,
// 두 번째 매개변수에 프로퍼티 키를 문자열로 전달해준다.

const user = {
    userName: 'Jo Seong Jun'
}

// Object.getOwnPropertyDescriptor 메서드를 사용해 데이터 프로퍼티(userName)의 어트리뷰트를 확인할 수 있음
console.log(Object.getOwnPropertyDescriptor(user, 'userName'));


// [데이터 프로퍼티와 접근자 프로퍼티]
/**
 * 데이터 프로퍼티: 키, 값으로 구성된 일반적 프로퍼티
 * 접근자 프로퍼티: 자체적인 값이 없고, 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 함수 프로퍼티
 */

//  접근자 프로퍼티의 어트리뷰트
/**
 * get: 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수
 * set: 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수
 * 
 * 위 접근자 함수는 getter / setter 함수라고도 부른다.
 * getter만 정의할 수도 setter만 정의할 수도 모두 정의할 수도 있다.
 */

const person = {
    // 데이터 프로퍼티
    firstName: "Jo",
    lastName: "seongjun",

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

// 접근자 프로퍼티 호출
person.fullName = '조 성준';
console.log(person.fullName);