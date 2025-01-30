// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PublicAPI from './public';
import { Public } from './public';

export class Active extends APIResource {
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
}

Active.Public = Public;

export declare namespace Active {
  export { Public as Public };
}
