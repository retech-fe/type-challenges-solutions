# Readonly

## 挑战

[挑战](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.zh-CN.md)

## 解答

我们需要使对象中的所有属性都是只读的。因此，我们需要迭代所有的属性，并为它们添加一个修饰符。

我们将在这里使用**映射类型**，对于该类型的每个属性，我们获取它的键并为其添加一个 `readonly` 修饰符：

```ts
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
```

## 关键词

Readonly 只读类型、readonly 修饰符

## 相关挑战

[](https://github.com/type-challenges/type-challenges/tree/main/questions/00007-easy-readonly#related-challenges)

## 参考

- [readonlytype](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)
- [readonly](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)
- [readonly-properties](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)
- [the-readonlyarray-type](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type)
