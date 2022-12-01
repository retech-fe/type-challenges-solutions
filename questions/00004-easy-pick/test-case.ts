import type { Equal, Expect } from "@type-challenges/utils";

// --------输入类型--------------------
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ----------测试验证------------------
// 测试方法一: 官方测试util
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

// 测试方法二: 自我测试
type o1 = MyPick<Todo, "title">;
type o2 = MyPick<Todo, "title" | "completed">;
// @ts-expect-error
type o3 = MyPick<Todo, "title" | "completed" | "invalid">;

// -----------解题思路----------------

// 1. 字面量类型：类似 1111、'aaaa'、{ a: 1} 这种值也可以做为类型
let x: "hello" = "hello";
// OK
x = "hello";
// Error
// x = "howdy";

// 2. 可索引类型：对象、class、数组、元组
// 接口可以用来描述函数、构造器、索引类型等复合类型
interface KeyOfPerson {
  name: string;
  age: number;
  sex: number;
}

interface StringArray {
  // index为索引类型
  [index: number]: string;
}

// 索引类型查询: 可索引类型可以通过key获取key对应的类型
type name = KeyOfPerson["name"];
let n: name = "pf";

// 元组也是可索引类型
type tuple = [3, 4, 5];
type t1 = MyPick<tuple, 0>;
type t2 = MyPick<tuple, 1>;
type t3 = MyPick<tuple, 0 | 1>;
type t4 = MyPick<tuple, 0 | 1 | 2>;

// 3. keyof运算符、联合类型及联合字面量类型

// keyof 运算符可以获取可索引类型的key，得到的类型是一个联合类型
// keyof KeyOfPerson 类型是一个： "name" | "age" | "sex" 的联合类型
// keyof得到的联合类型是可索引类型的所有key的联合字面量类型

type PersonKeys = keyof KeyOfPerson;
let nameKey: PersonKeys = "name";
// nameKey为字符串类型，可以通过下面的.操作查看他有哪些方法和属性
// nameKey.concat
let ageKey: PersonKeys = "age";
let sexKey: PersonKeys = "sex";
// let nonekey: PersonKeys = "none"; // PersonKeys类型里面没有none这个字面量类型

type personArrKeys = keyof KeyOfPerson[];
let personArr: personArrKeys;

type tuple2 = [4, 5, 6];
type t21 = keyof tuple2;
let v21: t21;
//v21.

// 4. [P in K] TS中类型的遍历

// 5. 类型查找、可索引类型取值

type ageType = KeyOfPerson["age"];

// T[P] 从T类型中获取key p对应的类型

// 6. 类型映射：从一个原始类型经过映射返回新的类型
