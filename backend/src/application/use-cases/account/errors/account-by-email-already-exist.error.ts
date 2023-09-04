import { DomainError } from "src/domain/error/domain-error";

export class AccountByEmailAlreadyExistError extends Error implements DomainError {
  private _statusCode: number;

  constructor(statusCode = 409) {
    super(`Account by email already exist.`);
    this.name = 'AccountByEmailAlreadyExist';
    this._statusCode = statusCode;
  }

  get message() {
    return this.message;
  }

  get statusCode() {
    return this._statusCode;
  }
}