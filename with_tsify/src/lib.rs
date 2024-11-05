use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct User {
    pub name: String,
    pub age: u32,
}

#[wasm_bindgen]
pub fn create_user(name: String, age: u32) -> User {
    User { name, age }
}

#[wasm_bindgen]
pub fn greet(user: &User) -> String {
    format!(
        "Hello, my name is {} and I am {} years old",
        user.name, user.age
    )
}

// ========================================================================== //

#[derive(Tsify, Serialize, Deserialize)]
#[tsify(into_wasm_abi, from_wasm_abi)]
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
