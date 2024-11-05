/* tslint:disable */
/* eslint-disable */
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
/**
 * @param {any} string_enum
 * @returns {string}
 */
export function print_string_enum(string_enum: any): string;
export enum NumberEnum {
  Foo = 0,
  Bar = 1,
  Baz = 2,
}
export class User {
  free(): void;
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name: string, age: number);
  age: number;
  name: string;
}
