// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Audit} from './audits';
import {Compliance} from './compliance';
import {AdminConfig} from './config';
import {MixedUnlinkedGroup} from './groups';
import {PluginRedux, PluginStatusRedux} from './plugins';
import {SamlCertificateStatus, SamlMetadataResponse} from './saml';
import {Team} from './teams';
import {UserAccessToken, UserProfile} from './users';
import {Dictionary, RelationOneToOne} from './utilities';

export type AdminState = {
    logs: Array<string>;
    audits: Dictionary<Audit>;
    config: Partial<AdminConfig>;
    environmentConfig: Dictionary<any>;
    complianceReports: Dictionary<Compliance>;
    ldapGroups: Dictionary<MixedUnlinkedGroup>;
    ldapGroupsCount: number;
    userAccessTokens: Dictionary<UserAccessToken>;
    clusterInfo: ClusterInfo[];
    samlCertStatus?: SamlCertificateStatus;
    analytics?: Dictionary<number | AnalyticsRow[]>;
    teamAnalytics?: RelationOneToOne<Team, Dictionary<number | AnalyticsRow[]>>;
    userAccessTokensForUser?: RelationOneToOne<UserProfile, Dictionary<UserAccessToken>>;
    plugins?: Dictionary<PluginRedux>;
    pluginStatuses?: Dictionary<PluginStatusRedux>;
    samlMetadataResponse?: SamlMetadataResponse;
};

export type ClusterInfo = {
    id: string;
    version: string;
    config_hash: string;
    ipaddress: string;
    hostname: string;
};

export type AnalyticsRow = {
    name: string;
    value: number;
};
