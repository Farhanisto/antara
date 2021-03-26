import graphene
import graphql_jwt
import condition.schema
import docter.schema
import patient.schema


class Query(patient.schema.Query, docter.schema.Query, condition.schema.Query, graphene.ObjectType):
    pass


class Mutation(patient.schema.Mutation, docter.schema.Mutation, condition.schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
