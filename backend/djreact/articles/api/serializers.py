from rest_framework import serializers

from articles.models import Article


class ArticleSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content')
