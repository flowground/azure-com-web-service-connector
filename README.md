# ![LOGO](logo.png) WebSite Management Client **flow**ground Connector

## Description

A generated **flow**ground connector for the WebSite Management Client API (version 2015-08-01).

Generated from: https://api.apis.guru/v2/specs/azure.com/web-service/2015-08-01/swagger.json<br/>
Generated at: 2019-05-07T17:39:27+03:00

## API Description

Use these APIs to manage Azure Websites resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://msdn.microsoft.com/en-us/library/azure/dn790557.aspx.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Gets publishing user

*Tags:* `Provider`

#### Input Parameters
* `api-version` - _required_ - API Version

### Updates publishing user

*Tags:* `Provider`

#### Input Parameters
* `api-version` - _required_ - API Version

### Gets the source controls available for Azure websites

*Tags:* `Provider`

#### Input Parameters
* `api-version` - _required_ - API Version

### Gets source control token

*Tags:* `Provider`

#### Input Parameters
* `sourceControlType` - _required_ - Type of source control
* `api-version` - _required_ - API Version

### Updates source control token

*Tags:* `Provider`

#### Input Parameters
* `sourceControlType` - _required_ - Type of source control
* `api-version` - _required_ - API Version

### Lists all domains in a subscription

*Tags:* `GlobalCertificateOrder`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Validate certificate purchase information

*Tags:* `GlobalCertificateOrder`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Checks if a domain is available for registration

*Tags:* `GlobalDomainRegistration`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists all domains in a subscription

*Tags:* `GlobalDomainRegistration`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Generates a single sign on request for domain management portal

*Tags:* `GlobalDomainRegistration`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists domain recommendations based on keywords

*Tags:* `GlobalDomainRegistration`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists all top level domains supported for registration

*Tags:* `TopLevelDomains`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets details of a top level domain

*Tags:* `TopLevelDomains`

#### Input Parameters
* `name` - _required_ - Name of the top level domain
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists legal agreements that user needs to accept before purchasing domain

*Tags:* `TopLevelDomains`

#### Input Parameters
* `name` - _required_ - Name of the top level domain
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Validates domain registration information

*Tags:* `GlobalDomainRegistration`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all certificates for a subscription

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Check if resource name is available

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all mobile services for a subscription

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets list of available geo regions

*Tags:* `Global`

#### Input Parameters
* `sku` - _optional_ - Filter only to regions that support this sku
* `linuxWorkersEnabled` - _optional_ - Filter only to regions that support linux workers
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all hostingEnvironments (App Service Environment) for a subscription

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Whether hosting environment name is available

*Tags:* `Global`

#### Input Parameters
* `name` - _required_ - Hosting environment name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Whether hosting environment name is available

*Tags:* `Global`

#### Input Parameters
* `name` - _required_ - Hosting environment name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all managed hosting environments for a subscription

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List premier add on offers

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets publishing credentials for the subscription owner

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates publishing credentials for the subscription owner

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a list of recommendations associated with the specified subscription.

*Tags:* `Recommendations`

#### Input Parameters
* `featured` - _optional_ - If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available
* `$filter` - _optional_ - Return only channels specified in the filter. Filter is specified by using OData syntax. Example: $filter=channels eq 'Api' or channel eq 'Notification'
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all App Service Plans for a subscription

*Tags:* `Global`

#### Input Parameters
* `detailed` - _optional_ - False to return a subset of App Service Plan properties, true to return all of the properties.
            Retrieval of all properties may increase the API latency.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all Web Apps for a subscription

*Tags:* `Global`

#### Input Parameters
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### GlobalResourceGroups_MoveResources

*Tags:* `GlobalResourceGroups`

#### Input Parameters
* `resourceGroupName` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get certificate orders in a resource group

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `certificateOrderName` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes the certificate associated with the certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `certificateOrderName` - _required_ - Certificate name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get certificate associated with the certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `certificateOrderName` - _required_ - Certificate name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `certificateOrderName` - _required_ - Certificate name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `certificateOrderName` - _required_ - Certificate name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete an existing certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get a certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create or update a certificate purchase order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create or update a certificate purchase order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Reissue an existing certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Renew an existing certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Resend certificate email

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate order name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieve the list of certificate actions

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate order name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieve email history

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate order name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Verify domain ownership for this certificate order

*Tags:* `CertificateOrders`

