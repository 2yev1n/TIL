# Swift 기본 문법 정리

### 1. Variable (변수) / Constants (상수)

#### 1 - 1. 변수 초기화

> 변수 선언
>
> **var variable = 30**
>
> 상수 선언
>
> **let constant = 30**



#### 1 - 2. 변수 타입 초기화

> // Int
>
> var variable: Int = 30
> var variable = 30
>
> // Double
>
> var variable2: Double = 30
> var variable2 = 30.0
>
> // 상수 Int
>
> Let constant: Int = 30



#### 1 - 3. String 변수

> var string_variable = "Hello, world!"



##### 1 - 3 - 1. Concat String

> var a = "Hello, "
> var b = "World!"
>
> a + b
> // "Hello, World!"

##### 1 - 3 - 2. 다른 타입 Concat

* Back-slash + parantgeses ==> [\ (변수명)]

> var a = "Hello, "
> var b = 30
>
> a + b
> // Error
>
> a + "\ (b)"s
> // "Hello, 30"



### 2. Array

#### 2 - 1. 초기화

> var array_test = ["A", "B", "C"]
>
> var array_test: [String] = ["A", "B", "C"]
>
> var array_test: Array<string> = ["A", "B", "C"]



#### 2 - 2. indexing

> array_test[0]ㄴ
> // "A"
>
> array_test[1]
> // "B"
>
> array_test[1...]
> // ["B", "C"]
>
> array_test[0...1]
> // ["A", "B"]
>
> array_test[...1]
> // ["A", "B"]



#### 2 - 3. 인자 추가

> array_test.append("D")



#### 2 - 4. 인자 개수

> array_test.count
> // 4



### 3. Dictionary

#### 3 - 1. 초기화

> var dict_test = ["key" : "value", "key2" : "value2"]
>
> var dict_test2: [String: String] = ["key" : "value", "key2" : "value2"]



#### 3 - 2. Get Keys

> dict_test.keys
> // Dictionary.keys(["key", "key2"])



#### 3 - 3. Get Values

> dict_test.values
> // Dictionary.Values(["value", "value2"])



#### 3 - 4. Get value of key

> dict_test["key2"]
> // "value2"



### 4. Optional Variable

#### 4 - 1. 초기화

> var a: String?
> // nil



#### 4 - 2. 치환

> a = "AA"
> // "AA"



#### 4 - 3. 예외

> "BB " + a
> // Error, a는 String 변수가 아니다.

> if a != nil {
> 	print("BB " + a!)		// !를 변수명 뒤에 붙여주면, 값을 인식한다.
> }
> // "BB A"

> // 아래와 같이 let으로 선언하면 !를 쓰지 않아도 된다.
> If let b = a {
> 	print("BB " + b)
> }
> // "BB A"



### 5. 조건문

#### 5 - 1. If-then-else

> var num = 5
>
> if num == 5 {
> 	print("Num is 5.")
> }  else {
> 	print("Num is not 5.")
> }



#### 5 - 2. Switch-case-default

> var num = 5
>
> switch num {
> case 5:
> 	print("Num is 5.")
> default:
> 	print("Num is not 5.")
> }



#### 5 - 3. range

##### 5 - 3 - 1. if

> var num = 5
>
> if num > 3 && num < 6 {
> 	print("Num is in [3 ~ 6].")
> }   else {
> 	print("Num is not in [3 ~ 6].")
> }

#####  5 - 3 - 2. switch

> var num = 5
>
> switch num {
> case 3...6:
> 	print("Num is in [3 ~ 6].")
> default:
> 	print("Num is not in [ 3 ~ 6].")
> }



### 6. 반복문

#### 6 - 1. for - in

> for i in 3...5 {
> 	print(i)
> }
>
> // key, value를 괄호로 묶어 주어야한다.
> for (key, value) in ["key1" : "value1", "key2" : "value2"] {
> 	print(key, value)
> }



#### 6 - 2. while

> i = 0
> while i < 5 {
> 	i += 1
> }



#### 6 - 3. repeat

> repeat {
> 	i += 1
> }  while i < 5



### 7. Simple View Test

#### 7 - 1. 변수선언

> var emoji_dict = ["😀" : "smile", "😤" : "angry"]
> var key = "😀"
> var value = emoji_dict[key]



#### 7 - 2. 배경 view

> Let containerView = UIView(frame: CGRect(x: 0, y: 0, width: 200, height: 200))
> containerView.backgroundColor = UIColor.brown

![?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvPlWU%2FbtqE407vkqf%2Fp5kmGhKYP5IjqmcGoHPKn0%2Fimg](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvPlWU%2FbtqE407vkqf%2Fp5kmGhKYP5IjqmcGoHPKn0%2Fimg.png)



#### 7 - 3. 라벨 view

> let emoji_label = UILabel(frame: CGRect(x: 75, y: 10, width: 100, height: 100))
> emoji_label.text = value
> Emoji_label.font = UIFont.systemFont(ofSize: 20)
> containerView.addSubview(emoji_label)

![?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbM3KDW%2FbtqE1DsQgjk%2FmE03gYxCoUTIIwFdRCf6xK%2Fimg](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbM3KDW%2FbtqE1DsQgjk%2FmE03gYxCoUTIIwFdRCf6xK%2Fimg.png)

