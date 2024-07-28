---
layout: post
title: "Getting to Know SQL"
author: "Aashay Zende"
categories: blog
tags: [SQL, Databases, Data Management, History]
image: db.jpg
---

## Getting to Know SQL

### Introduction

In the early days of relational database management systems (RDBMS), there was no standard language for performing relational operations on data. Various companies developed their own languages for their RDBMS products, leading to incompatibilities and market competition. This fragmented landscape set the stage for the emergence of SQL, which has since become the standard language for interacting with relational databases.

### The Origins of SQL

SQL, originally named SEQUEL (Structured English Query Language), was developed by IBM in the 1970s. Dr. Edgar F. Codd, an IBM employee, proposed the relational database model, but IBM's initial support for the model was lukewarm due to its existing hierarchical DBMS, IMS. It wasn't until the release of IBM's System/38 in the late 1970s and the introduction of Oracle's RDBMS in 1979 that SQL began gaining traction.

### Understanding SQL

SQL is a software tool designed to manage and manipulate relational database data. It allows users to create and destroy databases, modify their structure, and perform queries to retrieve data. While SQL is a powerful tool for data manipulation, it is considered a data sublanguage and lacks the features of general-purpose programming languages.

### The ISO/IEC SQL Standard

IBM's early adoption of SQL led other DBMS vendors to follow suit, creating a de facto standard. In 1986, the American National Standards Institute (ANSI) issued the SQL-86 standard, followed by several revisions over the years, including SQL-92, SQL:1999, and SQL:2016. The SQL standard is now internationally recognized by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC).

### What SQL Does Not Do

SQL is not a Turing-complete language, meaning it cannot express all possible computations. Unlike general-purpose languages like C or Java, SQL is specifically designed for data manipulation within relational databases. However, many DBMS vendors have added extensions to SQL, making their versions Turing-complete and allowing for more complex operations.

### SQL Implementations

There are several notable SQL implementations, each with its unique features and capabilities:

#### Microsoft Access

An entry-level DBMS designed for small and simple databases, Microsoft Access includes a limited implementation of SQL. Users can build databases and applications using graphical tools without needing to write SQL code.

#### Microsoft SQL Server

Microsoft's enterprise DBMS, SQL Server, requires a high level of expertise and uses Transact-SQL (T-SQL). It offers additional functionality beyond the SQL standard, providing performance advantages.

#### IBM DB2

A versatile DBMS running on various platforms, IBM DB2 includes numerous nonstandard features and requires extensive training to use effectively.

#### Oracle Database

Oracle Database is a highly compliant SQL implementation used in many of the largest databases worldwide. It offers a free Express Edition for learning and development.

#### MySQL

The most widely used open-source DBMS, MySQL offers multiple storage engines with varying levels of SQL standard compliance. Its InnoDB engine provides advanced features, while the MyISAM engine is optimized for speed.

#### PostgreSQL

An open-source DBMS known for its robustness and support for large-scale applications, PostgreSQL is supported by an active user community.

---

### SQL and the Relational Model

The relational database model, initially proposed by Dr. Edgar F. Codd, became the foundation for SQL and relational databases. While SQL was developed to work with relational databases, it's not entirely consistent with the relational model, but it provides a practical approach to managing data.

#### Sets, Relations, Multisets, and Tables

The relational model is based on set theory, where a set is a collection of unique objects. In SQL, the equivalent of a relation is a table, but tables can have duplicate rows, making them more akin to multisets. Here are the key characteristics of an SQL relation:

- Every cell contains a single value.
- All entries in any column must be of the same kind.
- Each column has a unique name.
- The order of columns and rows doesn't matter.
- No two rows may be identical.

#### Functional Dependencies

Functional dependencies are relationships between attributes. For example, if you know a customer's Zipcode, you can determine their State because each Zipcode resides in one state. This dependency is denoted as:

Zipcode ➪ State

Functional dependencies help in designing databases to ensure data integrity and reduce redundancy.

#### Keys

A key is an attribute or a group of attributes that uniquely identifies a tuple in a relation. For example, a ResearcherID can be a key if each researcher is assigned to only one project. If researchers can work on multiple projects, a composite key of ResearcherID and Project would be used.

#### Views

Views are virtual tables that don't physically exist until queried. They simplify complex queries and present data in a user-friendly format. However, views have limitations, such as not always being updatable if they involve computed columns.

#### Users and Privileges

Users are an essential part of any database system. To ensure data security, robust authentication and authorization mechanisms are implemented. Users are assigned specific privileges based on their roles, ensuring they can access only the data they need.

#### Schemas and Catalogs

Schemas organize tables and other database objects, preventing naming conflicts. A catalog can contain multiple schemas, providing an additional level of organization for large databases.

#### Connections, Sessions, and Transactions

To operate on a database, a user must establish a connection between the client and the server. A session encompasses the sequence of SQL statements executed using a single connection. Transactions ensure data integrity by making sure that all operations within a transaction are completed successfully or none are applied.

#### Routines and Paths

Routines are procedures, functions, or methods that can be invoked by SQL or host language programs. Paths define the search order for locating routines, ensuring the correct procedures are executed.

### Conclusion

SQL has revolutionized data management by providing a standardized way to interact with relational databases. Understanding the intricacies of SQL and the relational model is crucial for effectively managing and manipulating data. The evolution of SQL and its implementations highlights its significance and widespread adoption in the world of data management.

---
