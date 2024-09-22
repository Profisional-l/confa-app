import sqlite3


connection = sqlite3.connect('cards.db')
cursor = connection.cursor()


cursor.execute('''
CREATE TABLE IF NOT EXISTS Users (
username TEXT NOT NULL
)
''')


connection.commit()
connection.close()