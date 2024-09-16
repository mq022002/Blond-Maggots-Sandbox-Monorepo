"""
This check if table 'plants' exists in db.sqlite3
If the table does not exist, it creates the table and populates it with data.
If the table does exist, it deletes all records, and then repopulates it with data.
"""

import sqlite3

conn = sqlite3.connect("apps/python/db.sqlite3")
c = conn.cursor()

c.execute(
    """
    CREATE TABLE IF NOT EXISTS plants
    (id INTEGER PRIMARY KEY, name TEXT, type TEXT, origin TEXT)
"""
)

c.execute("DELETE FROM plants")

plants = [
    (1, "Rose", "Flower", "Asia"),
    (2, "Oak", "Tree", "North America"),
    (3, "Cactus", "Succulent", "America"),
    (4, "Bamboo", "Grass", "Asia"),
    (5, "Maple", "Tree", "Europe"),
    (6, "Tulip", "Flower", "Europe"),
    (7, "Pine", "Tree", "North America"),
    (8, "Lily", "Flower", "Europe"),
    (9, "Aloe Vera", "Succulent", "Africa"),
    (10, "Orchid", "Flower", "South America"),
    (11, "Fern", "Fern", "Worldwide"),
    (12, "Palm", "Tree", "Tropical Regions"),
    (13, "Moss", "Bryophyte", "Worldwide"),
    (14, "Sunflower", "Flower", "North America"),
    (15, "Mango", "Tree", "South Asia"),
    (16, "Banana", "Herb", "Tropical Regions"),
    (17, "Lavender", "Flower", "Mediterranean"),
    (18, "Tea Plant", "Tree", "Asia"),
    (19, "Coffee Plant", "Tree", "Africa"),
    (20, "Cocoa Tree", "Tree", "South America"),
]

c.executemany(
    """
    INSERT INTO plants VALUES (?,?,?,?)
""",
    plants,
)

conn.commit()
conn.close()
