import { describe, test, expect } from "vitest";
import {
	User,
	greet,
	NumberEnum,
	print_number_enum,
	print_string_enum,
} from "../pkg/index";

describe("create", () => {
	const user = new User("Smith", 25);

	test("User クラスの値が返る", () => {
		expect(user).toBeInstanceOf(User);
		expect(user.name).toBe("Smith");
		expect(user.age).toBe(25);
	});

	test("フィールドだけ一致していても別の型とみなされる", () => {
		expect(user).not.toEqual({ name: "Smith", age: 25 });
	});
});

describe("greet", () => {
	test("greet() に User 型の値を渡せる", () => {
		const user = new User("Smith", 25);
		const message = greet(user);

		expect(message).toBe("Hello, my name is Smith and I am 25 years old");
	});

	test("greet() に User 型以外の値を渡すとエラーになる", () => {
		const user = { name: "Smith", age: 25 };

		expect(() => greet(user)).toThrow();
	});
});

describe("print_number_enum", () => {
	test("print_number_enum() に NumberEnum 型の値を渡せる", () => {
		const message = print_number_enum(NumberEnum.Foo);

		expect(message).toBe("NumberEnum::Foo");
	});

	test("print_number_enum() に定義されていない要素を渡すと TypeScript がエラーを吐いてくれる", () => {
		expect(() => print_number_enum(42)).toThrow();
	});
});

describe("print_string_enum", () => {
	test("print_string_enum() に string 型の値を渡せる", () => {
		const message = print_string_enum("Foo");

		console.log({ message });

		expect(message).toBe("StringEnum::Foo");
	});

	test("print_string_enum() に定義されていない要素を渡せる、__Invalid 判定になる", () => {
		const message = print_string_enum("Qux");

		expect(message).toBe("StringEnum::__Invalid");
	});
});
