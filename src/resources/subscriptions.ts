// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Subscriptions extends APIResource {
  /**
   * Create a subscription for the current user.
   */
  create(
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/subscriptions', { body, ...options });
  }

  /**
   * List the subscriptions associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SubscriptionListResponse> {
    return this._client.get('/subscriptions', options);
  }

  /**
   * Cancel a subscription for the current user.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(`/subscriptions/${id}`, options);
  }
}

export interface SubscriptionCreateResponse {
  data: 'ok';
}

export interface SubscriptionListResponse {
  /**
   * List of subscriptions.
   */
  data: Array<SubscriptionListResponse.Data>;
}

export namespace SubscriptionListResponse {
  /**
   * Subscription to a Nestri product.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * Frequency of the subscription.
     */
    frequency: 'fixed' | 'daily' | 'weekly' | 'monthly' | 'yearly';

    /**
     * Next billing date for the subscription.
     */
    next: string | number;

    /**
     * ID of the product being subscribed to.
     */
    productID: string;

    /**
     * Quantity of the subscription.
     */
    quantity: number;

    /**
     * Cancelled date for the subscription.
     */
    canceledAt?: string | number;
  }
}

export interface SubscriptionDeleteResponse {
  data: 'ok';
}

export interface SubscriptionCreateParams {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Frequency of the subscription.
   */
  frequency: 'fixed' | 'daily' | 'weekly' | 'monthly' | 'yearly';

  /**
   * Next billing date for the subscription.
   */
  next: string | number;

  /**
   * ID of the product being subscribed to.
   */
  productID: string;

  /**
   * Quantity of the subscription.
   */
  quantity: number;

  /**
   * Cancelled date for the subscription.
   */
  canceledAt?: string | number;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
