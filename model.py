from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from sqlalchemy.inspection import inspect

def criaModelo():
    engine = create_engine("postgresql+psycopg2://postgres:admim@localhost:5432/teste", echo=False)

    base = automap_base()

    base.prepare(engine, schema="northwind", reflect=True)

    print(base.classes.keys())
    categories = base.classes.categories;
    shippers = base.classes.shippers;
    suppliers = base.classes.suppliers;
    employees = base.classes.employees;
    orders = base.classes.orders;
    customers = base.classes.customers;
    order_details = base.classes.order_details;
    products = base.classes.products;
    print(orders.keys())



criaModelo();