#### Input Parameters
* `resourceGroupName` - _required_ - Azure resource group name
* `name` - _required_ - Certificate order name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists domains under a resource group

*Tags:* `Domains`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a domain

*Tags:* `Domains`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `domainName` - _required_ - Name of the domain
* `forceHardDeleteDomain` - _optional_ - If true then the domain will be deleted immediately instead of after 24 hours
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets details of a domain

*Tags:* `Domains`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `domainName` - _required_ - Name of the domain
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a domain

*Tags:* `Domains`

#### Input Parameters
* `resourceGroupName` - _required_ - &gt;Name of the resource group
* `domainName` - _required_ - Name of the domain
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a domain

*Tags:* `Domains`

#### Input Parameters
* `resourceGroupName` - _required_ - &gt;Name of the resource group
* `domainName` - _required_ - Name of the domain
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves the latest status of a domain purchase operation

*Tags:* `Domains`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `domainName` - _required_ - Name of the domain
* `operationId` - _required_ - Domain purchase operation Id
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Returns usage records for specified subscription and resource groups

*Tags:* `Usage`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `environmentName` - _required_ - Environment name
* `lastId` - _required_ - Last marker that was returned from the batch
* `batchSize` - _required_ - size of the batch to be returned.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get certificates for a subscription in the specified resource group.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete a certificate by name in a specified subscription and resourcegroup.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate to be deleted.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get a certificate by certificate name for a subscription in the specified resource group.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates or modifies an existing certificate.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates or modifies an existing certificate.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all mobile services in a resource group.

*Tags:* `ClassicMobileServices`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete a mobile service.

*Tags:* `ClassicMobileServices`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of mobile service
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get a mobile service.

*Tags:* `ClassicMobileServices`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of mobile service
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the certificate signing requests for a subscription in the specified resource group

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete the certificate signing request.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate signing request.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a certificate signing request by certificate name for a subscription in the specified resource group

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates or modifies an existing certificate signing request.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates or modifies an existing certificate signing request.

*Tags:* `Certificates`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the certificate.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets deleted web apps in subscription

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `propertiesToInclude` - _optional_ - Additional web app properties included in the response
* `includeSiteTypes` - _optional_ - Types of apps included in the response
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all hostingEnvironments (App Service Environments) in a resource group.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `forceDelete` - _optional_ - Delete even if the hostingEnvironment (App Service Environment) contains resources
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get properties of hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create or update a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get used, available, and total worker capacity for hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get IP addresses assigned to the hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get diagnostic information for hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get diagnostic information for hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `diagnosticsName` - _required_ - Name of the diagnostics
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get global metric definitions of hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get global metrics of hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `details` - _optional_ - Include instance details
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all multi role pools

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get properties of a multiRole pool.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create or update a multiRole pool.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metric definitions for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `instance` - _required_ - Name of instance in the multiRole pool&gt;
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metrics for a specific instance of a multiRole pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `instance` - _required_ - Name of instance in the multiRole pool
* `details` - _optional_ - Include instance details
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metric definitions for a multiRole pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metrics for a multiRole pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `startTime` - _optional_ - Beginning time of metrics query
* `endTime` - _optional_ - End time of metrics query
* `timeGrain` - _optional_ - Time granularity of metrics query
* `details` - _optional_ - Include instance details
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get available skus for scaling a multiRole pool.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get usages for a multiRole pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List all currently running operations on the hostingEnvironment (App Service Environment)

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get status of an operation on a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `operationId` - _required_ - operation identifier GUID
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Reboots all machines in a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Resumes the hostingEnvironment.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all sites on the hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `propertiesToInclude` - _optional_ - Comma separated list of site properties to include
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Suspends the hostingEnvironment.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get global usages of hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all serverfarms (App Service Plans) on the hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all worker pools

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get properties of a worker pool.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create or update a worker pool.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metric definitions for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `instance` - _required_ - Name of instance in the worker pool
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metrics for a specific instance of a worker pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `instance` - _required_ - Name of instance in the worker pool
* `details` - _optional_ - Include instance details
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metric definitions for a worker pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get metrics for a worker pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `details` - _optional_ - Include instance details
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get available skus for scaling a worker pool.

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get usages for a worker pool of a hostingEnvironment (App Service Environment).

