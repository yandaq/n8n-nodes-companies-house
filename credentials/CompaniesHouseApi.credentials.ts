import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CompaniesHouseApi implements ICredentialType {
	name = 'companiesHouseApi';
	displayName = 'Companies House API';
	documentationUrl = 'https://developer.company-information.service.gov.uk/';
	type = 'http' as const; // ✅ Tells n8n this is an HTTP auth credential
	defaultAuthentication = 'basicAuth' as const; // ✅ Tells n8n to use Basic Auth

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'user',
			type: 'string' as const,
			default: '',
			required: true,
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string' as const,
			default: '',
			required: false,
			typeOptions: {
				password: true,
			},
		},
	];
}
