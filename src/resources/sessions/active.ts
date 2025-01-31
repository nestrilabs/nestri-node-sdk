// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Active extends APIResource {
  /**
   * Returns a list of all active gaming sessions associated with the authenticated
   * user
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ActiveListResponse> {
    return this._client.get('/sessions/active', options);
  }
}

export interface ActiveListResponse {
  /**
   * A list of active gaming sessions associated with the user
   */
  data: Array<ActiveListResponse.Data>;
}

export namespace ActiveListResponse {
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

export declare namespace Active {
  export { type ActiveListResponse as ActiveListResponse };
}
