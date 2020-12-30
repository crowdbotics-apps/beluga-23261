# Generated by Django 2.2.17 on 2020-12-30 16:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20201216_1537'),
    ]

    operations = [
        migrations.CreateModel(
            name='Turkey',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='turkey_location', to='home.Location')),
            ],
        ),
    ]
