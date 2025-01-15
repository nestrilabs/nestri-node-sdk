// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Teams extends APIResource {
  /**
   * Create a new team for the currently authenticated user, enabling them to invite
   * and play a game together with friends
   */
  create(body: TeamCreateParams, options?: Core.RequestOptions): Core.APIPromise<TeamCreateResponse> {
    return this._client.post('/teams', { body, ...options });
  }

  /**
   * Fetch detailed information about a specific team using its unique slug
   */
  retrieve(slug: string, options?: Core.RequestOptions): Core.APIPromise<TeamRetrieveResponse> {
    return this._client.get(`/teams/${slug}`, options);
  }

  /**
   * Returns a list of all teams which the authenticated user is part of
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TeamListResponse> {
    return this._client.get('/teams', options);
  }

  /**
   * This endpoint allows a user to delete a team, by providing it's unique slug
   */
  delete(slug: string, options?: Core.RequestOptions): Core.APIPromise<TeamDeleteResponse> {
    return this._client.delete(`/teams/${slug}`, options);
  }

  /**
   * Invite a user to a team owned by the current user
   */
  invite(
    slug: string,
    email: string | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamInviteResponse> {
    return this._client.post(`/teams/${slug}/invite/${email}`, options);
  }
}

export interface TeamCreateResponse {
  data: 'ok';
}

export interface TeamRetrieveResponse {
  /**
   * A group of users sharing the same machines for gaming.
   */
  data: TeamRetrieveResponse.Data;
}

export namespace TeamRetrieveResponse {
  /**
   * A group of users sharing the same machines for gaming.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The time when this team was first created
     */
    createdAt: string | number;

    /**
     * Name of the team
     */
    name: string;

    /**
     * Whether this team is owned by this user
     */
    owner: boolean;

    /**
     * This is the unique name identifier for the team
     */
    slug: string;

    /**
     * The time when this team was last edited
     */
    updatedAt: string | number;
  }
}

export interface TeamListResponse {
  /**
   * A list of teams associated with the user
   */
  data: Array<TeamListResponse.Data>;
}

export namespace TeamListResponse {
  /**
   * A group of users sharing the same machines for gaming.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The time when this team was first created
     */
    createdAt: string | number;

    /**
     * Name of the team
     */
    name: string;

    /**
     * Whether this team is owned by this user
     */
    owner: boolean;

    /**
     * This is the unique name identifier for the team
     */
    slug: string;

    /**
     * The time when this team was last edited
     */
    updatedAt: string | number;
  }
}

export interface TeamDeleteResponse {
  data: 'ok';
}

export interface TeamInviteResponse {
  data: 'ok';
}

export interface TeamCreateParams {
  /**
   * The human readable name to give this team
   */
  name: string;

  /**
   * The unique name to be used with this team
   */
  slug: string;
}

export declare namespace Teams {
  export {
    type TeamCreateResponse as TeamCreateResponse,
    type TeamRetrieveResponse as TeamRetrieveResponse,
    type TeamListResponse as TeamListResponse,
    type TeamDeleteResponse as TeamDeleteResponse,
    type TeamInviteResponse as TeamInviteResponse,
    type TeamCreateParams as TeamCreateParams,
  };
}
