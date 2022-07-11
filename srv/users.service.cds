using { users.db as db } from '../db/db';

service UserService @(requires : 'authenticated-user') {
    entity Users as projection on db.User
    entity Employees as projection on db.Employee;
    entity Organizations as projection on db.Organization
    entity Teams as projection on db.Team;
    function getCurrentUserID() returns String;
}