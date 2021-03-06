# Generated by Django 2.2.17 on 2020-12-16 15:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_event_events"),
    ]

    operations = [
        migrations.CreateModel(
            name="Location",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("address", models.CharField(max_length=256)),
                ("city", models.CharField(max_length=256)),
                ("state", models.CharField(max_length=256)),
            ],
        ),
        migrations.AlterField(
            model_name="events",
            name="location",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="events_location",
                to="home.Location",
            ),
        ),
    ]
