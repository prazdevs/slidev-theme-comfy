---
theme: ./
title: Comfy theme preview
info: |
  ## slidev-theme-comfy
  A comfortable and readable Slidev theme.

  Made by [praz](https://praz.dev).
---

Creating nice slides with Slidev

::subtitle::

or how to look like you know what you're doing...

---
layout: intro
image: /intro.jpg
---

# I'm Comfy

- <img src="/slidev.svg" class="inline-block mr-1 -mt-1" width="31" /> Delightful theme @ <a href="https://sli.dev">Slidev</a>
- <noto-v1-flag-for-flag-france class="mr-1" /> I'm made in France
- <noto-artist-palette class="mr-1" /> I'm very colourful
- <noto-smiling-cat-with-heart-eyes class="mr-1" /> And I am open source !

---
layout: center
---

# Center layout

Anything in this layout will be 100% centered.

---

# Default layout

This is the default layout.

<br>

> and this is a blockquote

<br>

#### Navigation shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | **next slide** |

---
layout: default
---

# Some code

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
Hello
```ts
function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: two-cols-header
---

# Two columns layout

::left::

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in nisi leo. Suspendisse a efficitur augue. Nam consectetur aliquet lectus, quis ultricies massa fermentum eu. Aenean ut auctor nibh, in euismod quam. Ut tincidunt iaculis justo lacinia dapibus. Etiam vitae sagittis tortor. 

::right::

Phasellus tristique non augue iaculis fermentum. Fusce condimentum commodo diam nec viverra. Curabitur a est imperdiet, aliquet orci at, sodales justo. Donec pretium est quam, ullamcorper dictum lectus porta vel. Suspendisse vulputate nulla in mi congue, nec facilisis turpis tincidunt. 

---
layout: fact
---

# And that's it!

I think that's enough ?

---
layout: thanks
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
