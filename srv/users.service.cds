using { users.db as db } from '../db/db';

service UserService @(requires : 'authenticated-user') {
    entity Users as projection on db.Users;
    function getCurrentUserID() returns String;
}