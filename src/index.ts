// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteResponse,
  SubscriptionListResponse,
  Subscriptions,
} from './resources/subscriptions';
import {
  TaskCreateResponse,
  TaskDeleteResponse,
  TaskListResponse,
  TaskRetrieveResponse,
  TaskSessionResponse,
  TaskUpdateResponse,
  Tasks,
} from './resources/tasks';
import { UserListResponse, UserRetrieveResponse, UserSessionResponse, Users } from './resources/users';
import {
  SessionCreateParams,
  SessionCreateResponse,
  SessionDeleteResponse,
  SessionRetrieveResponse,
  Sessions,
} from './resources/sessions/sessions';

export interface ClientOptions {
  /**
   * Access token for Bearer authentication
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['NESTRI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Nestri API.
 */
export class Nestri extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Nestri API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['NESTRI_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['NESTRI_BASE_URL'] ?? https://api.nestri.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('NESTRI_BASE_URL'),
    bearerToken = Core.readEnv('NESTRI_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.NestriError(
        "The NESTRI_API_KEY environment variable is missing or empty; either provide it, or instantiate the Nestri client with an bearerToken option, like new Nestri({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://api.nestri.io`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  sessions: API.Sessions = new API.Sessions(this);
  users: API.Users = new API.Users(this);
  subscriptions: API.Subscriptions = new API.Subscriptions(this);
  tasks: API.Tasks = new API.Tasks(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Nestri = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static NestriError = Errors.NestriError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Nestri.Sessions = Sessions;
Nestri.Users = Users;
Nestri.Subscriptions = Subscriptions;
Nestri.Tasks = Tasks;
export declare namespace Nestri {
  export type RequestOptions = Core.RequestOptions;

  export {
    Sessions as Sessions,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionCreateParams as SessionCreateParams,
  };

  export {
    Users as Users,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserSessionResponse as UserSessionResponse,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };

  export {
    Tasks as Tasks,
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskListResponse as TaskListResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskSessionResponse as TaskSessionResponse,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  NestriError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Nestri;
