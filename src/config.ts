import typescriptConfig from 'graphql-codegen-typescript-template';

import * as components from './components.handlebars';
import * as hoc from './hoc.handlebars';
import { gql } from './helpers/gql';
import { eq, isQuery, isMutation } from './helpers/eq';
import { toLowerCase } from './helpers/to-lower-case';

// tslint:disable:no-string-literal
typescriptConfig.templates['documents'] += components;
typescriptConfig.templates['documents'] += hoc;
typescriptConfig.customHelpers.gql = gql;
typescriptConfig.customHelpers.eq = eq;
typescriptConfig.customHelpers.isQuery = isQuery;
typescriptConfig.customHelpers.isMutation = isMutation;
typescriptConfig.customHelpers.toLowerCase = toLowerCase;

export { typescriptConfig as config };
