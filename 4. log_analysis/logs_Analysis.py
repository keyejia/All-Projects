#! /usr/bin/env python
import psycopg2
DBname = "news"


def connect(database_name="news"):
    try:
        db = psycopg2.connect("dbname={}".format(database_name))
        cursor = db.cursor()
        return db, cursor
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)


def Top_three_articles():
    db, c = connect()
    c.execute("""select articles.title, count(*) as num
                from articles, log
                where log.path LIKE '%'||articles.slug
                group by articles.title
                order by num desc limit 3;""")
    q = c.fetchall()
    print "Most popular three articles of all time"
    for title, views in q:
        print('    "{}" -- {} views'.format(title, views))
    db.close


def Top_three_authors():
    db, c = connect()
    c.execute("""select authors.name, count(*) as num
                from articles, log, authors
                where log.path = '/article/'||articles.slug
                and authors.id = articles.author
                group by authors.name
                order by num desc;""")
    q = c.fetchall()
    print "Most popular article authors of all time"
    for author, views in q:
        print('    "{}" -- {} views'.format(author, views))
    db.close


def One_Percent_error_dates():
    db, c = connect()
    c.execute("""select Requests.date,
               100*Errors.num::numeric/Requests.num as Percent_errors
               from Requests, Errors
               where Requests.date = Errors.date
               and 100*Errors.num::numeric/Requests.num > 1;""")
    q = c.fetchall()
    print "days with more than 1% of requests lead to errors"
    for date, errors in q:
        print('    "{}" -- {}% errors'.format(str(date), str(round(errors, 2))))
    db.close


if __name__ == "__main__":
    Top_three_articles()
    Top_three_authors()
    One_Percent_error_dates()
