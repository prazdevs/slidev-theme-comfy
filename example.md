---
theme: ./
layout: cover
---

Creating nice slides with Slidev

::subtitle::

or how to look like you know what you're doing...


---
layout: intro
image: /sacha.png
---

# I'm Sacha

- <img src="/zenika.png" class="inline-block mr-1 -mt-1" width="28.5" /> Frontend consultant @ <a href="https://zenika.com">Zenika</a>
- <noto-v1-flag-for-flag-france class="mr-1" /> I'm from France
- <noto-guitar class="mr-1" /> I'm a bass player
- <noto-artist-palette class="mr-1" /> I'm also a cosplayer
- <noto-smiling-cat-with-heart-eyes class="mr-1" /> And I love open source !

---
layout: default
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

> blockquote ?

### Keyboard Shortcuts

|   fds  |  fds   |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | **next slide** |

---
layout: end
---
Thanks!

::socials::

<social>
  <template #icon><openmoji-mastodon /></template>
  <a href="https://praz.red/mastodon">praz.red/mastodon</a>
</social>
<social>
  <template #icon><openmoji-github /></template>
  <a href="https://praz.red/github">praz.red/github</a>
</social>
<social>
  <template #icon><openmoji-twitter /></template>
  <a href="https://praz.red/twitter">praz.red/twitter</a>
</social>

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
