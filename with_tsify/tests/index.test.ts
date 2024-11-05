import { describe, test, expect } from "vitest";
import { type User, create_user, greet, print_number_enum } from "../pkg/index";

describe("create", () => {
	const user: User = create_user("Smith", 25);

	test("User インターフェースを満たす値が返る", () => {
		expect(user).toEqual({ name: "Smith", age: 25 });
	});

	test("user は User クラスのインスタンスではない", () => {
		expect(user.constructor.name).not.toBe("User");
		expect(user.constructor.name).toBe("Object");
	});
});

describe("greet", () => {
	test("greet() に User インターフェースの値を渡せる", () => {
		const user: User = create_user("Smith", 25);
		const message = greet(user);

		expect(message).toBe("Hello, my name is Smith and I am 25 years old");
	});

	test("create_user() を介さずに作った値を渡してもいい", () => {
		const user = { name: "Smith", age: 25 };
		const message = greet(user);

		expect(message).toBe("Hello, my name is Smith and I am 25 years old");
	});
});

describe("print_number_enum", () => {
	test("print_number_enum() に NumberEnum 型の値を渡せる", () => {
		const message = print_number_enum("Foo");

		expect(message).toBe("NumberEnum::Foo");
	});

	test("print_number_enum() に定義されていない要素を渡すと TypeScript がエラーを吐いてくれる", () => {
		expect(() => print_number_enum("Qux")).toThrow();
	});
});
