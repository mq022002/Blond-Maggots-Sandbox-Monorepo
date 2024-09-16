"""
This script creates a table named 'plants' in a SQLite database and inserts five records into it.
Each record represents a plant with an id, name, type, and origin.
"""

import sqlite3

conn = sqlite3.connect("apps/python/db.sqlite3")
c = conn.cursor()

c.execute(
    """
    CREATE TABLE plants
    (id INTEGER PRIMARY KEY, name TEXT, type TEXT, origin TEXT)
"""
)

plants = [
    (1, "Rose", "Flower", "Asia"),
    (2, "Oak", "Tree", "North America"),
    (3, "Cactus", "Succulent", "America"),
    (4, "Bamboo", "Grass", "Asia"),
    (5, "Maple", "Tree", "Europe"),
]

c.executemany(
    """
    INSERT INTO plants VALUES (?,?,?,?)
""",
    plants,
)

conn.commit()
conn.close()
