// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Public extends APIResource {
  /**
   * Returns a list of all publicly active gaming sessions associated
   */
  list(options?: Core.RequestOptions): Core.APIPromise<PublicListResponse> {
    return this._client.get('/sessions/active/public', options);
  }
}

export interface PublicListResponse {
  /**
   * A list of publicly active gaming sessions
   */
  data: Array<PublicListResponse.Data>;
}

export namespace PublicListResponse {
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

export declare namespace Public {
  export { type PublicListResponse as PublicListResponse };
}
