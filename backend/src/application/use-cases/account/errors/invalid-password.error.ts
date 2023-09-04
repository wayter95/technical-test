import { DomainError } from "src/domain/error/domain-error";

export class InvalidPasswordError extends Error implements DomainError {
  private _statusCode: number;

  constructor(statusCode = 400) {
    super(`Invalid passowrd.`);
    this.name = 'InvalidPassword';
    this._statusCode = statusCode;
  }

  get message() {
    return this.message;
  }

  get statusCode() {
    return this._statusCode;
  }
}