*Tags:* `HostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of hostingEnvironment (App Service Environment)
* `workerPoolName` - _required_ - Name of worker pool
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all managed hosting environments in a resource group.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete a managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `forceDelete` - _optional_ - Delete even if the managed hosting environment contains resources
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get properties of a managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create or update a managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get list of ip addresses assigned to a managed hosting environment

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get status of an operation on a managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `operationId` - _required_ - operation identifier GUID
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all serverfarms (App Service Plans) on the managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all sites on the managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `propertiesToInclude` - _optional_ - Comma separated list of site properties to include
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get all serverfarms (App Service Plans) on the managed hosting environment.

*Tags:* `ManagedHostingEnvironments`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of managed hosting environment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets collection of App Service Plans in a resource group for a given subscription.

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets specified App Service Plan in a resource group

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates or updates an App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `allowPendingState` - _optional_ - OBSOLETE: If true, allow pending state for App Service Plan
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List of metrics that can be queried for an App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Queries for App Service Plan metrics

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `details` - _optional_ - If true, metrics are broken down per App Service Plan instance
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a server farm operation

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of server farm
* `operationId` - _required_ - Id of Server farm operation"&gt;
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Restarts web apps in a specified App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `softRestart` - _optional_ - Soft restart applies the configuration settings and restarts the apps if necessary. Hard restart always restarts and reprovisions the apps
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets list of Apps associated with an App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `$skipToken` - _optional_ - Skip to of web apps in a list. If specified, the resulting list will contain web apps starting from (including) the skipToken. Else, the resulting list contains web apps from the start of the list
* `$filter` - _optional_ - Supported filter: $filter=state eq running. Returns only web apps that are currently running
* `$top` - _optional_ - List page size. If specified, results are paged.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets list of VNets associated with App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a vnet associated with an App Service Plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `vnetName` - _required_ - Name of virtual network
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the vnet gateway.

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of the App Service Plan
* `vnetName` - _required_ - Name of the virtual network
* `gatewayName` - _required_ - Name of the gateway. Only the 'primary' gateway is supported.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the vnet gateway

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group
* `name` - _required_ - The name of the App Service Plan
* `vnetName` - _required_ - The name of the virtual network
* `gatewayName` - _required_ - The name of the gateway. Only 'primary' is supported.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a list of all routes associated with a vnet, in an app service plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `vnetName` - _required_ - Name of virtual network
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes an existing route for a vnet in an app service plan.

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `vnetName` - _required_ - Name of virtual network
* `routeName` - _required_ - Name of the virtual network route
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a specific route associated with a vnet, in an app service plan

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `vnetName` - _required_ - Name of virtual network
* `routeName` - _required_ - Name of the virtual network route
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new route or updates an existing route for a vnet in an app service plan.

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `vnetName` - _required_ - Name of virtual network
* `routeName` - _required_ - Name of the virtual network route
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new route or updates an existing route for a vnet in an app service plan.

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of App Service Plan
* `vnetName` - _required_ - Name of virtual network
* `routeName` - _required_ - Name of the virtual network route
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Submit a reboot request for a worker machine in the specified server farm

*Tags:* `ServerFarms`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of server farm
* `workerName` - _required_ - Name of worker machine, typically starts with RD
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web apps for a subscription in the specified resource group

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `propertiesToInclude` - _optional_ - Additional web app properties included in the response
* `includeSiteTypes` - _optional_ - Types of apps included in the response
* `includeSlots` - _optional_ - Whether or not to include deployments slots in results
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `deleteMetrics` - _optional_ - If true, web app metrics are also deleted
* `deleteEmptyServerFarm` - _optional_ - If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted
* `skipDnsRegistration` - _optional_ - If true, DNS registration is skipped
* `deleteAllSlots` - _optional_ - If true, all slots associated with web app are also deleted
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get details of a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `propertiesToInclude` - _optional_ - Additional web app properties included in the response
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new web app or modifies an existing web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the web app
* `skipDnsRegistration` - _optional_ - If true web app hostname is not registered with DNS on creation. This parameter is
            only used for app creation
* `skipCustomDomainVerification` - _optional_ - If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
* `forceDnsRegistration` - _optional_ - If true, web app hostname is force registered with DNS
* `ttlInSeconds` - _optional_ - Time to live in seconds for web app's default domain name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Applies the configuration settings from the target slot onto the current slot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates web app backup

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists all available backups for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Discovers existing web app backups that can be restored

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a backup from Azure Storage

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets status of a web app backup that may be in progress.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Restores a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup to restore
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the application settings of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the application settings of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the Authentication / Authorization settings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the Authentication / Authorization settings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates backup configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the backup configuration for a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the connection strings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the connection strings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web app logs configuration

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the meta data for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the meta data for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web app meta data.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web app publishing credentials

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the names of application settings and connection string that remain with the slot during swap operation

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the names of application settings and connection string that remain with the slot during swap operation

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the configuration of the web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List deployments

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create a deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get web app hostname bindings

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a host name binding

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `hostName` - _required_ - Name of host
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get web app binding for a hostname

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `hostName` - _required_ - Name of host
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a web app hostname binding

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `hostName` - _required_ - Name of host
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves all BizTalk Hybrid Connections associated with this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Removes the association to a BizTalk Hybrid Connection, identified by its entity name.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a BizTalk Hybrid Connection identified by its entity name.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all instance of a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List deployments

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create a deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new web app or modifies an existing web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets metric definitions for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets metrics for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `details` - _optional_ - If true, metric details are included in response
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a view of all network features in use on this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `view` - _required_ - The type of view. This can either be "summary" or "detailed".
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Generates new random app publishing password

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the operation for a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `operationId` - _required_ - Id of an operation
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_ListSitePremierAddOns

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_DeleteSitePremierAddOn

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `premierAddOnName` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_GetSitePremierAddOn

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `premierAddOnName` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_AddSitePremierAddOn

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `premierAddOnName` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the publishing profile for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Recovers a deleted web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Restarts web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `softRestart` - _optional_ - Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app
* `synchronous` - _optional_ - If true then the API will block until the app has been restarted
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all the slots for a web apps

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `propertiesToInclude` - _optional_ - List of app properties to include in the response
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `deleteMetrics` - _optional_ - If true, web app metrics are also deleted
* `deleteEmptyServerFarm` - _optional_ - If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted
* `skipDnsRegistration` - _optional_ - If true, DNS registration is skipped
* `deleteAllSlots` - _optional_ - If true, all slots associated with web app are also deleted
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get details of a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `propertiesToInclude` - _optional_ - Additional web app properties included in the response
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new web app or modifies an existing web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `skipDnsRegistration` - _optional_ - If true web app hostname is not registered with DNS on creation. This parameter is
            only used for app creation
* `skipCustomDomainVerification` - _optional_ - If true, custom (non *.azurewebsites.net) domains associated with web app are not verified.
* `forceDnsRegistration` - _optional_ - If true, web app hostname is force registered with DNS
* `ttlInSeconds` - _optional_ - Time to live in seconds for web app's default domain name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Applies the configuration settings from the target slot onto the current slot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of the source slot. Settings from the target slot will be applied onto this slot
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates web app backup

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Lists all available backups for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Discovers existing web app backups that can be restored

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a backup from Azure Storage

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets status of a web app backup that may be in progress.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Restores a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `backupId` - _required_ - Id of backup to restore
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the application settings of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the application settings of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the Authentication / Authorization settings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the Authentication / Authorization settings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates backup configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the backup configuration for a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the connection strings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the connection strings associated with web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web app logs configuration

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the meta data for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the meta data for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web app meta data.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the web app publishing credentials

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the configuration of the web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List deployments

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create a deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get web app hostname bindings

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Deletes a host name binding

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `hostName` - _required_ - Name of host
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get web app binding for a hostname

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `hostName` - _required_ - Name of host
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a web app hostname binding

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `hostName` - _required_ - Name of host
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves all BizTalk Hybrid Connections associated with this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `slot` - _required_ - The name of the slot for the web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Removes the association to a BizTalk Hybrid Connection, identified by its entity name.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `slot` - _required_ - The name of the slot for the web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a BizTalk Hybrid Connection identified by its entity name.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `slot` - _required_ - The name of the slot for the web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `slot` - _required_ - The name of the slot for the web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `entityName` - _required_ - The name by which the Hybrid Connection is identified
* `slot` - _required_ - The name of the slot for the web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets all instance of a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### List deployments

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Create a deployment

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `id` - _required_ - Id of the deployment
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `instanceId` - _required_ - Id of web app instance
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Creates a new web app or modifies an existing web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of the resource group
* `name` - _required_ - Name of the web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets metric definitions for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets metrics for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `details` - _optional_ - If true, metric details are included in response
* `$filter` - _optional_ - Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a view of all network features in use on this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `view` - _required_ - The type of view. This can either be "summary" or "detailed".
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Generates new random app publishing password

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the operation for a web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `operationId` - _required_ - Id of an operation
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_ListSitePremierAddOnsSlot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `slot` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_DeleteSitePremierAddOnSlot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `premierAddOnName` - _required_
* `slot` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_GetSitePremierAddOnSlot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `premierAddOnName` - _required_
* `slot` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_AddSitePremierAddOnSlot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `premierAddOnName` - _required_
* `slot` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the publishing profile for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Recovers a deleted web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Restarts web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `softRestart` - _optional_ - Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app
* `synchronous` - _optional_ - If true then the API will block until the app has been restarted
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the difference in configuration settings between two web app slots

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of the source slot
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Swaps web app slots

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of source slot for the swap
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Returns all Snapshots to the user.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Webspace
* `name` - _required_ - Website Name
* `slot` - _required_ - Website Slot
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Starts web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Stops web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_SyncSiteRepositorySlot

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `slot` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the quota usage numbers for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `slot` - _required_ - Name of web app slot. If not specified then will default to production slot.
* `$filter` - _optional_ - Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a list of all Virtual Network Connections associated with this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Removes the specified Virtual Network Connection association from this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a specific Virtual Network Connection associated with this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Adds a Virtual Network Connection or updates it's properties.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Adds a Virtual Network Connection or updates it's properties.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a Virtual Network connection gateway associated with this web app and virtual network.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `gatewayName` - _required_ - The name of the gateway. The only gateway that exists presently is "primary"
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the Virtual Network Gateway.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `gatewayName` - _required_ - The name of the gateway. The only gateway that exists presently is "primary"
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the Virtual Network Gateway.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `gatewayName` - _required_ - The name of the gateway. The only gateway that exists presently is "primary"
* `slot` - _required_ - The name of the slot for this web app.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the difference in configuration settings between two web app slots

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Swaps web app slots

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Returns all Snapshots to the user.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Webspace
* `name` - _required_ - Website Name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Delete source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Get the source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Update the source control configuration of web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Starts web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Stops web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Sites_SyncSiteRepository

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_
* `name` - _required_
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the quota usage numbers for web app

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - Name of resource group
* `name` - _required_ - Name of web app
* `$filter` - _optional_ - Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'.
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a list of all Virtual Network Connections associated with this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Removes the specified Virtual Network Connection association from this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a specific Virtual Network Connection associated with this web app.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Adds a Virtual Network Connection or updates it's properties.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Adds a Virtual Network Connection or updates it's properties.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Retrieves a Virtual Network connection gateway associated with this web app and virtual network.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `gatewayName` - _required_ - The name of the gateway. The only gateway that exists presently is "primary"
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the Virtual Network Gateway.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `gatewayName` - _required_ - The name of the gateway. The only gateway that exists presently is "primary"
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Updates the Virtual Network Gateway.

*Tags:* `Sites`

#### Input Parameters
* `resourceGroupName` - _required_ - The resource group name
* `name` - _required_ - The name of the web app
* `vnetName` - _required_ - The name of the Virtual Network
* `gatewayName` - _required_ - The name of the gateway. The only gateway that exists presently is "primary"
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the list of past recommendations optionally specified by the time range.

*Tags:* `Recommendations`

#### Input Parameters
* `resourceGroupName` - _required_ - Resource group name
* `siteName` - _required_ - Site name
* `startTime` - _optional_ - The start time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'
* `endTime` - _optional_ - The end time of a time range to query, e.g. $filter=startTime eq '2015-01-01T00:00:00Z' and endTime eq '2015-01-02T00:00:00Z'
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets a list of recommendations associated with the specified web site.

*Tags:* `Recommendations`

#### Input Parameters
* `resourceGroupName` - _required_ - Resource group name
* `siteName` - _required_ - Site name
* `featured` - _optional_ - If set, this API returns only the most critical recommendation among the others. Otherwise this API returns all recommendations available
* `siteSku` - _optional_ - The name of site SKU.
* `numSlots` - _optional_ - The number of site slots associated to the site
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

### Gets the detailed properties of the recommendation object for the specified web site.

*Tags:* `Recommendations`

#### Input Parameters
* `resourceGroupName` - _required_ - Resource group name
* `siteName` - _required_ - Site name
* `name` - _required_ - Recommendation rule name
* `subscriptionId` - _required_ - Subscription Id
* `api-version` - _required_ - API Version

## License

**flow**ground :- Telekom iPaaS / azure-com-web-service-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
