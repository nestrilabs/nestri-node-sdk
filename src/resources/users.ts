// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * Gets a user's profile by their id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<UserRetrieveResponse> {
    return this._client.get(`/users/${id}`, options);
  }

  /**
   * Returns all user profiles
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/users', options);
  }

  /**
   * Get a user's gaming session details by their id
   */
  session(id: string, options?: Core.RequestOptions): Core.APIPromise<UserSessionResponse> {
    return this._client.get(`/users/${id}/session`, options);
  }
}

export interface UserRetrieveResponse {
  /**
   * Represents a profile of a user on Nestri
   */
  data: UserRetrieveResponse.Data;
}

export namespace UserRetrieveResponse {
  /**
   * Represents a profile of a user on Nestri
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The time when this profile was first created
     */
    createdAt: string | number;

    /**
     * The number discriminator for each username
     */
    discriminator: string | number;

    /**
     * Whether the user is active, idle or offline
     */
    status: 'active' | 'idle' | 'offline';

    /**
     * The time when this profile was last edited
     */
    updatedAt: string | number;

    /**
     * The user's unique username
     */
    username: string;

    /**
     * The url to the profile picture.
     */
    avatarUrl?: string;
  }
}

export interface UserListResponse {
  /**
   * Represents a profile of a user on Nestri
   */
  data: UserListResponse.Data;
}

export namespace UserListResponse {
  /**
   * Represents a profile of a user on Nestri
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The time when this profile was first created
     */
    createdAt: string | number;

    /**
     * The number discriminator for each username
     */
    discriminator: string | number;

    /**
     * Whether the user is active, idle or offline
     */
    status: 'active' | 'idle' | 'offline';

    /**
     * The time when this profile was last edited
     */
    updatedAt: string | number;

    /**
     * The user's unique username
     */
    username: string;

    /**
     * The url to the profile picture.
     */
    avatarUrl?: string;
  }
}

export interface UserSessionResponse {
  /**
   * Represents a single game play session, tracking its lifetime and accessibility
   * settings.
   */
  data: UserSessionResponse.Data;
}

export namespace UserSessionResponse {
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

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserSessionResponse as UserSessionResponse,
  };
}
