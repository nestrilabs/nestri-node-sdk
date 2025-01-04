// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sessions extends APIResource {
  /**
   * Fetches active and public game sessions associated with a specific game using
   * its Steam ID
   */
  list(steamId: number, options?: Core.RequestOptions): Core.APIPromise<SessionListResponse> {
    return this._client.get(`/games/${steamId}/sessions`, options);
  }
}

export interface SessionListResponse {
  /**
   * Publicly active sessions associated with the game
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

export declare namespace Sessions {
  export { type SessionListResponse as SessionListResponse };
}
