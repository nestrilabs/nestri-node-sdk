// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SessionsAPI from './sessions';
import { SessionListResponse, Sessions } from './sessions';

export class Games extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  /**
   * Adds a game to the currently authenticated user's library. Once added, the user
   * can play the game and share their progress with others
   */
  create(steamId: number, options?: Core.RequestOptions): Core.APIPromise<GameCreateResponse> {
    return this._client.post(`/games/${steamId}`, options);
  }

  /**
   * Fetches detailed metadata about a specific game using its Steam ID
   */
  retrieve(steamId: number, options?: Core.RequestOptions): Core.APIPromise<GameRetrieveResponse> {
    return this._client.get(`/games/${steamId}`, options);
  }

  /**
   * Updates the metadata about a specific game using its Steam ID
   */
  update(body: GameUpdateParams, options?: Core.RequestOptions): Core.APIPromise<GameUpdateResponse> {
    return this._client.put('/games', { body, ...options });
  }

  /**
   * Returns a list of all (known) games associated with the authenticated user
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GameListResponse> {
    return this._client.get('/games', options);
  }

  /**
   * Removes a game from the authenticated user's library. The game remains in the
   * system but will no longer be accessible to the user
   */
  delete(steamId: number, options?: Core.RequestOptions): Core.APIPromise<GameDeleteResponse> {
    return this._client.delete(`/games/${steamId}`, options);
  }
}

export interface GameCreateResponse {
  data: 'ok';
}

export interface GameRetrieveResponse {
  /**
   * Represents a Steam game that can be installed and played on a machine.
   */
  data: GameRetrieveResponse.Data;
}

export namespace GameRetrieveResponse {
  /**
   * Represents a Steam game that can be installed and played on a machine.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * A human-readable name for the game, used for easy identification.
     */
    name: string;

    /**
     * The Steam ID of the game, used to identify it during installation and runtime.
     */
    steamID: number;
  }
}

export interface GameUpdateResponse {
  data: 'ok';
}

export interface GameListResponse {
  /**
   * A list of games owned by the user
   */
  data: Array<GameListResponse.Data>;
}

export namespace GameListResponse {
  /**
   * Represents a Steam game that can be installed and played on a machine.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * A human-readable name for the game, used for easy identification.
     */
    name: string;

    /**
     * The Steam ID of the game, used to identify it during installation and runtime.
     */
    steamID: number;
  }
}

export interface GameDeleteResponse {
  data: 'ok';
}

export interface GameUpdateParams {
  /**
   * A human-readable name for the game, used for easy identification.
   */
  name: string;

  /**
   * The Steam ID of the game, used to identify it during installation and runtime.
   */
  steamID: number;
}

Games.Sessions = Sessions;

export declare namespace Games {
  export {
    type GameCreateResponse as GameCreateResponse,
    type GameRetrieveResponse as GameRetrieveResponse,
    type GameUpdateResponse as GameUpdateResponse,
    type GameListResponse as GameListResponse,
    type GameDeleteResponse as GameDeleteResponse,
    type GameUpdateParams as GameUpdateParams,
  };

  export { Sessions as Sessions, type SessionListResponse as SessionListResponse };
}
