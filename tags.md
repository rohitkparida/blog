---
layout: home
title: Tag
---

{% for tag in site.tags %}
<div class="card">
<span id="{{ tag[0] }}">{{ tag[0] | capitalize}}</span>
</div>
<ul>
 {% for post in site.posts %}
	 {% if post.tags contains tag[0] %}
        <a href="{{ site.url }}{{ post.url }}">
			<li class="card">
			<div class="sub-title">
			<p>{{ post.title}}</p>
			</div>
			<img class="thumbnail" src="{{ site.url }}/img/{{ post.image[0] }}">
			<div class="info">
	        <span class="postDate">{{ post.date | date: "%b %-d, %Y"}}&nbsp; • </span>
	        <span id="postCount">{{ post.content | number_of_words | divided_by: 265 | add: }} min read</span>
	        </div>
	        </li>
        </a>
	 {% endif %}
 {% endfor %}
</ul>
{% endfor %}
