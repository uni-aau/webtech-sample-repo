#!/bin/bash
set -e

# Executes SQL script to initialize database schema and data
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    \i /docker-entrypoint-initdb.d/create_tables.sql
EOSQL

