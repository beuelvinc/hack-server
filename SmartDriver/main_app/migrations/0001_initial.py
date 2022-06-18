# Generated by Django 4.0.5 on 2022-06-18 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CarData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('timestamp', models.BigIntegerField(blank=True, null=True)),
                ('x', models.DecimalField(blank=True, decimal_places=17, max_digits=20, null=True)),
                ('y', models.DecimalField(blank=True, decimal_places=17, max_digits=20, null=True)),
                ('z', models.DecimalField(blank=True, decimal_places=17, max_digits=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserBehavior',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(blank=True, null=True)),
                ('loyality', models.IntegerField(blank=True, null=True)),
                ('drifting_percentage', models.IntegerField(blank=True, null=True)),
                ('accelerating_percentage', models.IntegerField(blank=True, null=True)),
                ('probability_to_crash', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
