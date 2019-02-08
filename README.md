## An attempt to reproduce [issue #436](https://github.com/prisma/graphqlgen/issues/436#); to be shared with team [`graphqlgen`](https://github.com/prisma/graphqlgen)

### Steps:

```
> npm run dev # keep server running, schema is introspected by graphql-code-generator to generate `types.d.ts.`
> npm run generate # use graphql-code-generator to generate `types.d.ts.`
> graphqlgen # should scaffold resolvers, throws error instead
```

### Error received in my environment:

```
G:\git_projs\bug_repro\graphqlgen>graphqlgen
Error occurred while reading schema: Syntax Error: Cannot parse the unexpected character ".".

GraphQL request (1:1)
1: ./src/test-schema.ts
   ^


G:\git_projs\bug_repro\graphqlgen>
```
