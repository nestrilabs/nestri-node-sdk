// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SessionsAPI from './sessions';
import { Sessions } from './sessions';

export class Games extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

Games.Sessions = Sessions;

export declare namespace Games {
  export { Sessions as Sessions };
}
