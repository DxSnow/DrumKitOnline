# DrumKitOnline
a website that you can play drum kit with your keyboard, mouse or your iphone. [Website here](https://dxsnow.github.io/DrumKitOnline/)

why this project? I'm trying to practice Vanilla Javascript without any framework to gain a thougher understanding of how things work.

This project is my updated version of one of WebBos's Javascript 30 projects. Original code is [here](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit). Here are some changes I did:
1. added click and touch feature, so it listens not only the keyboard event but also mouse touch and screen touch.
2. changed e.keyCode to e.key because the earlier is deprecating.
3. removed Array.from and used the Nodelist directly instead, since the return value of querySelectorAll is an iterable itself. This makes the code cleaner.
4. commented out: if (e.propertyName !== 'transform') return; because it does not change anything.
6. visual customization
