# Log Analysis

A simple python script analyzes log data from online articles.

## prerequisites

  - A Linux/Unix like command line. (e.g. Mac Terminal, Git Bash for Windows, etc.)
  - lastest VirtualBox
  - Vagrant 1.9.2
  - Python
  - newsdata.sql [provided by udacity](https://d17h27t6h515a5.cloudfront.net/topher/2016/August/57b5f748_newsdata/newsdata.zip)

## How to start

* after installed prerequisites, setup virtual machine
* move the files into the vagrant's folder
* go into the virtual machine, using ```vagrant up``` and ```vagrant ssh```
* connect to the news database and run ```newsdata.sql``` by typing psql ```-d news -f newsdata.sql```
* create views 
    ```sql
    Create view Requests as
     Select date(time), count(*) as num
     From log
     Group by date(time);
    ```
    ```sql
    Create view Errors as 
     Select date(time), count(*) as num
     From log
     where status != '200 OK'
 	 Group by date(time);
    ```
* Run the script, ```python log_analysis.py```