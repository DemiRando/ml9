// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas

import category from './category'
import news from './news'
import gauntlet from './gauntlet'
import squads from './squads'
import players from './players'
import gauntlet7 from './gauntlet7'
import g7Squads from './g7Squads'
import g7Tiers from './g7Tiers'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
  
    
    category,
    news,
    gauntlet,
    squads,
    players,
    gauntlet7,
    g7Squads,
    g7Tiers,
  
  ]),
})
