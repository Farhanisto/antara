import graphene
from graphene_django import DjangoObjectType
from .models import Patient


class PatientType(DjangoObjectType):
    class Meta:
        model = Patient


class Query(graphene.ObjectType):
    patient = graphene.List(PatientType)
    # condition_by_id = graphene.

    def resolve_patient(self, info):
        return Patient.objects.all()


class CreatePatient(graphene.Mutation):
    patient = graphene.Field(PatientType)

    class Arguments:
        # id = graphene.ID()
        name = graphene.String()
        age = graphene.Int()
        avatat = graphene.String()
        contact = graphene.Int()

    def mutate(self, info, name, age, avatat, contact):
        user = info.context.user

        if (user.is_anonymous):
            raise Exception('login to add patients conditions')
        patient = Patient(name=name, age=age,
                          avatat=avatat, contact=contact)
        print('-------------------------', patient)
        patient.save()
        return CreatePatient(patient=patient)


class Mutation(graphene.ObjectType):
    create_Patient = CreatePatient.Field()
    # update_Patient = UpdatePatient.Field()
    # delete_Patient = DeletePatient.Field()
