namespace users.db;

using { cuid } from '@sap/cds/common';

entity Users : cuid {
    firstName: String;
    lastName: String;
    sapID: String;
}