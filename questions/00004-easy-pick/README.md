# PICK

## 题目

[题目](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md)

## 解析

为了解出这个挑战，我们需要使用**查找类型**和**映射类型**。

**查找类型**允许我们通过名称从另一个类型中提取一个类型。类似于使用键值从一个对象中获取值。

**映射类型**允许我们将一个类型中的每个属性转换为一个新类型。

你可以在[TypeScript]()网站 [lookup types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types) 和 [mapped types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) 上了解更多它们得信息，并了解它们在做什么。

现在，我们知道 TypeScript 中有**查找类型**和**映射类型**。如何实现所需的类型?

我们需要从**联合（union）K** 取得所有内容，进行**遍历**，并返回一个仅包含这些键的新类型。这正是**映射类型**所做的事。

尽管我们需要从原始类型中获取它的类型，值的类型本身并没有变化。这就是**查找类型**的用 处所在：

```ts
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
```

从 K 中获取所有内容，命名为 P 并将其作为我们新对象的一个新键，其值类型取 自输入类型。一开始理解很难，所以你一旦不理解什么，就尝试重读一遍，再一步步的在 脑海里思考。

## 关键词

泛型、泛型约束、可索引类型、索引类型查询、联合类型、字面量联合类型、keyof 操作符、in 操作符、映射类型

## 参考资料

### 官方文档

- [literal-types 字面量类型](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Indexed Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

### 其他

- [keyof-and-lookup-types-in-typescript](https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript)
- [TypeScript keyof 操作符](http://semlinker.com/ts-keyof/)
- [Typescript - 类型操作符](https://github.com/CommanderXL/Biu-blog/issues/36)
- [typescriptlang - typescript-2-9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html)
- [keyof-inferring-string-number-when-key-is-only-a-string](https://stackoverflow.com/questions/51808160/keyof-inferring-string-number-when-key-is-only-a-string)
