/* tslint:disable */
/* eslint-disable */
/**
 * @param {string} name
 * @param {number} age
 * @returns {User}
 */
export function create_user(name: string, age: number): User;
/**
 * @param {User} user
 * @returns {string}
 */
export function greet(user: User): string;
/**
 * @param {NumberEnum} number_enum
 * @returns {string}
 */
export function print_number_enum(number_enum: NumberEnum): string;
export interface User {
    name: string;
    age: number;
}

export type NumberEnum = "Foo" | "Bar" | "Baz";

