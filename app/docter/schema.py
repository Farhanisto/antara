from django.contrib.auth import get_user_model

import graphene
from graphene_django import DjangoObjectType


class DoctorType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    Doctor = graphene.Field(DoctorType, id=graphene.Int(required=True))
    me = graphene.Field(DoctorType)

    def resolve_Doctor(self, info, id):
        return get_user_model().objects.get(id=id)

    def resolve_me(self, info):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('not logged in')
        return user


class CreateDoctor(graphene.Mutation):
    Doctor = graphene.Field(DoctorType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, username, password, email):
        Doctor = get_user_model()(username=username, email=email)
        Doctor.set_password(password)
        Doctor.save()
        return CreateDoctor(Doctor=Doctor)


class Mutation(graphene.ObjectType):
    create_Doctor = CreateDoctor.Field()
