use wasm_bindgen::prelude::*;

#[wasm_bindgen(getter_with_clone)]
pub struct User {
    pub name: String,
    pub age: u32,
}

#[wasm_bindgen]
impl User {
    #[wasm_bindgen(constructor)]
    pub fn new(name: String, age: u32) -> User {
        User { name, age }
    }
}

#[wasm_bindgen]
pub fn greet(user: &User) -> String {
    format!(
        "Hello, my name is {} and I am {} years old",
        user.name, user.age
    )
}

// ========================================================================== //

#[wasm_bindgen]
pub enum NumberEnum {
    Foo,
    Bar,
    Baz,
}

#[wasm_bindgen]
pub fn print_number_enum(number_enum: NumberEnum) -> String {
    match number_enum {
        NumberEnum::Foo => "NumberEnum::Foo".to_string(),
        NumberEnum::Bar => "NumberEnum::Bar".to_string(),
        NumberEnum::Baz => "NumberEnum::Baz".to_string(),
    }
}

// ========================================================================== //

#[wasm_bindgen]
pub enum StringEnum {
    Foo = "Foo",
    Bar = "Bar",
    Baz = "Baz",
}

#[wasm_bindgen]
pub fn print_string_enum(string_enum: StringEnum) -> String {
    match string_enum {
        StringEnum::Foo => "StringEnum::Foo".to_string(),
        StringEnum::Bar => "StringEnum::Bar".to_string(),
        StringEnum::Baz => "StringEnum::Baz".to_string(),
        StringEnum::__Invalid => "StringEnum::__Invalid".to_string(),
    }
}
