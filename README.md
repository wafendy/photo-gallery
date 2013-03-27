Photo Gallery
=============

Simple Photo Gallery using the following tech:

* **Sinatra** - https://github.com/sinatra/sinatra
* **Haml** - http://haml.info/
* **mini_magick** - https://github.com/minimagick/minimagick
* **JQuery** - https://github.com/jquery/jquery
* **Twitter Bootstrap** - http://twitter.github.com/bootstrap/
* **Wookmark** - https://github.com/GBKS/Wookmark-jQuery

Getting Started
===============
Simply create <code>galleries</code> folder in <code>public</code> folder

      mkdir ~/yourdomain/public/galleries

Group up the images in a folder, you can think about a folder as an album which is a collection of images.
For example you can have album collections of your wedding, engagement, bridal, event, family, kid, etc.

    ~/yourdomain/public/galleries
    ~/yourdomain/public/galleries/wedding
    ~/yourdomain/public/galleries/engagement
    ~/yourdomain/public/galleries/bridal
    ~/yourdomain/public/galleries/event
    ~/yourdomain/public/galleries/family
    ~/yourdomain/public/galleries/kid
    
Then you need to add a <code>info.yaml</code> file in each folder/album before uploading. Here is a sample content of
<code>info.yaml</code>:

    ---
    title: Album1
    desc: Add description here



Finally, use your favorite FTP client to upload the folder(s) into <code>galleries</code> directory. 


Adding New Image
================

To add a new image into an album, simply upload the image into a desired album. Thumbnails will be automatically
generated for new images. When you add a batch of images, it may take sometime for the app to generate the
thumbnails. Unfortunately there is no feedback provided when this is happening.

ToDo
====

* Auto generate default **info.yaml** when not available.
* Show progress bar when generating thumbnails.
* Support overlay when mouse over on images.
* Show total number of images in an album
* Show description on album view.


Live Demo
=========
http://william.afendy.com


Notes
=====
Use below command to remove all thumbnails during development

    find . -name *_tn.jpg | xargs rm
    
    
License
=======
Free. BSD License.
