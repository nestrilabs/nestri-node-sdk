// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Machines extends APIResource {
  /**
   * Get the machine with the given ID.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<MachineRetrieveResponse> {
    return this._client.get(`/machine/${id}`, options);
  }

  /**
   * List the current user's machines.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<MachineListResponse> {
    return this._client.get('/machine', options);
  }

  /**
   * Delete the machine with the given ID.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<MachineDeleteResponse> {
    return this._client.delete(`/machine/${id}`, options);
  }
}

export interface MachineRetrieveResponse {
  /**
   * A machine running on the Nestri network.
   */
  data: MachineRetrieveResponse.Data;
}

export namespace MachineRetrieveResponse {
  /**
   * A machine running on the Nestri network.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The machine's fingerprint, derived from the machine's Linux machine ID.
     */
    fingerprint: string;

    /**
     * Hostname of the machine
     */
    hostname: string;

    /**
     * The machine's approximate location; country and continent.
     */
    location: string;
  }
}

export interface MachineListResponse {
  /**
   * List of machines.
   */
  data: Array<MachineListResponse.Data>;
}

export namespace MachineListResponse {
  /**
   * A machine running on the Nestri network.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The machine's fingerprint, derived from the machine's Linux machine ID.
     */
    fingerprint: string;

    /**
     * Hostname of the machine
     */
    hostname: string;

    /**
     * The machine's approximate location; country and continent.
     */
    location: string;
  }
}

export interface MachineDeleteResponse {
  data: 'ok';
}

export declare namespace Machines {
  export {
    type MachineRetrieveResponse as MachineRetrieveResponse,
    type MachineListResponse as MachineListResponse,
    type MachineDeleteResponse as MachineDeleteResponse,
  };
}
