// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Machines extends APIResource {
  /**
   * Associates a machine with the currently authenticated user's account, enabling
   * them to manage and control the machine
   */
  create(fingerprint: string, options?: Core.RequestOptions): Core.APIPromise<MachineCreateResponse> {
    return this._client.post(`/machines/${fingerprint}`, options);
  }

  /**
   * Fetches detailed information about a specific machine using its unique
   * fingerprint derived from the Linux machine ID
   */
  retrieve(fingerprint: string, options?: Core.RequestOptions): Core.APIPromise<MachineRetrieveResponse> {
    return this._client.get(`/machines/${fingerprint}`, options);
  }

  /**
   * Returns a list of all machines registered to the authenticated user in the
   * Nestri network
   */
  list(options?: Core.RequestOptions): Core.APIPromise<MachineListResponse> {
    return this._client.get('/machines', options);
  }

  /**
   * Removes the association between a machine and the authenticated user's account.
   * This does not delete the machine itself, but removes the user's ability to
   * manage it
   */
  delete(fingerprint: string, options?: Core.RequestOptions): Core.APIPromise<MachineDeleteResponse> {
    return this._client.delete(`/machines/${fingerprint}`, options);
  }
}

export interface MachineCreateResponse {
  data: 'ok';
}

export interface MachineRetrieveResponse {
  /**
   * Represents a a physical or virtual machine connected to the Nestri network..
   */
  data: MachineRetrieveResponse.Data;
}

export namespace MachineRetrieveResponse {
  /**
   * Represents a a physical or virtual machine connected to the Nestri network..
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * Represents a machine running on the Nestri network, containing its identifying
     * information and metadata.
     */
    createdAt: string | number;

    /**
     * A unique identifier derived from the machine's Linux machine ID.
     */
    fingerprint: string;

    /**
     * The Linux hostname that identifies this machine
     */
    hostname: string;
  }
}

export interface MachineListResponse {
  /**
   * A list of machines associated with the user
   */
  data: Array<MachineListResponse.Data>;
}

export namespace MachineListResponse {
  /**
   * Represents a a physical or virtual machine connected to the Nestri network..
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * Represents a machine running on the Nestri network, containing its identifying
     * information and metadata.
     */
    createdAt: string | number;

    /**
     * A unique identifier derived from the machine's Linux machine ID.
     */
    fingerprint: string;

    /**
     * The Linux hostname that identifies this machine
     */
    hostname: string;
  }
}

export interface MachineDeleteResponse {
  data: 'ok';
}

export declare namespace Machines {
  export {
    type MachineCreateResponse as MachineCreateResponse,
    type MachineRetrieveResponse as MachineRetrieveResponse,
    type MachineListResponse as MachineListResponse,
    type MachineDeleteResponse as MachineDeleteResponse,
  };
}
