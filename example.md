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
hello: I'm Sacha
---
- <img src="/zenika.png" class="inline-block mr-1 -mt-1" width="28.5" /> Frontend Consultant @ <a href="https://zenika.com" class="underline decoration-primary decoration-2">Zenika</a>
- <noto-v1-flag-for-flag-france class="mr-1" /> I'm from France
- <noto-guitar class="mr-1" /> I'm also a bass player
- <noto-smiling-cat-with-heart-eyes class="mr-1" /> And I love open source !

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

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
