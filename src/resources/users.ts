// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Users extends APIResource {
  /**
   * Returns the current authenticate user's profile
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<UserRetrieveResponse> {
    return this._client.get('/users/@me', options);
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

export declare namespace Users {
  export { type UserRetrieveResponse as UserRetrieveResponse };
}
