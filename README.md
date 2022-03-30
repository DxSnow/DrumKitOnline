# DrumKitOnline
a website that you can play drum kit with your keyboard. [play here](https://dxsnow.github.io/DrumKitOnline/)

why this project? I'm trying to practice Vanilla Javascript without any framework to gain a thougher understanding of how things work,

This project is my updated version of one of WebBos's Javascript 30 projects. Original code is [here](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit). Here are some changes I did:
1. changed e.keyCode to e.key because the earlier is deprecating.
2. removed Array.from and used the Nodelist directly instead, since the return value of querySelectorAll is an iterable itself. This makes the code cleaner.
3. commented out: if (e.propertyName !== 'transform') return; 
4. refreshed the look
