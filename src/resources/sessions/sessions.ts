// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ActiveAPI from './active/active';
import { Active, ActiveListResponse } from './active/active';

export class Sessions extends APIResource {
  active: ActiveAPI.Active = new ActiveAPI.Active(this._client);

  /**
   * Create a new gaming session for the currently authenticated user, enabling them
   * to play a game
   */
  create(body: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<SessionCreateResponse> {
    return this._client.post('/sessions', { body, ...options });
  }

  /**
   * Fetches detailed information about a specific gaming session using its unique id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionRetrieveResponse> {
    return this._client.get(`/sessions/${id}`, options);
  }

  /**
   * This endpoint allows a user to terminate an active gaming session by providing
   * the session's unique ID
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionDeleteResponse> {
    return this._client.delete(`/sessions/${id}`, options);
  }
}

export interface SessionCreateResponse {
  data: 'ok';
}

export interface SessionRetrieveResponse {
  /**
   * Represents a single game play session, tracking its lifetime and accessibility
   * settings.
   */
  data: SessionRetrieveResponse.Data;
}

export namespace SessionRetrieveResponse {
  /**
   * Represents a single game play session, tracking its lifetime and accessibility
   * settings.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * If true, the session is publicly viewable by all users. If false, only
     * authorized users can access it
     */
    public: boolean;

    /**
     * The timestamp indicating when this session started.
     */
    startedAt: string | number;

    /**
     * The timestamp indicating when this session was completed or terminated. Null if
     * session is still active.
     */
    endedAt?: string | number;
  }
}

export interface SessionDeleteResponse {
  data: 'ok';
}

export interface SessionCreateParams {
  /**
   * Whether the session is publicly viewable by all users. If false, only authorized
   * users can access it
   */
  public: boolean;
}

Sessions.Active = Active;

export declare namespace Sessions {
  export {
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionCreateParams as SessionCreateParams,
  };

  export { Active as Active, type ActiveListResponse as ActiveListResponse };
}
