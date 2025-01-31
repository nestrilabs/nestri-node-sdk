// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Tasks extends APIResource {
  /**
   * Create a task
   */
  create(options?: Core.RequestOptions): Core.APIPromise<TaskCreateResponse> {
    return this._client.post('/tasks', options);
  }

  /**
   * Get a task by its id
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskRetrieveResponse> {
    return this._client.get(`/tasks/${id}`, options);
  }

  /**
   * Updates the metadata about a task by querying remote task
   */
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskUpdateResponse> {
    return this._client.put(`/tasks/${id}`, options);
  }

  /**
   * List all tasks by this user
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TaskListResponse> {
    return this._client.get('/tasks', options);
  }

  /**
   * Stop a running task by its id
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskDeleteResponse> {
    return this._client.delete(`/tasks/${id}`, options);
  }

  /**
   * Get a task by its id
   */
  session(id: string, options?: Core.RequestOptions): Core.APIPromise<TaskSessionResponse> {
    return this._client.get(`/tasks/${id}/session`, options);
  }
}

export interface TaskCreateResponse {
  /**
   * The id of the task created
   */
  data: string;
}

export interface TaskRetrieveResponse {
  /**
   * Subscription to a Nestri product.
   */
  data: TaskRetrieveResponse.Data;
}

export namespace TaskRetrieveResponse {
  /**
   * Subscription to a Nestri product.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The polar.sh checkout id
     */
    checkoutID: string;

    /**
     * Cancelled date for the subscription.
     */
    canceledAt?: string | number;
  }
}

export interface TaskUpdateResponse {
  /**
   * Subscription to a Nestri product.
   */
  data: TaskUpdateResponse.Data;
}

export namespace TaskUpdateResponse {
  /**
   * Subscription to a Nestri product.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The polar.sh checkout id
     */
    checkoutID: string;

    /**
     * Cancelled date for the subscription.
     */
    canceledAt?: string | number;
  }
}

export interface TaskListResponse {
  /**
   * Subscription to a Nestri product.
   */
  data: TaskListResponse.Data;
}

export namespace TaskListResponse {
  /**
   * Subscription to a Nestri product.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * The polar.sh checkout id
     */
    checkoutID: string;

    /**
     * Cancelled date for the subscription.
     */
    canceledAt?: string | number;
  }
}

export interface TaskDeleteResponse {
  data: 'ok';
}

export interface TaskSessionResponse {
  /**
   * Represents a single game play session, tracking its lifetime and accessibility
   * settings.
   */
  data: TaskSessionResponse.Data;
}

export namespace TaskSessionResponse {
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

export declare namespace Tasks {
  export {
    type TaskCreateResponse as TaskCreateResponse,
    type TaskRetrieveResponse as TaskRetrieveResponse,
    type TaskUpdateResponse as TaskUpdateResponse,
    type TaskListResponse as TaskListResponse,
    type TaskDeleteResponse as TaskDeleteResponse,
    type TaskSessionResponse as TaskSessionResponse,
  };
}
