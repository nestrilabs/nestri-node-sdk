// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Sessions extends APIResource {
  /**
   * Creates a new gaming session for the currently authenticated user, enabling them
   * to play a game
   */
  create(
    id: string,
    body: SessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionCreateResponse> {
    return this._client.post(`/sessions/${id}`, { body, ...options });
  }

  /**
   * Fetches detailed information about a specific gaming session using its unique id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SessionRetrieveResponse> {
    return this._client.get(`/sessions/${id}`, options);
  }

  /**
   * Returns a list of all gaming sessions associated with the authenticated user
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SessionListResponse> {
    return this._client.get('/sessions', options);
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
     * A human-readable name for the session to help identify it
     */
    name: string;

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

export interface SessionListResponse {
  /**
   * A list of gaming sessions associated with the user
   */
  data: Array<SessionListResponse.Data>;
}

export namespace SessionListResponse {
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
     * A human-readable name for the session to help identify it
     */
    name: string;

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
   * The unique fingerprint of the machine to play on, derived from its Linux machine
   * ID
   */
  fingerprint: string;

  /**
   * The human readable name to give this session
   */
  name: string;

  /**
   * Whether the session is publicly viewable by all users. If false, only authorized
   * users can access it
   */
  public: boolean;

  /**
   * The Steam ID of the game the user wants to play
   */
  steamID: number;
}

export declare namespace Sessions {
  export {
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionListResponse as SessionListResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionCreateParams as SessionCreateParams,
  };
}
