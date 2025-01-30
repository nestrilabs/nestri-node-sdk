// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ActiveAPI from './active/active';
import { Active } from './active/active';

export class Sessions extends APIResource {
  active: ActiveAPI.Active = new ActiveAPI.Active(this._client);
}

Sessions.Active = Active;

export declare namespace Sessions {
  export { Active as Active };
}
