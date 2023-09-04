import { DomainError } from "src/domain/error/domain-error";

export class AccountByEmailNotFoundError extends Error implements DomainError {
  private _statusCode: number;

  constructor(statusCode = 409) {
    super(`Account by email not found.`);
    this.name = 'AccountByEmailNotFound';
    this._statusCode = statusCode;
  }

  get message() {
    return this.message;
  }

  get statusCode() {
    return this._statusCode;
  }
}