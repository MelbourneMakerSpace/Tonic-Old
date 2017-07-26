1. Install a WAMP or LAMP stack such as what you would find at [https://bitnami.com/stack/lamp](https://bitnami.com/stack/lamp) for Linux or [https://bitnami.com/stack/wamp](https://bitnami.com/stack/wamp) for Windows

2. Configure the database

    1. Create a MySql Database called Tonic using a tool such as phpMyAdmin or mySQL Workbench.  phpMyAdmin will have been installed by the Bitnami installer.  mySQL Workbench is available at [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

    2. Run the devdb.sql file with MySQL Workbench or Import the file with phpMyAdmin which will create the database structure.

3. Configure Apache

    3. Edit your httpd.conf file in your **apache2/conf** folder (created under your bitnami installation).  Edit the following lines to match the location where you have your Tonic API files located

        1. DocumentRoot "C:/temp/Tonic/Tonic/API"

        2. <Directory "C:/temp/Tonic/Tonic/API">

        3. Change "AllowOverride None" to “AllowOverride All”

            1. This allows the API to rewrite urls to allow for RESTfull calls

        4. Comment out the last line of the file:

            2. #Include "C:/Bitnami/wampstack-5.6.30-5-2/apache2/conf/bitnami/bitnami.conf"

        5. Restart apache using the Bitnami (w/l)amp stack tool or by any other method

        6. Go to [http://localhost](http://localhost) and you should see the "welcome to the Tonic API page"

        7. Go to [http://localhost/rewrite](http://localhost/rewrite) and you should see "Tonic API Rewriting Working!"

    4. Sweet!  Apache is set up! - on to the database connection

4. Configuring the database connection information

    5. Edit the api.php file

    6. Find the following section near the top and modify it to match the information that matches your database information:**//Enter details of your database****const**** DB_SERVER = ****"localhost"****;****const**** DB_USER = ****"YourDBUser"****;****const**** DB_PASSWORD = ****"YourDBPassword"****;****const**** DB = ****"Tonic"****;**

    7. Save the file

    8. Navigate to [http://localhost/APIDBTest](http://localhost/APIDBTest) and you should see "DB Test Completed" without any errors.  If you get errors… well… correct them.  It’s likely your configuration from step b is wrong (username/password/db/server)

    9. Hooray!  DB setup complete!

