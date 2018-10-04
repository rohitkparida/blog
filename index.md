---
layout: home
title: Home
---

<ul class="myposts">
{% for post in site.posts limit: 10 %}
    <a href="{{ site.url }}{{ post.url }}">
        <li class="card">
        <div class="sub-title">
        <p>{{ post.title}}</p>
        </div>
        <div class="thumbnail">
        <img src="{{ site.url }}/img/{{ post.image[0] }}">
        </div>
        <div class="info">
        <span id="postDate">{{ post.date | date: "%b %-d, %Y"}}&nbsp; • </span>
        <span id="postCount">{{ post.content | number_of_words | divided_by: 265 | add: }} min read</span>
        <!-- <a href="{{ site.url }}/tags.html/#{{ post.tags[0] }}" class="tag">{{ post.tags[0] }}</a> -->
        </div>
        </li>
    </a>
{% endfor %}
</ul>
