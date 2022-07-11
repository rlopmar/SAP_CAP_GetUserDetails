namespace users.db;

using { cuid } from '@sap/cds/common';

entity User : cuid {
    firstName: String;
    lastName: String;
    sapID: String;
}

entity Employee {
    key sapID: String;
    organizationID: String;
    teamID: String;
    organization: Association to Organization;
    team: Association to Team;
}

entity Organization {
    key organizationID: String;
    organizationName: String;
}

entity Team {
    key teamID: String;
    teamName: String;
}
