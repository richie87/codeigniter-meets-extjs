CodeIgniter meets ExtJS
==============

"CodeIgniter meets ExtJS" is a project, which CAN show you how to use CodeIgniter together with ExtJS. I followed the MVC (Model View Controller) pattern and i am sure, even for newcomers the structure is easy to understand. It is also easy and no problem to update the core files (CodeIgniter and ExtJS), without touching the application structure.

##Installation
To use this application, you have to extract all the files into one folder. For the user data (auth module) and example data (movies) you need to import the `ci_meets_extjs.sql` file into one of your database and it's important to change the DB Connect-Data at `application/backend/config/database.php`
Default login username is "admin" and "password" as password. You can change the login data in the users table. The password has to be saved as sha1 encoded string.

##Project Structure
* `application/` - This folder got all relevant CodeIgniter and ExtJS files, to controll the application
* `application/backend/` - App Folder of CodeIgniter
* `application/frontend/` - App Folder of ExtJS
* `resources/` - Here you got images and css files, but also extensions for ExtJS
* `system/` - In this directory you got the heart of this Project - The core files of CodeIgniter and ExtJS (untouched)

##Demo
A demo version is here available: http://github.richard-jaeger.net/codeigniter-meets-extjs/

##Credit goes to
* [EllisLab](http://ellislab.com/codeigniter)
* [Sencha](http://www.sencha.com/products/extjs/)
* [famfamfam](http://famfamfam.com/lab/icons/silk/)