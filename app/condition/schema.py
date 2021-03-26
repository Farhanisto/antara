import graphene
from graphene_django import DjangoObjectType
from .models import Condition
from patient.models import Patient


class ConditionType(DjangoObjectType):
    class Meta:
        model = Condition


class Query(graphene.ObjectType):
    condition = graphene.List(ConditionType)
    # condition_by_id = graphene.

    def resolve_condition(self, info):
        return Condition.objects.all()


class CreateCondition(graphene.Mutation):
    condition = graphene.Field(ConditionType, patient=graphene.ID())

    class Arguments:
        # id = graphene.ID()
        name = graphene.String()
        severity = graphene.Int()
        end_date = graphene.Date()
        patient = graphene.Int()

    def mutate(self, info, name, severity, end_date, patient):
        user = info.context.user
        patient = Patient.objects.filter(id=patient)
        if not patient:
            raise Exception('Create patient first')
        if (user.is_anonymous):
            raise Exception('login to add patients conditions')
        # title = kwargs.get('name')
        # description = kwargs.get('severity')
        # uri = kwargs.get('end_date')
        condition = Condition(name=name, severity=severity,
                              end_date=end_date, patient=patient)
        print('-------------------------', condition)
        condition.save()
        return CreateCondition(condition=condition)


class Mutation(graphene.ObjectType):
    create_condition = CreateCondition.Field()
    # update_condition = UpdateCondition.Field()
    # delete_condition = DeleteCondition.Field()
